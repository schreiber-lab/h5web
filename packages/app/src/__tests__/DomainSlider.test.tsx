import { screen, waitFor, within } from '@testing-library/react';

import { renderApp } from '../test-utils';

test('show slider with two thumbs', async () => {
  const { selectExplorerNode } = await renderApp();
  await selectExplorerNode('nexus_entry/nx_process/nx_data');

  const thumbs = await screen.findAllByRole('slider');
  expect(thumbs).toHaveLength(2);
  expect(thumbs[0]).toHaveAttribute('aria-valuenow', '20');
  expect(thumbs[1]).toHaveAttribute('aria-valuenow', '81');
});

test('show tooltip on hover', async () => {
  const { user, selectExplorerNode } = await renderApp();
  await selectExplorerNode('nexus_entry/nx_process/nx_data');

  const editBtn = await screen.findByRole('button', { name: 'Edit domain' });
  const tooltip = screen.getByRole('dialog', { hidden: true });

  expect(editBtn).toHaveAttribute('aria-expanded', 'false');
  expect(tooltip).not.toBeVisible();

  await user.hover(editBtn);
  expect(editBtn).toHaveAttribute('aria-expanded', 'true');
  expect(tooltip).toBeVisible();

  await user.unhover(editBtn);
  expect(editBtn).toHaveAttribute('aria-expanded', 'false');
  expect(tooltip).not.toBeVisible();

  await user.hover(editBtn);
  await user.keyboard('{Escape}');
  expect(tooltip).not.toBeVisible();
});

test('show min/max and data range in tooltip', async () => {
  const { user, selectExplorerNode } = await renderApp();
  await selectExplorerNode('nexus_entry/nx_process/nx_data');

  const editBtn = await screen.findByRole('button', { name: 'Edit domain' });
  await user.hover(editBtn);

  const minInput = screen.getByLabelText('min');
  const maxInput = screen.getByLabelText('max');
  expect(minInput).toHaveValue('−9.5e+1');
  expect(maxInput).toHaveValue('4e+2');
  expect(minInput).toHaveAttribute('title', '-95');
  expect(maxInput).toHaveAttribute('title', '400');

  const range = screen.getByText(/Data range/);
  expect(range).toBeVisible();
  expect(within(range).getByTitle('-95')).toHaveTextContent('−9.5e+1');
  expect(within(range).getByTitle('400')).toHaveTextContent('4e+2');
});

test('update domain when moving thumbs (with keyboard)', async () => {
  const { user, selectExplorerNode } = await renderApp();
  await selectExplorerNode('nexus_entry/nx_process/nx_data');

  // Hover min thumb to reveal tooltip
  const minThumb = await screen.findByRole('slider', { name: /min/ });
  await user.hover(minThumb);

  const visArea = await screen.findByRole('figure');
  const minInput = screen.getByLabelText('min');
  const maxInput = screen.getByLabelText('max');

  // Move min thumb one step to the left with keyboard
  minThumb.focus();
  await user.keyboard('{ArrowLeft}');
  expect(minInput).toHaveValue('−1.04671e+2');
  expect(within(visArea).getByText('−1.047e+2')).toBeInTheDocument();

  // Move thumb five steps to the left (in a single press)
  await user.keyboard('{ArrowLeft>5/}'); // press key and hold for 5 keydown events, then release
  expect(minInput).toHaveValue('−2.30818e+2');
  expect(within(visArea).getByText('−2.308e+2')).toBeInTheDocument();

  expect(minThumb).toHaveAttribute('aria-valuenow', '20'); // still at original position
  expect(maxInput).toHaveValue('4e+2'); // unaffected

  // Give focus to max thumb
  const maxThumb = await screen.findByRole('slider', { name: /max/ });
  maxThumb.focus();

  // Jump ten steps to the left
  await user.keyboard('{PageDown}');
  expect(maxInput).toHaveValue('5.72182e+1');
  expect(within(visArea).getByText('5.722e+1')).toBeInTheDocument();

  // Jump ten steps to the right
  await user.keyboard('{PageUp}');
  expect(maxInput).toHaveValue('2.52142e+2'); // not back to 4e+2 because of domain extension behaviour
  expect(within(visArea).getByText('2.521e+2')).toBeInTheDocument();

  expect(maxThumb).toHaveAttribute('aria-valuenow', '81'); // still at original position
  expect(minInput).toHaveValue('−2.30818e+2'); // unaffected

  // Remove focus now to avoid state update after unmount
  maxThumb.blur();
});

test('allow editing bounds manually', async () => {
  const { user, selectExplorerNode } = await renderApp();
  await selectExplorerNode('nexus_entry/nx_process/nx_data');

  const editBtn = await screen.findByRole('button', { name: 'Edit domain' });
  expect(editBtn).toHaveAttribute('aria-pressed', 'false');

  // Open tooltip with both min and max in edit mode
  await user.click(editBtn);
  expect(editBtn).toHaveAttribute('aria-pressed', 'true');
  expect(editBtn).toHaveAttribute('aria-expanded', 'true');

  const minInput = screen.getByLabelText('min');
  const maxInput = screen.getByLabelText('max');
  const applyBtn = screen.getByRole('button', { name: 'Apply min' });
  const cancelBtn = screen.getByRole('button', { name: 'Cancel min' });
  expect(applyBtn).toBeEnabled();
  expect(cancelBtn).toBeEnabled();
  await waitFor(() => expect(minInput).toHaveFocus()); // input needs time to receive focus

  // Type '1' in min input field (at the end, after the current value)
  await user.type(minInput, '1');
  expect(minInput).toHaveValue('−9.5e+11');

  const visArea = await screen.findByRole('figure');
  expect(within(visArea).getByText('−9.5e+1')).toBeInTheDocument(); // not applied yet

  // Cancel min edit
  await user.click(cancelBtn);
  expect(minInput).toHaveValue('−9.5e+1');
  expect(applyBtn).toBeDisabled();
  expect(cancelBtn).toBeDisabled();

  // Turn min editing back on, type '1' again and apply new min
  await user.type(minInput, '1');
  await user.click(applyBtn);
  expect(within(visArea).getByText('−9.5e+11')).toBeInTheDocument(); // applied
  expect(editBtn).toHaveAttribute('aria-pressed', 'true'); // because max still in edit mode

  // Replace value of max input field and apply new max with Enter
  await user.clear(maxInput);
  await user.type(maxInput, '100000{enter}');

  expect(maxInput).toHaveValue('1e+5'); // auto-format
  expect(within(visArea).getByText('1e+5')).toBeInTheDocument();
  expect(editBtn).toHaveAttribute('aria-pressed', 'false'); // min and max no longer in edit mode
});

test('clamp domain in symlog scale', async () => {
  const { user, selectExplorerNode } = await renderApp();
  await selectExplorerNode('nexus_entry/nx_process/nx_data');

  const editBtn = await screen.findByRole('button', { name: 'Edit domain' });
  await user.click(editBtn);

  const minThumb = screen.getByRole('slider', { name: /min/ });
  const maxThumb = screen.getByRole('slider', { name: /max/ });
  const minInput = screen.getByLabelText('min');
  const maxInput = screen.getByLabelText('max');

  await user.clear(minInput);
  await user.type(minInput, '-1e+1000{enter}');
  expect(minInput).toHaveValue('−8.98847e+307');
  expect(minThumb).toHaveAttribute('aria-valuenow', '1');

  await user.clear(maxInput);
  await user.type(maxInput, '1e+1000{enter}');
  expect(maxInput).toHaveValue('8.98847e+307');
  expect(maxThumb).toHaveAttribute('aria-valuenow', '100');

  maxThumb.focus();
  await user.keyboard('{ArrowLeft}');
  expect(maxInput).toHaveValue('5.40006e+301');
  expect(maxThumb).toHaveAttribute('aria-valuenow', '99'); // does not jump back to 81

  // Remove focus now to avoid state update after unmount
  maxThumb.blur();
});

test('show min/max autoscale toggles in tooltip (pressed by default)', async () => {
  const { user, selectExplorerNode } = await renderApp();
  await selectExplorerNode('nexus_entry/nx_process/nx_data');

  const editBtn = await screen.findByRole('button', { name: 'Edit domain' });
  await user.hover(editBtn);

  expect(screen.getByText('Autoscale')).toBeVisible();

  const minBtn = screen.getByRole('button', { name: 'Min' });
  const maxBtn = screen.getByRole('button', { name: 'Max' });
  expect(minBtn).toHaveAttribute('aria-pressed', 'true');
  expect(maxBtn).toHaveAttribute('aria-pressed', 'true');
});

test('control min/max autoscale behaviour', async () => {
  const { user, selectExplorerNode } = await renderApp();
  await selectExplorerNode('nexus_entry/nx_process/nx_data');

  const minThumb = await screen.findByRole('slider', { name: /min/ });
  await user.hover(minThumb);

  const minBtn = screen.getByRole('button', { name: 'Min' });
  const maxBtn = screen.getByRole('button', { name: 'Max' });
  const maxInput = screen.getByLabelText('max');

  // Moving min thumb disables min autoscale
  minThumb.focus();
  await user.keyboard('{ArrowRight}');
  expect(minBtn).toHaveAttribute('aria-pressed', 'false');
  expect(maxBtn).toHaveAttribute('aria-pressed', 'true'); // unaffected

  // Editing max disables max autoscale
  await user.type(maxInput, '0{enter}');
  expect(maxInput).toHaveValue('4e+20');
  expect(maxBtn).toHaveAttribute('aria-pressed', 'false');

  // Re-enable max autoscale
  await user.click(maxBtn);
  expect(maxBtn).toHaveAttribute('aria-pressed', 'true');
  expect(minBtn).toHaveAttribute('aria-pressed', 'false'); // unaffected
  await waitFor(() => expect(maxInput).toHaveValue('4e+2')); // input needs time to be reset
});

test('handle empty domain', async () => {
  const { user, selectExplorerNode } = await renderApp();
  await selectExplorerNode('nexus_entry/nx_process/nx_data');

  const editBtn = await screen.findByRole('button', { name: 'Edit domain' });
  await user.click(editBtn);

  const minInput = screen.getByLabelText('min');
  const maxInput = screen.getByLabelText('max');
  const minThumb = screen.getByRole('slider', { name: /min/ });
  const maxThumb = screen.getByRole('slider', { name: /max/ });

  // Give min the same value as max
  await user.clear(minInput);
  await user.type(minInput, '400{enter}');
  expect(minThumb).toHaveAttribute('aria-valuenow', '58'); // not quite in the middle because of symlog
  expect(maxThumb).toHaveAttribute('aria-valuenow', '58');

  const visArea = await screen.findByRole('figure');
  expect(within(visArea).getByText('−∞')).toBeInTheDocument();
  expect(within(visArea).getByText('+∞')).toBeInTheDocument();

  // Check that pearling works (i.e. that one thumb can push the other)
  maxThumb.focus();
  await user.keyboard('{ArrowLeft}');
  expect(minInput).toHaveValue('3.97453e+2');
  expect(maxInput).toHaveValue('3.97453e+2');
  expect(minThumb).toHaveAttribute('aria-valuenow', '58'); // thumbs stay in the middle
  expect(maxThumb).toHaveAttribute('aria-valuenow', '58');

  // Ensure thumbs can be separated again
  await user.keyboard('{ArrowRight}');
  expect(maxInput).toHaveValue('3.99891e+2');
  expect(minThumb).toHaveAttribute('aria-valuenow', '20');
  expect(maxThumb).toHaveAttribute('aria-valuenow', '81');

  // Remove focus now to avoid state update after unmount
  maxThumb.blur();
});

test('handle min > max', async () => {
  const { user, selectExplorerNode } = await renderApp();
  await selectExplorerNode('nexus_entry/nx_process/nx_data');

  const editBtn = await screen.findByRole('button', { name: 'Edit domain' });
  await user.click(editBtn);

  const minInput = screen.getByLabelText('min');
  const maxInput = screen.getByLabelText('max');

  await user.clear(minInput);
  await user.type(minInput, '500{enter}');
  expect(minInput).toHaveValue('5e+2');
  expect(maxInput).toHaveValue('4e+2');
  expect(screen.getByText(/Min greater than max/)).toHaveTextContent(
    /falling back to data range/
  );

  const visArea = await screen.findByRole('figure');
  expect(within(visArea).getByText('−9.5e+1')).toBeInTheDocument();
  expect(within(visArea).getByText('4e+2')).toBeInTheDocument();

  // Autoscaling min hides the error
  const minBtn = screen.getByRole('button', { name: 'Min' });
  await user.click(minBtn);
  expect(screen.queryByText(/Min greater than max/)).not.toBeInTheDocument();
});

test('handle min or max <= 0 in log scale', async () => {
  const { user, selectExplorerNode } = await renderApp();
  await selectExplorerNode('nexus_entry/image');

  const editBtn = await screen.findByRole('button', { name: 'Edit domain' });
  await expect(
    screen.findByRole('button', { name: 'Log' }) // wait for switch to log scale
  ).resolves.toBeVisible();

  await user.click(editBtn);

  const minInput = screen.getByLabelText('min');
  const maxInput = screen.getByLabelText('max');

  await user.clear(minInput);
  await user.type(minInput, '-5{enter}');
  expect(minInput).toHaveValue('−5e+0');
  expect(screen.getByText(/Custom min invalid/)).toHaveTextContent(
    /falling back to data min/
  );

  const visArea = await screen.findByRole('figure');
  expect(within(visArea).getByText('9.996e-1')).toBeInTheDocument(); // data max

  // If min and max are negative and min > max, min > max error and fallback take over
  await user.clear(maxInput);
  await user.type(maxInput, '-10{enter}');
  expect(screen.queryByText(/Custom min invalid/)).not.toBeInTheDocument();
  expect(screen.queryByText(/Custom max invalid/)).not.toBeInTheDocument();
  expect(screen.getByText(/Min greater than max/)).toHaveTextContent(
    /falling back to data range/
  );
});

test('handle min <= 0 with custom max fallback in log scale', async () => {
  const { user, selectExplorerNode } = await renderApp();
  await selectExplorerNode('nexus_entry/image');

  const editBtn = await screen.findByRole('button', { name: 'Edit domain' });
  await expect(
    screen.findByRole('button', { name: 'Log' }) // wait for switch to log scale
  ).resolves.toBeVisible();

  await user.click(editBtn);

  const minInput = screen.getByLabelText('min');
  const maxInput = screen.getByLabelText('max');

  await user.clear(minInput);
  await user.type(minInput, '-5{enter}');

  await user.clear(maxInput);
  await user.type(maxInput, '1e-4{enter}'); // lower than data min

  expect(screen.getByText(/Custom min invalid/)).toHaveTextContent(
    /falling back to custom max/
  );

  // Min fallback = custom max, so domain is empty
  const visArea = await screen.findByRole('figure');
  expect(within(visArea).getByText('−∞')).toBeInTheDocument();
  expect(within(visArea).getByText('+∞')).toBeInTheDocument();
});

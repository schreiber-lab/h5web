import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import H5GroveApp from './H5GroveApp';
import Home from './Home';
import HsdsApp from './HsdsApp';
import MockApp from './MockApp';
import H5WasmApp from './h5wasm/H5WasmApp';

function DemoApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="h5grove" element={<H5GroveApp />} />
        <Route path="mock" element={<MockApp />} />
        <Route path="hsds" element={<HsdsApp />} />
        <Route path="h5wasm" element={<H5WasmApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default DemoApp;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Datasets from './pages/Datasets';
import DatasetView from './pages/DatasetView'; // We will create this next!

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datasets" element={<Datasets />} />
        {/* The :id means "catch any number that comes after /dataset/" */}
        <Route path="/dataset/:id" element={<DatasetView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
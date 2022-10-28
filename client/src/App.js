import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Error, SharedLayout } from './pages';
import { AddBalance, AllBalance, Stats } from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='dashboard' element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path='add-balance' element={<AddBalance />} />
          <Route path='all-balance' element={<AllBalance />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;

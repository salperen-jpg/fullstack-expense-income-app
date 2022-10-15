import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Error, SharedLayout } from './pages';
import { AddBalance, AllBalance, Stats } from './pages/Dashboard';
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
    </BrowserRouter>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductListPage from './pages/ProductListPage';
import BookmarkPage from './pages/BookmarkPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/productlist" element={<ProductListPage />} />
      <Route path="/bookmark" element={<BookmarkPage />} />
    </Routes>
  )
}

export default App

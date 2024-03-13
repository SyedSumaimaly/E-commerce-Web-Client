import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Nav from './layout/Nav';
import Categories from './components/Categories';
import Copyright from './layout/Copyright';
import Category from './components/Category';
function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/category" element={<Category />} />

        </Routes>
      </BrowserRouter>
      <Copyright/>
    </>
  );
}

export default App;

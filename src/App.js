import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Nav from './layout/Nav';
import Categories from './components/Categories';
import Copyright from './layout/Copyright';
import MyCard from './components/MyCard';
function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Categories />} />
        </Routes>
      </BrowserRouter>
      <Copyright/>
    </>
  );
}

export default App;

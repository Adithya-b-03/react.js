import TodoApp from "./components/TodoApp";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Products from "./components/Products.jsx";
import SignUp from "./components/SignUp.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Correct import
import NavBar from "./components/NavBar.jsx"; // Corrected import
import ProductList from "./components/ProductList.jsx"; // Added import
import ProductDetails from "./components/ProductDetails.jsx"; // Added import

function App() {
  let user = "adithya";
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="details" element={<ProductDetails />} />
          </Route>
          <Route path="/Login/:newUse" element={<Login />} />
          <Route path="/ToDoApp" element={<TodoApp />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

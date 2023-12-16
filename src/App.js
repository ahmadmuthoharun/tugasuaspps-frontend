import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Products from "./pages/Products";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Classes from "./pages/Classes";
import AddClass from "./pages/AddClass";
import EditClass from "./pages/EditClass";
import Questions from "./pages/Questions";
import AddQuestion from "./pages/AddQuestion";
import EditQuestion from "./pages/EditQuestion";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/add" element={<AddClass />} />
          <Route path="/classes/edit/:id" element={<EditClass />} />
          <Route path="/questions/" element={<Questions />} />
          <Route path="/questions/add" element={<AddQuestion />} />
          <Route path="/questions/edit/:id" element={<EditQuestion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
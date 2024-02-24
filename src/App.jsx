import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import PrivateRoute from "./pages/PrivateRoute";
import BasicInfo from "./components/BasicInfo/BasicInfo";
import ContactUs from "./components/ContactUs/ContactUs";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import All from "./pages/All";
import { createContext, useState } from "react";

export const ProductContext = createContext();

function App() {
  const [SingleProduct, setSingleProduct] = useState([]);

  return (
    <ProductContext.Provider value={[SingleProduct, setSingleProduct]}>
      {/* <Router> */}
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          <Route
            path="/profile"
            element={<PrivateRoute component={<Profile />}></PrivateRoute>}
          />
        </Routes>
      </div>
      // {/* </Router> */}
      //{" "}
    </ProductContext.Provider>
  );
}

export default App;

/**
 * 1.Set up <Header /> and <Navbar /> components into the route that will be rendered on the top of the every pages.
 *
 * 2. Then I set up all other pages into the Routes tag like:
 * <Routes>
 *   <Route path='' element={<Home></Home>}/>
 * </Routes>
 */

import React from "react";
//import Reducerhook from "./components/Practice folder/Reducerhook";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
//import FirstComponent from "./components/Practice folder/FirstComponent";
//import SecondComponent from "./components/Practice folder/SecondComponent";
//import ThirdComponent from "./components/Practice folder/ThirdComponent";
//import FourthComponent from "./components/Practice folder/FourthComponent";
//import { GiftProvider } from "./components/Practice folder/Contexthook";
//import Navbar from "./components/Practice folder/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
// import Practice from "./components/Practice folder/Practice";
//import Parent from "./components/Practice folder/Parent";
//import FormEvents from "./components/Practice folder/FormEvents";
//import ArrayMapMethod from "./components/Practice folder/ArrayMapMethod";
//import ParentProps from "./components/Practice folder/ParentProps";

function App() {
  return (
    <>
      <div className="app">
        {/* <GiftProvider>
        <FirstComponent />
      </GiftProvider> */}
        {/* <Navbar />
      <Routes>
        <Route path="/abc" element={<FirstComponent />} />
        <Route path="/def" element={<SecondComponent />} />
        <Route path="/ghi" element={<ThirdComponent />} />
        <Route path="/jkl" element={<FourthComponent />} />
      </Routes> */}
        {/* {<Reducerhook />} */}
        {/* <ParentProps /> */}
        {/* {<Practice />} */}
        {/* {<Parent />} */}
        {/* {<FormEvents />} */}
        {/* {<ArrayMapMethod />} */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Cart />} />
          <Route path="/" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

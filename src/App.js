import React,{useState} from "react";
import Navbar from './Components/Navbar/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignUp from "./Components/Form/SignUp.js";
// import Login from "./Components/Form/Login.js";
// import Info from "./Components/Info/Info.js";
// import FormProvider from "./Context/FormProvider";

import Accessories from "./Pages/Accessories.js";
import Men from "./Pages/Men.js";
import Women from "./Pages/Women.js";
import Kids from "./Pages/Kids.js";
import Home from "./Pages/Home.js";

import "./App.css";
import Banner from "./Components/Banner/Banner.js";
import Slider from "./Components/Slider/Slider.js";
import Cards from "./Components/Card/Card.js";

const App = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <div className="App">
    {/* <FormProvider>
      <div className="App">
        <Login />
        <div className="info-div">
          <Info text={"Have an  account ?"} value={0} />
          <Info text={"Do not have an account?"} value={1} />
        </div>
        <SignUp />
      </div>
    </FormProvider> */}
    <div className="nav">
     <Router>
     <Navbar sidebar={sidebar} showSidebar={showSidebar} />
     <Routes>
       <Route path='/#' exact component={Home} />
       <Route path='/accessories' component={Accessories} />
       <Route path='/kids' component={Kids} />
       <Route path='/men' component={Men} />
       <Route path='/women' component={Women} />
     </Routes>
   </Router>
   <Banner />
   <Slider />
   <Cards />
   </div>
   </div>
   </>
  );
};

export default App;

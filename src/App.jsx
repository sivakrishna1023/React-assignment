import { useState } from "react";
import Lists from "./components/Lists";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Singleprob from "./Singleprob";
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
  } from "react-router-dom";
/*
 * Temporary problems array schema
 */

    const App = () => {
      
        return (
          <>
           <Navbar/>
           <BrowserRouter>
      <Routes>
        <Route path="/"  element={ <div className="container"><Lists/></div> } />
        <Route path="/signup" element={<div className='container'> <Signup/> </div> } />
       <Route path="/login"  element={  <div className="container"> <Login/> </div> } />
       <Route path="/single"  element={ <div className="container"> <Singleprob/> </div> } />
      </Routes>
    </BrowserRouter>
           
           
          </>
        );
      };
export default App

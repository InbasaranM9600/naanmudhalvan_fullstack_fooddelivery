import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import { Login, Main } from './containers';
import { app } from './config/firebase.config';
import {  validateUserJWTToken } from "./api";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./context/actions/userActions";
import { fadeInOut } from "./animations";
import { motion } from "framer-motion";



const App = () => {
  const firebaseAuth = getAuth(app);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged(cred => {
      if(cred){
        cred.getIdToken().then(token => {
          validateUserJWTToken(token).then(data => {

            dispatch(setUserDetails(data));


            //console.log(data);

          });
          
        });

        Navigate("/", { replace: true });

      }
    });


  }, []);
  
  






  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
            {isLoading && (
        <motion.div
          {...fadeInOut}
          className="fixed z-50 inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center w-full"
        >
          
        </motion.div>
      )}
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
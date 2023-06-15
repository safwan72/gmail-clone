import React from "react";
import { Route, Routes } from "react-router-dom";
import Body from "../Body/Home";
import MailComponent from "../Body/MailComponent";
import { useDispatch, useSelector } from "react-redux";
import { login, selectuser } from "../../features/userSlice";
import Login from "../Login/Login";
import { auth } from "../../firebase";

const RouteElement = () => {
  const user = useSelector(selectuser);
const dispatch=useDispatch();
React.useEffect(() => {
auth.onAuthStateChanged(user=>{
  if(user){
    dispatch(
      login({
          displayname:user.displayName,
          email:user.email,
          photoURL:user.photoURL,
      })
  )
  }
})
}, [dispatch]);

  return (
    <Routes>
      {user ? (
        <Route>
          <Route path="/" element={<Body />} />
          <Route path="mail/:id/" element={<MailComponent />} />
        </Route>
      ) : (
        <Route>
          <Route path="/" element={<Login />} />
        </Route>
      )}
    </Routes>
  );
};

export default RouteElement;

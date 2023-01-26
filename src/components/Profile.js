import React from "react";
import { useSelector } from "react-redux";
import {  Outlet, Link, Navigate} from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";

export default function Profile () {
  const currentUser = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn);

  // call useRouteMatch() to get the url and path
  // use loggedIn to return a Redirect
  
  return (
    <main>
      {!loggedIn && <Navigate to="/sign-up" /> } 
      <h1>{currentUser.username}</h1>
      <Link to={"/profile/edit"}>Edit</Link>
      {/* Render a route for EditProfileForm */}
      <Outlet/>
    </main>
  )
}

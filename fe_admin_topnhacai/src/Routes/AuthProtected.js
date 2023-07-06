import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { setAuthorization } from "../helpers/api_helper";
import { useDispatch } from "react-redux";

import { useProfile } from "../Components/Hooks/UserHooks";

import { logoutUser } from "../store/actions";
import { useContext } from "react";
import PermissionContext from "../context/PermissionContext";

const AuthProtected = (props) => {
  const dispatch = useDispatch();
  const { userProfile, loading, token } = useProfile();
  const { setRole, setUser } = useContext(PermissionContext);
  useEffect(() => {
    if (userProfile && !loading && token) {
      setAuthorization(token);
    } else if (!userProfile && loading && !token) {
      dispatch(logoutUser());
    }
    if (userProfile) {
      setRole(userProfile?.role);
      setUser(userProfile);
    }
  }, [token, userProfile, loading, dispatch]);

  /*
    redirect is un-auth access protected routes via url
    */

  if (!userProfile && loading && !token) {
    return (
      <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }

  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            {" "}
            <Component {...props} />{" "}
          </>
        );
      }}
    />
  );
};

export { AuthProtected, AccessRoute };

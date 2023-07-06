import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPermissionByRole } from "../helpers/api/permission.service";

const PermissionContext = React.createContext();

const defaultContext = [];

export const PermissionProvider = ({ children, permission }) => {
  const [user, setUser] = useState();
  const [role, setRole] = useState("");
  const [isVerify, setIsVerify] = useState(true);
  const [loading, setLoading] = useState(permission ? true : false);
  const [currentPermission, setPermission] = useState();

  const handleGetPermission = async () => {
    let res = await getPermissionByRole(role);
    setPermission(res?.data || res?.result);
  };

  useEffect(() => {
    if (role !== "") {
      handleGetPermission();
    }
  }, [role]);

  return (
    <PermissionContext.Provider
      value={{
        permission: currentPermission,
        user,
        isVerify,
        loading,
        setLoading,
        setPermission,
        setRole,
        setUser,
        setIsVerify,
      }}
    >
      {children}
    </PermissionContext.Provider>
  );
};

export default PermissionContext;

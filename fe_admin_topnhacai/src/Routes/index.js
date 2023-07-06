import React from "react";
import { Switch, Route } from "react-router-dom";

//Layouts
import NonAuthLayout from "../Layouts/NonAuthLayout";
import VerticalLayout from "../Layouts/index";
//routes
import { authProtectedRoutes, publicRoutes } from "./allRoutes";
import { AuthProtected, AccessRoute } from "./AuthProtected";
import { useContext } from "react";
import PermissionContext from "../context/PermissionContext";

const Index = () => {
  const availablePublicRoutesPaths = publicRoutes.map((r) => r.path);
  const availableAuthRoutesPath = authProtectedRoutes.map((r) => r.path);
  const { permission } = useContext(PermissionContext);
  return (
    <React.Fragment>
      <Switch>
        <Route path={availablePublicRoutesPaths}>
          <NonAuthLayout>
            <Switch>
              {publicRoutes.map((route, idx) => (
                <Route
                  path={route.path}
                  component={route.component}
                  key={idx}
                  exact={true}
                />
              ))}
            </Switch>
          </NonAuthLayout>
        </Route>

        <Route path={availableAuthRoutesPath}>
          <AuthProtected>
            <VerticalLayout>
              <Switch>
                {authProtectedRoutes.map((route, idx) => {
                  if (route?.permission) {
                    if (
                      permission?.find(
                        (item) => item.name === route.permission
                      )?.["view"]
                    )
                      return (
                        <AccessRoute
                          path={route.path}
                          component={route.component}
                          key={idx}
                          exact={true}
                        />
                      );
                  } else {
                    return (
                      <AccessRoute
                        path={route.path}
                        component={route.component}
                        key={idx}
                        exact={true}
                      />
                    );
                  }
                })}
              </Switch>
            </VerticalLayout>
          </AuthProtected>
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Index;

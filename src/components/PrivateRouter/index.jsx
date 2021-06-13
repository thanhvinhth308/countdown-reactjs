import React from "react";
import { Redirect, Route } from "react-router-dom";
import { checkToken } from "../../utils/localStorage";
PrivateRouter.propTypes = {};

function PrivateRouter({ component: Component, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          checkToken() !== null ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    </div>
  );
}

export default PrivateRouter;

import React from "react";
import { RouteComponentProps } from "dva/router";
import { SubscriptionAPI } from "dva";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "@/router";
interface Props extends RouteComponentProps {}
const App = (props: Props & SubscriptionAPI) => {
  return <HashRouter>{renderRoutes(routes)}</HashRouter>;
};
export default App;

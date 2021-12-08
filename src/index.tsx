import React from "react";
import dva from "dva";
import App from "@/layout/layout";
import "@/styles/global.less";
import models from "@/models";

//@ts-ignore
let test = dva.default || dva;
const app = test();

models.map((model) => {
  app.model(model);
});

app.router((obj: any) => (
  <App
    history={obj.history}
    match={obj.match}
    location={obj.location}
    getState={obj.app._store.getState}
    dispatch={obj.app._store.dispatch}
  />
));
app.start("#root");

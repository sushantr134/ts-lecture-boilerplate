import React from "react";

type AppPropsType = {
  name?: string;
};

const App = (props: AppPropsType) => {
  return <h1>Hello From {props.name} : Typescript React Boilerplate</h1>;
};

export default App;

import React from "react";
import routes from "./router";
const App = () => {
  return (
    <>
      <button onClick={() => routes.go(1)}>go</button>
      <button onClick={() => routes.back()}>back</button>
      <button onClick={()=>routes.navigate()}>navigate</button>
    </>
  );
};

export default App;


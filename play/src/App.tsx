import React, { Suspense } from "react";
import routes from "./router";
import { RouterView } from "start-router-react";
const Header = React.lazy(() => import("./components/Header"));
const App = () => {
  return (
    <>

      <button onClick={() => routes.go(1)}>go</button>
      <button onClick={() => routes.back()}>back</button>
      <button onClick={() => routes.navigate()}>navigate</button>
      <Suspense fallback={<>11</>}>
        <Header />
      </Suspense>
      {/* <RouterView routes={1} notFound={1} /> */}
    </>
  );
};

export default App;


import Bar from "./pages/Bar";
import Foo from "./pages/Foo";
import { createStartRouter } from "start-router/lib/core/router";

const routes = createStartRouter({
  routes: [
    { element: <Bar />, path: "/bar" },
    { element: <Foo />, path: "/foo" },
  ],
});
routes.setup()
export default routes
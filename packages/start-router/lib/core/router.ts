import { Update, createBrowserHistory } from "history";
import {
  IRouterOption,
  TRequireRouterOption,
  getTrailPath,
  joinPaths,
  warningOnce,
} from "start-router-shared";
class StartRouter {
  // 路由表
  routes: TRequireRouterOption["routes"];
  // history 对象
  history: TRequireRouterOption["history"];
  // 路由的基础路径
  basename: TRequireRouterOption["basename"];
  // 中间件注册
  middlewareList: TRequireRouterOption["middlewareList"];
  // 上一次跳转的路由
  lastUpdateHistory?: Update;

  constructor(options: IRouterOption) {
    this.routes = options.routes;
    this.history = options.history ?? createBrowserHistory();
    this.basename = options.basename ?? "/login";
    this.middlewareList = options.middlewareList || [];
  }
  // 开始导航
  setup() {
    this.history.listen(this.onLocationChange.bind(this));
    this.onLocationChange({
      action: this.history.action,
      location: this.history.location,
    });
    return this;
  }
  // 添加监听器
  addListener() {
    return this;
  }
  onLocationChange({ action, location }: Update, force = false) {
    warningOnce(
      "basename",
      !(this.basename !== "/" && location.pathname === "/"),
      "maybe you want navigate to " + this.basename
    );
    // 原地跳转直接return
    if (
      this.lastUpdateHistory &&
      !force &&
      joinPaths(
        this.lastUpdateHistory.location.pathname,
        this.lastUpdateHistory.location.search
      ) === joinPaths(location.pathname, location.search)
    )
      return;

    this.lastUpdateHistory = { action, location };
  }
  addRoutes() {}
  removeRoutes() {}
  matchRoutes(pathname:string){

  }
  go(num: number) {
    this.history.go(num);
  }
  navigate(to?: string) {
    const { pathname } = this.history.location;
    const trailPath = getTrailPath(this.basename, pathname);
    console.log(this.history);

    if (trailPath === null) return;
  }
  back() {
    this.history.back();
  }
}

// 单例模式
let isRouterExist = false;

export function createStartRouter(options: IRouterOption) {
  if (isRouterExist) {
    throw new Error("router is exist");
  }
  isRouterExist = true;
  return new StartRouter(options);
}

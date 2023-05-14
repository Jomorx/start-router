import { Update, createBrowserHistory } from "history";
import {
  IRouterOption,
  TRequireRouterOption,
  getTrailPath,
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
  onLocationChange({ action, location }: Update) {
    console.log(this.history);

    console.log(action, location);
  }
  addRoutes() {}
  removeRoutes() {}
  go(num: number) {
    this.history.go(num);
  }
  navigate(to?: string) {
    const { pathname } = this.history.location;
    const trailPath = getTrailPath(this.basename, pathname)
    console.log(this.history);
    
    if(trailPath === null) return ;

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

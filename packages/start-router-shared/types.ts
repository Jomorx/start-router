import type { History } from "history";
type CB = ()=>void
export interface IRouterOption {
  routes: IRouteRecord[];
  history?: History;
  basename?: string;
  middlewareList?:CB[]
}
export type TRequireRouterOption = Required<IRouterOption>
export interface IRouteRecord {
  name?:string
  path: string;
  element: any;
  children?: IRouteRecord[];
}

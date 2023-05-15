import * as path from "path"
export const getTrailPath = (basename: string, pathname: string) => {
  if (basename === "/") return pathname;
   /**
    * ex: basename = /  pathname = login
    * pathname do not startWith basename
    */
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }

  let nextChar = pathname.charAt(basename.length);
  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(basename.length) || "/";
};

// https://example.com//path//to//file.html => https:/example.com/path/to/file.html
export const joinPaths = (...args:string[])=>{
  return args.join("").replace(/\/\/+/g, "/");
}
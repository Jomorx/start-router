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

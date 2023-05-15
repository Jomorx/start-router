const alreadyWarned = new Set<string>();

export const warning = (cond: boolean, message: string) => {
  if (cond) {
    if (typeof console !== "undefined") console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {}
  }
};
// 只警告一次
export const warningOnce = (key: string, cond: boolean, message: string) => {
  if (cond && !alreadyWarned.has(key)) {
    alreadyWarned.add(key);
    warning(cond,message)
  }
};

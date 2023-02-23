export const getSearchParamFromURL = (url: string, param: any) => {
  const include = url.includes(param);

  if (!include) return null;

  const params = url.split(/([?,=])/);
  const index = params.indexOf(param);
  const value = params[index + 2];
  return value;
};

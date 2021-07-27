export function getFullUrl(url: string, params?: { [key: string]: string }): string {
  let fullUrl = process.env.VUE_APP_API_URL + url;
  let paramStr = '';
  if (params) {
    Object.keys(params).forEach((key) => {
      paramStr += '&';
      paramStr += `${key}=${params[key]}`;
    });
  }
  if (paramStr) {
    paramStr = paramStr.substring(1);
    fullUrl += `?${paramStr}`;
  }
  return fullUrl;
}

export function postFullUrl(url: string): string {
  return process.env.VUE_APP_API_URL + url;
}

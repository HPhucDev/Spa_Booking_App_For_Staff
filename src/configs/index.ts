export const optionalConfigTouchId = {
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // if true is passed, it will allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
};

export const notificationRedirectURL = {
  productId: "productId",
  orderId: "orderId",
};

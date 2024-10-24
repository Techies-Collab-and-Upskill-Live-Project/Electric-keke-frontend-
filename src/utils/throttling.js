export const throttling = (callbackFunc) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callbackFunc(...args);
    }, 3000);
  };
};

export const throttleAlert = (runAlert, stopAlert, delay = 5000) => {
  let timeout;

  return (msg) => {
    const start = new Date().getTime();
    runAlert(msg);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const end = new Date().getTime();
      stopAlert();
    }, delay);
  };
};

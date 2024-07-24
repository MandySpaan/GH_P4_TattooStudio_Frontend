export const isTokenValid = (expireAt) => {
  const interval = setInterval(() => {
    console.log("interval");
    const time = new Date();
    const currentTimeStamp = Date.parse(time) / 1000;
    if (currentTimeStamp > expireAt) {
      console.log("hemos entrado el if");
      localStorage.removeItem("passport");
      clearInterval(interval);
      // ToDo: add code here for a message to let the user know that
      // his token has expired and needs to login again
    }
  }, 60000);
};

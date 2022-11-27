window.onload = function () {
  // window.location.replace("google.com.vn");
  console.log("window.onload");
  const email = sessionStorage.getItem("email");
  if (!email || email === "") {
    window.location.replace("login.html");
  }
};

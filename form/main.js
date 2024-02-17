function setcookie(name,value,daytolive)
{
const date=new Date();
date.setTime(date.getTime()+daytolive*24*60*60*1000);
// date.toUTCString();
const expires="expires="+date.toUTCString();
document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
  const decodedCookies = decodeURIComponent(document.cookie);

  const cookiesArray = decodedCookies.split("; ");

  let result = null;

  cookiesArray.forEach((cookie) => {
    // search for cookie [name]
    if (cookie.indexOf(name) === 0) {
      result = cookie.substring(name.length + 1);
    }
    
  });

  return result;
}
function deleteCookie(name) {
  setcookie(name, null, null);
}
function login() {
    const username = document.getElementById("username").value;
  
    const password = document.getElementById("password").value;
  
    if (username === "mariam" && password === "123") {
      setcookie("loggedinUser", username, 3);
  
      document.getElementById("logout").style.display = "block";
  
      document.getElementById("user").textContent = username;
  
      document.getElementById("loginform").style.display = "none";
    } else {
  
      alert("please enter a valid username or password");
    }
  }

  function logout(){
    deleteCookie("loggedinUser");
  //  console.log("jkm,");
    document.getElementById("loginform").style.display = "block";
  
    document.getElementById("logout").style.display = "none";
  }

  window.onload = function () {
    const loggedInAdmin = getCookie("loggedinUser");
  
    if (loggedInAdmin) {
      document.getElementById("logout").style.display = "block";
  
      document.getElementById("user").textContent = loggedInAdmin;
  
      document.getElementById("loginForm").style.display = "none";
    }
  };
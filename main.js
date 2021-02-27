function next(){
    user_name = document.getElementById("name").value;
    user_login_id = document.getElementById("login_id").value;
    user_password = document.getElementById("password").value;

    localStorage.setItem("Username",user_name);
    localStorage.setItem("User Login-id",user_login_id);
    localStorage.setItem("User Password",user_password);
    window.location = "ask.html";
}
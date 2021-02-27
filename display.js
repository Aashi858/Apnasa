//Firebase links//

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBGtidm6IqDz88Zp_oCjaw7vp2-f2w-kRo",
  authDomain: "apnasa-project.firebaseapp.com",
  databaseURL: "https://apnasa-project-default-rtdb.firebaseio.com",
  projectId: "apnasa-project",
  storageBucket: "apnasa-project.appspot.com",
  messagingSenderId: "91275188220",
  appId: "1:91275188220:web:f910420fe5aae9bb938479"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("Username");
function getData(){
    firebase.database().ref("/"+username).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "Username") {
    firebase_message_id = childKey;
    message_data = childData;
} });  });
}
function showData(){
  getData();
   login_Id = localStorage.getItem("User Login-id");
    password = localStorage.getItem("User Password");
    factory_Name = localStorage.getItem("Factory_Name");
    phone_number = localStorage.getItem("Phone_Number");
    address_of_Factory = localStorage.getItem("Address_Factory");

  firebase.database().ref(username).push({
    Name : username,
    Login_Id : login_Id,
    Password : password,
    Name_of_Factory : factory_Name,
    Phone_Number : phone_number,
    Address_of_Factory : address_of_Factory
});
  name_tag = "<h3 class='glyphicon glyphicon-certificate'>"+username+"</h3><br>";
  factory_name_tag = "<label>Name of Factory/Campany : "+factory_Name+"</label><br>";
  phone_tag = "<label>Phone Number : "+phone_number+"</label><br>";
  factory_address_tag = "<label>Address of Factory/Campany : "+address_of_Factory+"</label>";
   
  column = name_tag + factory_name_tag + phone_tag + factory_address_tag;
  document.getElementById("output").innerHTML += column;
}
showData();
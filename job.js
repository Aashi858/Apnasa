
function nextPage(){
  factory_name = document.getElementById("factory_name").value;
  localStorage.setItem("Factory_Name",factory_name);

  phone_no = document.getElementById("phone").value;
  localStorage.setItem("Phone_Number",phone_no);

  factory_address = document.getElementById("address_factory").value;
  localStorage.setItem("Address_Factory",factory_address);

window.location = "display.html";
}
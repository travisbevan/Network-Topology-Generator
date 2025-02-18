document.getElementById("reset_configuration").addEventListener("click", function () {
  document.getElementById("routers").value = 1;
  document.getElementById("switches").value = 1;
  document.getElementById("vlans").value = 1;
  document.getElementById("router-ip-container").innerHTML = "";
  document.getElementById("switch-ip-container").innerHTML = "";
  document.getElementById("vlan-ip-container").innerHTML = "";
  document.getElementById("network-output").style.display = "none";
});

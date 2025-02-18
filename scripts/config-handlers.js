document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("routers").addEventListener("change", updateRouterFields);
  document.getElementById("switches").addEventListener("change", updateSwitchFields);
  document.getElementById("vlans").addEventListener("change", updateVlanFields);
});

function updateRouterFields() {
  const routerCount = document.getElementById('routers').value;
  const routerContainer = document.getElementById('router-ip-container');
  routerContainer.innerHTML = '';

  for (let i = 1; i <= routerCount; i++) {
    routerContainer.innerHTML += `<input type="text" id="router${i}_ip" placeholder="Router ${i} IP">`;
  }
}

function updateSwitchFields() {
  const switchCount = document.getElementById('switches').value;
  const switchContainer = document.getElementById('switch-ip-container');
  switchContainer.innerHTML = '';

  for (let i = 1; i <= switchCount; i++) {
    switchContainer.innerHTML += `<input type="text" id="switch${i}_ip" placeholder="Switch ${i} IP">`;
  }
}

function updateVlanFields() {
  const vlanCount = document.getElementById('vlans').value;
  const vlanContainer = document.getElementById('vlan-ip-container');
  vlanContainer.innerHTML = '';

  for (let i = 1; i <= vlanCount; i++) {
    vlanContainer.innerHTML += `<input type="text" id="vlan${i}_subnet" placeholder="VLAN ${i} Subnet">`;
  }
}

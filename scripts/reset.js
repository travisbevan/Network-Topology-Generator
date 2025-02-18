function resetConfiguration() {
  document.getElementById('routers').value = '';
  document.getElementById('switches').value = '';
  document.getElementById('vlans').value = '';
  document.getElementById('router-ip-container').innerHTML = '';
  document.getElementById('switch-ip-container').innerHTML = '';
  document.getElementById('vlan-ip-container').innerHTML = '';
  document.getElementById('devices-vlan-container').innerHTML = '';
  document.getElementById('use-vlans').checked = false;
  document.getElementById('vlan-ip-container').style.display = 'none';
}

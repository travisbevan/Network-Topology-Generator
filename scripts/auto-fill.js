document.getElementById("auto_fill_config").addEventListener("click", autoFillConfig);

function nextIP(ip) {
  let parts = ip.split('.');
  parts[3] = (parseInt(parts[3]) + 1).toString();
  return parts.join('.');
}

function autoFillConfig() {
  let currentIP = "192.168.1.1"; // Default starting IP

  // Fill Router IPs
  let routerCount = document.getElementById('routers').value;
  for (let i = 1; i <= routerCount; i++) {
    document.getElementById(`router${i}_ip`).value = currentIP;
    currentIP = nextIP(currentIP);
  }

  // Fill Switch IPs
  let switchCount = document.getElementById('switches').value;
  for (let i = 1; i <= switchCount; i++) {
    document.getElementById(`switch${i}_ip`).value = currentIP;
    currentIP = nextIP(currentIP);
  }

  // Fill VLANs
  let vlanCount = document.getElementById('vlans').value;
  for (let i = 1; i <= vlanCount; i++) {
    document.getElementById(`vlan${i}_subnet`).value = currentIP + "/24";
    currentIP = nextIP(currentIP);
  }
}

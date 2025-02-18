function autoFillConfig() {
  let currentIP = document.getElementById('use-private-ip').checked ? PRIVATE_IP_START : PUBLIC_IP_START;
  
  // Routers
  const routerCount = parseInt(document.getElementById('routers').value) || 0;
  for (let i = 1; i <= routerCount; i++) {
    document.getElementById(`router${i}_ip`).value = currentIP;
    currentIP = nextIP(currentIP);
  }

  // Switches
  const switchCount = parseInt(document.getElementById('switches').value) || 0;
  for (let i = 1; i <= switchCount; i++) {
    document.getElementById(`switch${i}_ip`).value = currentIP;
    currentIP = nextIP(currentIP);
  }

  // VLANs
  const vlanCount = parseInt(document.getElementById('vlans').value) || 0;
  for (let i = 1; i <= vlanCount; i++) {
    document.getElementById(`vlan${i}_subnet`).value = currentIP + '/24'; // Assuming /24 subnet mask
    currentIP = nextIP(currentIP);
  }
}

// Attach event listener to the Auto Fill button
document.getElementById('auto_fill_config').addEventListener('click', autoFillConfig);
</script>

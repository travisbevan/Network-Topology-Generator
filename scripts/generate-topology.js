function generateNetworkTopology() {
  let config = '<div style="display: flex; gap: 20px; width: 100%;">';
  
  // --- Router Column ---
  const routerCount = document.getElementById('routers').value;
  config += '<div style="flex: 1; display: flex; flex-direction: column;">';
  if (routerCount > 0) {
    config += <h4>Routers: ${routerCount}</h4>;
    for (let i = 1; i <= routerCount; i++) {
      const routerIp = document.getElementById('router' + i + '_ip').value;
      config += <p>Router ${i}: IP - ${routerIp}</p>;
      for (let j = 1; j <= 3; j++) {
        const portIp = routerIp.substring(0, routerIp.lastIndexOf('.') + 1) +
          (parseInt(routerIp.split('.').pop()) + j);
        config += <p>Router Port ${j} IP: ${portIp}</p>;
      }
    }
  }
  config += '</div>';

  // --- Switch Column ---
  const switchCount = document.getElementById('switches').value;
  config += '<div style="flex: 1; display: flex; flex-direction: column;">';
  if (switchCount > 0) {
    config += <h4>Switches: ${switchCount}</h4>;
    for (let i = 1; i <= switchCount; i++) {
      const switchIp = document.getElementById('switch' + i + '_ip').value;
      config += <p>Switch ${i}: IP - ${switchIp}</p>;
      for (let j = 1; j <= 3; j++) {
        const portIp = switchIp.substring(0, switchIp.lastIndexOf('.') + 1) +
          (parseInt(switchIp.split('.').pop()) + j);
        config += <p>Switch Port ${j} IP: ${portIp}</p>;
      }
    }
  }
  config += '</div>';

  // --- VLAN Column ---
  const vlanCount = document.getElementById('vlans').value;
  config += '<div style="flex: 1; display: flex; flex-direction: column;">';
  if (vlanCount > 0) {
    config += <h4>VLANs: ${vlanCount}</h4>;
    for (let i = 1; i <= vlanCount; i++) {
      const vlanSubnet = document.getElementById('vlan' + i + '_subnet').value;
      config += <p>VLAN ${i}: Subnet ${vlanSubnet}</p>;
      const devicesInVlanInput = document.getElementById('devices_in_vlan' + i);
      if (devicesInVlanInput) {
        const devicesInVlan = devicesInVlanInput.value;
        for (let j = 1; j <= devicesInVlan; j++) {
          const deviceIp = vlanSubnet.substring(0, vlanSubnet.lastIndexOf('.') + 1) +
            (parseInt(vlanSubnet.split('.').pop()) + j);
          config += <p>Device ${j} IP: ${deviceIp}</p>;
        }
      }
    }
  }
  config += '</div>';

  // Close the flex container.
  config += '</div>';

  // Insert the generated content into your output container.
  document.getElementById('network-config').innerHTML = config;
  document.getElementById('network-output').style.display = 'block';
}

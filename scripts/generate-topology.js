function generateNetworkTopology() {
  let config = '<div style="display: flex; gap: 20px; width: 100%;">';
  
  // --- Router Column ---
  const routerCount = document.getElementById('routers').value;
  config += '<div style="flex: 1; display: flex; flex-direction: column;">';
  if (routerCount > 0) {
    config += `<h4>Routers: ${routerCount}</h4>`;
    for (let i = 1; i <= routerCount; i++) {
      let routerIp = document.getElementById('router' + i + '_ip').value;
      routerIp = routerIp.replace(/^0+/, ''); // Remove leading zeros
      config += `<p>Router ${i}: IP - ${routerIp}</p>`;
      for (let j = 1; j <= 3; j++) {
        // Increment IP from the base router IP, not from the last IP used
        let portIp = routerIp.split('.');
        portIp[3] = (parseInt(portIp[3]) + j).toString();
        config += `<p>Router Port ${j} IP: ${portIp.join('.')}</p>`;
      }
    }
  }
  config += '</div>';

  // --- Switch Column ---
  const switchCount = document.getElementById('switches').value;
  config += '<div style="flex: 1; display: flex; flex-direction: column;">';
  if (switchCount > 0) {
    config += `<h4>Switches: ${switchCount}</h4>`;
    for (let i = 1; i <= switchCount; i++) {
      let switchIp = document.getElementById('switch' + i + '_ip').value;
      switchIp = switchIp.replace(/^0+/, '');
      config += `<p>Switch ${i}: IP - ${switchIp}</p>`;
      for (let j = 1; j <= 3; j++) {
        let portIp = switchIp.split('.');
        portIp[3] = (parseInt(portIp[3]) + j).toString();
        config += `<p>Switch Port ${j} IP: ${portIp.join('.')}</p>`;
      }
    }
  }
  config += '</div>';

  // --- VLAN Column ---
  const vlanCount = document.getElementById('vlans').value;
  config += '<div style="flex: 1; display: flex; flex-direction: column;">';
  if (vlanCount > 0) {
    config += `<h4>VLANs: ${vlanCount}</h4>`;
    for (let i = 1; i <= vlanCount; i++) {
      let vlanSubnet = document.getElementById('vlan' + i + '_subnet').value;
      vlanSubnet = vlanSubnet.replace(/^0+/, '');
      config += `<p>VLAN ${i}: Subnet ${vlanSubnet}</p>`;
      const devicesInVlanInput = document.getElementById('devices_in_vlan' + i);
      if (devicesInVlanInput) {
        const devicesInVlan = devicesInVlanInput.value;
        for (let j = 1; j <= devicesInVlan; j++) {
          let deviceIp = vlanSubnet.split('/')[0].split('.');
          deviceIp[3] = (parseInt(deviceIp[3]) + j).toString();
          config += `<p>Device ${j} IP: ${deviceIp.join('.')}</p>`;
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

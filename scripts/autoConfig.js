function autoFillConfiguration() {
  const routerCount = document.getElementById('routers').value;
  const switchCount = document.getElementById('switches').value;
  const vlanCount = document.getElementById('vlans').value;
  const usePrivateIp = document.getElementById('use-private-ip').checked;

  // Helper function to generate a random IP address
  function generateIpAddress(base) {
    let lastOctet = Math.floor(Math.random() * 254) + 1;
    return `${base}.${lastOctet}`;
  }

  // Helper function to generate VLAN subnet IP
  function generateVlanSubnet(base) {
    let subnet = Math.floor(Math.random() * 254) + 1;
    return `${base}.${subnet}.0.0/24`;
  }

  // Generate Router IPs
  for (let i = 1; i <= routerCount; i++) {
    const routerIpInput = document.getElementById('router' + i + '_ip');
    const baseIp = usePrivateIp ? '192.168.1' : '10.0.0';  // Example of private IP range
    routerIpInput.value = generateIpAddress(baseIp);
  }

  // Generate Switch IPs
  for (let i = 1; i <= switchCount; i++) {
    const switchIpInput = document.getElementById('switch' + i + '_ip');
    const baseIp = usePrivateIp ? '192.168.2' : '10.0.1';  // Example of private IP range
    switchIpInput.value = generateIpAddress(baseIp);
  }

  // Generate VLAN Subnets
  for (let i = 1; i <= vlanCount; i++) {
    const vlanSubnetInput = document.getElementById('vlan' + i + '_subnet');
    const baseIp = usePrivateIp ? '192.168.0' : '10.0.2';  // Example of private IP range
    vlanSubnetInput.value = generateVlanSubnet(baseIp);
  }

  // Optionally, if VLANs are used, you can fill in the devices' IP addresses in VLANs as well
  if (document.getElementById('use-vlans').checked) {
    for (let i = 1; i <= vlanCount; i++) {
      const devicesInVlanInput = document.getElementById('devices_in_vlan' + i);
      if (devicesInVlanInput) {
        const devicesInVlan = devicesInVlanInput.value;
        const vlanSubnet = document.getElementById('vlan' + i + '_subnet').value;
        const baseIp = vlanSubnet.split('.')[0] + '.' + vlanSubnet.split('.')[1];
        
        // Create the input fields for device IPs in each VLAN if required
        for (let j = 1; j <= devicesInVlan; j++) {
          const deviceIp = baseIp + '.' + (parseInt(vlanSubnet.split('.').pop()) + j);
          const deviceInput = document.createElement('input');
          deviceInput.type = 'text';
          deviceInput.value = deviceIp;
          deviceInput.placeholder = `Device ${j} IP in VLAN ${i}`;
          deviceInput.style.width = '100%';
          document.getElementById('devices-vlan-container').appendChild(deviceInput);
        }
      }
    }
  }
}

// Attach the auto fill functionality to the button
document.getElementById('auto_fill_config').addEventListener('click', autoFillConfiguration);

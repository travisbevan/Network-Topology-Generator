function updateRouterFields() {
  const routerCount = document.getElementById('routers').value;
  const routerContainer = document.getElementById('router-ip-container');
  routerContainer.innerHTML = '<label>Router IPs:</label>'; // Reset field

  for (let i = 1; i <= routerCount; i++) {
    const routerRow = document.createElement('div');
    routerRow.style.display = 'flex';
    routerRow.style.gap = '10px';

    const ipInput = document.createElement('input');
    ipInput.type = 'text';
    ipInput.id = 'router' + i + '_ip';
    ipInput.name = 'router' + i + '_ip';
    ipInput.placeholder = 'Router ' + i + ' IP';
    ipInput.style.flex = '2';
    routerRow.appendChild(ipInput);

    const portInput = document.createElement('input');
    portInput.type = 'text';
    portInput.id = 'router' + i + '_port';
    portInput.name = 'router' + i + '_port';
    portInput.placeholder = 'Router ' + i + ' Port';
    portInput.style.flex = '1';
    routerRow.appendChild(portInput);

    routerContainer.appendChild(routerRow);
  }
}

function updateSwitchFields() {
  const switchCount = document.getElementById('switches').value;
  const switchContainer = document.getElementById('switch-ip-container');
  switchContainer.innerHTML = '<label>Switch IPs:</label>'; 

  for (let i = 1; i <= switchCount; i++) {
    const switchRow = document.createElement('div');
    switchRow.style.display = 'flex';
    switchRow.style.gap = '10px';

    const ipInput = document.createElement('input');
    ipInput.type = 'text';
    ipInput.id = 'switch' + i + '_ip';
    ipInput.name = 'switch' + i + '_ip';
    ipInput.placeholder = 'Switch ' + i + ' IP';
    ipInput.style.flex = '2';
    switchRow.appendChild(ipInput);

    const portInput = document.createElement('input');
    portInput.type = 'text';
    portInput.id = 'switch' + i + '_port';
    portInput.name = 'switch' + i + '_port';
    portInput.placeholder = 'Switch ' + i + ' Port';
    portInput.style.flex = '1';
    switchRow.appendChild(portInput);

    switchContainer.appendChild(switchRow);
  }
  
  updateDeviceFields();
}

function updateVlanFields() {
  const vlanCount = document.getElementById('vlans').value;
  const vlanContainer = document.getElementById('vlan-ip-container');
  vlanContainer.innerHTML = '<label>VLAN Subnets:</label>';

  for (let i = 1; i <= vlanCount; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'vlan' + i + '_subnet';
    input.name = 'vlan' + i + '_subnet';
    input.placeholder = 'VLAN ' + i + ' Subnet';
    input.style.width = '100%';
    vlanContainer.appendChild(input);
  }

  updateDeviceFields();
}

function updateDeviceFields() {
  const deviceContainer = document.getElementById('devices-vlan-container');
  const switchCount = document.getElementById('switches').value;
  const vlanCount = document.getElementById('vlans').value;
  const useVlanCheckbox = document.getElementById('use-vlans');

  deviceContainer.innerHTML = useVlanCheckbox.checked 
    ? '<label>Devices in VLAN:</label>' 
    : '<label>Devices on Switch:</label>';

  if (useVlanCheckbox.checked) {
    for (let i = 1; i <= vlanCount; i++) {
      const input = document.createElement('input');
      input.type = 'number';
      input.id = 'devices_in_vlan' + i;
      input.name = 'devices_in_vlan' + i;
      input.placeholder = 'Devices in VLAN ' + i;
      input.min = 0;
      input.style.width = '100%';
      deviceContainer.appendChild(input);
    }
  } else {
    for (let i = 1; i <= switchCount; i++) {
      const input = document.createElement('input');
      input.type = 'number';
      input.id = 'devices_on_switch' + i;
      input.name = 'devices_on_switch' + i;
      input.placeholder = 'Devices on Switch ' + i;
      input.min = 0;
      input.style.width = '100%';
      deviceContainer.appendChild(input);
    }
  }
}

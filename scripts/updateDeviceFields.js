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

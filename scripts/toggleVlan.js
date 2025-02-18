function toggleVlanFields() {
  const useVlanCheckbox = document.getElementById('use-vlans');
  const vlanContainer = document.getElementById('vlan-ip-container');
  const deviceContainer = document.getElementById('devices-vlan-container');

  if (useVlanCheckbox.checked) {
    vlanContainer.style.display = 'flex';
    updateVlanFields();
  } else {
    vlanContainer.style.display = 'none';
    deviceContainer.innerHTML = '<label>Devices on Switch:</label>';
    const switchCount = document.getElementById('switches').value;
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

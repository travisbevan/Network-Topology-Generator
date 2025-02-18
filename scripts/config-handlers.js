function updateRouterFields() {
    const numRouters = document.getElementById('routers').value;
    const routerContainer = document.getElementById('router-ip-container');
    routerContainer.innerHTML = ''; // Clear current fields

    // Create new fields based on the number of routers
    for (let i = 0; i < numRouters; i++) {
        const label = document.createElement('label');
        label.textContent = `Router ${i + 1} IP:`;
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `router${i + 1}-ip`;
        input.placeholder = `IP for Router ${i + 1}`;
        routerContainer.appendChild(label);
        routerContainer.appendChild(input);
    }
}

function updateSwitchFields() {
    const numSwitches = document.getElementById('switches').value;
    const switchContainer = document.getElementById('switch-ip-container');
    switchContainer.innerHTML = ''; // Clear current fields

    // Create new fields based on the number of switches
    for (let i = 0; i < numSwitches; i++) {
        const label = document.createElement('label');
        label.textContent = `Switch ${i + 1} IP:`;
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `switch${i + 1}-ip`;
        input.placeholder = `IP for Switch ${i + 1}`;
        switchContainer.appendChild(label);
        switchContainer.appendChild(input);
    }
}

function updateVlanFields() {
    const numVlan = document.getElementById('vlans').value;
    const vlanContainer = document.getElementById('vlan-ip-container');
    vlanContainer.innerHTML = ''; // Clear current fields

    // Show VLAN IP fields
    for (let i = 0; i < numVlan; i++) {
        const label = document.createElement('label');
        label.textContent = `VLAN ${i + 1} Subnet:`;
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `vlan${i + 1}-subnet`;
        input.placeholder = `Subnet for VLAN ${i + 1}`;
        vlanContainer.appendChild(label);
        vlanContainer.appendChild(input);
    }
}

function toggleVlanFields() {
    const useVlanCheckbox = document.getElementById('use-vlans');
    const vlanContainer = document.getElementById('vlan-ip-container');

    if (useVlanCheckbox.checked) {
        vlanContainer.style.display = 'flex';
    } else {
        vlanContainer.style.display = 'none';
    }
}

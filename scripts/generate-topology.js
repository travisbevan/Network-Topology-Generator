document.getElementById("generate_topology").addEventListener("click", generateNetworkTopology);

function generateNetworkTopology() {
  let config = "<h4>Generated Topology</h4>";

  // Routers
  let routerCount = document.getElementById('routers').value;
  for (let i = 1; i <= routerCount; i++) {
    config += `<p>Router ${i}: ${document.getElementById(`router${i}_ip`).value}</p>`;
  }

  // Switches
  let switchCount = document.getElementById('switches').value;
  for (let i = 1; i <= switchCount; i++) {
    config += `<p>Switch ${i}: ${document.getElementById(`switch${i}_ip`).value}</p>`;
  }

  // VLANs
  let vlanCount = document.getElementById('vlans').value;
  for (let i = 1; i <= vlanCount; i++) {
    config += `<p>VLAN ${i}: ${document.getElementById(`vlan${i}_subnet`).value}</p>`;
  }

  document.getElementById("network-config").innerHTML = config;
  document.getElementById("network-output").style.display = "block";
}

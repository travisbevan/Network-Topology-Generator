# Network-Topology-Generator

# IP Validation & Generator Script

This repository provides a JavaScript script that can validate and generate IP addresses. It includes functionality to handle obscured IPs, validate against typical IP ranges, and support auto-generated IPs. 

## Features:
- Validates IP addresses against predefined valid and invalid ranges (RFC1918, private, test, multicast, etc.)
- Supports obscured IPs that don't follow standard conventions but should be treated as valid
- Generates random IP addresses within the valid ranges

## Usage

1. Clone this repository or download the script.
2. Integrate the `ip-validation.js` script into your application by importing or copying the file.

### Example Usage in JavaScript:

```javascript
// Include the validation and generation functions
// Assuming you have the `ip-validation.js` file imported

// To validate a given IP address:
handleIPSelection("192.168.1.1").then(result => {
  console.log(result); // Output: { ip: "192.168.1.1", valid: true or false }
});

// To auto-generate and validate an IP:
handleIPSelection(null, true).then(result => {
  console.log(result); // Output: { ip: "generated IP", valid: true or false }
});

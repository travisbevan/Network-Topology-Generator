// Load the IP ranges and obscured IPs from a JSON object
async function loadIPRanges() {
  const data = {
    "valid_ranges": [
      {
        "start": "10.0.0.0",
        "end": "10.255.255.255",
        "description": "Private Class A (RFC 1918)"
      },
      {
        "start": "172.16.0.0",
        "end": "172.31.255.255",
        "description": "Private Class B (RFC 1918)"
      },
      {
        "start": "192.168.0.0",
        "end": "192.168.255.255",
        "description": "Private Class C (RFC 1918)"
      },
      {
        "start": "100.64.0.0",
        "end": "100.127.255.255",
        "description": "Carrier-Grade NAT (RFC 6598)"
      },
      {
        "start": "192.0.2.0",
        "end": "192.0.2.255",
        "description": "Test Networks (RFC 5737)"
      },
      {
        "start": "203.0.113.0",
        "end": "203.0.113.255",
        "description": "Test Networks (RFC 5737)"
      }
    ],
    "invalid_ranges": [
      {
        "start": "127.0.0.0",
        "end": "127.255.255.255",
        "description": "Loopback (RFC 3330)"
      },
      {
        "start": "169.254.0.0",
        "end": "169.254.255.255",
        "description": "Link Local (RFC 3927)"
      },
      {
        "start": "224.0.0.0",
        "end": "239.255.255.255",
        "description": "Multicast (RFC 5771)"
      },
      {
        "start": "240.0.0.0",
        "end": "255.255.255.255",
        "description": "Reserved (RFC 5735)"
      }
    ],
    "obscured_ips": [
      "37.58.1.1",
      "45.67.89.100",
      "203.123.45.67",
      "198.54.3.19"
    ]
  };

  return data;
}

// Function to check if an IP is within a valid range
function isValidIP(ipAddress, ranges) {
  const ipArray = ipAddress.split('.').map(Number);

  // Check against valid ranges
  for (const range of ranges.valid_ranges) {
    const start = range.start.split('.').map(Number);
    const end = range.end.split('.').map(Number);

    if (
      ipArray[0] >= start[0] && ipArray[0] <= end[0] &&
      ipArray[1] >= start[1] && ipArray[1] <= end[1] &&
      ipArray[2] >= start[2] && ipArray[2] <= end[2] &&
      ipArray[3] >= start[3] && ipArray[3] <= end[3]
    ) {
      return true;  // Valid IP
    }
  }

  // Check against invalid ranges
  for (const range of ranges.invalid_ranges) {
    const start = range.start.split('.').map(Number);
    const end = range.end.split('.').map(Number);

    if (
      ipArray[0] >= start[0] && ipArray[0] <= end[0] &&
      ipArray[1] >= start[1] && ipArray[1] <= end[1] &&
      ipArray[2] >= start[2] && ipArray[2] <= end[2] &&
      ipArray[3] >= start[3] && ipArray[3] <= end[3]
    ) {
      return false;  // Invalid IP
    }
  }

  // Check if the IP is in the obscured list
  if (ranges.obscured_ips.includes(ipAddress)) {
    return true;  // Obscured IP is valid
  }

  return false;  // If no match, assume invalid
}

// Function to generate a random IP address within a valid range
function generateRandomIP(validRanges) {
  const range = validRanges[Math.floor(Math.random() * validRanges.length)];

  const start = range.start.split('.').map(Number);
  const end = range.end.split('.').map(Number);

  const ip = [
    Math.floor(Math.random() * (end[0] - start[0] + 1)) + start[0],
    Math.floor(Math.random() * (end[1] - start[1] + 1)) + start[1],
    Math.floor(Math.random() * (end[2] - start[2] + 1)) + start[2],
    Math.floor(Math.random() * (end[3] - start[3] + 1)) + start[3]
  ].join('.');

  return ip;
}

// Main function to handle validation or IP generation based on user choice
async function handleIPSelection(ipInput = null, autoGenerate = false) {
  const ranges = await loadIPRanges();

  if (autoGenerate) {
    const generatedIP = generateRandomIP(ranges.valid_ranges);
    console.log(`Generated IP: ${generatedIP}`);

    // Validate the generated IP
    if (isValidIP(generatedIP, ranges)) {
      return { ip: generatedIP, valid: true };
    } else {
      return { ip: generatedIP, valid: false };
    }
  } else if (ipInput) {
    // Validate the entered IP address
    const valid = isValidIP(ipInput, ranges);
    return { ip: ipInput, valid };
  }

  return { error: "No IP input or auto-generation selected" };
}

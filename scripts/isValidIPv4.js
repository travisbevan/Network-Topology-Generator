function isValidIPv4(ip) {
  return /^(?:(?:^|\.)(?:2(?:5[0-5]|[0-4]\d)|1?\d?\d)){4}$/.test(ip);
}

function nextIP(ip) {
  let parts = ip.split('.');
  for (let i = 3; i >= 0; i--) {
    parts[i] = (parseInt(parts[i], 10) + 1).toString();
    if (parts[i] < 100) {
      parts[i] = parts[i].padStart(2, '0');
    }
    if (parts[i] < '256') return parts.join('.');
    parts[i] = '0';
  }
  return ip; // If we didn't return, we've overflowed, just return the original
}

const PRIVATE_IP_START = '192.168.1.1';
const PUBLIC_IP_START = '10.0.0.1'; // Example for public IP range, adjust as needed

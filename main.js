const fs = require('fs');
const os = require('os');

// Get MAC addresses from all network interfaces
const networkInterfaces = os.networkInterfaces();
const username = os.userInfo().username;
const macAddresses = {};

for (const interfaceName in networkInterfaces) {
  const interfaceInfo = networkInterfaces[interfaceName];
  const macAddress = interfaceInfo[0].mac;

  macAddresses[interfaceName] = macAddress;
}

// Create data object
const macData = {
  username: username,
  macAddresses: macAddresses,
};

// Convert data object to JSON and write to file
const jsonData = JSON.stringify(macData, null, 2);
fs.writeFileSync('mac_data.json', jsonData);

console.log('MAC address data saved to mac_data.json');

// Import the os module to access system information
import os from 'os';

// Function to convert bytes to gigabytes - ES6
const bytesToGB = (bytes) => (bytes / (1024 * 1024 * 1024)).toFixed(2);

// Get system information
const computerName = os.hostname();
const osVersion = os.release();
const totalRAM = bytesToGB(os.totalmem());

// Display the information in a formatted way
console.log('System Information:');
console.log('------------------');
console.log(`Computer Name: ${computerName}`);
console.log(`Operating System Version: ${osVersion}`);
console.log(`Total RAM: ${totalRAM} GB`);

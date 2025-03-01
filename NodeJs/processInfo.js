const process = require("process");

// Get command-line arguments
console.log("Command-line Arguments: ", process.argv);

const firstArg = process.argv[2];
const secondArg = process.argv[3];
console.log(`First argument: ${firstArg} & Second argument: ${secondArg}`);

// Get current working directory
console.log("Current Working Directory: ", process.cwd());

// Memory Usage
console.log("Memory Usage: ", process.memoryUsage());

// Process ID and Parent Process ID
console.log("Process ID:", process.pid);
console.log("Parent Process ID:", process.ppid);

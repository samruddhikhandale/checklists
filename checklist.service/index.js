const server = require("./server.js")

const PORT = 8080;

// Start Server
server.listen(PORT, () => console.log(`Server started on ${PORT}`));
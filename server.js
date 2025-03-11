const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Explicit route for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling
app.use((req, res) => {
    res.status(404).send('Sorry, page not found!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Current directory: ${__dirname}`);
});

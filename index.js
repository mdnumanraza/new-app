const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

const BASE_DIR = path.join(__dirname, 'public');

app.get('/:category/:file', (req, res) => {
    const { category, file } = req.params;

    const filePath = path.join(BASE_DIR, category, file);

    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).json({ error: 'File not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

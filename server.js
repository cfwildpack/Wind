const express = require('express');
const app = express();
const port = 13000;

app.get('/wind', (req, res) => {
    res.json({
        location: "Coastal Area",
        windSpeed: "35 km/h",
        turbineStatus: "Operational"
    });
});

app.listen(port, () => {
    console.log(`Wind API server running at http://localhost:${port}`);
});

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Use CORS middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Replace these paths with the actual paths to your JSON files
const team1DataPath = 'C:/Users/niket/Downloads/SQ25-01-24 - Copy-20240128T015102Z-001/SQ25-01-24 - Copy/team1Data.json'; // Replace with the actual path
const team2DataPath = 'C:/Users/niket/Downloads/SQ25-01-24 - Copy-20240128T015102Z-001/SQ25-01-24 - Copy/team2Data.json'; // Replace with the actual path

let team1Data = readJsonFile(team1DataPath);
let team2Data = readJsonFile(team2DataPath);

function readJsonFile(filePath) {
  try {
    const fileData = fs.readFileSync(filePath);
    return JSON.parse(fileData);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return [];
  }
}

app.get('/team1/getData', (req, res) => {
  res.json(team1Data);
});

app.get('/team2/getData', (req, res) => {
  res.json(team2Data);
});

app.listen(port, () => {
  console.log(`Second Server is running on http://localhost:${port}`);
});

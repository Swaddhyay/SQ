const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let team1Data = [];
let team2Data = [];
let team3Data = [];

const saveDataToJsonFile = (fileName, data) => {
  fs.writeFileSync(`${fileName}.json`, JSON.stringify(data, null, 2), 'utf-8');
};

app.post('/team1/saveData', (req, res) => {
  const data = req.body;
  team1Data.push(data);
  saveDataToJsonFile('team1Data', team1Data);

  console.log('Team 1 data written to file');
  res.status(200).send('Team 1 data written to file');
});

app.post('/team2/saveData', (req, res) => {
  const data = req.body;
  team2Data.push(data);
  saveDataToJsonFile('team2Data', team2Data);

  console.log('Team 2 data written to file');
  res.status(200).send('Team 2 data written to file');
});

app.post('/team3/saveData', (req, res) => {
  const data = req.body;
  team3Data.push(data);
  saveDataToJsonFile('team3Data', team3Data);

  console.log('Team 3 data written to file');
  res.status(200).send('Team 3 data written to file');
});

app.get('/team1/getData', (req, res) => {
  res.json(team1Data);
});

app.get('/team2/getData', (req, res) => {
  res.json(team2Data);
});

app.get('/team3/getData', (req, res) => {
  res.json(team3Data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

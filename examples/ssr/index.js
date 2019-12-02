const express = require('express');
const { AudioAnalyser } = require('gad-audio-data');
// https://youtu.be/K1RE9FspKxw?list=PLcCp4mjO-z99IPNCrhEyrZimdUG5QXjPd&t=260

const port = 5000;
const app = express();

app.get('*', (req, res) => {
  const audio = new AudioAnalyser();
  const response = audio.init();
  const html = `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>SSR Audio</title>
      </head>
    <body>
      ${response}
    </body>
  </html>`;
  res.send(html);
})

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
})
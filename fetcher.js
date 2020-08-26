const url = process.argv[2];
const filePath = process.argv[3]
const fs = require('fs');
const request = require('request');

request(url, (error, response, body) => {
  if(!response){
    console.log("Error, no response received, check your url")
    return;
  }
  
  if(response.statusCode !== 200){
    console.log('Error, received status code:', response.statusCode); 
    return;
  }

  fs.writeFile(filePath, body, function (err) {
    if (err) throw err;
    let size = response.headers['content-length'];
    console.log(`Downloaded and saved ${size} bytes to ./index.html.`);
  });
});
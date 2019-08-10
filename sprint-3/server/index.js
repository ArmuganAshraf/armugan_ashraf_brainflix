const express = require ('express');
let data = require ('./data/data');// importing data
let sidevideos = require('./data/sidevideos')
const app = express();

app.get("/videos", (req, res) => {
  res.json(sidevideos);
  console.log(sidevideos);
});

app.get('/videos/:id',(req, res)=> {
  const videoId = req.params.id;
  const video = data.find(video => video.id == videoId);//this is for the id specific

  if(video){
    res.json(video);
  } else {
    res.json({message: `No video with that id exists`})
  }
});

app.listen(8080,function(){
  console.log('creating the server');
})
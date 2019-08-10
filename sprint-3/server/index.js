const express = require ('express');
let data = require ('./data/data');// importing data
let sidevideos = require('./data/sidevideos')
const app = express();

app.get("/videos", (req, res) => {
  res.json(sidevideos);
  console.log(sidevideos);
});

app.get('/videos/:id',(req, res)=> {
  const itemId = req.params.id;
  const item = data.find(_item => _item.id == itemId);

  if(item){
    res.json(item);
  } else {
    res.json({message: `No video with that id exists`})
  }
});

app.listen(8080,function(){
  console.log('creating the server');
})
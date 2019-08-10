const express = require ('express');
let data = require ('./data/data');// importing data
const app = express();

app.get("/videos", (req, res) => {
  res.json(data);
  console.log(data);
});

app.get('/videos/:id',(req, res)=> {
  const itemId = req.params.id;
  const item = data.find(_item => _item.id == itemId);

  if(item){
    res.json(item);
  } else {
    res.json({message: `item $(itemId) doesnt exist`})
  }
});

app.listen(8080,function(){
  console.log('creating the server');
})
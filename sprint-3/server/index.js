const express = require ('express');
const cors = require('cors');
let data = require ('./data/data');// importing data
const app = express();
const uuidv4 = require('uuid/v4');
const parser = require('body-parser');

app.use(cors());

app.get("/videos", (req, res) => {
  const tmpArray = [];
  data.map((obj, i) => {
    const tmpObj = {
      "id": obj.id,
      "title": obj.title,
      "channel": obj.channel,
      "image": obj.image
    };
    tmpArray.push(tmpObj);
  });
  res.json(tmpArray);
  console.log(tmpArray);
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

app.use(parser.json());

app.post('/videos',(req, res) => {
  const video = req.body;
  console.log('adding new video:', video);

  video.id = uuidv4();
  video.views = "252,796",
  video.likes = "4,905",
  video.duration = "7:31",
  video.video = "https://project-2-api.herokuapp.com/stream",
  video.timestamp = 1520167535028,
  video.comments = [
      {
      "name": "Micheal Lyons",
      "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
      "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
      "likes": 0,
      "timestamp": 1545162149000
    },
    {
      "name": "Gary Wong",
      "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
      "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
      "likes": 0,
      "timestamp": 1544595784046
    },
    {
      "name": "Theodore Duncan",
      "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
      "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
      "likes": 0,
      "timestamp": 1542262984046
    }
  ]


  data.push(video)

  res.json(video);
});

app.listen(8080,function(){
  console.log('creating the server');
})
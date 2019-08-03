const apiKey:'821ec83b-6c7c-4a2a-bdfd-0485c9721996';

axios.get('https://project-2-api.herokuapp.com'+apiKey)
.then(function(response){
  console.log(response.data);
  videos(response.data);
})
.catch(function (error){
  console.log(error);
});

function videos(data){
  for (i = 0; i<data.length; i++){
    
  }
}
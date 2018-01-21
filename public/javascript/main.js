$.ajax({type:"get",url:"/movies/all",success:function(response)
{
  //console.log("data from success",response);
  var data=formobject(response.data);
  constructDOM(data);
},
error:function(err){
console.log("error in get ",err);
}
});
function formobject(response)
{
  var flags=[],categoryObject=[];
  var length=response.length;
  for(var i=0;i<length;i++)
  {
    var movie=response[i];
  //  console.log("movie",movie);
  //  console.log("language",movie.language);
    //if(flags.indexOf(movie.language)==-1){
    //flags.push(movie.language);
    var index=flags.indexOf(movie.language);
    if(index>=0){
      categoryObject[index].movies.push(movie);
      continue;
    }
    else{

    flags.push(movie.language);
  }
  var objectSchema={
    "category":movie.language,
    "movies":[]
  }
  objectSchema.movies.push(movie);
  categoryObject.push(objectSchema);
  console.log("objectSchema",categoryObject );
}
  for(var i=0;i<flags.length;i++){
    console.log(flags[i]);
  }
    console.log("formobject response",response);
    return categoryObject;
}
function constructDOM(data)
{
  var categoryContent=[];
  for(var i=0;i<data.length;i++)
  {
    var objectSchema=data[i];
    console.log("constructDOM data",objectSchema);
    var categoryTitle=$('<h3 class="categoryName">'+objectSchema.category+'</h3>');
    categoryContent.push(categoryTitle);
    $('section.content').html(categoryContent);
  }
}

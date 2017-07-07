console.log("sanity check");

var endPoint = 'http://api.giphy.com/v1/gifs/search'

$(document).ready( function(){
 $('.form-inline').on('submit',function(event){
   event.preventDefault();
   $.ajax({
     method:'GET',
     url: endPoint,
     dataType: 'json',
     data: $("form").serialize(),
     success: on  Success
   });
 });
});

//this function takes the JSON data returned from the server, which is a variable named 'json'. The variable could be named anything.
function onSuccess(json) {
  /*if (json.pagination.offset === 0) {
    $(".gif-img").remove();
  }*/
console.log(json);// list data

//for the json data or the data that came back from the server,
  json.data.forEach(function(v,i){
    $(".gif-gallery").append($("<img class='img-responsive img-thumbnail gif-img' src="+v.images.fixed_height.url+">"));
  });
}


/*function onSuccess(dataFromAPI){
  //$('gif-gallery').html('<img src')
  console.log(dataFromAPI)
}
var data = dataFromAPI;
*/

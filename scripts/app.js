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
     success: onSuccess
   });
 });
});


function onSuccess(json) {
  /*if (json.pagination.offset === 0) {
    $(".gif-img").remove();
  }*/
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

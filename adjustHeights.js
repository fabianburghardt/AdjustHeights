// AdjustHeights.js
function adjustHeights(el){
  var _this = el;
  var elements = document.getElementsByClassName(_this);
  var maxHeight = 0;
  for(var i = 0; i < elements.length; i++){
    currentHeight = elements[i].offsetHeight;
    if(currentHeight > maxHeight){
      maxHeight = currentHeight;
    }
  }
  for(var i = 0; i < elements.length; i++){
    elements[i].style.height = maxHeight + "px";
  }
  window.onresize = function(){
    for(var i = 0; i < elements.length; i++){
      elements[i].style.height = "inherit";
    }
    setTimeout(function(){adjustHeights(_this);})
  };
}

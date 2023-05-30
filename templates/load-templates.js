/*
function getHash() {
    var hashValue = location.hash && location.hash.slice(1);
    return hashValue && hashValue.split('-');
}
function draw() {
     var settings = getHash();
     
     if(!settings) {return;}
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].href = anchors[i].href.split("#")[0] + location.hash;
    }
    if(settings.includes("sp")) {
      oSitelenPona()
    }
}
function oSitelenPona() {
  $("body").not(".sl").css("font-family", "linja lipamanka");
}
window.onhashchange = function() {
    draw();
}
*/

// This uses jquery
$(
  function() 
  {
     //draw();
    $("#nav-template")                     // Gets the nav-template element
    .load("templates/nav-template.html");  // loads the contents of "nav-template.html" into it.
    
  } 

)
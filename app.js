
function on() {
    var image = document.getElementById('off-image');
    if (image.src.match("off.png")) {
        image.src = "on.png";
     }
   
}
function off() {
    var image = document.getElementById('off-image');
    if (image.src.match("on.png")) {
        image.src = "off.png";
     }
   
}
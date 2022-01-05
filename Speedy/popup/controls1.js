
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function changeImage() 
{

if (document.getElementById("imgClickAndChange").getAttribute('src') == "playing_image.png")
 {
    alert('clicked');
    document.getElementById("imgClickAndChange").src = "paused_image.png";
}

else 
{
    document.getElementById("imgClickAndChange").src = "playing_image.png";
}

}

/*var source1 = document.querySelector('video').src;
var output1 = document.getElementById("currently-playing-variable");
output1.innerHTML = source1;*/

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
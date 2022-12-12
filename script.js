// Variables.
/*------------------------------------------------*/
const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");
/*------------------------------------------------*/

// Function to close the image.
/*------------------------------------------------*/
function closeImg(){
    fullImgBox.style.display = "none";
}

// Function to open the image.
/*------------------------------------------------*/
function openImg(reference){
    fullImgBox.style.display = "flex"
    fullImg.src = reference;
}
/*------------------------------------------------*/
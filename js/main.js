var i = 0;
var images = [];
var time = 1000;

images[0] = 'images/image1.jpg';
images[1] = 'images/image2.jpg';
images[2] = 'images/image3.jpg';
images[3] = 'images/image4.jpg';
images[4] = 'images/image5.jpg';

function changeImg() {
    document.slide.src = images[i]
    if(i < images.length - 1) {
        i++;
    } else {
        i =0;
    }

    setTimeout("changeImg()", time)
}

window.onload = changeImg;
let activeElement = 0;
const timeChange = 15000;

const oneImgHtml = document.querySelector('.picture1');

const changeImage = ['img/one.jpg', 'img/two.jpg', 'img/three.jpg', 'img/four.jpg'];

function changeElement () {
    // console.log("automatyczne wywołanie")
    activeElement++;
    if (activeElement == changeImage.length) {
        activeElement = 0;
    }

    oneImgHtml.src = changeImage[activeElement];
}

setInterval(changeElement, timeChange);
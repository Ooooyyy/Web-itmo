$(document).ready(function() {
    var canvaWidth = 500;
    var canvaHeight = 500;
    var canvas = document.createElement('canvas');
    canvas.width = canvaWidth;
    canvas.height = canvaHeight;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    pointX = Math.round(Math.random()*canvaWidth/3 + canvaWidth/3);
    pointY = Math.round(Math.random()*canvaHeight/3 + canvaHeight/3);
    var pictures = new Array(4);
    for (var i = 0; i < 4; i++) {
        pictures[i] = new Image();
        pictures[i].src = 'https://source.unsplash.com/collection/112716'+ (3 + i) +'/'+ canvaWidth +'x'+ canvaHeight;
    }
    var loadedCounter = 0
    pictures[0].onload = pictures[1].onload = pictures[2].onload = pictures[3].onload = function() {
        loadedCounter++;
        if (loadedCounter == 4) {
            ctx.drawImage(pictures[0], pointX - canvaWidth, pointY - canvaHeight);
            ctx.drawImage(pictures[1], pointX, pointY - canvaHeight);
            ctx.drawImage(pictures[2], pointX - canvaWidth, pointY);
            ctx.drawImage(pictures[3], pointX, pointY);
        }
    }
});
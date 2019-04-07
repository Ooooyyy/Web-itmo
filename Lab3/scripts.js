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
    var fontSize = 30, padding = 10;
    var eclipseColor = 'rgba(0, 0, 0, .4)';
    ctx.textBaseline = "center";
    ctx.font = "bold "+ fontSize +"px Arial, sans-serif";
    var pictures = new Array(4);
    for (var i = 0; i < 4; i++) {
        pictures[i] = new Image();
        pictures[i].src = 'https://source.unsplash.com/collection/112716'+ (3 + i) +'/'+ canvaWidth +'x'+ canvaHeight;
    }

    loadedCounter = 0;
    pictures[0].onload = pictures[1].onload = pictures[2].onload = pictures[3].onload = function() {
        loadedCounter++;
        if (loadedCounter == 4) {
            ctx.drawImage(pictures[0], pointX - canvaWidth, pointY - canvaHeight);
            ctx.drawImage(pictures[1], pointX, pointY - canvaHeight);
            ctx.drawImage(pictures[2], pointX - canvaWidth, pointY);
            ctx.drawImage(pictures[3], pointX, pointY);
            ctx.fillStyle = eclipseColor;
            ctx.fillRect(0, 0, canvaWidth, canvaHeight);
            ctx.fillStyle = "white";
            var url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru';
            $.get(url, function(data) {
                console.log(data.quoteText);
                printQuote(data.quoteText, ctx)
            });
        }
    }

    function getQuoteStrings(quote, ctx) {
        var quoteStrings = [];
        var arrQuote = quote.split(" ");
        var pointer = 0;
        for (var i = 0; i < arrQuote.length; i++) {
            if (ctx.measureText(arrQuote.slice(pointer, i+1).join(" ")).width >= canvaWidth-2*padding) {
                quoteStrings.push(arrQuote.slice(pointer, i).join(" "));
                pointer = i;
            }
        }
        quoteStrings.push(arrQuote.slice(pointer, arrQuote.length).join(" "));
        return quoteStrings
    }


    function printQuote(quote, ctx) {
        var quoteStrings = getQuoteStrings(quote, ctx);
        for (var i = 0; i < quoteStrings.length; i++) {
            ctx.fillText(quoteStrings[i],
                        (canvaWidth-2*padding-ctx.measureText(quoteStrings[i]).width)/2 + 10,
                        (canvaHeight-2*padding - fontSize*quoteStrings.length)/2 + fontSize*(i+1.2));
        }
    }
});
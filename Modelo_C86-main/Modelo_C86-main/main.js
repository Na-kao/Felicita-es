var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
function newImage()
{
        fabric.Image.fromURL("BirthdayImage.jpg",function(Img) {
            Bloco=Img;
            Bloco.scaleToWidth(700);
            Bloco.scaleToHeight(510);
            Bloco.set({
                top:0,
                left:0
            });
            canvas.add(Bloco);
        } );

}

function playSound(){
    x.play();
	
}

var globalHeight = window.innerHeight; 
var globalWidth = window.innerWidth;

var videoMinHeight = parseInt(globalHeight/3);
var videoIdealHeight = parseInt(globalHeight/2);

var videoMinWidth = parseInt(globalWidth/3);
var videoIdealWidth = parseInt(globalWidth/2);

var permissonAllowed = false;

var video = document.getElementById("video");
video.height = globalHeight;
video.width = globalWidth;
video.autoplay = true;
video.hidden = false;

var canvas = document.getElementById("canvas");

//canvas.style.width =' 100%'; //Do not confuse this with canvas.width, Both are diffrent

//canvas.hidden = true;
canvas.width = globalWidth;
canvas.height = globalHeight;

var context = canvas.getContext('2d');

var captureButton = document.getElementById("captureButton");

function start(){
    if(navigator.mediaDevices === undefined){
        alert("Opps!! Your device do not support video streaming");
    }else{
        
        if(navigator.mediaDevices.getUserMedia){
            navigator.mediaDevices.getUserMedia({video: {facingMode: 'environment'}}).then(function(stream){
                video.srcObject = stream;
                permissonAllowed = true;
            }).catch(function(error){
                alert("Kindly allow permisson so you can capture image");
            });
        }else{
            alert("Opps!! No media device has been found");
        }
    }
}

function snap(){
    if(permissonAllowed == false){
      start();
    }else{
        console.log(video.getBoundingClientRect());
        
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        
        canvas.style.marginTop = ((globalHeight - video.videoHeight)*2)+"px";
        canvas.style.marginBottom = ((globalHeight - video.videoHeight)*2)+"px";
      
        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        var imageData = canvas.toDataURL('image/jpeg');
        localStorage.setItem("diwaliImage", imageData);

        video.pause();
        //video.hidden = true;
        //canvas.hidden = false;
        captureButton.hidden = true;
        retakeButton.hidden = false;
        proceedButton.hidden = false;

        /*var downloadLink = document.createElement('a');
        downloadLink.href = imageData;
        downloadLink.download = 'download.jpg';
        downloadLink.click();*/

    }
}

function retake(){
    video.play();
    canvas.hidden = true;
    video.hidden = false;
    retakeButton.hidden = true;
    proceedButton.hidden = true;
    captureButton.hidden = false;
    var tempHeight = canvas.height;
    canvas.height = tempHeight;
}
noseX = 0 ;
noseY = 0 ;
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

}


function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,30,30)
poseNet = ml5.poseNet(video,modelloaded);
poseNet.on("pose",got_poses);

}

function modelloaded(){
    console.log("poseNet Loaded");
}


function got_poses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y;
        console.log("nose x= "+noseX);
        console.log("nose y= "+noseY);
    }
}

function preload(){
clown_nose = loadImage("https://postimg.cc/ct1Dfw9D");
}


function takesnapshot(){
save("HimanshuVyas.png");
}
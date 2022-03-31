headx=0;
heady=0;

function preload() {
  diamond_crown=loadImage('crown.png');
} 

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        headx=results[0].pose.head.x-40;
        heady=results[0].pose.head.y-120;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);

image(diamondcrown, headx, heady, 80, 60);
}

function snap(){
    save('Realtime_filter_app.png');
}



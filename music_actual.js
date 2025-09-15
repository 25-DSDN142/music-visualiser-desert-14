let mySound;

function preload() {
    mySound = loadSound('assets/song_orig.mp3');
}
function setup() {
    createCanvas(1280, 720);
    mySound.loop(); 
} // code from copilot


function draw_one_frame(words, vocal, drum, bass, other, counter) {
    background(234,168,179); // light pink
    textAlign(CENTER);
    textFont('Brush Script MT'); // please use CSS safe fonts
    textSize(40);



   let sun = map(bass, 0,100, -10,10);
   let sky = map(drum, 0,100, -40,40);

    stroke(197,185,211); // light purple    
    strokeWeight(10);
    fill(146,168,209); // light blue
    rect(0,height*0.5,1280,400)

    stroke(247,202,201); // light peach
    strokeWeight(15);
    line(440,height/2+sun,840,height/2+sun);
    line(460,height*0.55+sun,820,height*0.55+sun);
    line(480,height*0.6+sun,800,height*0.6+sun);
    line(500,height*0.65+sun,780,height*0.65+sun);
    line(520,height*0.7+sun,760,height*0.7+sun);
    line(540,height*0.75+sun,740,height*0.75+sun);
  
    noStroke();
    fill(247,202,201);
    triangle(width/2,height/2,width/2+30,-40+sky,width/2-30,-40+sky);
    triangle(width/2,height/2,width/2+60,-40+sky,width/2+90,-40+sky);
    triangle(width/2,height/2,width/2-60,-40+sky,width/2-90,-40+sky);
    triangle(width/2,height/2,width/2+125,-40+sky,width/2+185,-40+sky);
    triangle(width/2,height/2,width/2-125,-40+sky,width/2-185,-40+sky);
    triangle(width/2,height/2,width/2+220,-40+sky,width/2+260,-40+sky);
    triangle(width/2,height/2,width/2-220,-40+sky,width/2-260,-40+sky);
    triangle(width/2,height/2,width/2+300,-40+sky,width/2+360,-40+sky);
    triangle(width/2,height/2,width/2-300,-40+sky,width/2-360,-40+sky);
    triangle(width/2,height/2,width/2+400,-40+sky,width/2+445,-40+sky);
    triangle(width/2,height/2,width/2-400,-40+sky,width/2-445,-40+sky);
    triangle(width/2,height/2,width/2+490,-40+sky,width/2+570,-40+sky);
    triangle(width/2,height/2,width/2-490,-40+sky,width/2-570,-40+sky);
    triangle(width/2,height/2,width/2+640,-40+sky,width/2+720,-40+sky);
    triangle(width/2,height/2,width/2-640,-40+sky,width/2-720,-40+sky);
    triangle(width/2,height/2,width/2+740,100+sky,width/2+760,30+sky);
    triangle(width/2,height/2,width/2-740,100+sky,width/2-760,30+sky);
    triangle(width/2,height/2,width/2+800,200+sky,width/2+820,130+sky);
    triangle(width/2,height/2,width/2-800,200+sky,width/2-820,130+sky);
    triangle(width/2,height/2,width/2+840,300+sky,width/2+860,230+sky);
    triangle(width/2,height/2,width/2-840,300+sky,width/2-860,230+sky);


    noStroke();
    fill(221,134,156); // dark pink
    arc(width/2,height/2+sun,400,400,180,0);

    fill(20);
    textSize(60);
    textAlign(CENTER);
    text(words, width/2,height/2);
  
   
  

}

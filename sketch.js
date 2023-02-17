let z;
function setup() {
    // put setup code here
    createCanvas(400,400);
    background(120,24,120);

    x1 = 20;
    y1 = 322;

    x2 = 299;
    y2 = 40;

    x = 199;
    y = 100;

    lebar = 90;
    tinggi = 50;

    sudutawal = 2
    sudutakhir = 2

    z=10
}



function draw() {
    // put drawing code here
    //line1(x1,y1,x2,y2);

    //rect(x,y, lebar, tinggi);
    //ellipse(x,y,lebar,tinggi);
    //arc(x,y,lebar,tinggi, sudutawal, sudutakhir);

    
    background(200,5);
    var y = 100 + 30 * Math.sin(PI/10*z)
    z+=1
    fill(255,0,0);
    ellipse(300, y, 20, 20);
}
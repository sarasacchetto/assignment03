diagonalList=['#FFFFFF',   //bianco
              '#6EDDFF',  //azzurrino
              '#F7BEFC',  //rosino
              '#95F9BD',  //verdino
              '#B895F9',    //violino
             ];

function setup() {
  createCanvas(500,500);
  
}

function draw() {
  
  background(220,220,220);
  
             //stroke(0);                 
             //line(50,100,300,100);
                      fill(220);                    //inizio stella 1
                     //rect(5,5,495,495);
                      stroke(255);
                      var b=frameCount;
                      var a= b%10;
                        //console.log(a);
                      strokeWeight(1.5);
                        line(100-a,100,100+a,100);
                        line(100,100-a,100,100+a);
                      strokeWeight(2);
                        line(100-a,100-a,100+a,100+a);
                        line(100+a,100-a,100-a,100+a);   
                                                     //fine stella 1
                                                     
                                                     
                    fill(220);                    //inizio stella 2
                     //rect(5,5,495,495);
                      stroke(255);
                        console.log(a);
                      strokeWeight(0.5);
                        line(300-a,260,300+a,260);
                        line(300,260-a,300,260+a);
                      strokeWeight(1);
                        line(300-a,260-a,300+a,260+a);
                        line(300+a,260-a,300-a,260+a);   
                                                     //fine stella 2
                                                     
                    
                    fill(220);                    //inizio stella 3
                     //rect(5,5,495,495);
                      stroke(255);
                        console.log(a);
                      strokeWeight(0.5);
                        line(400-a,120,400+a,120);
                        line(400,120-a,400,120+a);
                      strokeWeight(1);
                        line(400-a,120-a,400+a,120+a);
                        line(400+a,120-a,400-a,120+a);   
                                                     //fine stella 3
                                                     
                                                     
                        fill(220);                    //inizio stella 4
                     //rect(5,5,495,495);
                      stroke(255);
                        console.log(a);
                      strokeWeight(0.5);
                        line(260-a,30,260+a,30);
                        line(260,30-a,260,30+a);
                      strokeWeight(1);
                        line(260-a,30-a,260+a,30+a);
                        line(260+a,30-a,260-a,30+a);   
                                                     //fine stella 4
                      
                      
                  
                         fill(220);                    //inizio stella 5
                     //rect(5,5,495,495);
                      stroke(255);
                        console.log(a);
                      strokeWeight(0.5);
                        line(220-a,200,220+a,200);
                        line(220,200-a,220,200+a);
                      strokeWeight(1);
                        line(220-a,200-a,220+a,200+a);
                        line(220+a,200-a,220-a,200+a);   
                                                     //fine stella 5
                      
                      
                           fill(220);                    //inizio stella 6
                     //rect(5,5,495,495);
                      stroke(255);
                        console.log(a);
                      strokeWeight(1.5);
                        line(20-a,220,20+a,220);
                        line(20,220-a,20,220+a);
                      strokeWeight(2);
                        line(20-a,220-a,20+a,220+a);
                        line(20+a,220-a,20-a,220+a);   
                                                     //fine stella 6
                                                     
                                                     
                      
                           fill(220);                    //inizio stella 7
                     //rect(5,5,495,495);
                      stroke(255);
                        console.log(a);
                      strokeWeight(1.5);
                        line(440-a,220,440+a,220);
                        line(440,220-a,440,220+a);
                      strokeWeight(2);
                        line(440-a,220-a,440+a,220+a);
                        line(440+a,220-a,440-a,220+a);   
                                                     //fine stella 7
                          
                          fill(220);                    //inizio stella 8
                     //rect(5,5,495,495);
                      stroke(255);
                        console.log(a);
                      strokeWeight(0.5);
                        line(10-a,10,10+a,10);
                        line(10,10-a,10,10+a);
                      strokeWeight(1);
                        line(10-a,10-a,10+a,10+a);
                        line(10+a,10-a,10-a,10+a);   
                                                     //fine stella 8
                        
                        
                         fill(220);                    //inizio stella 9
                     //rect(5,5,495,495);
                      stroke(255);
                        console.log(a);
                      strokeWeight(0.5);
                        line(490-a,15,490+a,15);
                        line(490,15-a,490,15+a);
                      strokeWeight(1);
                        line(490-a,15-a,490+a,15+a);
                        line(490+a,15-a,490-a,15+a);   
                                                     //fine stella 9
  
  //stroke(255,0,0);
  noFill();
  rect(0,0,500,500);
  
  colorMode(RGB);
  angleMode(DEGREES);
  
              
   rotate(45);
   //translate(-12,-12);
   
    for( y=-400; y<400; y+=25){
      //translate(25,12.5);
      
        for(x=-400; x<750; x+=25){
          
          var size = (x+y)/23;
          stroke(255);
          //fill(0,0,0);
          
          
          var index = floor(random()*diagonalList.length);  //round function//floor function round  to the nearest integers value)
                            
          var colorValue = diagonalList[index];
                            
        if(x==400 || y==50) {fill(color(colorValue))}
        else{fill(0)}
          rect(x,y,size,size);
          //rect(x,y,10,10);
          
          console.log(index)
          
        }
    }
    
    
  
}
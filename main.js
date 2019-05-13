document.addEventListener("DOMContentLoaded",function(){
  var fill=document.querySelector(".water-fill");
  TweenMax.fromTo(fill,0.8,{
    attr:{
      //Starts from how much on left side
      x:-600
    }
  },
  {
    attr:{
      //Go to how much on right side
      x:-200,
    },
    repeat:-1,
    ease:Linear.easeNone
  });
  
  TweenMax.fromTo(fill,10,{
    attr:{
      //Start from how much from bottom
      y:666,
      height:0
    },
  },{
    attr:{
      //End at how much at top
      y:-200,
      //Changing height inappropriately can cause the waer svg to move up and remain stable at bottom
      height:895
    },
    repeat:-1,
    yoyo:true,
    ease:Linear.easeNone
  });
  
});
var Links ={
  setColor : function(color){
    // var arr1 = document.querySelectorAll('a');
    //   var i=0;
    //   while( i<arr1.length){
    //       arr1[i].style.color =color;
    //       i=i+1;
    //   }
    $('a').css('color', color);
  }
}
var Body = {
  setColor : function(color){
    // document.querySelector('body').style.color=color;$('a').css('color', color);
    $('body').css('color', color);
  },
  setBackColor : function(color){
    // document.querySelector('body').style.backgroundColor =color;
    $('body').css('backgroundColor', color);
  }
}
function nightdayhandler(self){
  var target = document.querySelector('body');
  if(self.value === 'Night'){
    Body.setBackColor('black');
    Body.setColor('white');
    self.value = 'Day';
    Links.setColor('powderblue');
    }
  else{
    Body.setBackColor('white');
    Body.setColor('black');
    self.value = 'Night';
    Links.setColor('blue');
  }
}

var başlangıç_genişlik=document.getElementById("sol_menü").offsetWidth;
var başlangıç_uzunluk=document.getElementById("sol_menü").offsetHeight;
function fonksiyon(){
    var w = window.outerWidth;
    var h = window.outerHeight;
    var hesaplı_boy =(h*33)/100;
    var hesaplı_genişlik=(w*10)/100;
    var div_w=document.getElementById("sol_menü").offsetWidth;
    var div_h=document.getElementById("sol_menü").offsetHeight;
    const uzaklık= uzaklık_hesaplama();
    if(w<2000||h<2000)
    { 
      document.getElementById("sol_menü").style.width=`${hesaplı_genişlik}px`;
     document.getElementById("sol_menü").style.height=`${hesaplı_boy}px`;
     console.log(hesaplı_boy+" "+hesaplı_genişlik);
     console.log("div_height:"+div_h+" div_width:"+div_w);
   }
   if(div_w<450||div_h<450)
   {
     document.getElementById("sol_menü").style.display="none";
   }
   if(w>1000||h>1000)
   {
     document.getElementById("sol_menü").style.display="inline";
   }
  if(uzaklık==true)
  {
    document.getElementById("sol_menü").style.display="none";
  }
}
function degistirme(){
  var w=document.getElementById("sol_menü").style.width;
  var h = document.getElementById("sol_menü").style.height;
   console.log(w+" "+h);
}
function uzaklık_hesaplama(){
  const elem2 = document.getElementById("ex1");
  const elem = document.getElementById("sol_menü");
  const rect=elem.getBoundingClientRect();
  var rect1=elem2.getBoundingClientRect();
  var uzaklık=rect1.left-rect.right;
  if(uzaklık<=10)
  {
    console.log(uzaklık);
    return true;
  }
  else if(uzaklık>=-10)
  {
    console.log(uzaklık);
    return false;
  }
}
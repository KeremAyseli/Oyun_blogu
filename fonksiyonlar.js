function fonksiyon(){
var div_w=document.getElementById(arguments[0]).offsetWidth;
    var div_h=document.getElementById(arguments[0]).offsetHeight;
    var w = window.outerWidth;
    var h = window.outerHeight;
    var hesaplı_boy =(h*85)/100;
    var hesaplı_genişlik=(w*15)/100;

    if(arguments[1]!=null)
    {const uzaklık= uzaklık_hesaplama(arguments[0],arguments[1]);
  if(hesaplı_genişlik>=1500||hesaplı_boy>=300&&uzaklık==true)
   {
    document.getElementById(arguments[0]).style.display="none";
   }
   if(w>=1500||h>=1500&&uzaklık==false)
   {
    document.getElementById(arguments[0]).style.display="inline";
   }
   if(w<2000||h<2000)
    { 
      document.getElementById(arguments[0]).style.width=`${hesaplı_genişlik}px`;
     document.getElementById(arguments[0]).style.height=`${hesaplı_boy}px`;
     console.log(hesaplı_boy+" "+hesaplı_genişlik);
     console.log("div_height:"+div_h+" div_width:"+div_w);
   }
  }
  else{
    if(w<2000||h<2000)
    { 
      document.getElementById(arguments[0]).style.width=`${hesaplı_genişlik}px`;
     document.getElementById(arguments[0]).style.height=`${hesaplı_boy}px`;
     console.log(hesaplı_boy+" "+hesaplı_genişlik);
     console.log("div_height:"+div_h+" div_width:"+div_w);
   }
  }
}
function uzaklık_hesaplama(){
  const elem2 = document.getElementById(arguments[0]);
  const elem = document.getElementById(arguments[1]);
  const rect=elem.getBoundingClientRect();
  var rect1=elem2.getBoundingClientRect();
  var uzaklık=rect1.left-rect.right;
  if(uzaklık<=0)
  {
    console.log(uzaklık+"uzaklık0");
    return true;
  }
  else if(uzaklık>=1)
  {
    console.log(uzaklık+" uzaklık1");
    return false;
  }
}
var w2 = window.outerWidth;
  var h2 = window.outerHeight;
function a(){
 var h1= document.getElementById("pencere").offsetHeight;
var w1 =document.getElementById("pencere").offsetWidth;
console.log("h1 : "+h1+" w1 : "+w1);
console.log("h "+h2+" w "+w2);
  
}

function rastgele_sayfa(){
  var sayfalar=["./kısa_yazılar/portal2_kısayazı.html","./kısa_yazılar/csgo_kısayazı.html","./kısa_yazılar/lol_kısayazı.html"];
  var rastgele_sayı = Math.floor(Math.random() *3);
  document.getElementById("yazılar").src=sayfalar[rastgele_sayı];
  console.log("yükelenen sayfa"+sayfalar[rastgele_sayı]);
}


function yönlendirme(adres){
  window.location=adres;
}
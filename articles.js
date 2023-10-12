document.getElementById("menu-state-icon").addEventListener("click", function(){
    
    document.getElementById("popup-menu").style.display = "flex";
    document.getElementById("header-id").style.zIndex=0;
    document.getElementById("header-id").style.position="static";
    document.body.style.overflow="hidden"
});

document.getElementById("close-btn").addEventListener("click", function(){

    document.getElementById("popup-menu").style.display = "none";
    document.getElementById("header-id").style.zIndex=5;
    document.getElementById("header-id").style.position="fixed";
    document.body.style.overflow="scroll"
});

document.getElementById("navigator-1").addEventListener("click", function(){

    document.getElementById("popup-menu").style.display = "none";
    document.getElementById("header-id").style.zIndex=5;
    document.getElementById("header-id").style.position="fixed";
    document.body.style.overflow="scroll"
});
  
document.getElementById("navigator-2").addEventListener("click", function(){
  
    document.getElementById("popup-menu").style.display = "none";
    document.getElementById("header-id").style.zIndex=5;
    document.getElementById("header-id").style.position="fixed";
    document.body.style.overflow="scroll"
});
  
document.getElementById("navigator-3").addEventListener("click", function(){
  
    document.getElementById("popup-menu").style.display = "none";
    document.getElementById("header-id").style.zIndex=5;
    document.getElementById("header-id").style.position="fixed";
    document.body.style.overflow="scroll"
});
  
document.getElementById("navigator-4").addEventListener("click", function(){
  
    document.getElementById("popup-menu").style.display = "none";
    document.getElementById("header-id").style.zIndex=5;
    document.getElementById("header-id").style.position="fixed";
    document.body.style.overflow="scroll"
});

document.addEventListener("click", (e) => {
    var ScreenWidth = window.innerWidth;
    if(ScreenWidth<1101){
    if(enableclosemenu==true){
        let ourelem=document.getElementById("filter-menu");
        let filterbtn=document.getElementById("filter-btn");
        let clickedElem = e.target;
        do {
        if (clickedElem == ourelem) {
    console.log("menüye tıkladı");
        return;
        }
        else if(filterbtn==clickedElem){
            console.log("menüye açmaya tıkladı");
            return;
        }

       clickedElem=clickedElem.parentNode;
        } while (clickedElem);
        document.getElementById("filter-btn").style.display = "flex";
        document.getElementById("filter-menu").style.display = "none";
        console.log("menüye dışına tıkladı");
        enableclosemenu=false;
    }
}
    });

var enableclosemenu;
document.getElementById("filter-btn").addEventListener("click", function(){
    document.getElementById("filter-btn").style.display = "none";
    document.getElementById("filter-menu").style.display = "block";
    document.getElementById("filter-menu").style.backgroundColor = "#F5F5F7";
    enableclosemenu=true;
});


window.addEventListener('resize', function(event){ 
    var ScreenWidth = window.innerWidth;
    if(ScreenWidth>1100){
        document.getElementById("filter-menu").style.display = "block";
        document.getElementById("filter-btn").style.display = "none";
    }
    else{
        document.getElementById("filter-menu").style.display = "none";
        document.getElementById("filter-btn").style.display = "flex";
    }

});


function copyToClipboard(clicked_id)
{
      var url="https://www.iklimbilinci.com.tr/articles?articleID="+clicked_id;
      navigator.clipboard.writeText(url).then(function() {     
      }).catch(function(err) {
        console.error('Metin kopyalanırken bir hata oluştu: ', err);
      }); 
}

$('.share-btn').on('click',function(){
    Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Bağlantı panoya kopyalandı.',
        showConfirmButton: false,
        timer: 1000
      })
});

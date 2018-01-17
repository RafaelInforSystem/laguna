$(document).ready(function () { 
    
    altBtSldProd(0);  
    alingImgCars();
    //Show side menu
    $("#open-side-menu").click(function(){
        $("#bg-side-menu").show();
    });
    //Call side menu
    $("#close-side-menu").click(function(){
        $("#bg-side-menu").hide();
    });


    $("#productsCarousel").carousel({interval: false});
   
    $("#btnProd").click(function(){
        $('#productsCarousel').carousel(0);
        sel = 0;
        altBtSldProd(0);
    });
    $("#btnProd1").click(function(){
        $('#productsCarousel').carousel(1);
        sel = 1;
        altBtSldProd(1);
    });

    $("#mainCarousel").on('slid.bs.carousel', function () {
        alingImgCars();
    });
        //initialize popover
    $('#desc-prod').hide();
    $('#btn-show-desc').click(function(){
        $('#desc-prod').show();
    }); 
    $('#btn-hide-desc').click(function(){
        $('#desc-prod').hide();
    });

    $('#desc-prod1').hide();
    $('#btn-show-desc1').click(function(){
        $('#desc-prod1').show();
    }); 
    $('#btn-hide-desc1').click(function(){
        $('#desc-prod1').hide();
    });

    $('#desc-prod2').hide();
    $('#btn-show-desc2').click(function(){
        $('#desc-prod2').show();
    }); 
    $('#btn-hide-desc2').click(function(){
        $('#desc-prod2').hide();
    });

    $('#desc-prod3').hide();
    $('#btn-show-desc3').click(function(){
        $('#desc-prod3').show();
    }); 
    $('#btn-hide-desc3').click(function(){
        $('#desc-prod3').hide();
    });

    $('#desc-prod4').hide();
    $('#btn-show-desc4').click(function(){
        $('#desc-prod4').show();
    }); 
    $('#btn-hide-desc4').click(function(){
        $('#desc-prod4').hide();
    });

    $('#desc-prod5').hide();
    $('#btn-show-desc5').click(function(){
        $('#desc-prod5').show();
    }); 
    $('#btn-hide-desc5').click(function(){
        $('#desc-prod5').hide();
    });

    $('#desc-prod6').hide();
    $('#btn-show-desc6').click(function(){
        $('#desc-prod6').show();
    }); 
    $('#btn-hide-desc6').click(function(){
        $('#desc-prod6').hide();
    });

    $('#desc-prod7').hide();
    $('#btn-show-desc7').click(function(){
        $('#desc-prod7').show();
    }); 
    $('#btn-hide-desc7').click(function(){
        $('#desc-prod7').hide();
    });

    $('#desc-prod8').hide();
    $('#btn-show-desc8').click(function(){
        $('#desc-prod8').show();
    }); 
    $('#btn-hide-desc8').click(function(){
        $('#desc-prod8').hide();
    });

    $('#desc-prod9').hide();
    $('#btn-show-desc9').click(function(){
        $('#desc-prod9').show();
    }); 
    $('#btn-hide-desc9').click(function(){
        $('#desc-prod9').hide();
    });



    function altBtSldProd(ind){
        var sel = ind;
        if(sel === 0){
            $("#btnProd").css("color", "rgba(253, 0, 13, 1)") ;    
            $("#btnProd1").css("color", "rgba(150, 148, 148, 0.521)");
        } 
        else{
            $("#btnProd1").css("color", "rgba(253, 0, 13, 1)");
            $("#btnProd").css("color", "rgba(150, 148, 148, 0.521)");
        }
        
    } 

    

});

function alingImgCars() {
    var szCars = document.getElementById("mainCarousel").offsetHeight; 
    var imgList = document.getElementsByClassName("carousel-img");
    var i;
    for (i = 0; i < imgList.length; i++) {
        var szImg = imgList[i].offsetHeight;
        
      if(szCars < szImg){
        var rszImg = (szImg - szCars)/2;        
        imgList[i].style.top = -rszImg+"px";        
      }  
      
    }
    
}

/* function configImgCarousel() {
    var szCars = document.getElementById("mainCarousel").offsetHeight; 
    var imgList = document.getElementsByClassName("carousel-img");
    var i;
    for (i = 0; i < imgList.length; i++) {
        var szImg = imgList[i].offsetHeight
        
      if(szCars < szImg){
        alert(szImg)
        
      }  
      
    }
} */
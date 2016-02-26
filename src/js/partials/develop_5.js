try{

    $(document).ready(function(){
        $('.fade').slick({
          dots: false,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: 'linear'
        });
    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_5.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}
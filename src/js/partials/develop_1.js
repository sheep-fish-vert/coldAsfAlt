try{

    function instructionSlider(){

        function instructionSliderInit(windowWidth){

            var slickTag = $('.list-main');

            if(windowWidth<=992){
                if(!slickTag.is('.slick-slider')){
                    slickTag.slick({
                        slidesToShow: 1,
                        dots:true,
                        arrows:false,
                        draggable:false
                    });
                }
            }
            else{
                if(slickTag.is('.slick-slider')){
                    slickTag.slick('unslick');
                }
            }
        }

        var windowWidth = $(window).width();

        instructionSliderInit(windowWidth);

        $(window).resize(function(){

            windowWidth = $(window).width();

            instructionSliderInit(windowWidth);

        });

    };

    $(document).ready(function(){

        instructionSlider();

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_1.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}
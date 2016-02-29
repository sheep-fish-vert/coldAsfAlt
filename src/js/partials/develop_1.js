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

    function contactsMapInit(mapWrap){

        function initialize() {
            var myLatlng = new google.maps.LatLng(cordX,cordY);
            var myOptions = {
                zoom: 18,
                center: myLatlng,
                disableDefaultUI: true,
                zoomControl: false,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControlOptions: {
                   position: google.maps.ControlPosition.LEFT_BOTTOM
                }
            }
            var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

            var image = 'images/contact-marker.png';   // иконка картинкой

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                animation: google.maps.Animation.DROP, // анимация при загрузке карты
                icon: image //  иконка картинкой
            });

            map.set('styles', [
                {
                  stylers: [
                    { hue: "#ff0000" },
                    { saturation: -100 }
                  ]
                },{
                  featureType: "road",
                  elementType: "geometry",
                  stylers: [
                   { saturation: 0 },
                    { invert_lightness: false }
                  ]
                },{
                  featureType: "road",
                  elementType: "labels",
                  stylers: [
                    { visibility: "off" }
                  ]
                }
            ]);


        }

        initialize();

    };



    $(document).ready(function(){

        instructionSlider();
        contactsMapInit('contacts-map');

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_1.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}
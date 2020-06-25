$('header > .btn').click(function(){

    var tl = anime.timeline({
        targets: 'header > .btn'
      });
    
    tl.add({
        targets: 'header > .btn span',
        update: function(){
            $('header > .btn span').addClass('animate');
        },
        duration: 250
    }).add({
        targets: 'header > .btn span',
        update: function(){
            $('nav').addClass('open');
        },
        delay: 250
    }).add({
        update: function(){
            $('header nav .header > .close span.first').addClass('animate');
            $('header nav .header > .close span.second').addClass('animate');
        },
        delay: 250
    });

});

$('header nav .header .close').click(function(){
    
    var tl = anime.timeline({
        targets: 'header nav .header .close'
    });
    
    tl.add({
        update: function(){
            $('header nav .header > .close span.first').removeClass('animate');
            $('header nav .header > .close span.second').removeClass('animate');
        },
        duration: 100
    }).add({
        targets: 'header > .btn span',
        update: function(){
            $('nav').removeClass('open');
        }
    }).add({
        targets: 'header > .btn span',
        update: function(){
            $('header > .btn span').removeClass('animate');
        }
    });

});



const moonPath = 
    "M17 27.5C17 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 17 12.3122 17 27.5Z";

const sunPath = 
    "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

//WE NEED TO CLICK ON THE SUN

darkMode.addEventListener('click', () => {
    //WE NEED TO USE ANIME.JS
    //HERE WE SET UP THE TIMELINE
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    //ADD DIFFERENT ANIMATIONS TO THE TIMELINE
    timeline
        .add({
            targets: ".sun",
            d:[{ value: toggle ? sunPath : moonPath }]
        })
    
        .add(
            {
                targets:'#darkMode',
                rotate:320
            },
            "-= 350"
        )
        .add({
            targets:"section",
            backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)',
            color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
        },'-= 700');

        //EVERYTIME WE CLICK ON THE SUN I WANT THAT TOGLE TO SWITCH
        if(!toggle){
            toggle= true;
        }
        else{
            toggle= false;
        }

});
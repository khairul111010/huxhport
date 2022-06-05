// Screen PreLoader

//---- document ready start here--

//****list item carousel****//
$('.slide-items').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    stagePadding: 10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
//****live item carousel****//
$('.main-live').owlCarousel({
    loop:true,
    nav:false,
    // dots:true,
    // stagePadding: 10,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
//****top listed item carousel****//
$('.top-listed-prof').owlCarousel({
    loop:true,
    nav:false,
    // dots:true,
    // stagePadding: 10,
    // autoplay: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

$(document).ready(function(){
    $("#p-slide").hide();
    $("#profile-toggle").on({
        click : function(){
         $("#p-slide").toggle();
         $("#p-slide").css({
            "transition" : "all linear .5s"
        })
         }
    })

})
// $(document).ready(function() {

//     var feature = document.getElementById("user-feat");
//     var profile = document.getElementById("profile-feat");
//     window.onscroll = function() {
//         if (window.pageYOffset >= profile.offsetTop) {

//         } else {
//             feature.classList.remove("sticky");
//         }
//     }
// })
//document ready end

// index page level carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//side planet movemnets

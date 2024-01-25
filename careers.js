$(document).ready(function () {

    CookieValue();

    //Bottom to top js
    $("#back2Top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });


    //product hover
    $(".nav_cells_product").hover(function () {
        if ($(window).width() >= 768) {
            $(".nav_cells_product").addClass('active');
        }
    },
    function () {
        $(".nav_cells_product").removeClass('active');
    });

    //mega menu hover
    $(".hit_body").hover(function () {
        if ($(window).width() >= 768) {
            $(".nav_cells_product").addClass('active');
        }  
    },
  function () {
      $(".nav_cells_product").removeClass('active');
  });

    // why xignite

    //product hover
    $(".nav_cells_why_xignite").hover(function () {
        if ($(window).width() > 768) {
            $(".nav_cells_why_xignite").addClass('active');
        }
    },
    function () {
        $(".nav_cells_why_xignite").removeClass('active');
    });

    //mega menu hover
    $(".why_xignite_body").hover(function () {
        if ($(window).width() > 768) {
            $(".nav_cells_why_xignite").addClass('active');
        }
    },
  function () {
      $(".nav_cells_why_xignite").removeClass('active');
  });





    function openRightMenu() {
        //document.getElementById("rightMenu").style.display = "block";
        $("#rightMenu").show();
    }

    function closeRightMenu() {
        //document.getElementById("rightMenu").style.display = "none";
        $("#rightMenu").hide();
    }

    $("#openRightMenu").click(function () {
        $("#rightMenu").addClass('active');
    });

    $("#closeRightMenu").click(function () {
        $("#rightMenu").removeClass('active');
    });


    $('#nav-search-field').hide();
    $('#nav-search-cross').hide();
    $("#nav-search").click(function () {
        $('.navigation').hide();
        $('#nav-search-field').show();
        $('#nav-search-cross').show();
        $('#nav-search').hide();
    });
    $("#nav-search-cross").click(function () {
        $('.navigation').show();
        $('#nav-search-field').hide();
        $('#nav-search-cross').hide();
        $('#nav-search').show();
        $('.search_textfield').val('');
    });


    //responsive search starts
    $('#responsive_search').hide();
    $('#responsive_cross').hide();
    $("#small_nav_srch").click(function () {
        $('.yellow-header-logo').hide();
        $('.after_small').hide();
        $('#responsive_search').show();
        //$('#nav-search-cross').show();
        $('#small_nav_srch').hide();
        $('#openRightMenu').hide();
        $('#responsive_cross').show();
    });
    $("#responsive_cross").click(function () {
        $('.responsive_search_bar').val('');
        $('.yellow-header-logo').show();
        $('.after_small').show();
        $('#responsive_search').hide();
        //$('#nav-search-cross').show();
        $('#small_nav_srch').show();
        $('#openRightMenu').show();
        $('#responsive_cross').hide();
    });
    //responsive search ends



    $("#openRightMenu,#closeRightMenu").click(function () {

        $('html').toggleClass('overflow-hidden');
        $('body').toggleClass('overflow-hidden');
    });

    $("#websiteSearch").click(function () {
        debugger
        var text = $(".search_textfield").val().trim();
        SearchValue(text);
    });

    $(".search_textfield").keypress(function (e) {
       
        SpecialCharacterCheck(e, "websiteSearch");
    });

    $("#websitesearch-responsive").click(function () {

        var text = $(".responsive_search_bar").val().trim();
        SearchValue(text);

    });
    $(".responsive_search_bar").keypress(function (e) {
        SpecialCharacterCheck(e, "websitesearch-responsive");
    });

});
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});




function SpecialCharacterCheck(e, selector)
{
    if (e.which == 13) {
        $("#" + selector).click();
        return true;
    }
    var regex = new RegExp("^[a-zA-Z0-9- ]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(str)) {
        alert('Special characters are not allowed in search');
        return false;
    }
}

function SearchValue(text)
{
    debugger
    if (text != undefined && text != "") {
        var regex = new RegExp("^[a-zA-Z0-9- ]+$");
        if (!regex.test(text)) {
            alert('Special characters are not allowed in search');
            return false;
        }
        if (text.length < 3) {
            alert('Please enter more than two characters');
            return false;
        }
        if (text != undefined && text != "") {
            text = encodeURI(text);
            url = "/search?Q=" + text;
            var myURL = document.location;
            document.location = url;
        }
    }
    else {
        alert('Please select the keyword to search');
    }
}

function CookieValue()
{
    $.ajax({
        url: "/umbraco/surface/Home/Cookievalue",
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (responce) {
            if (responce != undefined && responce != "") {
                $("#loginbutton").hide();
                $("#loggedIndiv").css("display", "flex");
                $("#loggedIndiv .username").text(responce);
                $(".log_in").addClass('flex-direction-column');

                // iphone
                $("#loginbutton-iphone").hide();
                $("#loggedIndiv-iphone").show();
                $("#loggedIndiv-iphone .username").text(responce);
            }
            else {
                $("#loginbutton").show();
                $("#loggedIndiv").hide();
                // for iphone
                $("#loginbutton-iphone").show();
                $("#loggedIndiv-iphone").hide();
                ///ipad
                $(".log_in").removeClass('flex-direction-column');
            }
        },
        error: function () {
           
        }
    });
}

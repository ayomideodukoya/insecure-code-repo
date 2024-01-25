function CareerContent() {

    $.ajax({

        url: "/umbraco/surface/Career/CareerData",

        type: "GET",

        cache: false,

        success: function (responce) {

            $("#Jobs").html('');

            var htmlContent = "";

            if (responce.length > 0) {

                var result = responce;



                for (i = 0; i < result.length; i++) {

                    var position = result[i].Position;

                    var location = result[i].Location;

                    var url = result[i].Url;

                    htmlContent += "<div class='position_type'><div class='row'><div class='col-lg-5 col-md-5 col-sm-6 col-6'><a href='" + url + "'>" + position + "</a></div><div class='col-lg-4 col-md-4 col-sm-6 col-6'>" + location + "</div>" +

                        "<div class='col-lg-3 col-md-3 col-sm-12 col-12 apply_box'><a href='mailto:jobs@xignite.com'><span class='apply_btn'>Apply</span></a></div></div></div>";

                }

                $("#Jobs").append(htmlContent);

            }

        },

        error: function () {

          

        }

    });

}



function CareerBenefits(pageid) {

    $.ajax({

        url: "/umbraco/surface/Career/GetBenefits",

        type: "GET",

        data: { pageId: pageid },

        cache: false,

        success: function (response) {

            $("#benefits-content").html('');

            var htmlContent = "";

            if (response.length > 0) {

                var result = response;

                for (i = 0; i < result.length; i++) {



                    var heading = result[i].Heading;

                    var description = result[i].Description;

                    var imageWhite = result[i].WhiteLogo;

                    var imageOrange = result[i].OrangeLogo;

                    var whiteLogoAlt = result[i].LogoWhiteAlt;

                    var OrangeLogoAlt = result[i].LogoOrangeAlt;



                    htmlContent += "<div class='col-lg-4 col-md-4 col-sm-6 col-12 no_padding card-edit-support'> <div class='benifits white'><div class='benifit_image'>" +

                        " <img src=" + imageWhite + " alt='" + whiteLogoAlt + "' class='white_benifit_logo'/> <img src=" + imageOrange + " alt='" + OrangeLogoAlt + "'  class='orange_benifit_logo'/></div>" +

                        " <div class='benifit_text'>  <p class='no_margin f_16 font_wt_600'>" + heading + "</p><div class='f_14' >" + description + "</div> </div></div></div>";

                }

                $("#benefits-content").append(htmlContent);

            }

        },

        error: function () {

            ;

        }

    });

}

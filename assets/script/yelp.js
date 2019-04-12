function searchYelp() {
    

    var apiKey = "8tYUenwnc30zfZ_BU_6dIkyQM6X8MI1S9hGxquW7h0EtrBfG2vuhDsQNXqItzVm4822tyG6DZ_v-m0-H31za-2yCALyGz7A72nn3Tk95fMg7U_vouW72kaFg8wmsXHYx" 
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972";
    
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "accept": "application/json",
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin":"*",
            "Authorization": `Bearer ${apiKey}`
         }
     }).then(function(res) {
         var results = res.businesses
         for (let idx = 0; idx < results.length; idx++) {
                var respData = results[idx]
        
                // Creating a div to hold the gifs
                var restCard = $("<div class='cards'>");
                
                // Retrieving the URL for the image
                var imgURL = respData.image_url;
                
                // Creating an element to hold the still image
                var image = $("<img>").attr("src", imgURL).attr("width", "200px");
               
                // Appending the image
                restCard.append(image);
                
                var busName = respData.name;
                var nameField = $("<p class='rated'>").text(busName);
                // Storing the rating data
                var rating = respData.rating;
                console.log(rating);

                rateImg = starRtg(rating);
                starUrl = "../images/yelp_stars/"+ rateImg;
                console.log(rateImg);
                // Creating an element to have the rating displayed
                var pRating = $("<p class='rated'>").html("<img src='"+ starUrl +"'>");
                
                // Displaying the name and rating
                restCard.append(nameField).append(pRating);
                
                // Adding restaurants to the display
                $("#restaurants").append(restCard);

                // Get Rating Image
                function starRtg(rating) {
                        //just trying a couple lines to see if I can get it to work
                        let rateImgFile =""
                        if (rating = 4) {
                            rateImgFile = "small_4.png";
                        } else {
                            rateImgFile = "small_0.png";
                        };
                        return rateImgFile;
            
                        // switch (rate) {
                        //     case 1:
                        //         "small_1.png";
                        //         break;
                        //     case 1.5:
                        //         "small_1_half.png";
                        //         break;
                        //     case 2:
                        //         "small_2.png";
                        //         break;
                        //     case 2.5:
                        //         "small_2_half.png";
                        //         break;
                        //     case 3:
                        //         "small_3.png";
                        //         break;
                        //     case 3.5:
                        //         "small_3_half.png";
                        //         break;
                        //     case 4:
                        //         "small_4.png";
                        //         break;
                        //     case "4.5":
                        //         rate = "small_4_half.png";
                        //         break;
                        //     case 5:
                        //         "small_5.png";
                        //         break;
                        //     default:
                        //         "small_0.png";
                        //         return rate;
                        // }
                    }
                }
     });


};

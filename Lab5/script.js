// Archivo para practicar llamar un public API  

// JSON stands for Javascript Object Notation

// Ver el archivo JSON para entender como se manda a llamar las cosas tipo data.main.temp
var n = 1;


let searchUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Nelson%20Mandela&utf8=&format=json";


function fn1(){
        
    var ciudad = document.getElementById('query').value;

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=5e62aaf68847cb3f4a9abddab1c049ea&units=metric";


    $.getJSON(
        url,
        function(data) {

        console.log(data);
        
        var city = data.name;
        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = Math.floor(data.main.temp) + "°C";
        var weather = data.weather[0].main;
        var description = data.weather[0].description;
        var wind_speed = data.wind.speed + " km/h";
        var wind_deg = data.wind.deg + " °";
        var temperature_description = Math.floor(data.main.temp_max) + "° / " + Math.floor(data.main.temp_min) + "° Feels like " + Math.floor(data.main.feels_like) + "°";
        var sunrise = new Date(data.sys.sunrise * 1000);
        var sunrise_hour = sunrise.toLocaleTimeString();
        var sunset = new Date(data.sys.sunset * 1000);
        var sunset_hour = sunset.toLocaleTimeString();
        

        $('.icon').attr('src', icon);
        
        $('.temp').append(temp);
        $('.city').append(city);
        $('.weather-description').append(description);
        $('.wind-speed').append(wind_speed);
        $('.wind-degree').append(wind_deg);
        $('.temperature-description').append(temperature_description);
        $('.sunrise-hour').append(sunrise_hour);
        $('.sunset-hour').append(sunset_hour);

        
        
        fewclouds = "The wheather seems to be very nice, no need for sunblock and no need for a umbrella. Enjoy the good wheather!";
        scatteredclouds = "The wheather seems to be a little cloudy. You should consider bringing a umbrella because it may rain later on.";
        clearsky = "The wheather seems to be very nice, theres a clear sky. No need to worry for a umbrella. However, if it is daytime you should consider putting on sunblock.";
        overcast = "The wheather seems to be cloudy, and you should consider getting a coat and an umbrella because it may rain and there will be wind.";
        
        if(description == "few clouds"){
            $('.wheather-precaution').append(fewclouds);
            if(Math.floor(data.main.temp) < 17){
                $('.wheather-precaution').append(" And you should get a sweater because its cold.");
            } else if(Math.floor(data.main.temp) < 0){
                $('.wheather-precaution').append(" And you should get Multiple sweaters because ITS COLD");
            }
        } else if(description == "scattered clouds"){
            $('.wheather-precaution').append(scatteredclouds);
            if(Math.floor(data.main.temp) < 17){
                $('.wheather-precaution').append(" And you should get a sweater because its cold.");
            } else if(Math.floor(data.main.temp) < 0){
                $('.wheather-precaution').append(" And you should get Multiple sweaters because ITS COLD");
            }
        } else if(description == "clear sky"){
            $('.wheather-precaution').append(clearsky);
            if(Math.floor(data.main.temp) < 17){
                $('.wheather-precaution').append(" And you should get a sweater because its cold.");
            } else if(Math.floor(data.main.temp) < 0){
                $('.wheather-precaution').append(" And you should get Multiple sweaters because ITS COLD");
            }
        } else if(description == "overcast clouds"){
            $('.wheather-precaution').append(overcast);
            if(Math.floor(data.main.temp) < 17){
                $('.wheather-precaution').append(" And you should get a sweater because its cold.");
            } else if(Math.floor(data.main.temp) < 0){
                $('.wheather-precaution').append(" And you should get Multiple sweaters because ITS COLD");
            }
        } 
        

    });
    
    

   
}


// Archivo para practicar llamar un public API  

// JSON stands for Javascript Object Notation

// Ver el archivo JSON para entender como se manda a llamar las cosas tipo data.main.temp
var n = 1;
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


        

    });
    
}





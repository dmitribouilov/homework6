console.log("hello");

var apiKey="3256b5366799efdc8e26a12975df322f"

var cityName =''


$("#cityList").on("click", function(event){

    cityName = event.target.id.split(' ').join('');
    cityEnter(event,cityName)
    console.log(cityName)

})





$("#btnCityInput").on("click", function(event){

    cityName = $("#cityInput").val().split(' ').join('');
   // console.log($("#cityInput").val())
    cityEnter(event,cityName)

    

});

$('#cityInput').keypress(function(event){
	
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){

        cityName = $("#cityInput").val();
		cityEnter(event,cityName)
	}

});

$("#btnCityClear").on("click", function(event){


    $("#cityList").empty();
    $("#cityInput").empty();


    


});



function cityEnter() {

    var forecasturl= 'https://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&units=metric&appid='+apiKey;

   var weatherurl = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid="+ apiKey;

    if(event.srcElement.id === "cityInput"){
        $("#cityList").append("<li id="+cityName+" class='list-group-item'>"+cityName+"</li>")

    }

    if(event.srcElement.id === "btnCityInput"){
        $("#cityList").append("<li id="+cityName+" class='list-group-item'>"+cityName+"</li>")

    }

   
  

    $.ajax({

        url: weatherurl,
        method: "GET"
    
    
    }).then(function(response){

             
            $("#cityNameForecast").html(response.name +"  " +  moment().format('L') );
            $("#forecastImg").html('<img src="https://openweathermap.org/img/wn/'+response.weather[0].icon+'.png">')
           $("#cityNameForecastT").html("Temperature " + response.main.temp + " Celcius");
           $("#cityNameForecastH").html("Humidity " + response.main.humidity + " %");
           $("#cityNameForecastW").html("Wind Speed " + response.wind.speed+" KPH");



      //  console.log(response.list[4])      
    
        console.log(response)
   })


   $.ajax({

    url: forecasturl,
    method: "GET"


}).then(function(response){

    let dateSplit = []

    

         dateSplit = response.list[3].dt_txt.split(" ")
       $("#1date").html(dateSplit[0]);
       $("#1img").html('<img src="https://openweathermap.org/img/wn/'+response.list[3].weather[0].icon+'.png">')
       $("#1temp").html("Temperature " + response.list[3].main.temp + " C");
       $("#1humidity").html("Humidity " + response.list[3].main.humidity + " %");
       //$("#cityNameForecastW").html("Wind Speed " + response.wind.speed+" KPH");

       dateSplit = response.list[11].dt_txt.split(" ")
       $("#2date").html(dateSplit[0]);
       $("#2img").html('<img src="https://openweathermap.org/img/wn/'+response.list[11].weather[0].icon+'.png">')
       $("#2temp").html("Temperature " + response.list[11].main.temp + " C");
       $("#2humidity").html("Humidity " + response.list[11].main.humidity + " %");

       dateSplit = response.list[19].dt_txt.split(" ")
       $("#3date").html(dateSplit[0]);
       $("#3img").html('<img src="https://openweathermap.org/img/wn/'+response.list[19].weather[0].icon+'.png">')
       $("#3temp").html("Temperature " + response.list[19].main.temp + " C");
       $("#3humidity").html("Humidity " + response.list[19].main.humidity + " %");

       dateSplit = response.list[27].dt_txt.split(" ")
       $("#4date").html(dateSplit[0]);
       $("#4img").html('<img src="https://openweathermap.org/img/wn/'+response.list[27].weather[0].icon+'.png">')
       $("#4temp").html("Temperature " + response.list[27].main.temp + " C");
       $("#4humidity").html("Humidity " + response.list[27].main.humidity + " %");

       dateSplit = response.list[35].dt_txt.split(" ")
       $("#5date").html(dateSplit[0]);
       $("#5img").html('<img src="https://openweathermap.org/img/wn/'+response.list[35].weather[0].icon+'.png">')
       $("#5temp").html("Temperature " + response.list[35].main.temp + " C");
       $("#5humidity").html("Humidity " + response.list[35].main.humidity + " %");
    


    //console.log(response.list[4])      

 //   console.log(response)
})




    
}







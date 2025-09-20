
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b64cb317b2msh841ad4e2db87643p1746c0jsn9b5fea571941',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};

fetch('https://weather-api138.p.rapidapi.com/weather?city_name=Delhi', options)
    .then(response => response.json())
    .then((response) => {
		console.log("Weather Data:", response)
		temp = response.temp
		feels_like = response.feels_like
		temp_min = response.temp_min
		temp_max = response.temp_max
		humidity = response.humidity
		speed = response.speed
		deg = response.deg
		sunrise = response.sunrise
		sunset = response.sunset
	})
    .catch(err => console.error("Error:", err));




const options={
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b64cb317b2msh841ad4e2db87643p1746c0jsn9b5fea571941',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};


fetch('https://weather-api138.p.rapidapi.com/weather?city_name=Delhi', options)
    .then(response => response.json())
    .then((response) => {
		console.log("Weather Data:", response)
		temp = response.temp
		feels_like = response.feels_like
		temp_min = response.temp_min
		temp_max = response.temp_max
		humidity = response.humidity
		speed = response.speed
		deg = response.deg
		sunrise = response.sunrise
		sunset = response.sunset
	})
    .catch(err => console.error("Error:", err));




// Seleccionar los elementos del DOM necesarios para mostrar la fecha actual
const dateNumber = document.getElementById('dateNumber'); // Número del día
const dateText = document.getElementById('dateText'); // Día de la semana
const dateMonth = document.getElementById('dateMonth'); // Nombre del mes
const dateYear = document.getElementById('dateYear'); // Año

// Función para establecer la fecha actual en los elementos del DOM correspondientes
const setDate = () => {
    const date = new Date(); // Crear un objeto de fecha
    // Establecer los valores de la fecha en los elementos del DOM correspondientes
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' }); // Día
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' }); // Día de la semana
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' }); // Mes
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' }); // Año
};

const apiKey = 'ae80b6a4527b702540ba5a291ad8e695'; // poner tu clave de API

const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

searchButton.addEventListener('click', () => {
  const city = cityInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=sp`;


  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      weatherInfo.innerHTML = `La temperatura en ${city} es ${temperature} grados Celsius y ${description}.`;
    })
    .catch(error => {
      console.error('Hubo un error al obtener los datos:', error);
      weatherInfo.innerHTML = 'Hubo un error al obtener los datos.';
    });
});
setDate();

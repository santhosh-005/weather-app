const inputBox = document.getElementById("inputBox");
const cityName = document.getElementById("cityname");
const date = document.getElementById("date");
const celcius = document.getElementById("celcius");
const cloud = document.getElementById("cloud");
const searchIcon = document.getElementById("search-icon");



let city='Bengaluru';

searchIcon.addEventListener('click',()=>getWeather())


function getWeather(){
    console.log('called')
  city=inputBox.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f92785bdd780e93c15428186d9f78c6e`)
  .then((data)=>data.json())
  .then((data)=>{displayWeather(data)})
}



inputBox.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getWeather()
  }
});


function displayWeather(data){
  var currentCelcius=Math.floor(data.main.temp- 273.15);

  cityName.innerText=`${inputBox.value}, IN`;
  celcius.innerText=currentCelcius;



  const d = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesdaygit push -u origin main', 'Thursday', 'Friday', 'Saturday'];
  date.innerHTML = daysOfWeek[d.getDay()] + " " + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + " "+ d.getHours()+":"+d.getMinutes();;
  
  cloud.innerText=currentCelcius-1+"°c / "+(currentCelcius+1) +"°c";

  
}








const form = document.querySelector("form");
const input = document.querySelector("#input");
const div = document.querySelector('div');



form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(input.value);
    function checkWheather() {
        div.innerHTML = ""
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=b6b7b0805e7a8277f737932bc79cca5f `)
            .then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data.main);
                console.log(data.name);
                div.innerHTML += `
            <div class="card bg-transparent border border-info" style="width: 30rem;">
  <div class="card-body text-center text-white ">
    <h1 class="card-text">${data.name}</h1>
    <h1 class="card-text">Temperature : ${data.main.temp}</h1>
    <h1 class="card-text">Pressure : ${data.main.pressure}</h1>
    <h1 class="card-text">humidity : ${data.main.humidity}</h1>
    <h1 class="card-text">Temperature Max : ${data.main.temp_max}</h1>
    <h1 class="card-text">Temperature Min : ${data.main.temp_min}</h1>
  </div>
</div>
             `
            })
            .catch((err) => {
                console.log(err);
            })
    }
    checkWheather()
    input.value = ''
})



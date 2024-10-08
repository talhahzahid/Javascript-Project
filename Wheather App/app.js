


const form = document.querySelector("form");
const input = document.querySelector("#input");
const div = document.querySelector('div');

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(input.value);
    function checkWheather() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=b6b7b0805e7a8277f737932bc79cca5f `)
            .then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data.main);
                console.log(data.name);
                div.innerHTML += `
            <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h class="card-text">${data.name}</h>
    <h class="card-text">${data.main.temp}</h>
    <h class="card-text">${data.main.
        pressure}</h>
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


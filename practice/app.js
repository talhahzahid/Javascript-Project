

const form = document.querySelector('form')
const input = document.querySelector('input')


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(input.value);
    
})


const input = document.querySelector('input')
const h2 = document.querySelector('h2')


input.addEventListener('input', (e)=>{
    
   let inpvalue =  e.target.value;
   h2.innerHTML = inpvalue.toUpperCase()
})


let name = 'Gerd Müller'.toUpperCase()


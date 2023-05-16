const login = document.getElementById('login')
const calculator = document.getElementById('calculator')
const body = document.getElementsByTagName('body')[0];

const navFunctions = [
    document.getElementById('login'),
    document.getElementById('calculator'),
    document.getElementById('signup')
]

navFunctions.map(el => {
    el.addEventListener('click', (e) => {
        fetch(`./partials/${el.id}.html`)
        .then(response => response.text())
        .then(data => {
            const existingForm = document.getElementsByClassName('loginForm')
            if (existingForm.length > 0) {
                existingForm[0].parentElement.removeChild(existingForm[0])
            }

            const animationDuration = 500; 

            const form = document.createElement('div')
            form.className = 'loginForm'
            form.id = el.id + 'Form'
            form.innerHTML = data;
            
            body.appendChild(form);
            
            form.style.animation = `Form ${animationDuration}ms`
        })
       .catch(error => {console.error('Erro ao carregar o arquivo login.html:', error)});
    })
})
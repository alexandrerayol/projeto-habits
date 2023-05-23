const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form) 
const button = document.querySelector('button')

button.addEventListener('click', addNewDay)
form.addEventListener('change', saveData)

function addNewDay() {

    
    const today = new Date().toLocaleDateString('pt-br').slice(0,5)
    const checkDay = nlwSetup.dayExists(today)  //false or true

    if(checkDay){
        window.confirm('Dia já existente ❌')
        return
    }

    nlwSetup.addDay(today)
    window.alert('Dia registrado com sucesso ✅')
}

function saveData() {

    const data = nlwSetup.data //Objeto
    const dataString = JSON.stringify(data) // Objeto -> String

    window.localStorage.setItem('rocketseat@habits', dataString)
    //reserva os dados no armazenamento local do navegador
}

const dataString = window.localStorage.getItem('rocketseat@habits') || {}
/*
    Pega os dados armazenados localmente no navegador, caso exista. 
    Caso não existe, é passado um objeto vazio para evitar erros. 
*/
const dataObject = JSON.parse(dataString) //Converte de string para objeto
nlwSetup.setData(dataObject) //Atualiza os dados de acordo com o localStorage
nlwSetup.load()
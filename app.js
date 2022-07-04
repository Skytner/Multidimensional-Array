let consoleInput = document.getElementById('console')
let minus = ' - '
let space = ' '
let list = [['Меч темного рыцаря','Маракумо','Посох чародея'],['Сила','Интеллект','Ловкость']]
let yasuo = document.getElementById('btnYasuo')
let jhin = document.getElementById('btnJhin')
let ekko = document.getElementById('btnEkko')

function showConsole(button){
  consoleInput.innerHTML += 'Вывод:' + '<br>' + list[0][0] + minus + list [1][0] + '<br>' + list[0][1] + minus + list [1][2] + '<br>' + list[0][2] + minus + list[1][1]
  button.setAttribute('disabled',true)
  button.innerHTML = 'Подождите несколько секунд...'
  setTimeout(resetFunction, 5000) 
  function resetFunction(){
    button.removeAttribute('disabled', this)
    button.innerHTML = 'Нажать для вывода'
    consoleInput.innerHTML = null
  }
}


let myItems = []

let tradeItems = [
['Убийца кракенов',' Грань бесконечности',' Кровопийца'],
['Сила шторма',' Скорострельная пушка',' Сборщик долгов'],
['Хекстековый проторемень',' Гроза личей' , ' Смертельная шляпа Рабадона']]

const three = 3

function openStore(button){
  
 
{
  
  button.setAttribute('disabled',true)
  button.innerHTML = 'Открыто'
  button.style.background = 'inherit'
  button.style.color = 'white'
  button.style.fontSize = '14px'

 yasuo.style.display = 'block'
 jhin.style.display = 'block'
 ekko.style.display = 'block'

 
 
}
let storeBtn = document.querySelectorAll('.store')

storeBtn.onclick = function openMore(){
  if(storeBtn.clicked == true){
    alert('1 elem')
  }
}
let back=document.createElement('button')
back.style.display = 'block'
back.id='backButton'
back.innerHTML = 'Выйти из магазина'
back.classList.add ('back')
back.onclick = function toBack()
{

  alert('js')
  button.innerHTML = 'Открыть магазин'
  button.style.background = 'white'
  button.style.color = 'black'
  button.style.fontSize = '12px'
  button.removeAttribute('disabled',false)
  yasuo.style.display = 'none'
  jhin.style.display = 'none'
  ekko.style.display = 'none'
  back.remove()

}

document.getElementById('itemList').appendChild(back)

}
let items = document.getElementById('items')
function showYasuoItems(){
  items.style.visibility = 'visible'
  items.innerHTML = tradeItems[0]
  backButton.style.display = 'none'
  let backToMain = document.createElement('button')
  backToMain.style.display = 'block'
  backToMain.id ='BackToMainButton'
  yasuo.setAttribute('disabled',true)

  backToMain.innerHTML = 'Вернуться к главному'
  document.getElementById('itemList').appendChild(backToMain)
  backToMain.onclick = function toBackMain(){
    yasuo.removeAttribute('disabled', false)
    backToMain.remove()
    backButton.style.display= 'block'
    items.innerHTML = null
    items.style.visibility = 'hidden'
  }
}
function showJhinItems(){
  items.style.visibility = 'visible'
  items.innerHTML = tradeItems[1]
  backButton.style.display = 'none'
  let backToMain = document.createElement('button')
  backToMain.style.display = 'block'
  backToMain.id ='BackToMainButton'
  jhin.setAttribute('disabled',true)
  backToMain.innerHTML = 'Вернуться к главному'
  document.getElementById('itemList').appendChild(backToMain)
  backToMain.onclick = function toBackMain(){
    jhin.removeAttribute('disabled', false)
    backToMain.remove()
    backButton.style.display= 'block'
    items.innerHTML = null
    items.style.visibility = 'hidden'
  }
}
function showEkkoItems(){
  items.style.visibility = 'visible'
  items.innerHTML = tradeItems[2]
  backButton.style.display = 'none'
  let backToMain = document.createElement('button')
  backToMain.style.display = 'block'
  backToMain.id ='BackToMainButton'
  ekko.setAttribute('disabled',true)
  backToMain.innerHTML = 'Вернуться к главному'
  document.getElementById('itemList').appendChild(backToMain)
  backToMain.onclick = function toBackMain(){
    ekko.removeAttribute('disabled', false)
    backToMain.remove()
    backButton.style.display= 'block'
    items.innerHTML = null
    items.style.visibility = 'hidden'
  }
}



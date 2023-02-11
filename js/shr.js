var quizURL = window.location.href
var result = quizURL.substring(quizURL.lastIndexOf('/') + 1).replace('.html','')
document.querySelector('#ogurl').setAttribute('content','https://brunofranciscu.github.io/quiz-logitech/');

fetch(`${quizURL.replace(result+'.html','')}resultado.json`).then(response => response.json()).then(json =>{
        document.querySelector('#tt').setAttribute('href',`https://twitter.com/intent/tweet?url=https://brunofranciscu.github.io/quiz-logitech/${json.resultado[result].url}&text=${json.resultado[result].shr}`)
        console.log(document.querySelector('#tt'))
      })

    function resultados(){
      fetch('resultado.json').then(response => {
          return response.json()
        }).then(json =>{
          document.querySelector('.selo h3').innerHTML = `${json.resultado[result].titulo}`;
          document.querySelector('.pBox').innerHTML = `${json.resultado[result].purpleBox}`;
          document.querySelector('.text').innerHTML = `${json.resultado[result].texto}`;
          document.querySelector('div.cta p').innerHTML = `${json.resultado[result].logitech}`
          document.querySelector('.personagem img').setAttribute('src',`img/${json.resultado[result].char.replace('.webp','')}.webp`)
        })
        if(result.length > 7){document.querySelector('.selo h3').style.fontSize = '1.2rem'}else if(result.length > 10 ){document.querySelector('.selo h3').style.fontSize = '1.2rem'}else{return true}
  }resultados()

  document.querySelector('body').classList.toggle('bg')

  console.log(localStorage);

if(localStorage.getItem('resultado') == '' || localStorage.getItem('resultado') == "undefined" || localStorage.getItem('resultado') == null){
  window.location = 'https://brunofranciscu.github.io/quiz-logitech/'
}

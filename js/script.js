var array = [];
var lider, nerd, fundao, dorme, popular, result, quizURL = window.location.href;


document.querySelectorAll('.card ol a').forEach(resposta =>{
    resposta.addEventListener('click',function(){

        array.push(resposta.getAttribute('id')); array.concat(resposta.getAttribute('id'))
        
        lider = array.filter(lider => lider === 'lider').length;
        nerd = array.filter(nerd => nerd === 'nerd').length;
        fundao = array.filter(dofundao => dofundao === 'dofundao').length;
        dorme = array.filter(doquedormenacarteira => doquedormenacarteira === 'doquedormenacarteira').length;
        popular = array.filter(popular => popular === 'popular').length;

        resposta.closest('div').classList.add(resposta.closest('div').getAttribute('id'))
        resposta.closest('div').style.translate = '-100% 0%';

        setTimeout(function(){
            if(resposta.closest('div').getAttribute('class').split(' ')[1] == resposta.closest('div').getAttribute('id'))
            resposta.closest('div').style.display = 'none';
        },300)
                  if (lider >= 3 && array.length > 5 ){result = 'lider'; localStorage.setItem('resultado',result)
            }else if (nerd >= 3 && array.length > 5){result = 'nerd'; localStorage.setItem('resultado',result)
            }else if (fundao >= 3 && array.length > 5){result = 'dofundao'; localStorage.setItem('resultado',result)
            }else if (dorme >= 3 && array.length > 5){result =  'doquedormenacarteira'; localStorage.setItem('resultado',result)
            }else if (popular >= 3 && array.length > 5){result = 'popular'; localStorage.setItem('resultado',result)
            }else if (array.length > 5) {result = 'vainaonda' }
            else{ return true }
        window.location = `https://github.com/brunofranciscu/quiz-logitech/${result}.html`
        // window.location = `${result}.html`
    })
    
})
document.querySelectorAll('#pergunta-1 a').forEach(item =>{
    item.onclick = () =>{
        document.querySelector('body').classList.toggle('visible')
    }
})
document.querySelectorAll('#pergunta-2 a').forEach(item =>{
    item.onclick = () =>{
        document.querySelector('body').classList.toggle('visible')
    }
})
function listaAleatoria() {
    var ol = document.querySelectorAll('.card ol')
    ol.forEach(ol =>{
        var li = ol.children, 
        lista = Array.from(li), 
        sortear = lista.sort(() => Math.random() - 0.5);
        ol.innerHTML = '';
        sortear.forEach((node) => {
            ol.appendChild(node);
        });
    })
}
document.querySelector('#startQuiz').addEventListener('click',function(){
    document.querySelector('main').style.scale = '0'

    setTimeout(function(){ document.querySelector('main').style.display = 'none'},200)

    document.querySelector('#quiz').style.display = 'block';
    listaAleatoria()
})
icnParallax = new Parallax(document.querySelector('main .icones'))
icnParallax2 = new Parallax(document.querySelector('section .icones'))


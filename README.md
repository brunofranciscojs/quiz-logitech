# quiz-logitech
https://brunofranciscu.github.io/quiz-logitech

Projeto realizado na empresa KaBum! em parceria com a marca Logitech.

O desafio era criar um quiz de 5 perguntas com seis escolhas cada, e cada resultado seria um perfil diferente.
Inicialmente adicionei uma sequência numerica a cada id de cada resposta e guardava em localStorage.setItem(), assim, eu leria com localSotrage.getItem(), 
porém poderia o calculo se fosse maior que 3 sempre daria um perfil específico, então resolvi criar um array com os valores dos ids dos containers de 
cada pergunta, então eu retornava o length de cada valor e assim o resultado seria diferente para cada calculo das respostas.

A lógica para chegar no resultado foi simples, eu verificava se determinada resposta fosse maior que 3 e array das perguntas era maior que 5 e o resultado sairia.


```javascript
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
        window.location = `https://brunofranciscu.github.io/quiz-logitech/${result}.html`
        // window.location = `${result}.html`
    })
    
})
```

# quiz-logitech
https://brunofranciscu.github.io/quiz-logitech

Projeto realizado na empresa KaBum! em parceria com a marca Logitech.

O desafio era criar um quiz de 5 perguntas com seis escolhas cada, e cada resultado seria um perfil diferente.
Inicialmente adicionei uma sequência numerica a cada id de cada resposta e guardava em localStorage.setItem(), assim, eu leria com localSotrage.getItem(), 
porém poderia o calculo se fosse maior que 3 sempre daria um perfil específico, então resolvi criar um array com os valores dos ids dos containers de 
cada pergunta, então eu retornava o length de cada valor e assim o resultado seria diferente para cada calculo das respostas.

A lógica para chegar no resultado foi simples, eu verificava se determinada resposta fosse maior que 3 e array das perguntas era maior que 5 e o resultado sairia.

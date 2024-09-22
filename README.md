# Desenvolvimento de Interfaces Web

## Feedback Lab 1

Olá! Excelente Trabalho! 

Alguns pontos a melhorar:

1. Neste caso queremos referenciar o ficheiro local do report.html, desta forma conseguimos aceder às alterações que realizarmos antes de o site estar live. Esta diferença é entre caminhos relativos e absolutos iremos falar mais à frente!

```html
<a href="https://andresecoferreira.github.io/Lab1/report.html">Lab 1 - Viagem pela Internet</a>
```

Alterar para:

```html
<a href="Lab1/report.html">Lab 1 - Viagem pela Internet</a>
```

2. Ainda não falamos de CSS, mas não é boa prática adicionar estilos diretamente nos elementos no ficheiro HTML, para isso devemos utilizar o ficheiro de CSS. Iremos explicar nas aulas de CSS! O mesmo se aplica nas imagens.

```html
 <div style="text-align: center;">
```

3. Podemos ter vários ficheiros de CSS com o mesmo nome se estiverem em pastas diferentes

```html
<link rel="stylesheet" href="styles2.css" />
```

Podemos usar apenas:

```html
<link rel="stylesheet" href="styles.css" />
```

4. Mais uma vez a diferença entre caminhos absolutos e relativos

```html
<a href="https://andresecoferreira.github.io/" alt="Home">Home</a>
```

Se estivermos a testar o nosso website no IDE se voltarmos para Home na realidade não vamos ver as alterações que temos no index.html, mas sim o index.html que está naquele momento live em https://andresecoferreira.github.io/ 

6. O atributo alt não deve ser usado em elementos âncora, pois é exclusivo para imagens.

```html
<a href="https://andresecoferreira.github.io/" alt="Home">Home</a>
```

```html
<a href="https://andresecoferreira.github.io/">Home</a>
```

## Feedback Lab 2

Bom trabalho! Bom uso do HTML semântico.

É necessário ter cuidado com a formatação do código, podes usar o Visual Studio Code para te ajudar a formatar o código.
Na próxima aula vou dar alguns exemplos de má formatação!

Keep up the good work!
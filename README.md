![](./assets/hd-header.png)

## Front-End - Introdução ao Javascript - Parte 1


### O que é Javascript?

Desenvolvida por Brendan Eich  em 1995, a pedido da empresa Netscape comprada pela America Online (AOL), com o objetivo de validar formulários HTML. 
Sendo que o JavaScript é uma poderosa linguagem de programação que pode adicionar interatividade a um site. É versátil e amigável para iniciantes. 
Com mais experiência na linguagem, você poderá criar jogos, gráficos 2D e 3D animados, aplicativos abrangentes baseados em banco de dados e muito mais!

### Afinal, onde o Javascript pode ser usado?

O Javascript é a linguagem mais utilizada para programação de aplicações Web e é suportada pela maioria dos navegadores (Firefox, Chrome, Edge e Safari) sem que o usuário precise instalar um plug-in.

### Sintaxe básica

* JavaScript pega emprestado a maior parte de sua sintaxe do Java, mas também é influenciado por Awk, Perl e Python.
* É case-sensitive e usa o conjunto de caracteres Unicode. Por exemplo, a palavra Früh (que significa "cedo" em Alemão) pode ser usada como nome de variável. Contudo früh não é a mesma que Früh porque JavaScript é case sensitive.

````js
var Früh = "Uma variavel";
var früh = "Outra variavel"
````

### Comentários

A sintaxe dos comentários em JavaScript é semelhante como em C++ e em muitas outras linguagens:

````js
// comentário de uma linha

/* isto é um comentário longo
   de múltiplas linhas.
 */

/* Você não pode, porém, /* aninhar comentários */ SyntaxError */
````

### Declarações

Existem três tipos de declarações em JavaScript: var, let e const

* var - Declara uma variável, opcionalmente, inicializando-a com um valor.

* let - Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

* const - Declara uma constante de escopo de bloco, apenas de leitura.

A diferença entre var, let e const está relacionada ao escopo e à reatribuição de valores das variáveis. 

* var tem escopo de função e permite a redeclaração e reatribuição de valores.
* let tem escopo de bloco e permite a reatribuição de valores. 
* const tem escopo de bloco e declara uma variável de valor constante, que não pode ser alterada após a atribuição inicial.

Utilizando var, let e const -  Recomenda-se utilizar let ou const em vez de var na maioria dos casos, devido a questões relacionadas ao escopo e à legibilidade do código. 

* let deve ser utilizado quando você precisa reatribuir valores. 
* const deve ser utilizado quando você deseja declarar uma variável de valor constante.

### Variáveis

Você usa variáveis como nomes simbólicos para os valores em sua aplicação. O nome das variáveis, chamados de identificadores, obedecem determinadas regras.

Um identificador JavaScript deve começar com uma letra, underline (_), ou cifrão ($); os caracteres subsequentes podem também ser números (0-9). Devido JavaScript ser case-sensitive, letras incluem caracteres de "A" a "Z" (maiúsculos) e caracteres de "a" a "z" (minúsculos).

Você pode usar a ISO 8859-1 ou caracteres Unicode tal como os identificadores å e ü. Você pode também usar as sequências de escape Unicode como caracteres e identificadores.

Alguns exemplos de nomes legais são Numeros_visitas, temp99, e _nome.

1. Declarando variáveis

* Com a palavra chave var. Por exemplo, var x = 42. Esta sintaxe pode ser usada para declarar tanto variáveis locais como variáveis globais.
* Por simples adição de valor. Por exemplo, x = 42. Isso declara uma variável global. Essa declaração gera um aviso de advertência no JavaScript. Você não deve usar essa variante.
* Com a palavra chave let. Por exemplo, let y = 13. Essa sintaxe pode ser usada para declarar uma variável local de escopo de bloco. Veja escopo de variável abaixo.

Em JavaScript, as variáveis são declaradas utilizando as palavras-chave var, let ou const, seguidas pelo nome da variável. Por exemplo:

````js
var nome;
let idade;
const PI = 3.14;
````

O uso dessas palavras-chave determina o escopo e o comportamento da variável. A diferença entre let e const é que let permite a reatribuição de valores, enquanto const declara uma variável de valor constante, que não pode ser alterada após a atribuição inicial.

2. Atribuição de valores

* Para atribuir um valor a uma variável, basta utilizar o operador de atribuição =. Por exemplo:

````js
var nome = "João";
let idade = 25;
const PI = 3.14;
````

Também é possível atribuir valores a variáveis posteriormente:

````js
var nome;
nome = "João";
````

3. Escopo de variáveis

* O escopo de uma variável em JavaScript determina onde ela pode ser acessada e utilizada. Existem dois tipos de escopo: escopo global e escopo local.
* Variáveis declaradas fora de qualquer função têm escopo global e podem ser acessadas em qualquer parte do código.
* Variáveis declaradas dentro de uma função têm escopo local e só podem ser acessadas dentro dessa função.
* O uso das palavras-chave var, let e const também afeta o escopo das variáveis.

4. Tipos de dados

JavaScript é uma linguagem de tipagem dinâmica, o que significa que as variáveis podem conter diferentes tipos de dados ao longo da execução do código. Alguns dos tipos de dados mais comuns em JavaScript são:

* number: números (inteiros e decimais).
* string: texto.
* boolean: verdadeiro ou falso.
* array: coleção ordenada de valores.
* object: coleção de propriedades e valores.
* null: valor nulo.
* undefined: valor indefinido.


### Bonus - Boas práticas de nomenclatura

Ao nomear variáveis em JavaScript, é importante seguir algumas boas práticas para tornar o código mais legível e compreensível. Aqui estão algumas dicas:

* Use nomes descritivos que reflitam o propósito da variável.
* Utilize camel case para nomes compostos (exemplo: nomeCompleto).
* Evite nomes genéricos ou abreviações que possam levar a ambiguidades.
* Evite utilizar palavras reservadas da linguagem como nomes de variáveis.



### Primeiro Programa e Javascript

Vamos iniciar utlizando o site [One Compiler](https://onecompiler.com/javascript) para compilar o codigo a seguir:

````js
console.log("Hello, World!");
````
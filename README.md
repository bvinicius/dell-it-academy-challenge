# Guia do Vendedor Espacial

Descrição
Você decidiu abandonar o planeta Terra de vez, após o último colapso ecológico do planeta. Com os recursos que você possui, você pode comprar uma nave espacial, deixar a Terra e voar por toda a galáxia para vender metais de vários tipos. Comprar e vender por toda a galáxia exige que você converta números e unidades, logo você decidiu escrever um programa para ajudá-lo. Os números usados nas transações intergalácticas seguem convenção similar à dos numerais romanos, e devem ser traduzidos para que as transações possam se realizar. Sobre os numerais romanos Numerais romanos são baseados em sete símbolos:

| Símbolo  | Valor |
| --- | --- |
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

Os números são formados combinando-se símbolos e adicionando-se valores. Por exemplo, MMVI é 1000+1000+5+1=2006. Geralmente, símbolos são colocados em ordem de valor, começando com os valores maiores. Quando um valor menor precede um valor maior, os valores menores são subtraídos dos valores maiores, eo resultado é adicionado ao total. Por exemplo, MCMXLIV = 1000 + (1000 – 100) +(50 – 10) + (5 – 1) = 1944.Os símbolos “I”, “X”, “C”, e “M” podem ser repetidos, no máximo, 3 vezes emsucessão (não mais do que 3. Eles podem aparecer mais vezes se o terceiro equarto são separados por um valor menor, como em XXXIX). “D”, “L” e “V” nuncapodem ser repetidos. “I” pode ser subtraído somente do “V” e do “X”. “X” pode sersubtraído somente do “L” e do “C”. “C” pode ser subtraído do “D” e do “M” somente.“V”, “L” e “D” não podem ser subtraídos de nenhum símbolo. Somente um símbolode valor menor pode ser subtraído de qualquer símbolo de valor maior válido.Um número escrito em numerais arábicos (nossos números) podem ser quebradosem dígitos. Por exemplo, 1903 é composto de 1, 9, 0 e 3. Para escrever o numeralromano, cada um dos dígitos diferentes de zero deve ser tratado separadamente.No exemplo acima, 1000 = M, 900 = CM, e 3 = III. Assim, 1903 = MCMIII (Fonte:Wikipedia, http://en.wikipedia.org/wiki/Roman_numerals).

As entradas para o seu programa consistem de linhas de texto em um arquivo textodetalhando as suas anotações sobre a conversão entre unidades intergalácticas enumerais romanos. Você deve lidar com anotações inválidas de forma apropriada e gerara saída na tela.

Como se pode ver abaixo, as entradas podem ter até 7 linhas iniciais indicando a notaçãointergaláctica dos símbolos romanos, seguida de 0 ou mais linhas indicando o valor emcréditos do número de unidades (expresso em intergaláctico) de metal sendo vendido.Na sequência, linhas com perguntas “quanto vale” / ”quantos créditos são”. Na últimalinha, um exemplo do que deve acontecer com uma anotação inválida.

Desenvolva o programa que processa estas entradas e gera estas saídas.

#### Exemplos

Entradas (de Teste)
```
snob representa I
krok representa V
squid representa X
leij representa L
snob snob Prata valem 34 créditos
snob krok Ouro valem 57800 créditos
squid squid Iron valem 3910 créditos
quanto vale squid leij snob snob ?
quantos créditos são snob krok Silver ?
quantos créditos são snob krok Gold ?
quantos créditos são snob krok Iron ?
quanto vale wood could woodchuck mood ?
```

Saídas (do Teste)
```
squid leij snob snob vale 42
snob krok Silver custa 68 créditos
snob krok Gold custa 57800 créditos
snob krok Iron custa 782 créditos
Nem ideia do que isto significa!
```

## Executando o Código
O código pode ser executado de duas maneiras:
#### Clonando o Repositório
Para executar o código, abra o terminal e digite os comandos abaixo: 
``` 
git clone https://github.com/bvinicius/dell-it-academy-challenge
cd dell-it-academy-challenge/
node index.js
```
#### Extraindo o arquivo .zip
Extraia os arquivos em qualquer pasta. Depois, na pasta onde os arquivos foram extraídos, abra o terminal e digite o comando abaixo:
```
node index.js
```

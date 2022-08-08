



let nome = prompt("Digite aqui seu nome:")
let tamanhoNome = nome.length
if (tamanhoNome <= 4) {alert("ATENÇÂO O RESULTADO FOI PREJUDICADO! Atualize a página e se atente a seguinte informação: Precisamos que registre um nome com mais de 5 caracteres, tente adicionar o sobrenome!")}   
//nao consegui ainda fazer a parar o script ou forçar que coloque o "valor" esperado no prompt


let notaMatematica	 = parseFloat(prompt("Qual a nota em Matemática?"))
let notaPortugues = parseFloat(prompt("Qual a nota em Português?"))
let notaInformatica	 = parseFloat(prompt("Qual a nota em Informática?"))
let notaGeografia	 = parseFloat(prompt("Qual a nota em Geografia?"))
let notaIngles = parseFloat(prompt("Qual a nota em Ingles?"))
let notaHistoria = parseFloat(prompt("Qual a nota em História?"))
let notaFilosofia	 = parseFloat(prompt("Qual a nota em Filosofia?"))
let notaSociologia = parseFloat(prompt("Qual a nota em Sociologia?"))
let notaLiteratura	 = parseFloat(prompt("Qual a nota em Literatura?"))
let notaEdFisica = parseFloat(prompt("Qual a nota em Educação Fisica?"))



let presencaMatematica	 = parseFloat(prompt("Qual a nota de presença em Matemática?"))
let presencaPortugues = parseFloat(prompt("Qual a nota de presença em Português?"))
let presencaInformatica	 = parseFloat(prompt("Qual a nota de presença em Informática?"))
let presencaGeografia	 = parseFloat(prompt("Qual a nota de presença em Geografia?"))
let presencaIngles = parseFloat(prompt("Qual a nota de presença em Ingles?"))
let presencaHistoria = parseFloat(prompt("Qual a nota de presença em História?"))
let presencaFilosofia	 = parseFloat(prompt("Qual a nota de presença em Filosofia?"))
let presencaSociologia = parseFloat(prompt("Qual a nota de presença em Sociologia?"))
let presencaLiteratura	 = parseFloat(prompt("Qual a nota de presença em Literatura?"))
let presencaEdFisica = parseFloat(prompt("Qual a nota de presença em Educação Fisica?"))

let somaPresenca =  (presencaMatematica + presencaPortugues + presencaInformatica + presencaGeografia + presencaIngles + presencaHistoria + presencaFilosofia + presencaSociologia + presencaLiteratura + presencaEdFisica)
let mediaPresenca = (somaPresenca / 10)

let somaNota = (notaMatematica + notaPortugues + notaInformatica + notaGeografia + notaIngles + notaHistoria + notaFilosofia + notaSociologia + notaLiteratura + notaEdFisica)
let mediaNota = (somaNota / 10)

if (somaNota >= 1 || somaNota <= 100) {} 
else {alert("ATENÇÂO O RESULTADO FOI PREJUDICADO! Atualize a página e se atente a seguinte informação: O valor das notas de matérias devem ser um numeral, no mínimo zero e no máximo 10")}
if (somaPresenca >= 1 || somaPresenca <= 10) {} 
else {alert("ATENÇÂO O RESULTADO FOI PREJUDICADO! Atualize a página e se atente a seguinte informação: O valor da nota de presença deve ser um numeral maior que zero e no máximo 10")}
//em ambos os casos não acho que é a melhor forma de verificar se colocou o valor dentro do esperado entre 0 e 10
//dessa forma ele avisa caso deixe algum em branco ou escreva, mas se colocar algum valor maior que 10 
//vai passar "despercebido" se a soma total nao for maior que 100 :~


if (mediaPresenca >= 6 && mediaNota >= 8) {alert(`A nota do aluno ${nome} é de ${mediaNota} e sua presença de ${mediaPresenca}: Aluno Aprovado!`)} 
else {alert(`A nota do aluno ${nome} é de ${mediaNota} e sua presença de ${mediaPresenca}: Aluno Reprovado!`)}



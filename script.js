
let mediaNota = 0
let somaNota = 0
continuar = true

let nome = prompt("Digite aqui seu nome:")
let tamanhoNome = nome.length
if (tamanhoNome <= 4) 
{alert("Precisamos que registre um nome com mais de 5 caracteres")} 
else
{presenca = prompt("Digite aqui o valor de sua presença:")}
if (presenca <= 0 || presenca > 10) 
{alert("O valor da nota de presença deve ser um numeral maior que zero e no máximo 10")} 
else {
    materia1 = prompt("Digite a Materia")
    nota1 = parseFloat(prompt(`Digite sua nota em ${materia1}`))
    if (nota1 >= 0 && nota1 <= 10)
        {materia2 = prompt("Digite a Materia")} 
        else {alert("A nota deve ser um numeral entre 0 e 10")}
    nota2 = parseFloat(prompt(`Digite sua nota em ${materia2}`))
    if (nota2 >= 0 && nota2 <= 10)
        {materia3 = prompt("Digite a Materia")} 
        else {alert("A nota deve ser um numeral entre 0 e 10")}
    nota3 = parseFloat(prompt(`Digite sua nota em ${materia3}`))
    if (nota3 >= 0 && nota3 <= 10) 
        {materia4 = prompt("Digite a Materia")}
        else {alert("A nota deve ser um numeral entre 0 e 10")}
    nota4 = parseFloat(prompt(`Digite sua nota em ${materia4}`))
    if (nota4 >= 0 && nota4 <= 10) 
        {materia5 = prompt("Digite a Materia")}
        else {alert("A nota deve ser um numeral entre 0 e 10")}
    nota5 = parseFloat(prompt(`Digite sua nota em ${materia5}`))
    if (nota5 >= 0 && nota5 <= 10)
        {materia6 = prompt("Digite a Materia")}
        else {alert("A nota deve ser um numeral entre 0 e 10")}
    nota6 = parseFloat(prompt(`Digite sua nota em ${materia6}`))
    if (nota6 >= 0 && nota6 <= 10)
        {materia7 = prompt("Digite a Materia")}
        else {alert("A nota deve ser um numeral entre 0 e 10")}
    nota7 = parseFloat(prompt(`Digite sua nota em ${materia7}`))
    if (nota7 >= 0 && nota7 <= 10)
        {materia8 = prompt("Digite a Materia")}
        else {alert("A nota deve ser um numeral entre 0 e 10")}
    nota8 = parseFloat(prompt(`Digite sua nota em ${materia8}`))
    if (nota8 >= 0 && nota8 <= 10)
        {materia9 = prompt("Digite a Materia")}
        else {alert("A nota deve ser um numeral entre 0 e 10")}
    nota9 = parseFloat(prompt(`Digite sua nota em ${materia9}`))
    if (nota9 >= 0 && nota9 <= 10) 
        {materia10 = prompt("Digite a Materia")}
        else {alert("A nota deve ser um numeral entre 0 e 10")}
    nota10 = parseFloat(prompt(`Digite sua nota em ${materia10}`))
    if (nota10 >= 0 && nota10 <= 10)  
        {
        somaNota = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10)
        mediaNota = (somaNota / 10) 
            if (presenca >= 6 && mediaNota >= 8)
            {alert(`A nota do aluno ${nome} é de ${mediaNota} e sua presença de ${presenca}: Aluno Aprovado!`)} 
            else 
            {alert(`A nota do aluno ${nome} é de ${mediaNota} e sua presença de ${presenca}: Aluno Reprovado!`)}
        }
      else {alert("A nota deve ser um numeral entre 0 e 10")}
 }

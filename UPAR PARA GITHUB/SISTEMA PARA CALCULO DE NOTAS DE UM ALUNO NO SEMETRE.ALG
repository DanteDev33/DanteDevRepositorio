algoritmo "SISTEMA PARA CALCULO DE NOTAS DE UM ALUNO NO SEMETRE"
var
    Nota1, Nota2, Nota3, Nota4, Nota5: real
    media: real

inicio
    escreval("GRADUA��O EM AN�LISE E DESENVOLVIMENTO DE SISTEMAS")
    escreval("-------------------------------------------------")
    escreva("Digite a M�dia do aluno no 1� Semestre: ")
    leia(Nota1)

    escreva("Digite a nota do aluno no 2� Semestre: ")
    leia(Nota2)

    escreva("Digite a nota do aluno no 3� Semestre: ")
    leia(Nota3)
    
     escreva("Digite a nota do aluno no 4� Semestre: ")
    leia(Nota4)
    
     escreva("Digite a nota do aluno no 5� Semenstre: ")
     leia(Nota5)

    media <- (Nota1 + Nota2 + Nota3+ Nota4 + Nota5) / 5.0

    se media < 7.0 entao
        escreva(media," ", "Reprovado. Estude mais!")
    senao
        escreva(media," ", "Aprovado. Parab�ns!!!")
    fimse
fimalgoritmo

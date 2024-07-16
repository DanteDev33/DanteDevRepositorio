algoritmo "SISTEMA PARA CALCULO DE NOTAS DE UM ALUNO NO SEMETRE"
var
    Nota1, Nota2, Nota3, Nota4, Nota5: real
    media: real

inicio
    escreval("GRADUAÇÃO EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS")
    escreval("-------------------------------------------------")
    escreva("Digite a Média do aluno no 1º Semestre: ")
    leia(Nota1)

    escreva("Digite a nota do aluno no 2º Semestre: ")
    leia(Nota2)

    escreva("Digite a nota do aluno no 3º Semestre: ")
    leia(Nota3)
    
     escreva("Digite a nota do aluno no 4º Semestre: ")
    leia(Nota4)
    
     escreva("Digite a nota do aluno no 5º Semenstre: ")
     leia(Nota5)

    media <- (Nota1 + Nota2 + Nota3+ Nota4 + Nota5) / 5.0

    se media < 7.0 entao
        escreva(media," ", "Reprovado. Estude mais!")
    senao
        escreva(media," ", "Aprovado. Parabéns!!!")
    fimse
fimalgoritmo

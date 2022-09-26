.data
	Nome: .asciiz "Insira seu nome"
	p1: .asciiz "Insira a nota da p1"
	p2: .asciiz "Insira a nota da p2"
	media: .asciiz "Eis a sua media	"
	aprovado: .asciiz "Como o aluno obteve media maior ou igual a 7, aprovado"
	recuperacao: .asciiz "Como o aluno obteve m�dia inferior a 7, por�m maior que 5, recuperacao"
	reprovado: .asciiz "Como o aluno obteve m�dia inferior a 5, reprovado"
.text
li $v0, 4 #impress�o da string
la $a0, Nome #carregar conteudo de Nome para $a0
syscall	#executa a impress�o
li $v0, 8 #leitura de string
syscall #execu��o da leitura

li $v0, 4 #impress�o da string
la $a0, p1 #carregar conteudo de p1 para $a0
syscall #executa a impress�o
li $v0, 5 #leitura de inteiro
syscall #executa a leitura do inteiro
move $t0, $v0

li $v0, 4 #impress�o da string
la $a0, p2 #carregar conteudo de p2 para $a0
syscall #executa a impress�o
li $v0, 5 #leitura de inteiro
syscall #executa a leitura do inteiro
move $t1, $v0

li $s0, 2 #denominador da m�dia
li $s1, 7 #par�metro 1
li $s2, 5 #par�metro 2

add $t1, $t1, $t0 #numerador da m�dia
div $t1, $s0 #m�dia
mflo $t1
li $v0, 4 #impress�o da string
la $a0, media	#carregar conteudo de media para $a0
syscall	#executa a impress�o
li $v0, 1	#impress�o de inteiro

move $a0, $t1	#tranfere conte�do de $v0 para $a0
syscall		#impress�o do inteiro
move $a0, $t1

bge $t1, $s1, AP #se for maior ou igual a 7, pula para aprovado
#senao
bge $t2, $s2, REC #se for maior ou igual a 5, pula pra recuperacao
#senao
li $v0, 4 #impress�o de string
la $a0, reprovado #carrega o conte�do de reprovado para $a0
syscall	#executa a impress�o
#shutdown
li $v0, 10
syscall

REC:
li $v0, 4 #impress�o de string
la $a0, recuperacao #carrega o conte�do de reprovado para $a
syscall	#executa a impress�o
#shutdown
li $v0, 10
syscall

AP:
li $v0, 4 #impress�o de string
la $a0, aprovado #carrega o conte�do de reprovado para $a0
syscall	#executa a impress�o
#shutdown
li $v0, 10
syscall
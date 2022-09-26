.data
	Nome: .asciiz "Insira seu nome"
	p1: .asciiz "Insira a nota da p1"
	p2: .asciiz "Insira a nota da p2"
	media: .asciiz "Eis a sua media	"
	aprovado: .asciiz "Como o aluno obteve media maior ou igual a 7, aprovado"
	recuperacao: .asciiz "Como o aluno obteve média inferior a 7, porém maior que 5, recuperacao"
	reprovado: .asciiz "Como o aluno obteve média inferior a 5, reprovado"
.text
li $v0, 4 #impressão da string
la $a0, Nome #carregar conteudo de Nome para $a0
syscall	#executa a impressão
li $v0, 8 #leitura de string
syscall #execução da leitura

li $v0, 4 #impressão da string
la $a0, p1 #carregar conteudo de p1 para $a0
syscall #executa a impressão
li $v0, 5 #leitura de inteiro
syscall #executa a leitura do inteiro
move $t0, $v0

li $v0, 4 #impressão da string
la $a0, p2 #carregar conteudo de p2 para $a0
syscall #executa a impressão
li $v0, 5 #leitura de inteiro
syscall #executa a leitura do inteiro
move $t1, $v0

li $s0, 2 #denominador da média
li $s1, 7 #parâmetro 1
li $s2, 5 #parâmetro 2

add $t1, $t1, $t0 #numerador da média
div $t1, $s0 #média
mflo $t1
li $v0, 4 #impressão da string
la $a0, media	#carregar conteudo de media para $a0
syscall	#executa a impressão
li $v0, 1	#impressão de inteiro

move $a0, $t1	#tranfere conteúdo de $v0 para $a0
syscall		#impressão do inteiro
move $a0, $t1

bge $t1, $s1, AP #se for maior ou igual a 7, pula para aprovado
#senao
bge $t2, $s2, REC #se for maior ou igual a 5, pula pra recuperacao
#senao
li $v0, 4 #impressão de string
la $a0, reprovado #carrega o conteúdo de reprovado para $a0
syscall	#executa a impressão
#shutdown
li $v0, 10
syscall

REC:
li $v0, 4 #impressão de string
la $a0, recuperacao #carrega o conteúdo de reprovado para $a
syscall	#executa a impressão
#shutdown
li $v0, 10
syscall

AP:
li $v0, 4 #impressão de string
la $a0, aprovado #carrega o conteúdo de reprovado para $a0
syscall	#executa a impressão
#shutdown
li $v0, 10
syscall
.data
	Nome:  .asciiz "Favor, insira o nome do aluno:	"
	p1:	.asciiz "Insira a nota da p1:	"
	p2:	.asciiz "Insira a nota da p2:	"
	Media:	.asciiz "Eis a media final:	"
	Aprovado:	.asciiz	"	Devido a media maior ou igual a 7, o aluno foi aprovado."
	Recuperacao:	.asciiz "	Devido a media menor que 7, porem  maior que 5, o aluno esta de recuperacao."
	Reprovado:	.asciiz "	Devido a media inferior a 5, o aluno foi reprovado"


.text
li $v0, 4	#impressão de string
la $a0, Nome	#carrega o conteudo do enderço da variavel nome
syscall		#executa a impressão
li $v0, 8	#leitura de string
move $a0, $v0	#conteúdo de $v0 movido para $a0 para permitir syscall
syscall		#impressão do conteúdo inserido

li $v0, 4	#impressão de string
la $a0, p1	#carrega o conteudo do endereço da variavel p1
syscall		#executa impressão
li $v0, 5	#leitura de inteiro
move $a0, $v0	#conteúdo de $v0 movido para $a0 para viabilizar syscall
syscall		#impressão do conteúdo inserido
move $s0, $v0	#salvar conteúdo de $v0 em $s0, via movimentação

li $v0, 4	#impressão de string
la $a0, p2	#carrega o conteudo do endereço da variavel p2
syscall		#executa impressão
li $v0, 5	#leitura de inteiro
move $a0, $v0	#conteúdo de $v0 movido para $a0 para viabilizar syscall
syscall		#impressão do conteúdo inserido
move $s1, $v0	#salvar conteúdo de $v0 em $s1, via movimentação

li $s2, 2	#aqui ficara o denominador da divisao
add $t0, $s0, $s1	#soma das notas da p1 e p2
div $t0, $s2	#divisão da soma pelo denominador da divisão
	
mflo $t1	#mover conteúdo do registrador lo (contém a parte inteira da divisão) para $t1

li $v0, 4	#impressão de string
la $a0, Media	#carrega o conteudo do endereço da variavel Media
syscall		#executa impressão
li $v0, 1 	#impressão de inteiro
move $a0, $t1	#conteúdo de $t1 movido para $a0 para viabilizar syscall
syscall		#impressão do inteiro

li $s3, 7	#parametro de média 1
li $s4, 5	#parametro de media 2

bge $t1, $s3, S1	#se a media for maior ou igual a o parametro 1, vamos para S1
blt $t1, $s4, S2	#senão, vamos verificar se a media é menor que o parametro 2; se for, vamos para S2
li $v0, 4		#se não formos para S2, vamos imprimir a string de recuperacao
la $a0, Recuperacao	#carrega o conteudo do endereco da variavel Recuperacao
syscall			#imprime mensagem
li $v0, 10		#shutdown
syscall			#execução do shutdown
S2:			#caso blt seja verdadeiro, ele virá pra cá
li $v0, 4		#impressão de string
la $a0, Reprovado	#carrega o conteudo do endereco da variavel Reprovado
syscall			#imprime mensagem
li $v0, 10		#shutdown
syscall			#execução do shutdown
S1:			#caso bqe seja verdade, vamos para cá
li $v0, 4		#impressõ de string
la $a0, Aprovado	#carrega o conteudo do endereco da variavel Aprovado
syscall			#imprime mensagem
li $v0, 10		#shutdown
syscall			#execução do shutdown





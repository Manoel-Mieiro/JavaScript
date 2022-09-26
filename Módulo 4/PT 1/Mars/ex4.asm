
.text
#ler o numero
li $v0,5
addi $t1,$zero,1
syscall
move $t0,$v0 #valor lido

laco:
beqz  $t0,sair

mul  $t1,$t1,$t0
addi $t0,$t0,-1 #contador

j laco
sair:
#imprime $t1
li $v0,1
move $a0,$t1
syscall



#include <stdio.h>
#include <string.h>
int main (){
	char nome[50];
	float p1, p2, media;
	
	printf ("\n Qual o nome do aluno?	");
	scanf ("%s", nome);
	
	printf ("\nInsira sua nota na p1:	");
	scanf ("%f", &p1);
	
	printf ("\nInsira sua nota na p2:	");
	scanf ("%f", &p2);
	
	media = (p1+p2)/2;
	
	if (media >= 7){
		printf ("O aluno %c obteve media %f, portanto foi aprovado", , media);
	}
		else if ((media < 7) && (media > 5)){
		printf ("O aluno %c obteve media %f, portanto esta de recuperacao", , media);
		}
		
			else if (media <= 4){
		printf ("O aluno %c obteve media %f, portanto foi reprovado", , media);
	}
	return(0);
}

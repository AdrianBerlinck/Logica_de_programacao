/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package idadedias;

import java.util.Scanner;

/**
 *
 * @author adrian_berlinck
 */
public class IdadeDias {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
    
    Scanner leia = new Scanner(System.in);
    
    System.out.println("Informe quantos anos vocÊ tem:");
    int anos = leia.nextInt();

    System.out.println("Faz quantos meses que você completou "+anos+" anos?");
    int meses = leia.nextInt();
    
    System.out.println("Que dia do mês é atualmente?");
    int dias = leia.nextInt();
    
     System.out.println("Que dia você nasceu?");
    int diasnascimento = leia.nextInt();
    
    int diastotais = (anos*365)+(meses*30)+(dias - diasnascimento);
    System.out.println("Que dia você nasceu?");
    System.out.println("Seu total de dias é: " + diastotais );
    }
    
}

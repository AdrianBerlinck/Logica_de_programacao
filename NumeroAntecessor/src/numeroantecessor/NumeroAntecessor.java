/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package numeroantecessor;

import java.util.Scanner;

/**
 *
 * @author adrian_berlinck
 */
public class NumeroAntecessor {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    Scanner leia = new Scanner(System.in);
 
    System.out.println("Insira um valor: ");
    int numero = leia.nextInt();
            
    System.out.println("O número antecessor de " + numero + " é: " +(numero - 1));
    
    }          
}

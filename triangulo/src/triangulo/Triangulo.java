/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package triangulo;

import java.util.Scanner;

/**
 *
 * @author adrian_berlinck
 */
public class Triangulo {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
         Scanner leia = new Scanner(System.in);
 
    System.out.println("Insira o tamanho da altura do triângulo em cm: ");
    double altura = leia.nextDouble();
    
    System.out.println("Insira o tamanho da base do triângulo em cm: ");
    double base = leia.nextDouble();
    
    System.out.println("A área deste triângulo é: "+ ((altura*base)/2) + "cm");
    
      
    }
    
}

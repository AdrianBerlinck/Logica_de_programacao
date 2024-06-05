/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package javaapplication6;

import java.util.Scanner;

/**
 *
 * @author adrian_berlinck
 */
public class JavaApplication6 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
   
        Scanner leia = new Scanner(System.in);
        
        System.out.println("Informe a temperatura em ºC");
        double celcius = leia.nextInt();
        
        System.out.println("A temperatura é: "+ "Celsius: "+ (celcius)+ "ºC, Farenhait: "+((1.8*celcius)+32) + "ºF e Kelvin: " + (celcius+273.15)+ "ºK.");
                
    }
    
}

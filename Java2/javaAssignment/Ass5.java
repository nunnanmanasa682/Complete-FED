//5.How to convert Fahrenheit to Celsius Program in java
  import java.util.Scanner;
  class Ass5{
    public static void main(String[] args){
	   Float Temperature;
	   Scanner sc = new Scanner(System.in);
	   System.out.println("Enter temperature in Fahrenheit"); 
	     Temperature = sc.nextFloat();
		Temperature = ((Temperature-32)*5)/9;
		System.out.println("Temperature in celsius = " + Temperature);
		}
		}

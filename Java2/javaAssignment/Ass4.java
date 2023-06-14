//4.How to get Using input using Scanner Program in java
import java.util.Scanner;
  class Ass4{
	   public static void main(String[] args){
		  int a;
		  Float f;
		   String s;
		   Scanner in= new Scanner(System.in);
		   System.out.println("Enter a string");
		   s = in.nextLine();
		    System.out.println("you entered string" + s);
			 System.out.println("Enter a float");
			 f = in.nextFloat();
			  System.out.println("you entered a float " +f);
			   System.out.println("Enter a integer");
			   a = in.nextInt();
			    System.out.println("you entered a integer" + a);
	   }
  }
  
				
		   
		    

//How to check odd or even
 /*class Ass13{
	  public static void main(String[] args){
		  int x =2;
		  if(x%2==0)
			  System.out.println("even");
			  else
				  System.out.println("odd");
	  }
 }
	*/
	import java.util.Scanner;
class Ass13{
 public static void main(String[] args){
   int i;
    System.out.println("Enter an integer to check if it is odd or even");
 Scanner sc= new Scanner(System.in);
i=sc.nextInt();
if(i%2==0)
System.out.println("even");
else
	System.out.println("odd");
 }
}

		  
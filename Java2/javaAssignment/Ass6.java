//how to swap 2 numbers with using 3rd variable
  import java.util.Scanner;	
    class Ass6{
		 public static void main(String[] args){
			   int x,y,temp;
			   System.out.println("enter x and y");
			   Scanner sc= 	new Scanner(System.in);
			   x=sc.nextInt();
			   y=sc.nextInt();
			   System.out.println("Before swapping\nx ="+x+"ny ="+y);
			   temp=x;
			   x=y;
			   y=temp;
			  System.out.println("After swapping\ny ="+x+"ny ="+y);
		 }
	}
import java.util.Arrays;
import java.util.List;
import java.util.function.Function;



public class LambdaExpressionExample {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
    
    Function<Integer, Integer> square = x -> x * x;
    
    for (Integer number : numbers) {
      System.out.println("Square of " + number + " is " + square.apply(number));
    }
  }
}
 

package MultiplesOfThreeOrFive;

import java.util.stream.IntStream;

public class Program {

	public static void main(String[] args) {
	    
	    System.out.println(solution(10));
	    System.out.println(betterSolution(10));
		
	}
	
	// First Implementation
	public static int solution(int num) {
		int sum = 0;
		
		if (num < 0) {
			return 0;
		}
		for (int i = 0; i < num; i++) {
			if (i % 3 == 0 & i % 5 == 0) {
				sum += i;
			}
			else if (i % 3 == 0 || i % 5 == 0) {
				sum += i;
			}
		}
		return sum;
	}
	
	// Better Implementation
	public static int betterSolution(int num) {
		return IntStream.range(0, num).filter(n -> (n % 3 == 0) || (n % 5 == 0)).sum();
	}

}

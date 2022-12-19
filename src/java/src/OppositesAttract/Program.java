package OppositesAttract;

public class Program {

	public static void main(String[] args) {
		
		System.out.println(isLove(1, 2)); 
		
	}
	
	public static boolean isLove(final int flower1, final int flower2) {
		return flower1 % 2 != flower2 % 2;
	}

}

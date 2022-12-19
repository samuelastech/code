package KeepHydrated;

public class Program {

	public static void main(String[] args) {
		
		System.out.println(Liters(3));

	}
	
	public static int Liters(double time)  {
		return (int) Math.floor(time / 2);
	}

}

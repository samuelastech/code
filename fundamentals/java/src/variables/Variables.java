package variables;

public class Variables {
    static final byte PAIR = 2;

    static public void run() {
        final byte LEAGUE_TEAMS = 20;

        byte byteIntNumber = 127;
        short shortIntNumber = 32_767;
        int intNumber = 2_147_483_647;
        long longIntNumber = 10; // 9.223.372.036.854.775.807

        float shorterDecimalNumber = 8.4F;
        double biggerDecimalNumber = 8.4;

        boolean isValid = false;

        char letter = 'a';
        String sentence = "merry song";
        System.out.println("All variables are declared");
    }
}

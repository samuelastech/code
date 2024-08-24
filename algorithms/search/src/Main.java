public class Main {
    public static void main(String[] args) {
        int[] list = {2, 5, 7, 12, 15, 18, 21, 24, 27, 30};
        try {
            System.out.println(BinarySearch.search(list, 12));
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

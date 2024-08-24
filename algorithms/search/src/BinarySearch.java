public class BinarySearch {
    public static int search(int[] list, int value) throws Exception {
        int left = 0;
        int right = list.length - 1;

        while (left <= right) {
            int middle = left + (right - left) / 2;

            if (list[middle] == value) {
                return middle;
            }

            if (list[middle] < value) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        throw new Exception("Value " + value + " was not found");
    }
}

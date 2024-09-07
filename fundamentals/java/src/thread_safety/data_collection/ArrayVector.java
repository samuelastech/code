package thread_safety.data_collection;

import java.util.Collections;
import java.util.List;
import java.util.ArrayList;
import java.util.Vector;

public class ArrayVector {
    public static void main(String[] args) {
        List<Integer> arrayList = new ArrayList<>();
        arrayList.add(1);
        arrayList.add(2);

        List<Integer> vector = new Vector<>();
        vector.add(1);
        vector.add(2);

        List<Integer> synchronizedArrayList = Collections.synchronizedList(new ArrayList<>());
        synchronizedArrayList.add(1);
        synchronizedArrayList.add(2);
    }
}

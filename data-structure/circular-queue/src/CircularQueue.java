public class CircularQueue<T> {
    private T[] elements;
    private int start, end, size;

    public CircularQueue(int size) {
        this.elements = (T[]) new Object[size];
        this.start = 0;
        this.end = -1;
        this.size = size;
    }

    public void add(T value) {
        if (!isFull()) {
            end = (end + 1) % size;
            elements[end] = value;
        }
    }

    public T remove() throws Exception {
        if (!isEmpty()) {
            T value = elements[start];
            start = (start + 1) % size;
            return value;
        }

        throw new Exception("The queue is empty");
    }

    public boolean isEmpty() {
        return start == end % size;
    }

    public boolean isFull() {
        return end == (start - 1) % size;
    }
}

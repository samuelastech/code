public class CircularQueue<T> {
    private T[] elements;
    private int start, end, size, count;

    public CircularQueue(int size) {
        this.elements = (T[]) new Object[size];
        this.start = 0;
        this.end = 0;
        this.count = 0;
        this.size = size;
    }

    public void add(T value) throws Exception {
        if (isFull()) {
            throw new Exception("The queue is full");
        }

        elements[end] = value;
        end = (end + 1) % size;
        count++;
    }

    public T remove() throws Exception {
        if (isEmpty()) {
            throw new Exception("The queue is empty");
        }

        T value = elements[start];
        start = (start + 1) % size;
        count--;
        return value;
    }

    public boolean isEmpty() {
        return start == end % size;
    }

    public boolean isFull() {
        return start == (end + 1) % size;
    }
}

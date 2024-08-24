package common;

public interface Repository<T> {
    void add(T element);
    void remove(T element);
}

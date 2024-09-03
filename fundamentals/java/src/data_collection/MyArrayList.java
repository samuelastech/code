package data_collection;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MyArrayList {
    public static void main(String[] args) {
        List<Movie> movies = new ArrayList<>();
        movies.add(new Movie("Avengers: End Game"));
        movies.add(new Movie("Toy Story 1"));
        movies.add(new Movie("Tom & Jerry"));
        movies.add(new Movie("Noites Brutais"));
        movies.add(new Movie("Alien: o oitavo passageiro"));

        System.out.println("Printing using for-each:");
        for (Movie movie : movies) {
            System.out.println(movie);
        }

        System.out.println("\nPrinting the sorted list:");
        Collections.sort(movies);
        System.out.println(movies);
    }
}

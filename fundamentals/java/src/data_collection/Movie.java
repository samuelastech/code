package data_collection;

public class Movie implements Comparable<Movie> {
    public String title;

    public Movie(String title){
        this.title = title;
    }

    @Override
    public String toString() {
        return "Movie: " + this.title;
    }

    @Override
    public int compareTo(Movie other) {
        return this.title.compareTo(other.title);
    }
}

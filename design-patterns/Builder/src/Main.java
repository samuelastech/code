public class Main {
    public static void main(String[] args) {
        Person person = new Person.newBuilder()
                .name("Samuel A. Souza")
                .email("samuel.araujo.souza@outlook.com")
                .build();

        System.out.println(person);
    }
}

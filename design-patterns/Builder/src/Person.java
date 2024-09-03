import javax.xml.namespace.QName;

public class Person {
    private String name, email, address;
    private int age;

    private Person(newBuilder builder) {
        this.name = builder.name;
        this.email = builder.email;
        this.address = builder.address;
        this.age = builder.age;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", age=" + age +
                '}';
    }

    public static class newBuilder {
        private String name, email, address;
        private int age;

        public newBuilder name(String value) {
            this.name = value;
            return this;
        }

        public newBuilder email(String value) {
            this.email = value;
            return this;
        }

        public newBuilder address(String value) {
            this.address = value;
            return this;
        }

        public newBuilder age(int value) {
            this.age = value;
            return this;
        }

        public Person build(){
            return new Person(this);
        }
    }
}

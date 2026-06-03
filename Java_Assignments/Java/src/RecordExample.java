import java.util.List;

record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {
        List<Person> people = List.of(
                new Person("Abishek", 21),
                new Person("Ravi", 17),
                new Person("Arun", 25)
        );
        people.forEach(System.out::println);
        System.out.println("Age >= 18:");
        people.stream()
                .filter(p -> p.age() >= 18)
                .forEach(System.out::println);
    }
}
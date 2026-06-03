import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("Kumar");
        names.add("Abishek");
        names.add("Ravi");
        names.add("Arun");
        Collections.sort(names, (a, b) -> a.compareTo(b));
        System.out.println("Sorted List:");
        for (String name : names) {
            System.out.println(name);
        }
    }
}
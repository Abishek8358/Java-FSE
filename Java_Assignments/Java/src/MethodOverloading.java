import java.util.Scanner;

public class MethodOverloading {

  static int display(int a, int b){
        System.out.println("Sum of Two integer");
        return a+b;
    }
    static double display(double a, double b){
        System.out.println("Sum of Two double");
        return a+b;
    }
    static int display(int a, int b, int c){
        System.out.println("Sum of Three integer");
        return a+b+c;
    }

    public static void main(String[] args) {

        System.out.println(display(10,5));
        System.out.println(display(10.5,12.10));
        System.out.println(display(13,5,9));

    }
}

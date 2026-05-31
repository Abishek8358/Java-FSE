import java.util.Scanner;
public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter First Number: ");
        double a = sc.nextDouble();
        System.out.println("Enter Second Number: ");
        double b = sc.nextDouble();
        System.out.println("Choose the operation ");
        System.out.println("1. Addition");
        System.out.println("2. Subtraction");
        System.out.println("3. Multiplication");
        System.out.println("4. Division");
        System.out.println("Enter your choice 1-4");
        int choice=sc.nextInt();

        switch(choice){
            case 1:
                System.out.println("Result"+(a+b));
                break;
            case 2:
                System.out.println("Result"+(a-b));
                break;
            case 3:
                System.out.println("Result"+(a*b));
                break;
            case 4:
                if(b!=0) {
                    System.out.println("Result"+(a / b));
                    break;
                }
                else{
                    System.out.println("Division zero is not possible");
                    break;
                }
            default:
                System.out.println("Invalid Choice");
        }
    }
}
import java.util.Scanner;

public class EvenOrOdd {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the Number:");
        int a=sc.nextInt();
        if(a%2==0){
            System.out.println("The given number "+a+" is Even");
        }
        else{
            System.out.println("The given number "+a+" is Odd");
        }
    }
}

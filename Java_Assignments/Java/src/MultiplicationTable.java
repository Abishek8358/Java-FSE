import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter the number of a Table:");
        int a= sc.nextInt();
        for(int i=1;i<11;i++){
            System.out.println(i+" "+ "* "+a+" = "+(i*a));
        }
    }
}

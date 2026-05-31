import java.util.Scanner;

public class GradeCalculator {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter your Mark out of 100 ");
        int a=sc.nextInt();
        if(a>=90 && a<=100){
            System.out.println("A Grade");
        } else if (a>=80 && a<90) {
            System.out.println("B Grade");
        } else if (a>=70 && a<80) {
            System.out.println("C Grade");
        } else if (a>=60 && a<70) {
            System.out.println("D Grade");
        }
        else{
            System.out.println("F : Failed");
        }
    }
}

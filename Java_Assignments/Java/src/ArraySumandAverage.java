import java.util.Scanner;
import java.util.Arrays;
public class ArraySumandAverage {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the size of an Array");
        int n=sc.nextInt();
        int arr[]=new int[n];
        int sum=0;
        double avg=0;
        System.out.println("Enter an Array Elements ");
        for(int i=0; i<n;i++){
            arr[i]=sc.nextInt();
            sum=sum+arr[i];
        }
        avg=(double)sum/n;
        System.out.println("Sum of the Array Elements: "+sum);
        System.out.println("Average of the Array Elements: "+avg);
    }
}

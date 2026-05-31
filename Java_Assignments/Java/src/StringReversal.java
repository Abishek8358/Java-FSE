import java.util.Scanner;

public class StringReversal {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter your String: ");
        String s=sc.nextLine();
        String revers="";
        for (int i=s.length()-1;i>=0;i--){
            revers=revers+s.charAt(i);
        }
        System.out.println("Reversed String is: "+revers);
    }
}

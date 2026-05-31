import java.util.Locale;
import java.util.Scanner;

public class PalindromeChecker {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter your String: ");
        String s=sc.nextLine();
        String low=s.replaceAll("[^a-zA-Z0-9]","").toLowerCase().toString();
        String revers="";
        for (int i=low.length()-1;i>=0;i--){
            revers=revers+low.charAt(i);
        }
        if(low.equals(revers)) {
            System.out.println(s+" is a Palindrome");
        }
        else {
            System.out.println(s+" is Not a Palindrome");
        }
    }
}

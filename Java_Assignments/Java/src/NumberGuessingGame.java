import java.util.Scanner;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int randomnnum=(int)(Math.random()*100)+1;
        System.out.println("Guess the number between 1 and 100");
        int guess=0;
        while (guess!=randomnnum){
            System.out.println("Enter your Guess: ");
            guess =sc.nextInt();

            if(guess > randomnnum){
                System.out.println("Too High!");
            } else if (guess < randomnnum) {
                System.out.println("Too Low");
            }
            else{
                System.out.println("You Guessed the Correct Number!");
            }
        }
    }
}

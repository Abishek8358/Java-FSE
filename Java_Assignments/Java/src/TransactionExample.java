import java.sql.*;
public class TransactionExample {
    public static void main(String[] args) {
        try {
            Connection con =
                    DriverManager.getConnection(
                            "jdbc:mysql://localhost:3306/bankdb",
                            "root",
                            "root");

            con.setAutoCommit(false);

            PreparedStatement debit =
                    con.prepareStatement(
                            "UPDATE accounts SET balance=balance-? WHERE id=?");

            PreparedStatement credit =
                    con.prepareStatement(
                            "UPDATE accounts SET balance=balance+? WHERE id=?");

            debit.setInt(1, 500);
            debit.setInt(2, 1);

            credit.setInt(1, 500);
            credit.setInt(2, 2);

            debit.executeUpdate();
            credit.executeUpdate();
            con.commit();
            System.out.println("Transaction Successful");
        } catch (Exception e) {
            System.out.println("Transaction Failed");
        }
    }
}
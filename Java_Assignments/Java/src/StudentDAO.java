import java.sql.*;

public class StudentDAO {
    private static final String URL =
            "jdbc:mysql://localhost:3306/studentdb";
    private static final String USER = "root";
    private static final String PASSWORD = "root";

    public void insertStudent(int id, String name, int age)
            throws Exception {

        Connection con =
                DriverManager.getConnection(URL, USER, PASSWORD);

        String sql =
                "INSERT INTO students(id,name,age) VALUES(?,?,?)";

        PreparedStatement ps = con.prepareStatement(sql);

        ps.setInt(1, id);
        ps.setString(2, name);
        ps.setInt(3, age);

        ps.executeUpdate();

        con.close();
    }

    public void updateStudent(int id, String name)
            throws Exception {

        Connection con =
                DriverManager.getConnection(URL, USER, PASSWORD);

        String sql =
                "UPDATE students SET name=? WHERE id=?";

        PreparedStatement ps = con.prepareStatement(sql);

        ps.setString(1, name);
        ps.setInt(2, id);

        ps.executeUpdate();

        con.close();
    }
    public static void main(String[] args) throws Exception {
        StudentDAO dao = new StudentDAO();
        dao.insertStudent(1, "Abishek", 21);
        dao.updateStudent(1, "Abi");
    }
}
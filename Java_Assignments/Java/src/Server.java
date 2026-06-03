import java.io.*;
import java.net.*;

public class Server {
    public static void main(String[] args) {
        // Server Thread
        Thread server = new Thread(() -> {
            try {
                ServerSocket serverSocket = new ServerSocket(5000);

                Socket socket = serverSocket.accept();

                BufferedReader br = new BufferedReader(
                        new InputStreamReader(socket.getInputStream()));

                PrintWriter pw = new PrintWriter(
                        socket.getOutputStream(), true);

                String msg = br.readLine();

                System.out.println("Server received: " + msg);

                pw.println("Hello Client");

                socket.close();
                serverSocket.close();

            } catch (Exception e) {
                System.out.println(e);
            }
        });

        // Client Thread
        Thread client = new Thread(() -> {
            try {

                Thread.sleep(1000);

                Socket socket = new Socket("localhost", 5000);

                PrintWriter pw = new PrintWriter(
                        socket.getOutputStream(), true);

                BufferedReader br = new BufferedReader(
                        new InputStreamReader(socket.getInputStream()));

                pw.println("Hello Server");

                System.out.println("Client received: "
                        + br.readLine());

                socket.close();

            } catch (Exception e) {
                System.out.println(e);
            }
        });
        server.start();
        client.start();
    }
}
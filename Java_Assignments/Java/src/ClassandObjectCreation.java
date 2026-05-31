class Car{
    String make;
    String model;
    int year;
    void displayDetails(String a,String b,int c){
        System.out.println("Make: "+a);
        System.out.println("Model: "+b);
        System.out.println("Year: "+c);
    }
}
public class ClassandObjectCreation {
    public static void main(String[] args) {
        Car c1=new Car();
        Car c2=new Car();
        c1.displayDetails("Honda","City",2019);
        System.out.println();
        c2.displayDetails("Tata","Punch",20221);
    }
}

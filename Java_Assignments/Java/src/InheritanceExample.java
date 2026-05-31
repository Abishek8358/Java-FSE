class Animal{
    void makeSound(){
        System.out.println("Animal make sound");
    }
}
class Dog extends Animal{
    @Override
    void makeSound(){
        System.out.println("Bark");
    }
}
public class InheritanceExample {
    public static void main(String[] args) {
        Animal obj1=new Animal();
        Dog obj2=new Dog();
        obj1.makeSound();
        obj2.makeSound();
    }
}

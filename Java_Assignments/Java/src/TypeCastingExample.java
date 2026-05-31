public class TypeCastingExample {
    public static void main(String[] args) {
        double doubleval=5270.45;
        int intval=(int) doubleval;
        System.out.println("Actual Double value: "+doubleval);
        System.out.println("Casting into Int value: "+intval);

        int intval2=100;
        double doubleval2=(double)intval2;
        System.out.println("Actual Int value: "+intval2);
        System.out.println("Casting into Double value: "+doubleval2);
    }
}


public class AssignmentDay1 {
    public static int Add(int num1, int num2){
        int sum = num1+num2;
        return sum;
    }

    public static int Add(int num1, int num2, int num3){
        int sum = num1+num2+num3;
        return sum;
    }

    public static int getTotal(int num1, int num2){
        int total = num1+num2;
        return total;
    }

    public static boolean isEven(int num1){
        if(num1 % 2==0)
            return true;
        return false;
    }

    public static boolean isVowel(char letter)
    {
        switch(letter)
        {
            case 'a':
            case 'A':
            case 'e':
            case 'E':
            case 'i':
            case 'I':
            case 'o':
            case 'O':
            case 'u':
            case 'U':
                return true;
            default:
                return false;
        }
    }


    //Main Method..................
    public static void main(String[] args){

        System.out.println("Create a method to add two numbers and return it.");
        System.out.println("Addition of Two Numbers : "+Add(10,20));

        System.out.println("Switch case for printing the values for grade.. suppose if grade is A, print someting like, good or above 90%, something like that.. try to have 4-5 cases and default block as well.");
        String grade ="B";
        switch(grade){
            case "A":
                System.out.println("Excellent.");
                break;
            case "B":
                System.out.println("Very Good.");
                break;
            case "C":
                System.out.println("Good.");
                break;
            case "D":
                System.out.println("Poor.");
                break;
            default:
                System.out.println("The grade you entered is not valid.");
        }

        System.out.println("method named getTotal that accepts two integers as an argument and return its sum. Call this method from main( ) and print the results.");
        System.out.println("Addition of Two Numbers : "+getTotal(150,50));

        Food foodp = new Pizza();
        Pizza pizza = new Pizza();
        pizza.giveFood();// on object of child class we are calling base class method.
        System.out.println(foodp.type);// type of food class is printed.
        System.out.println(pizza.type);// type of Pizza class is printed.
        foodp.giveFood();

        System.out.println("Class named dog and have any fields like colour, age , cost anything.. and try creating atleast 2- 3 objects with name like germanshepherd, dalmation, anything try to create a default constructor and a parameterised constructor and use it in your class");
        Dog germanshepherd = new Dog("Black",3,40000);
        Dog dalmation = new Dog("Brown",6,30000);
        Dog Labrador = new Dog();
        Labrador.setColour("Golden");
        Labrador.setAge(2);
        Labrador.setCost(20000);
        System.out.println("Labrador Details : Dog{colour='"+Labrador.getColour()+"', age="+Labrador.getAge()+", cost="+Labrador.getCost()+"}");
        System.out.println("GermanShepherd Details : "+germanshepherd.toString());
        System.out.println("Dalmation Details : "+dalmation.toString());

        System.out.println("Method overloading, method overriding.");
        Animals animal = new Dog(); // eat method of animal class is overriden by dog class.
        animal.eat();
        //Overloading example
        System.out.println("Addition of two number : "+Add(10,20));
        System.out.println("Addition of three numbers : "+Add(30,20,60));

    }
}

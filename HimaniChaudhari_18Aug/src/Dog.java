
public class Dog extends Animals {
    //Encapsulation Implemented........
    private String colour;
    private int age;
    private int cost;

    public Dog(String colour, int age, int cost)
    {
        this.colour = colour;
        this.age = age;
        this.cost = cost;
    }

    public Dog() {

    }

    void eat(){
        System.out.println("Inside eat Method of Derived class 'Dog'.");
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    @Override
    public String toString() {
        return "Dog{" +
                "colour='" + colour + '\'' +
                ", age=" + age +
                ", cost=" + cost +
                '}';
    }
}

public class WindModel {
    private double speed;

    public WindModel(double speed) {
        this.speed = speed;
    }

    public void display() {
        System.out.println("Wind Speed: " + speed + " km/h");
    }

    public static void main(String[] args) {
        WindModel wind = new WindModel(35);
        wind.display();
    }
}

class Wind:
    def __init__(self, speed=20):
        self.speed = speed

    def increase_speed(self, amount):
        self.speed += amount
        print(f"Wind speed increased to {self.speed} km/h")

    def calculate_force(self):
        force = 0.5 * 1.225 * (self.speed ** 2)
        print(f"Estimated wind force: {force:.2f} N")

if __name__ == "__main__":
    wind = Wind()
    wind.increase_speed(10)
    wind.calculate_force()

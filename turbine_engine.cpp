#include <iostream>
using namespace std;

class TurbineEngine {
public:
    double calculatePower(double airDensity, double area, double windSpeed) {
        return 0.5 * airDensity * area * windSpeed * windSpeed * windSpeed;
    }
};

int main() {
    TurbineEngine engine;
    double power = engine.calculatePower(1.225, 100, 15);
    cout << "Estimated turbine power: " << power << " W" << endl;
    return 0;
}

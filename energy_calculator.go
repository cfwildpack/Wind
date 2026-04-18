package main

import "fmt"

func calculateEnergy(power float64, hours float64) float64 {
	return power * hours
}

func main() {
	energy := calculateEnergy(5000, 3)
	fmt.Printf("Total energy generated: %.2f Wh\n", energy)
}

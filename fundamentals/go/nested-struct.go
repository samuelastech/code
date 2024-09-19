package main

import "fmt"

type Environment struct {
	place     string
	latitude  float64
	longitude float64
}

type Animal struct {
	name        string
	kind        string
	environment Environment
}

func main() {
	environment := Environment{place: "Florest", latitude: 45.2514841, longitude: 24.18411}
	animal := Animal{name: "Pitelodatilum", kind: "bird", environment: environment}
	fmt.Println(animal)
}

package main

import "fmt"

func main() {
	var (
		name string
		age int
		weight float64
		gender rune
	)

	fmt.Println("Enter, in this order, your name (string), age (int), weight (float), and gender (char):")
	fmt.Scanf("%s %d %f %c", &name, &age, &weight, &gender)

	fmt.Println("Age:", age)
	fmt.Println("Weight:", weight)
	fmt.Println("Name:", name)
	fmt.Println("Initial:", string(gender))

	var number int
	fmt.Println("Enter a number:")
	fmt.Scan(&number)
	fmt.Println("That's your lucky number:", number)
}

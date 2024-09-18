package main

import "fmt"

func main() {
	var numbers [10]int

	for i := 0; i < len(numbers); i++ {
		fmt.Println("Regular for-loop, position:", i, "value:", numbers[i])
	}

	for i, number := range numbers {
		fmt.Println("For-loop using 'range', position:", i, "value:", number)
	}
}
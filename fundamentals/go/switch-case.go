package main

import "fmt"

func main() {
	fmt.Print("Type a number between 1 and 10: ")
	var number int
	fmt.Scan(&number)

	switch number {
	case 1:
		fmt.Println("That's one")
	case 2:
		fmt.Println("That's two")
	default:
		fmt.Println("Thats's... Uh...", number)
	}
}
package main

import "fmt"

func main() {
	fmt.Print("Type a number between 1 and 10: ")
	var number int
	fmt.Scan(&number)

	if number == 1 {
		fmt.Println("That's one")
	} else if number == 2 {
		fmt.Println("That's two")
	} else {
		fmt.Println("Thats's... Uh...", number)
	}
}
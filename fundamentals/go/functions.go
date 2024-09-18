package main

import "fmt"

func main() {
	name, age := getPerson()
	fmt.Println("Hi", name, "are you", age, "years old?")
}

func getPerson() (string, int) {
	return "Samuel", 22
}

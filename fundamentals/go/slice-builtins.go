package main

import "fmt"

func main() {
	names := []string{"Samuel", "Medusa", "Wolverine"}
	fmt.Println("Lenght:", len(names))
	fmt.Println("Capacity:", cap(names))

	fmt.Println("\nAppending an element...")
	names = append(names, "Bruce")
	fmt.Println("Lenght:", len(names))
	fmt.Println("Capacity:", cap(names))

	fmt.Println("The slice doubles its size")
}
package main

import "fmt"
import "reflect"

func main() {
	// Go can infer the variables type
	var name = "Alemão"
	var age = 12
	var average = 1.2 // it will always chose the biggest type

	fmt.Println("name =", reflect.TypeOf(name))
	fmt.Println("age =", reflect.TypeOf(age))
	fmt.Println("average =", reflect.TypeOf(average))

	address := "R. A. de Andrade"
	addressNumber := 2403
	rate := 4.5

	fmt.Println("address =", reflect.TypeOf(address))
	fmt.Println("addressNumber =", reflect.TypeOf(addressNumber))
	fmt.Println("rate =", reflect.TypeOf(rate))
}
package main

import "fmt"

type Person struct {
	name string
	age  int
}

func main() {
	person1 := Person{name: "Samuel", age: 12}
	person2 := Person{name: "Samuel", age: 12}
	fmt.Println(person1, person2)
	fmt.Println(person1 == person2)   // true
	fmt.Println(&person1 == &person2) // false

	var person3 *Person = new(Person)
	person3.name = "Bruce"
	person3.age = 25

	var person4 *Person = new(Person)
	person4.name = "Bruce"
	person4.age = 25
	fmt.Println(person3, person4)
	fmt.Println(person3 == person4)   // false
	fmt.Println(*person3 == *person4) // true
}

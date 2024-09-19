package main

import "fmt"

type Animal interface {
	Speak() string
}

type Dog struct{}

type Cat struct{}

func (d Dog) Speak() string {
	return "Woof!"
}

func (c Cat) Speak() string {
	return "Meow!"
}

func main() {
	var dog Animal = Dog{}
	var cat Animal = Cat{}

	fmt.Println(dog.Speak())
	fmt.Println(cat.Speak())
}

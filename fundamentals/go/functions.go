package main

import "fmt"

type Human struct {
	name string
	age  int
}

func (person *Human) Speak(content string) {
	fmt.Println(person.name+":", content)
}

func main() {
	person := Human{name: "Alemão", age: 22}
	person.Speak("I loved you endlessly")
}

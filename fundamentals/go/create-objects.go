package main

import "fmt"

type Account struct {
	email string
	name  string
}

func main() {
	person := Account{
		name:  "Samuel",
		email: "samuel@email.com",
	}

	fmt.Println(person)
}

package main

import (
	"account"
)

func main() {
	facebook := account.Account{Name: "Samuel", Email: "sa@email.com"}
	facebook.UpdateName("Sinuca Rozeiro")
}

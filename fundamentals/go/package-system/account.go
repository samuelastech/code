package account

type Account struct {
	Name  string
	Email string
}

func (account *Account) UpdateName(value string) {
	account.Name = value
}

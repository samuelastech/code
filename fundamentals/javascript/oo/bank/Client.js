class Client {
    #name;
    #cpf;

    get name(){
        return this.#name;
    }

    get cpf(){
        return this.#cpf;
    }

    constructor({ name, cpf }){
        this.#name = name;
        this.#cpf = cpf;
    }
}

export { Client };
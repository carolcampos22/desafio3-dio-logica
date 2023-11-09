class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    attack() {
        
        switch (this.type) {
            case "mago":
                console.log(`O ${this.type} atacou usando magia.`)
                break

            case "guerreiro":
                console.log(`O ${this.type} atacou usando espada.`)
                break

            case "monge":
                console.log(`O ${this.type} atacou usando artes marciais.`)
                break

            case "ninja":
                console.log(`O ${this.type} atacou usando shuriken.`)
                break
            default:
                console.log("Herói não encontrado!")
        }
    }
}

let mago = new hero ("Nicholas Flamel", 665, "mago")
let monge = new hero("Shao", 50, "monge")
let ninja = new hero("Scorpion", 38, "ninja")
let guerreiro = new hero ("Hércules", 50, "guerreiro")
let elfo = new hero ("Legolas", 40, "elfo")

mago.attack()
monge.attack()
ninja.attack()
guerreiro.attack()
elfo.attack()

class heroi {
	constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
    	this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
    }
    
    atacar() {
    	let ataque;
        switch(this.tipoHeroi) {
        	case "mago":
            	ataque = "usando magia";
                break;
        	case "guerreiro":
            	ataque = "usando espada";
            	break;
            case "monge":
            	ataque = "usando artes marciais";
                break;
            case "ninja":
            	ataque = "usando shuriken";
                break;
        }
        
        console.log(`O ${this.tipoHeroi} atacou ${ataque}`)
    }
}

let heroi1 = new heroi("Lancelot", 26, "guerreiro");
let heroi2 = new heroi("Merlin", 300, "mago");
let heroi3 = new heroi("Shaolin", 35, "monge");
let heroi4 = new heroi("Tenchu", 40, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

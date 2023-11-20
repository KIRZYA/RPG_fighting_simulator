class Unit {
    constructor(hp, mp, atc, name, status, energy /*actionId*/) {
        this.hp = hp;
        this.mp = mp;
        this.atc = atc;
        this.MaxHp = hp;
        this.MaxMp = mp;
        this.MaxAtc = atc;
        this.StartAtc = atc;
        this.name = name;
        this.status = status;
        this.energy = energy;
        //this.actionId = actionId;

    }  //create a new Unit
} // class unit (attack , energy , healthpoints , name)


class Player extends Unit {
    constructor(hp, mp, atc, name, status, /*actionId*/) {
        super(hp, mp, atc, name, status);
    }
    upgrade(pick){
        if(pick == "1"){
            this.MaxHp += 1;
    }   if(pick == "2"){
            this.MaxMp += 1; 
    }   if(pick == "3"){
            this.MaxAtc += 1; 
    }

        }
        
}

class Bot extends Unit {
    
    constructor(hp, mp, atc, name, status, /*actionId*/) {
        super(hp, mp, atc, name, status);
    }
}

//realise enemy with attack and block;


// let player = new Unit(6,10,1,"warrior","none"); //1st un 
// let enemy = new Unit(4,10,1,"enemys","none"); //2nd un

   

class Game{
    constructor(start_game,unit){
        this.player = null;
        this.enemy = null;
        this.start_parameter = start_game;
        //super(log());
    }
   
    ininitialize_game(){

       this.player = new Player(6,10,1,"player","none"); //1st un 
       this.enemy = new Bot(4,10,1,"enemy","none"); //2nd un     
    }
    log(THIS){
        console.log( THIS.name + " hp: "+ THIS.hp + " ( " + THIS.MaxHp + " )" + " Unit attack: " + THIS.atc + " Unit energy: " + THIS.mp);
    
    }  // try log this unit)
    attack(Player,Enemy) {
        if (Player.hp <= 0){
            Player.status = "death";
            return 0;
        }
        else if (Enemy.hp <= 0){
            Enemy.status = "death";
            return 0;
        }
        else{
            Enemy.hp = Enemy.hp - Player.atc;
        }
    }  //standard attack 1pt
    check_endgame(pl1,pl2){
        if(pl1.hp <= 0 || pl2.hp <= 0){
            console.log(pl1.name + ' defeat');
        }
    } //50% damage reduction
    return_to_first(){
        this.atc = this.StartAtc;
    }  // return attack to normal state
}   

let game = new Game(1);
game.ininitialize_game();

function Enemy_action() {
    let result = Math.floor(Math.random()*3);
    return result;
    } // random bot choise

/*
let result = Enemy_action();



switch (result) {
    case 0:
        this.actionId = "block"; 
        return actionId;
            break;
    case 1:
        this.actionId = "attack";
        return actionId;
            break;
    case 2:
        this.actionId = "contr";
        return "contr";
            break;
}
*/



/*
function one_moment_function_attack(enemy, unit){
    let result = Enemy_action();
    console.log(result);
        
        if(result==0){
            enemy.mp += 1;
            unit.mp -= 2;
            enemy.block(unit);
            unit.attack(enemy);
        }

        if(result==1 && enemy.mp >= 2){
            unit.mp -= 2;
            enemy.mp -= 2;
            enemy.attack(unit);
            unit.attack(enemy);
        }

        else if(result==1 && enemy.mp <= 2){
            one_moment_function_attack();
        }

        if(result==2 && enemy.mp >= 4){
            unit.mp -= 2;
            enemy.mp -= 4;
            enemy.attack(unit);
            enemy.attack(unit);
        }

        else if(result==2 && enemy.mp <= 4){
            one_moment_function_attack();
        }
    

}
function one_moment_function_block(enemy, unit){
    let result = randomization();
    console.log(result);

        if(result == 0){
            enemy.mp+=1;
            unit.mp+=1;
            unit.block(enemy);
            enemy.block(unit);
        }

        if(result == 1 && enemy.mp >= 2){
            unit.mp += 1;
            enemy.mp -= 2;
            unit.block(enemy);
            enemy.attack(unit);
        }

        else if(result==1 && enemy.mp <= 2){
            one_moment_function_block();
        }

        if(result==2 && enemy.mp >= 4){
            enemy.mp-=4;
            unit.mp+=1;
            unit.block(enemy);
        }

        else if(result==2 && enemy.mp <= 4){
            one_moment_function_block();
        }
    
    
}
function one_moment_function_conterattack(enemy, unit){
    let result = randomization();
    console.log(result);
    
        if(result==0){
            enemy.mp += 1;
            unit.mp -= 4;
            enemy.block(unit);
            
        }

        if(result==1 && enemy.mp >= 2){
            enemy.mp -= 2;
            unit.mp -= 4;
            unit.attack(enemy);
            unit.attack(enemy);
        }

        else if(result==1 && enemy.mp <= 2){
            one_moment_function_conterattack(enemy, unit)
        }

        if(result==2 && enemy.mp >= 4){
            enemy.mp -= 4;
            unit.mp -= 4;
            enemy.block(unit);
            unit.block(enemy);
        }

        else if(result==2 && enemy.mp <= 4){
            one_moment_function_conterattack(enemy, unit)
        }
        
}
*/



function Attack() {
    if(game.enemy.hp > 0 && game.player.hp > 0){
        game.attack(game.enemy,game.player);
        game.attack(game.player,game.enemy);
        game.log(game.enemy);
        game.log(game.player);
        game.check_endgame(game.player,game.enemy);
    }
    else{
        
    }

   
} //attack button

function Block() {
    
} //block button

function Conter() {

    
} // conterattack button

console.log("END");
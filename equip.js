let allequips = {1:' ', 2:' ', 3:' ', 4:' ', 5:' '};
class Unit {
    constructor() { 
    } 
     equip(eq,slot){
        if(slot == "arm"){
            slot = 1;
        }
        if(slot == "sec_arm"){
            slot = 2;
        }
        if(slot == "legs"){
            slot = 3;
        }
        if(slot == "body"){
            slot = 4;
        }
        if(slot == "head"){
            slot = 5;
        }

        allequips[slot] = eq;
    
     }
} 
function cons(SLOT){
    if(SLOT == "arm"){
        SLOT = 1;
    }
    if(SLOT == "sec_arm"){
        SLOT = 2;
    }
    if(SLOT == "legs"){
        SLOT = 3;
    }
    if(SLOT == "body"){
        SLOT = 4;
    }
    if(SLOT == "head"){
        SLOT = 5;
    }
    if (allequips[SLOT] == ' '){
        console.log('нету аксесуаров')
    }
    else{
        console.log(allequips[SLOT]);
    }
}

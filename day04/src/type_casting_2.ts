type Coder = {
    writeCode: () => void;
};
type Guitarist = {
    play: () => void;
};
let sam: Coder = {
    writeCode() { console.log("Programming "); }
};
let ram: Guitarist = {
    play() { console.log("Playing the Guitar"); }
};


function doSomething(person: Coder | Guitarist) {
    //if(person instanceof Coder) {} WILL NOT WORK

    if((<Coder>person).writeCode) { //if(writeCode in person)
        (<Coder>person).writeCode();
    } else if((<Guitarist>person).play) {
        (<Guitarist>person).play();
    }

    // let coder = person as Coder;
    // let guitarist = person as Guitarist;
    
    // if(coder.writeCode !== undefined) { //if(writeCode in person)
    //     coder.writeCode();
    // } else if(guitarist.play !== undefined) {
    //     guitarist.play();
    // }
}
doSomething(sam);
doSomething(ram);
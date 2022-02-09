//in
type HobbiesType = string[] | string | Map<string, string>;

let hobbies1: HobbiesType = 'Eating';
let hobbies2: HobbiesType = ['Eating', 'Sleeping'];
let hobbies3: HobbiesType = new Map();

type Coder = {
    writeCode: () => void;
};

type Cricketer = {
    playCricket: () => void;
};

type SwEngineer = Coder | Cricketer; //Union types
type SportsEngineer = Coder & Cricketer; //Interesection types

let sam: SwEngineer = {
    playCricket() {
        console.log('Playing cricket');
    }
};
sam.playCricket();


let ram: SportsEngineer = {
    playCricket() {
        console.log('Batting');
    },
    writeCode() {
        console.log('Writing code');
    }
}
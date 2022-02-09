interface Entertainment {
    watch: () => void;
}
class BlueRay implements Entertainment {
    watch() {}
}
class DVD implements Entertainment {
    watch() {}
}

class HomeCollection<T extends Entertainment> { //weird syntax!
    constructor(public lst: T[]) {}
}

let dvdColl = new HomeCollection<DVD>([new DVD()]);
let blueRayColl = new HomeCollection<BlueRay>([new BlueRay()]);
//let nameColl = new HomeCollection<string>(["don"]);





class Artifcat {}

class MyCollection<T> {
    constructor(public lst: T[]) {}
}

let movies = new MyCollection<string>(["Don", "Spectre"]);
console.log(movies.lst);

let artifacts: MyCollection<Artifcat> = new MyCollection<Artifcat>([new Artifcat(), new Artifcat()]);
console.log(artifacts.lst);

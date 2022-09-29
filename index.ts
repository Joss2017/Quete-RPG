let message: string = "Hello !";
console.log(message);

/**
 * string
 * number
 * boolean
 * undefined
 * null
 * void
 */

console.log("La variable message est du type : ", typeof message);

let nombre: number = 23;
console.log("La variable nombre est du type : ", typeof nombre);

let nombrevraiOuFaux: boolean = true;
console.log(
  "La variable nombrevraiOuFaux est du type : ",
  typeof nombrevraiOuFaux
);

let variableUndefined;
console.log(
  "La variable variableUndefined est du type : ",
  typeof variableUndefined
);

/**
 * Mais on peut lui assigner une valeur d'un autre type plus tard
 */
variableUndefined = 4;

let variableNull = null;
console.log("La variable variableNull est du type : ", typeof variableNull);

function bonjour(): void {
  console.log("Bonjour");
}

let retourFonctionVoid = bonjour();
console.log(
  "La variable retourFonctionVoid est du type : ",
  typeof retourFonctionVoid
);

/**
 * Typer un tableau
 */

let fruits: string[] = ["papaye", "banane", "cerise"];

console.log("Ce tableau contient des variables type : ", typeof fruits[0]);

let valeurs: Array<number> = [1, 2, 3];
console.log("Ce tableau contient des variables type : ", typeof valeurs[0]);

/**
 * any
 */

let valeursAny: Array<any> = [1, "papaye", 3];

/**
 * typage retour fonction + typage paramètres
 */

function somme(a: number, b: number): number {
  return a + b;
}

let result = somme(1, 2);
//let fauxResult = somme("Coucou", 2); // nous permet d'éviter cela

/**
 * LEVEL 2
 */

// - Qu'est ce qu'une classe ?
// Structure qui permet de définir un objet
// -> Propriétés = Caractéristiques
// -> Méthodes = Actions possibles

// - Qu'est ce qu'un constructeur de classe ?
// Une méthode spéciale qui permet d'initialiser les valeurs des propriétés d'une instance

// - Qu'est ce qu'une instance de classe ?
// Un objet qui est créé à partir d'une classe

// Métaphore Moule - Gateau
// class = représente le moule
// instance = fraisier

class Gateau {
  forme: string;
  private nombreDePart: number;
  gout: string;

  constructor(
    paramForme: string,
    paramNombreDePart: number,
    paramGout: string
  ) {
    console.log(
      `reception des valeurs : ${paramForme}; ${paramNombreDePart}, ${paramGout}`
    );
    // ici mon objet est créé
    console.log("this construct", this);
    this.forme = paramForme;
    console.log("this construct après init forme", this);
    this.nombreDePart = paramNombreDePart;
    this.gout = paramGout;
    console.log("this construct après init gout", this);
  }

  // On créer une méthode de classe mais sans le mot clé function !!!
  reduireLeNombreDePart() {
    console.log("this vaut : ", this);
    this.nombreDePart = this.nombreDePart - 1;
  }

  recupererLeNombreDePart() {
    return this.nombreDePart;
  }
}

let fraisier: Gateau = new Gateau("rond", 20, "fraise");
let gateauChoco: Gateau = new Gateau("carré", 10, "chocolat");

console.log("Fraisier après cuisson", fraisier);
console.log(gateauChoco);

// fraisier.nombreDePart = 15;
fraisier.reduireLeNombreDePart();
console.log("Fraisier après vente d'une part", fraisier);
console.log("Gateau choco après degust fraisier", gateauChoco);

for (
  let nombreDePartVendue = 1;
  nombreDePartVendue < 20;
  nombreDePartVendue++
) {
  fraisier.reduireLeNombreDePart();
  console.log("Je vend une autre part de gateau");
  console.log("Je suis entrain de vendre la part numéro ", nombreDePartVendue);
  console.log(`Il reste ${fraisier.recupererLeNombreDePart()} part(s)`);
  if (fraisier.recupererLeNombreDePart() < 5) {
    console.log("Attention il reste moins de 5 parts");
  }

  console.log("--------------------------");
}

console.log("---------Boucle while");
while (fraisier.recupererLeNombreDePart() > 0) {
  fraisier.reduireLeNombreDePart();
  console.log("Je vend une autre part de gateau");
}

console.log("Fraisier après vente de plusieurs parts", fraisier);

// - Comment vérifier qu'une instance est d'une certaine classe ?

if (fraisier instanceof Gateau) {
  console.log("Mon objet fraisier est bien basé sur la classe Gateau");
} else {
  console.log("Mon objet fraisier n'est pas basé sur la classe Gateau");
}

if (fraisier instanceof Array) {
  console.log("Mon objet fraisier est bien basé sur la classe Array");
} else {
  console.log("Mon objet fraisier n'est pas basé sur la classe Array");
}

// - Qu'est ce que `this` dans une classe ?
//  mot clé
// Faire reférence à l'instance de l'objet actuel sur lequel on se situe

fraisier.reduireLeNombreDePart();
gateauChoco.reduireLeNombreDePart();
let eclairCafé: Gateau = new Gateau("long", 1, "café");
let eclairChoco: Gateau = new Gateau("long", 1, "choco");
// Aller voir dans la console ce qu'il se passe lorsque j'execute ces lignes

// - Qu'est ce qu'une méthode de classe ?
// fonction attaché à l'instance d'une classe
// Comment l'executer ?
// nomDeMonInstance.nomDeMaMethode()

// - Qu'est ce que la visibilité des propriétés ?
// public
// private
// protected

// ## LEVEL 3

// - Comment faire pour diviser notre programme en différents fichiers ? (ex: une classe dans un fichier que j'importe dans un autre)

// - Qu'est ce que l'héritage ?

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  empCode: number;

  constructor(empcode: number, name: string) {
    super(name);
    this.empCode = empcode;
  }
}

// - Comment appeler le constructeur d'une classe mère ?

// - Comment appeler une méthode d'une classe mère ?

// - Qu'est ce que le polymorphism ?

// ## Boss level

// ### Partie 1 : Héros

import { Hero } from "./hero";
import { Weapon } from "./weapon";

let jedi1: Hero = new Hero("leon", 100, 200);
let jedi2: Hero = new Hero("Joan", 100, 150);
let wep = new Weapon("bratislava");

jedi1.attack(jedi2);

// leon.attack(Joan);

console.log(jedi2);

// ### Partie 2 : Armes

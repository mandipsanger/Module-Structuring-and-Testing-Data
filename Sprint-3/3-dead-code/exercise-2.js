const pets = ["parrot", "hamster", "horse", "dog", "hamster", "cat", "hamster"];

function countAndCapitalisePets(petsArr) {
  const petCount = {};

  petsArr.forEach((pet) => {
    const capitalisedPet = pet.toUpperCase();

    if (petCount[capitalisedPet]) {
      petCount[capitalisedPet] += 1;
    } else {
      petCount[capitalisedPet] = 1;
    }
  });

  return petCount;
}

const countedPetsStartingWithH = countAndCapitalisePets(
  pets.filter((pet) => pet.startsWith("h"))
);

console.log(countedPetsStartingWithH); // { HAMSTER: 3, HORSE: 1 }

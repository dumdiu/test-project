import unique from 'unique-random-array';

const tab = ["Alex", "Marc", "Vincent", "Pierre", "Paul", "Jacques", "Sabrina", "John"];

export function hello () {
  console.log("hello " + unique(tab)());
}

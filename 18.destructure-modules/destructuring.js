const user = {
  username: "doraemon",
  age: 20,
  job: "programmer",
  address: {
    city: "Jakarta",
    street: "Jl. Kenangan",
  },
};

const { username, age, job } = user;

// console.log(`username: ${username} | age: ${age} | job: ${job}`);
// console.log(`username: ${user.username} | age: ${user.age} | job: ${user.job}`);

const fruits = ["Leci", "Jeruk", "Mangga", "Apel", "Salak"];

// const secondFavoriteFruit = fruits[0];
// const favoriteFruit = fruits[1];
// const leastFavoriteFruit = fruits[2];

const [firstFruit, secondFruit, ...restOfFruits] = fruits;

console.log(restOfFruits);

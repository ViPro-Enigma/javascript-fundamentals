const user1 = {
  username: "doraemon",
  age: 200,
};

const user2 = {
  username: "naruto",
  age: 13,
};

const user3 = {
  username: "seto",
  age: 15,
};

const user4 = {
  username: "sasuke",
  age: 40,
};

const users = [user1, user2, user3, user4, { username: "theo", age: 23 }];

// for (let i = 0; i < users.length; i++) {
//   console.log(
//     `${i + 1}. username: ${users[i].username} | age: ${users[i].age}`
//   );
// }

// users.forEach((user, idx) => {
//   if (user.age >= 17) {
//     console.log(`${idx + 1}. username: ${user.username} | age: ${user.age}`);
//   }
// });

const filteredUsers = users.filter((user) => user.age >= 17);

// filteredUsers.forEach((user, idx) => {
//   console.log(`${idx + 1}. username: ${user.username} | age: ${user.age}`);
// });

const findUser = users.find((user) => user.age === 40);

console.log(findUser);

const user = {
  username: "Naruto",
  age: 20,
  address: {
    province: "Banten",
    city: "Tangerang",
    postalCode: 15000,
    street: {
      number: 123,
      name: "Jl. Kenangan",
    },
  },
};

delete user.address;
delete user.age;

console.log(user);

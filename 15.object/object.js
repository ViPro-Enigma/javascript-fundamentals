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
  nickname: ["to", "kakak", "pak hokage"],
  greeting: () => "Hello!",
  introduction: function () {
    return `Hello, my name is ${this.username}`;
  },
};

console.log(user);

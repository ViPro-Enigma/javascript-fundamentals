class User {
  username = "";
  age = 0;
  #nik = "1234123412341234";

  constructor(inputUsername, inputAge) {
    this.username = inputUsername + " " + this.#nik;
    this.age = inputAge;
  }
}

const user1 = new User("doraemon", 20);
const user2 = new User("naruto", 17);

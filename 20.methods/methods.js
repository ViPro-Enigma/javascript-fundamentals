class User {
  firstName = "";
  lastName = "";
  username = "";
  age = 0;

  constructor(inputUsername, inputAge, inputFirstName, inputLastName) {
    this.username = inputUsername;
    this.age = inputAge;
    this.firstName = inputFirstName;
    this.lastName = inputLastName;
  }

  #getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  greeting() {
    return `Hello, I'm ${this.#getFullName()}`;
  }

  introduction() {
    return `My name is ${this.#getFullName()}, I am ${this.age} years old`;
  }
}

const user1 = new User("doraemon", 20, "Seto", "Javascript");
const user2 = new User("naruto", 20, "Naruto", "Uzumaki");

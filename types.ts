const person = {
  name: "max",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN
};

enum Role {ADMIN = 5, READ_ONLY, AUTHOR};

person.role.push('admin');
// person.role[1] = 10;

person.role = [0, 'admin', 'user']

let favoriteActivities: string[];
favoriteActivities = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
console.log('is author');
}
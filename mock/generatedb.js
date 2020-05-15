const faker = require("faker");
let database = { users: [], login: [], roles: [] };

/**
 * Role Data
 */
database.roles = [
  {
    id: 1,
    name: "root",
  },
  {
    id: 2,
    name: "business_developer",
  },
  {
    id: 3,
    name: "operator",
  },
];

/**
 * User Data
 */
const threshold = 1000;
for (let i = 1; i <= threshold; i++) {
  database.users.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    roles: ["admin", "operator", "business_developer"],
    avatar: "https://source.unsplash.com/150x150/?user",
  });
}

console.log(JSON.stringify(database));

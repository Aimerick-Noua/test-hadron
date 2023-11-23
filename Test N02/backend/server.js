const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors'); // Import the cors package

const app = express();
app.use(cors());

// In-memory array to store user objects
let users = [];

// GraphQL schema
const schema = buildSchema(`
  type User {
    id: String
    first_name: String
    last_name: String
    email: String
    birth_date: String
    gender: String
  }

  type Query {
    users: [User]
    user(id: String): User
  }

  type Mutation {
    addUser(first_name: String, last_name: String, email: String, birth_date: String, gender: String): User
    updateUser(id: String, first_name: String, last_name: String, email: String, birth_date: String, gender: String): User
    deleteUser(id: String): User
  }
`);

// Resolver functions
const root = {
  users: () => users,
  user: ({ id }) => users.find(user => user.id === id),
  addUser: ({ first_name, last_name, email, birth_date, gender }) => {
    const newUser = {
      id: String(users.length + 1),
      first_name,
      last_name,
      email,
      birth_date,
      gender,
    };
    users.push(newUser);
    return newUser;
  },
  updateUser: ({ id, first_name, last_name, email, birth_date, gender }) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = {
        ...users[index],
        first_name: first_name || users[index].first_name,
        last_name: last_name || users[index].last_name,
        email: email || users[index].email,
        birth_date: birth_date || users[index].birth_date,
        gender: gender || users[index].gender,
      };
      return users[index];
    }
    return null;
  },
  deleteUser: ({ id }) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      const deletedUser = users[index];
      users = users.filter(user => user.id !== id);
      return deletedUser;
    }
    return null;
  },
};

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

app.use(express.json());

// Sample users data
let users = [
    { id: 1, name: 'John Doe', password: '$2b$10$8G0KZ9M9d6Q9X2X7Q3ZJ3e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5' },
    { id: 2, name: 'Jane Smith', password: '$2b$10$8G0KZ9M9d6Q9X2X7Q3ZJ3e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5' },
];

// Get all users
app.get('/users', (req, res) => {
    res.json(users.map(user => ({ id: user.id, name: user.name })));
});

// Get a single user by ID
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.json({ id: user.id, name: user.name });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Create a new user
app.post('/users', async (req, res) => {
    const { name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: users.length + 1, name, password: hashedPassword };
    users.push(newUser);
    res.status(201).json({ id: newUser.id, name: newUser.name });
});

// Update an existing user
app.put('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], name, password: hashedPassword };
        res.json({ id: users[index].id, name: users[index].name });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Delete a user
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        const deletedUser = users.splice(index, 1)[0];
        res.json({ id: deletedUser.id, name: deletedUser.name });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

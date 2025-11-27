let users = []; // Temporary database

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

exports.createUser = (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "User not found" });

  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
};

exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "User not found" });

  const deleted = users.splice(index, 1);
  res.json({ message: "User deleted", deleted });
};

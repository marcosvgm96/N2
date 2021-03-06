const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/user");
const Room = require("./model/room");
require("dotenv/config");
const app = express();
app.use(express.json());

//Get para listar os usuario
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});
//post para criar os usuario
app.post("/create_user", async (req, res) => {
  const user = new User({
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
  });

  try {
    const saveduser = await user.save();
    res.json(saveduser);
  } catch (err) {
    res.json({ message: err });
  }
});
//get para listar por nome
app.get("/users/:userName", async (req, res) => {
  try {
    const user = await User.findOne({ nome: req.params.userName });
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});
//delete o usuario
app.delete("/users/:userId", async (req, res) => {
  try {
    const removeUser = await User.remove({ _id: req.params.userId });
    res.json(removeUser);
  } catch (err) {
    res.json({ message: err });
  }
});
//listar as salas
app.get("/rooms", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.json({ message: err });
  }
});
//criar salas
app.post("/create_room", async (req, res) => {
  const room = new Room({
    nome: req.body.nome,
    lotacao: req.body.lotacao,
  });

  try {
    const savedroom = await room.save();
    res.json(savedroom);
  } catch (err) {
    res.json({ message: err });
  }
});
//pesquisar por sala
app.get("/rooms/:roomId", async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);
    res.json(room);
  } catch (err) {
    res.json({ message: err });
  }
});
//alterar sala
app.patch("/rooms/:roomId", async (req, res) => {
  try {
    const updatedRoom = await Room.updateOne(
      { _id: req.params.roomId },
      { $set: { nome: req.body.nome, lotacao: req.body.lotacao } }
    );
    res.json(updatedRoom);
  } catch (err) {
    res.json({ message: err });
  }
});

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (req, res) => {
    console.log("conectado ao BD");
  }
);

app.listen(3000, () => {
  console.log("conectado");
});

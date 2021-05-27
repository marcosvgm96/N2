Nome: Marcos Vinicius Guerreiro Machado

Turma: ADS51

-Abrir a pasta do arquivo no vscode
-Digite "npm install" para baixar as dependencias: "npm install dotenv", "npm install express", "npm install mongoose", "npm install nodemon". 
-Crie um cluster no MongoDB Atlas e conecte ele ao seu computador. 
-Abra o postman e utilize a url "http://localhost:3000/" para realizar as requisições.
Essas são as rotas do postman.

# GET

GET:  "http://localhost:3000/users" Lista todos os usuários.

GET: "http://localhost:3000/users/nome" Lista todos os usuários por nome.

GET: "http://localhost:3000/rooms" Lista todas salas

GET: "http://localhost:3000/rooms/" Lista todas salas por nomes. 

# POST
POST: "http://localhost:3000/create_user" cria usuários. 

POST: "http://localhost:3000/create_room" cria salas.

# DELETE
DELETE: "http://localhost:3000/users/" Remover um usuário pelo id.

# PATCH
PATCH "http://localhost:3000/rooms/" Edita uma sala com pelo id.

O corpo das classes para as requisições são:

{

        "nome": "teste",
        "Sobrenome": "testes"

}

{

        "nome": "teste",
        "lotacao":  1

}

## N2

Nome: Marcos Vinicius Guerreiro Machado
Turma: ADS51

-Abrir a pasta do arquivo no vscode
-Digite "npm install" para baixar as dependencias: "npm install dotenv", "npm install express", "npm install mongoose", "npm install nodemon". 
-Crie um cluster no MongoDB Atlas e conecte ele ao seu pc. 
-Abra o postman e utilize a url "http://localhost:3000/" para realizar as requizicoes.


# GET
GET:  "http://localhost:3000/usuario" Mostrar todos os usuarios.

GET: "http://localhost:3000/usuario/nome" Mostrar um usuario pelo nome dele.

GET: "http://localhost:3000/sala" Mostrar as salas criadas (Todas elas).

GET: "http://localhost:3000/sala/salaid" Mostrar uma sala pelo seu id. 

# POST

POST: "http://localhost:3000/criar_user" para criar um usuario. 

POST: "http://localhost:3000/criar_salas" para criar uma sala.

# Outros comandos 

DELETE: "http://localhost:3000/usuario/idUsuario" para remover um usuario pelo seu id.

PATCH "http://localhost:3000/sala/salaid" para editar uma sala com o seu id.




Para Realizar esses comandos os formatos usados no JSON foram.

{

        "nome": "Ex: roberto",
        "Sobrenome": "Ex: trump"

}

{

        "nome": "Ex: maquinas",
        "lotacao": Ex: 8

}

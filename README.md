# SNOOPY PetShop API
Situação de Aprendizagem - Back-End (Node.JS, JavaSript, VsCode, ORM Prisma, Insomnia)
## Contextualização
SNOOPY PetShop tem atuado em nossa cidade com ótimo atendimento e agilidade, é nosso cliente e necessita de um sistema Web para registro dos seus pedidos no balcão.<br>O P.O. após uma visita ao cliente elaborou o DER e UML DC(Diagrama de Classes) a seguir e elencou os requisitos funcionais.<br>
![DER e DC](./docs/snoopy-der-dc.png)
## Desafio
Desenvolver as funcionalidades conforme requisitos

### Requisitos funcionais
- [RF001] O sistema deve permitir o CRUD de Clientes.
    - [RF001.1] O sistema deve permitir o CRUD de telefones, pois cada cliente pode possuir 0 ou vários telefones de tipos diferentes como celular, fixo ou comercial.
    - [RF001.2] A rota **read** do cliente deve mostrar os dados de todos os clientes e seus respectivos telefones.
    - [RF001.3] A rota **readOne** do cliente deve mostrar os dados de um cliente específico, seus telefones e seus pedidos.
- [RF002] O sistema deve permitir o CRUD de pedidos.
    - [RF002.1] O sistema deve associar o pedido a um cliente.
    - [RF002.2] Ao cadastrar um novo pedido **create** no controller sistema calcular o subTotal multiplicando o preco pela quantidade.

### Casos de teste (Insomnia)
- [CT001] Deve ser cadastrado pelo menos 5 clientes.
- [CT002] Deve ser cadastrado ao menos 1 telefone para cada cliente.
    - [CT002.1] Pelo menos dois clientes devem ter dois ou mais telefones cadastrados.
- [CT003] Cadastre, altere e exclua um cliente.
- [CT004] Cadastre um pedido para cada cliente.
    - [CT004.1] Pelo menos um cliente deve ter dois ou mais pedidos cadastrados.
- [CT005] Cadastre, altere e exclua um pedido.

## Tecnologias
- Node.js
- Prisma
- XAMPP
- MySQL
- VsCode
- Insomnia

## Como testar
- 1 Clone este **repositório**
- 2 Abra o **XAMPP** Control Panel e inicie o Apache e o MySQL
- 3 Abra com o repositorio com **VsCode**
- 4 Crie o arquivo .env na pasta API e adicione as seguintes variáveis de ambiente
```js
DATABASE_URL="mysql://root@localhost:3306/snoopypet?schema=public&timezone=UTC"
```
- 5 Abra o terminal **CTRL + '** cmd ou bash, navegue até a pasta API e execute os comandos
````bash
cd api
npm install
npx prisma migrate dev --name init
npx nodemon
# ou
npm start
````
- 6 Abra o **Insomnia** e importe o arquivo **./docs/Insomnia_2025_03_28.yaml** para testar as rotas.
- 7 Caso queira visualizar o banco de dados, abra o **XAMPP** Control Panel e clique em **Admin** no módulo MySQL.
    - O arquivo ./docs/testes.sql é um script com dados de teste para inserir no banco de dados.
- 8 Para parar a execução do servidor, pressione **CTRL + C** no terminal.


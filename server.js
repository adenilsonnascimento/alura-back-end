
// Importa o framework Express para criar o servidor
import express from 'express';

import routes from './src/routes/postsRoutes.js';

// Cria uma instância (Constante, chamada app) do Express
const app = express();
app.use(express.static("uploads"));

routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log('Servidor escutando na porta 3000....');
});















// Links e atalhos úteis comentados no código:

// Atalhos do Terminal (VS Code e CMD):
// Ctrl + J // Abre o terminal
// Ctrl + L // Limpa o console (CMD e alguns terminais)
// Ctrl + K // Limpa o terminal no VS Code
// Ctrl + B // Abre/fecha a barra lateral do VS Code
// Ctrl + R // Reinicia o terminal no CMD (não reinicia o servidor)
// Ctrl + C // Para o servidor em execução
// Ctrl + Shift + ` // Abre um novo terminal no VS Code

// Comandos do Node.js:
// node server.js // Inicia o servidor (mas não reinicia automaticamente)
// node --watch server.js // Reinicia o servidor automaticamente ao detectar mudanças (Node.js 18+)
// npx nodemon server.js // Reinicia automaticamente sempre que o código for alterado
// npm init -y // Inicializa um projeto Node.js com configuração padrão
// npm install express // Instala o Express
// npm install -g nodemon // Instala o nodemon globalmente

// Comandos Git úteis:
// git init // Inicializa um repositório Git
// git status // Mostra o status do repositório
// git add . // Adiciona todas as mudanças ao commit
// git commit -m "Mensagem do commit" // Faz um commit com mensagem
// git push origin main // Envia o código para o repositório remoto

// Comandos úteis no VS Code:
// code . // Abre a pasta atual no VS Code
// code nome_do_arquivo // Abre um arquivo específico no VS Code
// code --install-extension nome.da.extensao // Instala uma extensão via terminal

/* no package.json , coloquei no  "scripts": {
   "dev": "node --watch --env-file=.env server.js", 
   "test": ""
 }, (node --watch) a primeira passa para dentro do comando, para o node ficar de pe, ficar sempre carregando, (--env-file=env) a segunda é para avisar que tem um arquivo de variaveis de ambiente e (server.js) a terceira para rodar o server.js, executando o node e o env
*/

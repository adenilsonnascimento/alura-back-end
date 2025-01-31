import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis de ambiente definidas no arquivo .env

// Importa o cliente do MongoDB para conectar ao banco de dados
import { MongoClient } from "mongodb";

// Função assíncrona para conectar ao banco de dados MongoDB Atlas
export default async function conectarAoBanco(stringConexao) {
    let mongoClient; // Declara a variável para armazenar a conexão do MongoDB

    try {
        // Inicializa o cliente MongoDB com a string de conexão
        mongoClient = new MongoClient(stringConexao);
        console.log("Conectando ao cluster do banco de dados...");

        // Estabelece a conexão com o banco de dados
        await mongoClient.connect();
        console.log("Conectado ao MongoDB Atlas com sucesso!.");

        return mongoClient; // Retorna o cliente conectado para ser utilizado no app
    } catch (error) {
        // Captura e exibe erros caso a conexão falhe
        console.log("Falha na conexão ao banco de dados", error);
        process.exit(); // Encerra o processo para evitar que o app rode sem conexão
    }
}
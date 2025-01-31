import conectarAoBanco from "../config/dbConfig.js";
import { ObjectId } from 'mongodb'; // Importa ObjectId de forma correta

// Função assíncrona que busca todos os posts no banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("imersao-alura"); // Acessa o banco de dados "imersao-alura"
    const colecao = db.collection("posts"); // Acessa a coleção "posts"
    return await colecao.find({}).toArray(); // Retorna todos os posts em formato de array
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-alura");
    const colecao = db.collection("posts");
    return await colecao.insertOne(novoPost); // Insere um novo post no banco de dados
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-alura");
    const colecao = db.collection("posts");

    const objID = ObjectId.createFromHexString(id);

    return await colecao.updateOne({ _id: new ObjectId(objID) }, { $set: novoPost }); // Atualiza o post com o id correto
}

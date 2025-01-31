import { getTodosPosts, criarPost, atualizarPost } from "../models/postsModel.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiServices.js";

// Função para listar todos os posts
export async function listarPosts(req, res) {
    try {
        const posts = await getTodosPosts();
        res.status(200).json(posts);
    } catch (erro) {
        console.error("Erro ao listar posts:", erro);
        res.status(500).json({ erro: "Erro ao listar posts" });
    }
}

// Função para criar um novo post
export async function postarNovoPost(req, res) {
    try {
        const novoPost = req.body;
        const postCriado = await criarPost(novoPost);
        res.status(201).json(postCriado);
    } catch (erro) {
        console.error("Erro ao criar post:", erro);
        res.status(500).json({ erro: "Falha na requisição" });
    }
}

// Função para upload de imagem e criação de um post
export async function uploadImagem(req, res) {
    try {
        // Verifica se um arquivo foi enviado
        if (!req.file) {
            return res.status(400).json({ erro: "Nenhuma imagem foi enviada." });
        }

        // Verifica se a pasta "uploads" existe, se não existir, cria a pasta
        if (!fs.existsSync("uploads")) {
            fs.mkdirSync("uploads");
        }

        // Cria um novo post com a imagem
        const novoPost = {
            descricao: "",
            imagem: req.file.path,
            alt: ""
        };

        // Salva no banco de dados
        const postCriado = await criarPost(novoPost);

        // Atualiza o nome do arquivo com o ID do post
        const novoCaminho = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, novoCaminho);

        // Atualiza o post com o novo caminho
        novoPost.imagem = novoCaminho;

        res.status(201).json(novoPost);
    } catch (erro) {
        console.error("Erro ao fazer upload da imagem:", erro);
        res.status(500).json({ erro: "Falha na requisição" });
    }
}

// Função para atualizar um post com nova descrição gerada pelo Gemini
export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const caminhoImagem = `uploads/${id}.png`;
    const urlImagem = `http://localhost:3000/${caminhoImagem}`;

    try {
        // Verifica se o arquivo da imagem existe
        if (!fs.existsSync(caminhoImagem)) {
            return res.status(404).json({ erro: "Imagem não encontrada" });
        }

        console.log("Atualizando post ID:", id);

        // Lê a imagem e gera uma descrição automática com IA
        const imgBuffer = fs.readFileSync(caminhoImagem);
        const descricao = await gerarDescricaoComGemini(imgBuffer);

        // Cria o objeto para atualização
        const postAtualizado = {
            imgUrl: urlImagem,
            descricao,
            alt: descricao
        };

        // Atualiza o post no banco de dados
        const resultado = await atualizarPost(id, postAtualizado);
        res.status(200).json(resultado);
    } catch (erro) {
        console.error("Erro ao atualizar post:", erro);
        res.status(500).json({ erro: "Falha na requisição" });
    }
}

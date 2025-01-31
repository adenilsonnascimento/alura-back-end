
import express from 'express'; // Importa o framework Express para gerenciar as rotas e requisições
import multer from 'multer'; // Importa o Multer para lidar com upload de arquivos
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from '../controllers/postsControllers.js'; // Importa os controladores das funções relacionadas a posts
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:8000',
    OptionsSuccessStatus: 200
}

// Configuração do armazenamento de arquivos com Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Define o diretório onde os arquivos serão armazenados
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Mantém o nome original do arquivo
    }
});

// Configuração do middleware de upload de arquivos
const upload = multer({ dest: "./uploads", storage });

// Middleware para processar requisições com JSON
const routes = (app) => {

    // Tudo que reconhecer como json ele vai entender e vai devolver em json
    app.use(express.json());
    app.use(cors(corsOptions));

    // Define uma rota GET para "/adenilsonnascimento" 
    // Quando um usuário acessar essa rota, http://localhost:3000/adenilsonnascimento, o servidor responderá com todos os posts em formato JSON
    app.get('/adenilsonnascimento', listarPosts);
    // Define uma rota POST para "/adenilsonnascimento"
    app.post("/adenilsonnascimento", postarNovoPost);
    // Define uma rota POST para upload de imagens
    // O arquivo enviado deve ter o campo "imagem" no formulário
    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id", atualizarNovoPost)
}

export default routes;
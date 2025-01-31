# alura-back-end

Este repositório contém a implementação do backend para a aplicação de gerenciamento de posts com upload de imagens e descrição automática gerada por inteligência artificial (IA) através da API Gemini do Google.

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript no lado do servidor.
- **Express** - Framework para criar a API RESTful.
- **MongoDB** - Banco de dados NoSQL utilizado para armazenar os posts.
- **Multer** - Middleware para upload de arquivos.
- **Google Gemini API** - Utilizado para gerar descrições automáticas de imagens com inteligência artificial.
- **dotenv** - Para gerenciar variáveis de ambiente.
  
## Funcionalidades

- **Listar Posts**: Exibe todos os posts armazenados no banco de dados.
- **Criar Novo Post**: Cria um novo post com descrição e imagem.
- **Upload de Imagem**: Permite fazer o upload de uma imagem e associá-la a um post.
- **Atualizar Post**: Gera uma descrição automática para o post através da IA (Gemini) e atualiza a descrição do post.

## Pré-requisitos

1. **Node.js**: Para rodar o projeto em ambiente local.
2. **MongoDB Atlas**: Banco de dados hospedado em nuvem. Você precisa criar uma conta no MongoDB Atlas e configurar a string de conexão.
3. **API Key do Google Gemini**: Para gerar descrições automáticas utilizando o modelo de IA da Google. A chave pode ser obtida através do [Google Cloud](https://cloud.google.com/).

## Como Rodar

1. Clone este repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/seu-usuario/alura-back-end.git
    ```

2. Entre na pasta do projeto:

    ```bash
    cd alura-back-end
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias:

    ```bash
    MONGO_URI=your_mongodb_connection_string
    GEMINI_API_KEY=your_gemini_api_key
    ```

5. Rode o servidor:

    ```bash
    npm start
    ```

    O servidor estará rodando na porta `3000` e a aplicação estará acessível via `http://localhost:3000`.

## Endpoints

### `GET /adenilsonnascimento`
- **Descrição**: Lista todos os posts.
- **Resposta**: Retorna todos os posts armazenados no banco de dados.

### `POST /adenilsonnascimento`
- **Descrição**: Cria um novo post com uma descrição fornecida no corpo da requisição.
- **Corpo da Requisição**:
    ```json
    {
        "descricao": "Descrição do post",
        "imagem": "caminho_da_imagem.png",
        "alt": "Descrição alternativa da imagem"
    }
    ```

### `POST /upload`
- **Descrição**: Faz o upload de uma imagem e cria um novo post com a imagem.
- **Requisição**: Enviar o arquivo no campo `imagem` do formulário.
- **Resposta**: Retorna o post criado com o caminho da imagem.

### `PUT /upload/:id`
- **Descrição**: Atualiza um post, gerando uma descrição automática da imagem usando a Google Gemini API.
- **Parâmetros**:
    - `id`: ID do post a ser atualizado.
- **Resposta**: Retorna o post atualizado com a nova descrição.

## Estrutura de Pastas

/alura-back-end ├── /uploads # Pasta para armazenar as imagens enviadas ├── /src │ ├── /controllers # Funções responsáveis por controlar a lógica das rotas │ ├── /models # Funções para interagir com o banco de dados (MongoDB) │ ├── /routes # Definições das rotas da API │ ├── /services # Funções para integrar com APIs externas, como o Google Gemini │ ├── /config # Arquivo de configuração do banco de dados │ └── /utils # Funções utilitárias, se houver ├── .env # Arquivo para armazenar variáveis de ambiente ├── server.js # Arquivo principal para iniciar o servidor ├── package.json # Gerenciador de pacotes └── README.md # Este arquivo

## Contribuições

1. Faça um fork deste repositório.
2. Crie uma nova branch com suas mudanças (`git checkout -b minha-feature`).
3. Faça commit das suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Envie sua branch para o repositório remoto (`git push origin minha-feature`).
5. Crie um Pull Request.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

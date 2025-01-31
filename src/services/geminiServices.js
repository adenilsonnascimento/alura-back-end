import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function gerarDescricaoComGemini(imagemBuffer) {
    try {
        const imagemBase64 = imagemBuffer.toString("base64");

        // Criando a estrutura correta para a API do Gemini
        const res = await model.generateContent({
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            inlineData: {
                                data: imagemBase64,
                                mimeType: "image/png",
                            },
                        },
                        {
                            text: "Gere uma descrição em português do Brasil para essa imagem, com no máximo 100 caracteres. Não inclua qualquer instrução ou informação adicional.",
                        },
                    ],
                },
            ],
        });

        // Captura a resposta do Gemini corretamente
        const descricao = res.response.candidates[0]?.content?.parts[0]?.text;
        return descricao || "Alt-text não disponível"; 
    } catch (erro) {
        console.error("Erro ao obter alt-text:", erro.message, erro);
        throw new Error("Erro ao obter alt-text do Gemini");
    }
}

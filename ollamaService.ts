import axios from 'axios';

const OLLAMA_API_URL = 'http://localhost:8000'; // URL do seu Ollama local

export const generateQuestion = async (difficulty: string) => {
  try {
    const response = await axios.post(`${OLLAMA_API_URL}/generate`, { difficulty });
    return response.data;
  } catch (error) {
    console.error('Erro ao gerar pergunta:', error);
    throw error;
  }
};

import { useState, useEffect } from 'react';
import { generateQuestion } from '../services/ollamaService';

const useQuiz = () => {
  const [question, setQuestion] = useState<any>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    fetchNewQuestion();
  }, []);

  const fetchNewQuestion = async () => {
    try {
      const newQuestion = await generateQuestion('Fácil');
      setQuestion(newQuestion);
    } catch (error) {
      console.error('Erro ao buscar nova pergunta:', error);
    }
  };

  const answerQuestion = (userAnswer: string) => {
    if (question && userAnswer === question.correct_answer) {
      setScore(score + question.points);
      setStreak(streak + 1);

      if (streak >= 5) {
        setIsPremium(true); // Simula a ativação do 'Poder'
      }

      fetchNewQuestion();
    } else {
      setStreak(0);
      fetchNewQuestion();
    }
  };

  return { question, score, streak, isPremium, answerQuestion };
};

export default useQuiz;

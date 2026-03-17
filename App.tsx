import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useQuiz from './hooks/useQuiz';

const App = () => {
  const { question, score, streak, isPremium, answerQuestion, calculateRanking } = useQuiz();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz App</Text>
      {question ? (
        <>
          <Text style={styles.question}>{question.text}</Text>
          <Button title="Opção A" onPress={() => answerQuestion('A')} />
          <Button title="Opção B" onPress={() => answerQuestion('B')} />
          <Button title="Opção C" onPress={() => answerQuestion('C')} />
          <Button title="Opção D" onPress={() => answerQuestion('D')} />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
      <Text style={styles.score}>Score: {score}</Text>
      <Text style={styles.streak}>Streak: {streak}</Text>
      <Text style={styles.rank}>Ranking: {calculateRanking()}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  question: {
    fontSize: 18,
    marginVertical: 20,
  },
  score: {
    fontSize: 16,
    marginVertical: 10,
  },
  streak: {
    fontSize: 16,
    marginVertical: 10,
  },
  rank: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default App;

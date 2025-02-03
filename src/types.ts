export interface Question {
  id: number;
  songTitle: string;
  artist: string;
  year: number;
  audioUrl: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  showResult: boolean;
  answers: Record<number, string>;
  isPlaying: boolean;
}
import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    songTitle: "Bohemian Rhapsody",
    artist: "Queen",
    year: 1975,
    audioUrl: "https://p.scdn.co/mp3-preview/7b71f9d27827a47b31d1dac7a2915c7f08e95056",
    options: ["Queen", "Led Zeppelin", "The Beatles", "Pink Floyd"],
    correctAnswer: "Queen"
  },
  {
    id: 2,
    songTitle: "Billie Jean",
    artist: "Michael Jackson",
    year: 1983,
    audioUrl: "https://p.scdn.co/mp3-preview/f504e6b8e037771318656394f532dede4f9bcaea",
    options: ["Prince", "Michael Jackson", "Whitney Houston", "Madonna"],
    correctAnswer: "Michael Jackson"
  },
  {
    id: 3,
    songTitle: "Like a Rolling Stone",
    artist: "Bob Dylan",
    year: 1965,
    audioUrl: "https://p.scdn.co/mp3-preview/c90595fd938a2c8f3e04c6951d5a7c66321c0dbd",
    options: ["Bob Dylan", "The Rolling Stones", "The Who", "The Kinks"],
    correctAnswer: "Bob Dylan"
  },
  {
    id: 4,
    songTitle: "Smells Like Teen Spirit",
    artist: "Nirvana",
    year: 1991,
    audioUrl: "https://p.scdn.co/mp3-preview/5a24aa9ed51d0c45f2452d3c3c2d5e6c37b7f7f8",
    options: ["Pearl Jam", "Soundgarden", "Nirvana", "Alice In Chains"],
    correctAnswer: "Nirvana"
  },
  {
    id: 5,
    songTitle: "Sweet Dreams (Are Made of This)",
    artist: "Eurythmics",
    year: 1983,
    audioUrl: "https://p.scdn.co/mp3-preview/9f6c4c693b2d00f87227c47dca6f659a0ba4f88c",
    options: ["Depeche Mode", "The Human League", "Eurythmics", "New Order"],
    correctAnswer: "Eurythmics"
  }
];
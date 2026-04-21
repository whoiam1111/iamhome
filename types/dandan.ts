export type DandanType = 'L' | 'O' | 'G' | 'B';

export interface Question {
  id: number;
  options: {
    type: DandanType;
    text: string;
  }[];
}

export interface ResultContent {
  typeCode: DandanType;
  typeName: string;
  subtitle: string;
  summary: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  motivation: string;
  timeStyle: string;
  communicationStyle: string;
  decisionStyle: string;
  stressResponse: string;
  needs: string;
  wants: string;
}

export type DandanStep = 'intro' | 'test' | 'loading' | 'result';

// For test scores storage: Record<questionId, Record<DandanType, score(1-4)>>
// example: { 1: { L: 4, O: 3, G: 2, B: 1 } }
export type UserAnswers = Record<number, Record<DandanType, number>>;

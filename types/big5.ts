export type Big5Trait = 'O' | 'C' | 'E' | 'A' | 'N';

export interface Big5Question {
  id: number;
  trait: Big5Trait;
  text: string;
}

export interface Big5TraitMeta {
  code: Big5Trait;
  letter: string; // 'A' | 'B' | 'C' | 'D' | 'E'
  name: string; // 개방성
  englishName: string; // Openness
  chartLabel: string; // 개방적인
  description: string;
  highDesc: string;
  lowDesc: string;
}

export type Big5Step = 'intro' | 'test' | 'loading' | 'result';

// question id (1-25) -> score (1-5)
export type Big5Answers = Record<number, number>;

export interface Big5ScoreResult {
  scores: Record<Big5Trait, number>; // 5-25 points each
  percentages: Record<Big5Trait, number>; // 20-100% or normalized
  primaryTrait: Big5Trait;
  sortedTraits: { trait: Big5Trait; score: number }[];
}

"use client";

import { useState } from "react";
import { DANDAN_QUESTIONS } from "../../../lib/constants/dandan-data";
import { DandanType, UserAnswers } from "../../../types/dandan";
import { CheckIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface TestViewProps {
  onComplete: (answers: UserAnswers) => void;
}

// 타입별 로컬 선택 리스트
interface Selection {
  type: DandanType;
  score: number; // 4, 3, 2, 1
}

export default function TestView({ onComplete }: TestViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  
  // 현재 문항 렌더링에 사용되는 선택 목록
  const currentQuestion = DANDAN_QUESTIONS[currentIndex];
  
  // 현재 문항에 대해 유저가 선택한 배열
  const [selections, setSelections] = useState<Selection[]>(() => {
    // 만약 이미 답변이 존재한다면, 그 답변을 Selection으로 재구성
    const exist = answers[currentQuestion.id];
    if (exist) {
      const arr = Object.entries(exist).map(([type, score]) => ({
        type: type as DandanType,
        score
      })).sort((a, b) => b.score - a.score); // 4부터 1 순서로
      return arr;
    }
    return [];
  });

  const progress = Math.round(((currentIndex) / DANDAN_QUESTIONS.length) * 100);

  const handleSelect = (type: DandanType) => {
    const isSelected = selections.find((s) => s.type === type);
    
    if (isSelected) {
      // 이미 선택된 것을 누르면 초기화 하거나, 누른 시점 이후를 롤백 (여기선 전체 리셋 UX가 편함)
      setSelections([]);
      return;
    }

    if (selections.length >= 4) {
      return; // 끝
    }

    // 다음 들어갈 점수: 4, 3, 2, 1 중 하나
    const nextScore = 4 - selections.length;
    setSelections((prev) => [...prev, { type, score: nextScore }]);
  };



  const handleNext = () => {
    if (selections.length !== 4) return;

    // 답변 저장
    const newAnswer: Record<DandanType, number> = { L: 0, O: 0, G: 0, B: 0 };
    selections.forEach(s => {
      newAnswer[s.type] = s.score;
    });

    const newAnswers = { ...answers, [currentQuestion.id]: newAnswer };
    setAnswers(newAnswers);

    if (currentIndex < DANDAN_QUESTIONS.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      
      // 다음 문항의 기존 선택값 불러오기
      const nextExist = newAnswers[DANDAN_QUESTIONS[nextIdx].id];
      if (nextExist) {
        setSelections(Object.entries(nextExist).map(([type, score]) => ({
          type: type as DandanType,
          score: score as number
        })).sort((a, b) => b.score - a.score));
      } else {
        setSelections([]);
      }
    } else {
      // 완료
      onComplete(newAnswers);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      // 현재 선택 상태는 혹시 모르니 일단 임시 저장 (옵션)
      // 여기선 그냥 넘어가도록 처리합니다.
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      const prevExist = answers[DANDAN_QUESTIONS[prevIdx].id];
      if (prevExist) {
        setSelections(Object.entries(prevExist).map(([type, score]) => ({
          type: type as DandanType,
          score: score as number
        })).sort((a, b) => b.score - a.score));
      } else {
        setSelections([]);
      }
    }
  };

  return (
    <div className="w-full flex justify-center animate-in fade-in duration-300 pb-20 pt-4 md:pt-10">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-3xl p-6 md:p-10 border border-gray-100 flex flex-col">
        {/* Progress */}
        <div className="w-full flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-gray-500">진행률 {progress}%</span>
          <span className="text-sm font-bold text-blue-500">{currentIndex + 1} / {DANDAN_QUESTIONS.length}</span>
        </div>
        <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mb-10">
          <div 
            className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }} 
          />
        </div>

        {/* Question Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">
            나와 가장 <span className="text-blue-500">가까운 문장부터</span> 차례대로 클릭해주세요.
          </h2>
          <p className="text-neutral-500 font-medium">선택을 취소하려면 선택된 항목을 다시 클릭하세요.</p>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3 mb-8 min-h-[300px]">
          {currentQuestion.options.map((opt) => {
            const currentSel = selections.find(s => s.type === opt.type);
            const isSelected = !!currentSel;
            const score = currentSel?.score;

            return (
              <button
                key={opt.type}
                onClick={() => handleSelect(opt.type)}
                className={`relative w-full p-5 md:p-6 text-left rounded-2xl border-2 transition-all duration-200 flex items-center justify-between group
                  ${isSelected ? 'bg-blue-50 border-blue-500 shadow-sm' : 'bg-white border-gray-100 hover:border-gray-300 hover:bg-gray-50 shadow-sm'}`}
              >
                <span className={`text-lg font-bold ${isSelected ? 'text-blue-600' : 'text-neutral-700'}`}>
                  {opt.text}
                </span>

                {isSelected ? (
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-black shadow-md animate-in zoom-in-50 duration-200">
                    {score}점
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center group-hover:border-gray-400">
                    <span className="text-xs text-transparent group-hover:text-gray-400">선택</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center w-full mt-auto pt-4 border-t border-gray-100">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all
              ${currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-neutral-600 bg-gray-100 hover:bg-gray-200'}`}
          >
            <ArrowLeftIcon className="w-5 h-5" />
            이전
          </button>

          <button
            onClick={handleNext}
            disabled={selections.length < 4}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all
              ${selections.length < 4 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600 shadow-md active:scale-95'}`}
          >
            {currentIndex === DANDAN_QUESTIONS.length - 1 ? '결과 확인' : '다음'}
            {currentIndex === DANDAN_QUESTIONS.length - 1 ? <CheckIcon className="w-5 h-5" /> : <ArrowRightIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}

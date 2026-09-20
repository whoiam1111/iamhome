"use client";

import { useState } from "react";
import {
	BIG5_QUESTIONS,
	BIG5_TRAIT_METAS,
	LIKERT_OPTIONS,
	TRAIT_ORDER,
} from "../../../lib/constants/big5-data";
import { Big5Answers } from "../../../types/big5";
import {
	CheckIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	ListBulletIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@heroicons/react/24/outline";

interface TestViewProps {
	onComplete: (answers: Big5Answers) => void;
}

export default function TestView({ onComplete }: TestViewProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [answers, setAnswers] = useState<Big5Answers>({});
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	const currentQuestion = BIG5_QUESTIONS[currentIndex];
	const traitMeta = BIG5_TRAIT_METAS[currentQuestion.trait];
	const selectedValue = answers[currentQuestion.id];

	const totalQuestions = BIG5_QUESTIONS.length;
	const answeredCount = Object.keys(answers).length;
	const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

	const handleSelectScore = (score: number) => {
		const newAnswers = { ...answers, [currentQuestion.id]: score };
		setAnswers(newAnswers);

		// 마지막 문항이 아니면 약간의 딜레이 후 다음 문항으로 자동 이동
		if (currentIndex < totalQuestions - 1) {
			setTimeout(() => {
				setCurrentIndex((prev) => prev + 1);
			}, 200);
		}
	};

	const handleNext = () => {
		if (!selectedValue) return;

		if (currentIndex < totalQuestions - 1) {
			setCurrentIndex((prev) => prev + 1);
		} else {
			// 전체 응답 확인
			onComplete(answers);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prev) => prev - 1);
		}
	};

	const handleJumpToQuestion = (index: number) => {
		setCurrentIndex(index);
		setIsMobileNavOpen(false);
	};

	return (
		<div className="w-full max-w-5xl flex flex-col lg:flex-row gap-6 items-start animate-in fade-in duration-300 pb-20 pt-2 md:pt-4">
			{/* 모바일 화면 전용 상단 네비게이션 아코디언 (lg:hidden) */}
			<div className="w-full lg:hidden bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-2">
				<button
					type="button"
					onClick={() => setIsMobileNavOpen((prev) => !prev)}
					className="w-full px-5 py-3.5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors cursor-pointer"
				>
					<div className="flex items-center gap-2">
						<ListBulletIcon className="w-5 h-5 text-blue-600" />
						<span className="font-bold text-neutral-800 text-sm">
							문항 바로가기
						</span>
						<span className="text-xs font-semibold px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">
							{answeredCount}/{totalQuestions} 완료
						</span>
					</div>
					{isMobileNavOpen ? (
						<ChevronUpIcon className="w-5 h-5 text-gray-400" />
					) : (
						<ChevronDownIcon className="w-5 h-5 text-gray-400" />
					)}
				</button>

				{isMobileNavOpen && (
					<div className="p-4 border-t border-gray-100 bg-gray-50/60 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
						{TRAIT_ORDER.map((trait) => {
							const meta = BIG5_TRAIT_METAS[trait];
							const traitQuestions = BIG5_QUESTIONS.filter(
								(q) => q.trait === trait
							);

							return (
								<div key={trait} className="flex flex-col gap-1.5">
									<span className="text-xs font-bold text-neutral-500">
										{meta.letter}. {meta.name}
									</span>
									<div className="flex items-center gap-2 flex-wrap">
										{traitQuestions.map((q) => {
											const qIndex = q.id - 1;
											const isCurrent = currentIndex === qIndex;
											const isAnswered = answers[q.id] !== undefined;
											const score = answers[q.id];

											return (
												<button
													key={q.id}
													type="button"
													onClick={() => handleJumpToQuestion(qIndex)}
													className={`w-9 h-9 rounded-xl text-xs font-bold flex flex-col items-center justify-center transition-all cursor-pointer ${
														isCurrent
															? "bg-blue-600 text-white ring-2 ring-blue-500 ring-offset-2 scale-105 shadow-sm font-black"
															: isAnswered
															? "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100"
															: "bg-white text-gray-400 border border-gray-200 hover:bg-gray-100"
													}`}
												>
													<span>{q.id}</span>
													{isAnswered && !isCurrent && (
														<span className="text-[9px] font-semibold text-blue-500 leading-none">
															{score}점
														</span>
													)}
												</button>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>

			{/* 데스크톱 좌측 문항 네비게이션 사이드바 (hidden lg:flex) */}
			<aside className="hidden lg:flex flex-col w-72 shrink-0 bg-white rounded-3xl p-6 border border-gray-100 shadow-lg sticky top-28">
				{/* 상단 현황 */}
				<div className="mb-5">
					<div className="flex items-center justify-between mb-2">
						<h3 className="font-extrabold text-base text-neutral-900 flex items-center gap-1.5">
							<ListBulletIcon className="w-5 h-5 text-blue-600" />
							문항 목록
						</h3>
						<span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
							{answeredCount}/{totalQuestions} 완료
						</span>
					</div>

					{/* 미니 프로그레스 바 */}
					<div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
						<div
							className="h-full bg-blue-600 rounded-full transition-all duration-300"
							style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
						/>
					</div>
				</div>

				{/* 5개 영역별 문항 리스트 */}
				<div className="flex flex-col gap-4">
					{TRAIT_ORDER.map((trait) => {
						const meta = BIG5_TRAIT_METAS[trait];
						const traitQuestions = BIG5_QUESTIONS.filter(
							(q) => q.trait === trait
						);
						const traitAnsweredCount = traitQuestions.filter(
							(q) => answers[q.id] !== undefined
						).length;

						return (
							<div
								key={trait}
								className="bg-gray-50/70 rounded-2xl p-3 border border-gray-100/80"
							>
								<div className="flex items-center justify-between mb-2 px-0.5">
									<span className="text-xs font-bold text-neutral-700">
										{meta.letter}. {meta.name}
									</span>
									<span className="text-[11px] font-semibold text-neutral-400">
										{traitAnsweredCount}/5
									</span>
								</div>

								{/* 5개 문항 버튼 그리드 */}
								<div className="grid grid-cols-5 gap-1.5">
									{traitQuestions.map((q) => {
										const qIndex = q.id - 1;
										const isCurrent = currentIndex === qIndex;
										const isAnswered = answers[q.id] !== undefined;
										const score = answers[q.id];

										return (
											<button
												key={q.id}
												type="button"
												onClick={() => handleJumpToQuestion(qIndex)}
												title={`문항 ${q.id}: ${q.text}`}
												className={`h-9 rounded-xl text-xs flex flex-col items-center justify-center transition-all cursor-pointer ${
													isCurrent
														? "bg-blue-600 text-white ring-2 ring-blue-500 ring-offset-2 scale-105 shadow-sm font-black"
														: isAnswered
														? "bg-blue-50 text-blue-700 font-bold border border-blue-200 hover:bg-blue-100 hover:border-blue-300"
														: "bg-white text-gray-400 font-medium border border-gray-200/80 hover:bg-gray-100"
												}`}
											>
												<span>{q.id}</span>
												{isAnswered && !isCurrent && (
													<span className="text-[9px] font-semibold text-blue-500 leading-none">
														{score}점
													</span>
												)}
											</button>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>

				{/* 하단 범례 안내 */}
				<div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-neutral-500 font-medium px-1">
					<div className="flex items-center gap-1">
						<span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
						<span>현재</span>
					</div>
					<div className="flex items-center gap-1">
						<span className="w-2.5 h-2.5 rounded-full bg-blue-100 border border-blue-300"></span>
						<span>완료</span>
					</div>
					<div className="flex items-center gap-1">
						<span className="w-2.5 h-2.5 rounded-full bg-white border border-gray-300"></span>
						<span>미답변</span>
					</div>
				</div>
			</aside>

			{/* 우측 메인 질문 카드 (Flex-1) */}
			<div className="flex-1 w-full bg-white shadow-xl rounded-3xl p-6 md:p-10 border border-gray-100 flex flex-col">
				{/* 1. 상단 진행률 바 */}
				<div className="w-full flex items-center justify-between mb-3">
					<div className="flex items-center gap-2">
						<span className="text-xs font-bold px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full">
							{traitMeta.letter}. {traitMeta.name} ({traitMeta.englishName})
						</span>
					</div>
					<span className="text-sm font-bold text-neutral-500">
						<strong className="text-blue-600">{currentIndex + 1}</strong> / {totalQuestions}
					</span>
				</div>
				<div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mb-8">
					<div
						className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
						style={{ width: `${progressPercent}%` }}
					/>
				</div>

				{/* 2. 질문 헤더 */}
				<div className="mb-8 min-h-[90px] flex flex-col justify-center">
					<span className="text-xs font-semibold text-neutral-400 mb-1">
						문항 {currentQuestion.id}
					</span>
					<h2 className="text-xl md:text-2xl font-extrabold text-neutral-900 leading-snug break-keep">
						{currentQuestion.text}
					</h2>
				</div>

				{/* 3. 5점 척도 선택 버튼 그룹 */}
				<div className="flex flex-col gap-3 mb-8">
					{LIKERT_OPTIONS.map((opt) => {
						const isSelected = selectedValue === opt.value;

						return (
							<button
								key={opt.value}
								type="button"
								onClick={() => handleSelectScore(opt.value)}
								className={`w-full p-4 md:p-5 text-left rounded-2xl border-2 transition-all duration-150 flex items-center justify-between cursor-pointer group
                  ${
										isSelected
											? "bg-blue-50 border-blue-500 shadow-sm"
											: "bg-white border-gray-100 hover:border-gray-300 hover:bg-gray-50/70"
									}`}
							>
								<div className="flex items-center gap-3.5">
									<div
										className={`w-8 h-8 rounded-full font-black text-sm flex items-center justify-center transition-colors
                      ${
												isSelected
													? "bg-blue-600 text-white shadow-xs"
													: "bg-gray-100 text-neutral-500 group-hover:bg-gray-200"
											}`}
									>
										{opt.value}
									</div>
									<span
										className={`text-base md:text-lg font-bold transition-colors ${
											isSelected ? "text-blue-900" : "text-neutral-700"
										}`}
									>
										{opt.label}
									</span>
								</div>

								{isSelected ? (
									<div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center animate-in zoom-in-50 duration-150">
										<CheckIcon className="w-4 h-4 stroke-[3]" />
									</div>
								) : (
									<div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-gray-400" />
								)}
							</button>
						);
					})}
				</div>

				{/* 4. 하단 이전/다음 네비게이션 버튼 */}
				<div className="flex justify-between items-center w-full pt-4 border-t border-gray-100 mt-auto">
					<button
						type="button"
						onClick={handlePrev}
						disabled={currentIndex === 0}
						className={`flex items-center gap-1.5 px-5 py-3 rounded-xl font-bold transition-all text-sm
              ${
								currentIndex === 0
									? "text-gray-300 cursor-not-allowed"
									: "text-neutral-600 bg-gray-100 hover:bg-gray-200 cursor-pointer"
							}`}
					>
						<ArrowLeftIcon className="w-4 h-4" />
						이전 문항
					</button>

					<button
						type="button"
						onClick={handleNext}
						disabled={!selectedValue}
						className={`flex items-center gap-1.5 px-7 py-3 rounded-xl font-bold transition-all text-sm
              ${
								!selectedValue
									? "bg-gray-200 text-gray-400 cursor-not-allowed"
									: "bg-blue-600 text-white hover:bg-blue-700 shadow-md active:scale-95 cursor-pointer"
							}`}
					>
						{currentIndex === totalQuestions - 1 ? "결과 확인하기" : "다음 문항"}
						{currentIndex === totalQuestions - 1 ? (
							<CheckIcon className="w-4 h-4" />
						) : (
							<ArrowRightIcon className="w-4 h-4" />
						)}
					</button>
				</div>
			</div>
		</div>
	);
}

"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Big5Answers, Big5Trait } from "../../../types/big5";
import {
	BIG5_QUESTIONS,
	BIG5_TRAIT_METAS,
	TRAIT_ORDER,
} from "../../../lib/constants/big5-data";
import RadarChart from "./RadarChart";
import { ArrowPathIcon, HomeIcon } from "@heroicons/react/24/outline";

interface ResultViewProps {
	userName: string;
	answers: Big5Answers;
	onRestart: () => void;
}

export default function ResultView({
	userName,
	answers,
	onRestart,
}: ResultViewProps) {
	// 1. 점수 계산 (5개 영역별 총합: 최소 5점 ~ 최대 25점)
	const resultData = useMemo(() => {
		const scores: Record<Big5Trait, number> = {
			O: 0,
			C: 0,
			E: 0,
			A: 0,
			N: 0,
		};

		BIG5_QUESTIONS.forEach((q) => {
			const ans = answers[q.id] || 0;
			scores[q.trait] += ans;
		});

		// 내림차순 정렬
		const sorted = TRAIT_ORDER.map((trait) => ({
			trait,
			score: scores[trait],
		})).sort((a, b) => b.score - a.score);

		const primaryTrait = sorted[0].trait;

		return { scores, sorted, primaryTrait };
	}, [answers]);

	const { scores, primaryTrait } = resultData;
	const primaryMeta = BIG5_TRAIT_METAS[primaryTrait];

	return (
		<div className="w-full flex flex-col items-center animate-in fade-in duration-500 pb-24 pt-8 px-4">
			{/* 1. 상단 요약 다크 카드 (기존 설문 디자인 톤) */}
			<div className="w-full max-w-4xl bg-neutral-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl mb-10 relative overflow-hidden">
				{/* 배경 블루 블러 효과 */}
				<div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/25 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

				<div className="relative z-10">
					<div className="inline-flex items-center px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full mb-3">
						<span className="text-blue-400 font-bold text-xs tracking-wider uppercase">
							나의 성향
						</span>
					</div>

					<h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
						<span className="text-white">{userName}</span>님은{" "}
						<span className="text-blue-400">{primaryMeta.chartLabel} 성향</span>
						이 가장 두드러집니다.
					</h1>

					<p className="text-lg text-gray-300 font-medium max-w-2xl break-keep">
						{primaryMeta.highDesc}
					</p>

					{/* 5대 성향 점수 카드 그리드 (A ~ E 순서) */}
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mt-10">
						{TRAIT_ORDER.map((trait) => {
							const meta = BIG5_TRAIT_METAS[trait];
							const score = scores[trait];
							const isPrimary = trait === primaryTrait;

							return (
								<div
									key={trait}
									className={`rounded-2xl p-4 flex flex-col justify-between items-center text-center transition-all ${
										isPrimary
											? "bg-blue-600/30 border-2 border-blue-500 shadow-lg shadow-blue-500/20"
											: "bg-white/10 border border-white/10"
									}`}
								>
									<span className="text-xs font-bold text-gray-300 mb-1 leading-tight">
										{meta.letter}. {meta.name}
									</span>
									<span className="text-[11px] text-gray-400 mb-2">
										({meta.englishName})
									</span>
									<span className="text-2xl md:text-3xl font-black text-white">
										{score}{" "}
										<span className="text-sm font-medium text-gray-300">점</span>
									</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* 2. 중앙 오각형 그래프 (Radar Chart) 영역 */}
			<div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 flex flex-col items-center mb-10">
				<div className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-50 rounded-full mb-3">
					<span className="text-blue-600 font-bold text-sm tracking-wide">
						Big5 성향 다이어그램
					</span>
				</div>

				<h2 className="text-2xl md:text-3xl font-black text-neutral-900 mb-2 text-center">
					단단해질 나의 내면 바라보기
				</h2>
				<p className="text-neutral-500 text-sm md:text-base font-medium mb-8 text-center break-keep max-w-lg">
					오각형의 각 꼭짓점은 5가지 성향 차원을 나타내며, 넓게 퍼질수록 해당 성향의 특성이 강하게 발현됨을 의미합니다.
				</p>

				{/* 오각형 방사형 차트 */}
				<div className="w-full flex justify-center py-4">
					<RadarChart scores={scores} primaryTrait={primaryTrait} />
				</div>
			</div>

			{/* 3. 5대 성향 상세 가이드 카드 그리드 */}
			<div className="w-full max-w-4xl mb-12">
				<h3 className="text-xl md:text-2xl font-black text-neutral-800 mb-5 px-2">
					성향별 세부 분석 안내
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{TRAIT_ORDER.map((trait) => {
						const meta = BIG5_TRAIT_METAS[trait];
						const score = scores[trait];
						const isPrimary = trait === primaryTrait;

						return (
							<div
								key={trait}
								className={`bg-white rounded-2xl p-6 border transition-all ${
									isPrimary
										? "border-blue-500 shadow-md ring-1 ring-blue-500/20"
										: "border-gray-200/80 shadow-xs"
								}`}
							>
								<div className="flex items-center justify-between mb-3">
									<div className="flex items-center gap-2">
										<span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-blue-600 font-black text-xs">
											{meta.letter}
										</span>
										<h4 className="text-lg font-bold text-neutral-900">
											{meta.name} ({meta.englishName})
										</h4>
									</div>
									<span
										className={`px-2.5 py-1 rounded-full text-xs font-black ${
											isPrimary
												? "bg-blue-600 text-white"
												: "bg-gray-100 text-neutral-600"
										}`}
									>
										{score}점 / 25점
									</span>
								</div>

								<p className="text-sm text-neutral-600 font-medium mb-3 leading-relaxed break-keep">
									{meta.description}
								</p>

								<div className="bg-gray-50 rounded-xl p-3 text-xs text-neutral-700 font-medium break-keep">
									{score >= 18 ? (
										<span className="text-blue-700 font-semibold">
											💡 특징: {meta.highDesc}
										</span>
									) : (
										<span className="text-neutral-600">
											💡 특징: {meta.lowDesc}
										</span>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* 4. 액션 버튼 */}
			<div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
				<button
					type="button"
					onClick={onRestart}
					className="flex-1 py-4 px-6 bg-white border border-gray-200 text-neutral-800 rounded-2xl font-bold text-base hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
				>
					<ArrowPathIcon className="w-5 h-5" />
					테스트 다시하기
				</button>

				<Link
					href="/"
					className="flex-1 py-4 px-6 bg-blue-600 text-white rounded-2xl font-bold text-base hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
				>
					<HomeIcon className="w-5 h-5" />
					홈으로 가기
				</Link>
			</div>
		</div>
	);
}

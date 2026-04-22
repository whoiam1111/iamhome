"use client";

import { useState } from "react";
import Link from "next/link";
import { DandanStep, UserAnswers } from "../../types/dandan";
import IntroView from "../../components/features/dandan/IntroView";
import TestView from "../../components/features/dandan/TestView";
import ResultLoading from "../../components/features/dandan/ResultLoading";
import ResultView from "../../components/features/dandan/ResultView";

export default function DandanPage() {
	const [step, setStep] = useState<DandanStep>("intro");
	const [answers, setAnswers] = useState<UserAnswers>({});
	const [userName, setUserName] = useState<string>("");

	const handleStart = (name: string) => {
		setUserName(name);
		setStep("test");
	};

	const handleTestComplete = (newAnswers: UserAnswers) => {
		setAnswers(newAnswers);
		setStep("loading");

		// 로딩 연출
		setTimeout(() => {
			setStep("result");
		}, 2000); // 2초 로딩
	};

	const handleRestart = () => {
		setAnswers({});
		setUserName("");
		setStep("intro");
	};

	return (
		<div className="w-full min-h-screen bg-gray-50 flex flex-col items-center">
			{/* Header / Intro Wrapper (상태에 따라 유동적 렌더링 가능) */}
			{step === "intro" && (
				<div className="w-full flex-col flex items-center pt-40">
					{/* 메인으로 돌아가기 링크 */}
					<Link
						href="/"
						className="text-gray-400 hover:text-gray-800 underline underline-offset-4 text-sm font-medium transition-colors"
					>
						메인으로 돌아가기
					</Link>
				</div>
			)}

			{/* Steps rendering */}
			{step === "intro" && <IntroView onStart={handleStart} />}

			{step === "test" && (
				<div className="w-full max-w-lg px-4 flex flex-col pt-40">
					<button
						onClick={handleRestart}
						className="text-gray-400 hover:text-gray-800 text-sm font-medium transition-colors text-left"
					>
						← 처음으로 돌아가기
					</button>
					<TestView onComplete={handleTestComplete} />
				</div>
			)}

			{step === "loading" && <ResultLoading />}

			{step === "result" && (
				<div className="w-full flex flex-col items-center pt-40">
					<Link
						href="/"
						className="text-gray-400 hover:text-gray-800 underline underline-offset-4 text-sm font-medium transition-colors"
					>
						메인으로 돌아가기
					</Link>
					<ResultView userName={userName} answers={answers} onRestart={handleRestart} />
				</div>
			)}
		</div>
	);
}

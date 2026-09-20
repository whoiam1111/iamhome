"use client";

import { useState } from "react";
import Link from "next/link";
import { Big5Step, Big5Answers } from "../../types/big5";
import IntroView from "../../components/features/big5/IntroView";
import TestView from "../../components/features/big5/TestView";
import ResultLoading from "../../components/features/big5/ResultLoading";
import ResultView from "../../components/features/big5/ResultView";

export default function Big5Page() {
	const [step, setStep] = useState<Big5Step>("intro");
	const [answers, setAnswers] = useState<Big5Answers>({});
	const [userName, setUserName] = useState<string>("");

	const handleStart = (name: string) => {
		setUserName(name);
		setStep("test");
	};

	const handleTestComplete = (newAnswers: Big5Answers) => {
		setAnswers(newAnswers);
		setStep("loading");

		// 2초 로딩 연출
		setTimeout(() => {
			setStep("result");
		}, 2000);
	};

	const handleRestart = () => {
		setAnswers({});
		setUserName("");
		setStep("intro");
	};

	return (
		<div className="w-full min-h-screen bg-gray-50 flex flex-col items-center">
			{/* Header / Intro Wrapper */}
			{step === "intro" && (
				<div className="w-full flex-col flex items-center pt-32 md:pt-40">
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
				<div className="w-full max-w-5xl px-4 flex flex-col pt-28 md:pt-36">
					<button
						type="button"
						onClick={handleRestart}
						className="text-gray-400 hover:text-gray-800 text-sm font-medium transition-colors text-left mb-2 cursor-pointer"
					>
						← 처음으로 돌아가기
					</button>
					<TestView onComplete={handleTestComplete} />
				</div>
			)}

			{step === "loading" && (
				<div className="w-full flex flex-col items-center pt-32 md:pt-40">
					<ResultLoading />
				</div>
			)}

			{step === "result" && (
				<div className="w-full flex flex-col items-center pt-28 md:pt-36">
					<Link
						href="/"
						className="text-gray-400 hover:text-gray-800 underline underline-offset-4 text-sm font-medium transition-colors mb-2"
					>
						메인으로 돌아가기
					</Link>
					<ResultView
						userName={userName}
						answers={answers}
						onRestart={handleRestart}
					/>
				</div>
			)}
		</div>
	);
}

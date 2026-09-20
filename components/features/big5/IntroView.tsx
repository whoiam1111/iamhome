"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { LIKERT_OPTIONS } from "../../../lib/constants/big5-data";

interface IntroViewProps {
	onStart: (name: string) => void;
}

export default function IntroView({ onStart }: IntroViewProps) {
	const [name, setName] = useState("");

	const handleSubmit = (e?: React.FormEvent) => {
		if (e) e.preventDefault();
		if (name.trim()) {
			onStart(name.trim());
		}
	};

	return (
		<div className="w-full flex justify-center animate-in fade-in duration-500 pb-20 pt-10 px-4">
			<div className="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col items-center text-center">
				{/* 상단 배지 */}
				<div className="mb-4 inline-flex items-center justify-center px-4 py-1.5 bg-blue-50 rounded-full">
					<span className="text-blue-600 font-bold text-sm tracking-wide">
						성격 진단 테스트
					</span>
				</div>

				{/* 타이틀 */}
				<h1 className="text-3xl md:text-5xl font-black text-neutral-900 mb-3 tracking-tight leading-tight">
					Big5 성격 검사지
				</h1>
				<p className="text-lg md:text-xl font-bold text-neutral-500 mb-6">
					단단해질 나의 내면 바라보기
				</p>

				<div className="w-full h-px bg-gray-100 my-4" />

				{/* 검사 방법 및 척도 가이드 */}
				<div className="space-y-6 text-left w-full text-neutral-700 bg-gray-50 p-6 md:p-8 rounded-2xl">
					<div>
						<h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-neutral-900">
							<span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold">
								1
							</span>
							검사 방법
						</h3>
						<p className="text-base text-neutral-600 leading-relaxed font-medium break-keep mb-3">
							총 25개의 문항에 대해 평소 자신의 모습과 가장 잘 부합하는 척도를
							선택합니다.
						</p>

						{/* 1~5 척도 프리뷰 배지 */}
						<div className="grid grid-cols-1 gap-2 mt-2">
							{LIKERT_OPTIONS.map((opt) => (
								<div
									key={opt.value}
									className="bg-white border border-gray-200 rounded-xl p-2.5 flex items-center text-center shadow-xs gap-4"
								>
									<span className="w-6 h-6 rounded-full bg-neutral-100 text-neutral-700 font-black text-xs flex items-center justify-center">
										{opt.value}
									</span>
									<span className="text-xs sm:text-sm font-medium text-neutral-600">
										{opt.label}
									</span>
								</div>
							))}
						</div>
					</div>

					<div className="pt-2 border-t border-gray-200/60">
						<h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-neutral-900">
							<span className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-800 text-white text-xs font-bold">
								2
							</span>
							답변 팁
						</h3>
						<p className="text-base text-neutral-600 leading-relaxed font-medium break-keep">
							가능하면{" "}
							<strong className="text-neutral-800">
								“좋은 사람처럼 보이기 위한 답”
							</strong>
							보다는{" "}
							<strong className="text-blue-600">
								&ldquo;평소 실제 모습&rdquo;
							</strong>
							을 기준으로 솔직하게 답합니다.
						</p>
					</div>
				</div>

				{/* 이름 입력 영역 */}
				<form onSubmit={handleSubmit} className="w-full mt-8 text-left">
					<label
						htmlFor="userName"
						className="block text-sm font-bold text-gray-700 mb-2"
					>
						이름을 입력해주세요
					</label>
					<input
						id="userName"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="이름 (예: 홍길동)"
						maxLength={20}
						className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-lg"
					/>

					<button
						type="submit"
						disabled={!name.trim()}
						className={`mt-8 px-8 py-5 text-white font-bold text-xl rounded-2xl w-full transition-all flex justify-center items-center gap-2
              ${
								name.trim()
									? "bg-blue-600 hover:bg-blue-700 active:scale-[0.99] shadow-[0_8px_30px_rgba(37,99,235,0.3)] cursor-pointer"
									: "bg-gray-300 cursor-not-allowed"
							}`}
					>
						테스트 시작하기
						<ArrowRightIcon className="w-5 h-5" />
					</button>
				</form>
			</div>
		</div>
	);
}

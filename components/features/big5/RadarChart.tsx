"use client";

import { useMemo } from "react";
import { Big5Trait } from "../../../types/big5";

interface RadarChartProps {
	scores: Record<Big5Trait, number>; // 5-25
	primaryTrait: Big5Trait;
}

// 레이더 차트의 5개 축 순서 (첨부 이미지 시계 방향 일치: 12시부터)
// 외향적인(E) -> 개방적인(O) -> 신경적인(N) -> 친화적인(A) -> 성실한(C)
const RADAR_AXES: { trait: Big5Trait; label: string }[] = [
	{ trait: "E", label: "외향적인" },
	{ trait: "O", label: "개방적인" },
	{ trait: "N", label: "신경적인" },
	{ trait: "A", label: "친화적인" },
	{ trait: "C", label: "성실한" },
];

export default function RadarChart({ scores, primaryTrait }: RadarChartProps) {
	const size = 380;
	const center = size / 2;
	const radius = 120;
	const levels = [0.25, 0.5, 0.75, 1.0]; // 동심 오각형 4단계

	// 각 축의 각도 계산 (-90도 = 12시 방향)
	const angles = useMemo(() => {
		return RADAR_AXES.map((_, i) => {
			return -Math.PI / 2 + (i * 2 * Math.PI) / 5;
		});
	}, []);

	// 오각형 격자 꼭짓점 좌표 생성 함수
	const getPentagonPoints = (scale: number) => {
		return angles
			.map((angle) => {
				const x = center + radius * scale * Math.cos(angle);
				const y = center + radius * scale * Math.sin(angle);
				return `${x.toFixed(1)},${y.toFixed(1)}`;
			})
			.join(" ");
	};

	// 사용자 점수 다각형 좌표 생성
	// 점수 범위: 5점(최저) ~ 25점(최고) -> 최소 비율 0.2 ~ 최대 비율 1.0
	const userPolygonPoints = useMemo(() => {
		return RADAR_AXES.map((axis, i) => {
			const score = scores[axis.trait] || 5;
			const ratio = Math.max(0.2, Math.min(1.0, score / 25));
			const x = center + radius * ratio * Math.cos(angles[i]);
			const y = center + radius * ratio * Math.sin(angles[i]);
			return `${x.toFixed(1)},${y.toFixed(1)}`;
		}).join(" ");
	}, [scores, angles, center, radius]);

	// 각 축의 점 좌표 (마커용)
	const userPointCoords = useMemo(() => {
		return RADAR_AXES.map((axis, i) => {
			const score = scores[axis.trait] || 5;
			const ratio = Math.max(0.2, Math.min(1.0, score / 25));
			const x = center + radius * ratio * Math.cos(angles[i]);
			const y = center + radius * ratio * Math.sin(angles[i]);
			return { x, y, trait: axis.trait, score };
		});
	}, [scores, angles, center, radius]);

	// 텍스트 라벨 위치 계산
	const labelPositions = useMemo(() => {
		const labelRadius = radius + 32;
		return RADAR_AXES.map((axis, i) => {
			const angle = angles[i];
			const x = center + labelRadius * Math.cos(angle);
			const y = center + labelRadius * Math.sin(angle);

			let textAnchor: "middle" | "start" | "end" = "middle";
			let dy = "0.3em";

			if (i === 0) {
				// 12시 (외향적인)
				textAnchor = "middle";
				dy = "-0.6em";
			} else if (i === 1) {
				// 2시 (개방적인)
				textAnchor = "start";
				dy = "0.3em";
			} else if (i === 2) {
				// 5시 (신경적인)
				textAnchor = "start";
				dy = "1.1em";
			} else if (i === 3) {
				// 7시 (친화적인)
				textAnchor = "end";
				dy = "1.1em";
			} else if (i === 4) {
				// 10시 (성실한)
				textAnchor = "end";
				dy = "0.3em";
			}

			const isPrimary = axis.trait === primaryTrait;
			const score = scores[axis.trait] || 0;

			return {
				x,
				y,
				label: axis.label,
				score,
				textAnchor,
				dy,
				isPrimary,
				trait: axis.trait,
			};
		});
	}, [angles, center, radius, scores, primaryTrait]);

	return (
		<div className="w-full flex flex-col items-center justify-center p-2">
			<div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
				<svg
					viewBox={`0 0 ${size} ${size}`}
					className="w-full h-full select-none overflow-visible"
				>
					{/* 1. 배경 격자 (동심 오각형) */}
					{levels.map((lvl, index) => {
						const isOuter = index === levels.length - 1;
						return (
							<polygon
								key={lvl}
								points={getPentagonPoints(lvl)}
								fill="none"
								stroke={isOuter ? "#94A3B8" : "#E2E8F0"}
								strokeWidth={isOuter ? 1.5 : 1}
							/>
						);
					})}

					{/* 2. 중심에서 각 꼭짓점으로 뻗는 방사선 */}
					{angles.map((angle, idx) => {
						const endX = center + radius * Math.cos(angle);
						const endY = center + radius * Math.sin(angle);
						return (
							<line
								key={idx}
								x1={center}
								y1={center}
								x2={endX}
								y2={endY}
								stroke="#E2E8F0"
								strokeWidth={1}
							/>
						);
					})}

					{/* 3. 사용자 점수 영역 (다각형 Fill + Stroke) */}
					<polygon
						points={userPolygonPoints}
						fill="rgba(59, 130, 246, 0.2)"
						stroke="#3B82F6"
						strokeWidth={2}
						strokeLinejoin="round"
						className="transition-all duration-700 ease-out"
					/>

					{/* 4. 점수 포인트 마커 */}
					{userPointCoords.map((pt) => (
						<circle
							key={pt.trait}
							cx={pt.x}
							cy={pt.y}
							r={3.5}
							fill="#3B82F6"
							stroke="#FFFFFF"
							strokeWidth={1.5}
						/>
					))}

					{/* 5. 꼭짓점 레이블 (참고 이미지 스타일) */}
					{labelPositions.map((pos) => {
						return (
							<g key={pos.trait}>
								<text
									x={pos.x}
									y={pos.y}
									dy={pos.dy}
									textAnchor={pos.textAnchor}
									className={`text-base md:text-lg transition-colors duration-200 ${
										pos.isPrimary
											? "fill-blue-600 font-extrabold"
											: "fill-neutral-600 font-medium"
									}`}
								>
									{pos.label}
								</text>
								{/* 점수 부가 표시 (아래 보조 텍스트) */}
								<text
									x={pos.x}
									y={pos.y + 18}
									dy={pos.dy}
									textAnchor={pos.textAnchor}
									className={`text-xs ${
										pos.isPrimary
											? "fill-blue-500 font-bold"
											: "fill-neutral-400 font-normal"
									}`}
								>
									{pos.score}점
								</text>
							</g>
						);
					})}
				</svg>
			</div>
		</div>
	);
}

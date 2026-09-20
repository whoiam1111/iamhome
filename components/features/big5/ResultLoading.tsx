export default function ResultLoading() {
	return (
		<div className="w-full flex-1 flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in duration-500 px-4">
			<div className="relative w-24 h-24 mb-8">
				<div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
				<div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
				<div className="absolute inset-0 flex items-center justify-center">
					<span className="text-blue-600 font-bold text-lg animate-pulse">...</span>
				</div>
			</div>

			<h2 className="text-2xl md:text-3xl font-black text-neutral-800 mb-3 tracking-tight text-center">
				Big5 성격 진단 결과를 분석 중입니다
			</h2>
			<p className="text-neutral-500 font-medium text-center">
				내면의 5가지 핵심 성향 데이터를 계산하고 있습니다...
			</p>
		</div>
	);
}

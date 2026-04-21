export default function ResultLoading() {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in duration-500">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-blue-500 font-bold text-lg animate-pulse">...</span>
        </div>
      </div>
      
      <h2 className="text-2xl md:text-3xl font-black text-neutral-800 mb-4 tracking-tight">
        나의 단단한 성향을 분석 중입니다
      </h2>
      <p className="text-neutral-500 font-medium">잠시만 기다려주세요...</p>
    </div>
  );
}

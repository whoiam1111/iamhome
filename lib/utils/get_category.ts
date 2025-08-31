const categoryStyles: { [key: string]: string } = {
  강연: "bg-blue-500 text-white",
  팝업: "bg-rose-500 text-white",
  테마카페: "bg-rose-500 text-white",
  원데이클래스: "bg-amber-500 text-white",
  프로그램: "bg-amber-500 text-white",
  공연: "bg-teal-500 text-white",
  default: "bg-slate-500 text-white",
};

export const getCategoryStyle = (category: string) => {
  return categoryStyles[category] || categoryStyles.default;
};

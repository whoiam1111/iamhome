const categoryStyles: { [key: string]: string } = {
  강연: "bg-blue-500 text-white",
  팝업: "bg-blue-700 text-white",
  테마카페: "bg-blue-700 text-white",
  원데이클래스: "bg-brand-green text-blue-900",
  프로그램: "bg-brand-green text-blue-900",
  공연: "bg-blue-900 text-white",
  default: "bg-slate-500 text-white",
};

export const getCategoryStyle = (category: string) => {
  return categoryStyles[category] || categoryStyles.default;
};

import { Big5Question, Big5Trait, Big5TraitMeta } from "../../types/big5";

export const BIG5_QUESTIONS: Big5Question[] = [
	// A. 개방성 (Openness)
	{ id: 1, trait: "O", text: "새로운 장소나 새로운 경험을 해보는 것을 좋아한다." },
	{ id: 2, trait: "O", text: "다른 사람들이 생각하지 못한 새로운 아이디어를 떠올리는 것을 좋아한다." },
	{ id: 3, trait: "O", text: "익숙한 방식보다 새로운 방법을 시도해보는 편이다." },
	{ id: 4, trait: "O", text: "예술, 음악, 영화, 문학 등의 작품을 보면서 다양한 해석을 생각하는 것을 좋아한다." },
	{ id: 5, trait: "O", text: "내가 평소 가지고 있던 생각과 완전히 다른 의견을 들어보는 것도 재미있다." },

	// B. 성실성 (Conscientiousness)
	{ id: 6, trait: "C", text: "해야 할 일이 있으면 미리 계획을 세우는 편이다." },
	{ id: 7, trait: "C", text: "다른 사람과 한 약속은 가능한 한 반드시 지키려고 한다." },
	{ id: 8, trait: "C", text: "일을 시작하면 끝까지 마무리하려고 한다." },
	{ id: 9, trait: "C", text: "중요한 일을 하기 전에 필요한 것들을 미리 준비하는 편이다." },
	{ id: 10, trait: "C", text: "순간적으로 하고 싶은 일이 생겨도 해야 할 일을 먼저 처리하는 편이다." },

	// C. 외향성 (Extraversion)
	{ id: 11, trait: "E", text: "처음 만난 사람과도 비교적 쉽게 대화를 시작할 수 있다." },
	{ id: 12, trait: "E", text: "여러 사람이 모인 자리에서 먼저 말을 꺼내는 편이다." },
	{ id: 13, trait: "E", text: "사람들과 함께 시간을 보내고 나면 에너지가 생기는 느낌이 든다." },
	{ id: 14, trait: "E", text: "모임이나 파티에서 적극적으로 참여하는 편이다." },
	{ id: 15, trait: "E", text: "주변 사람들에게 내 생각이나 감정을 표현하는 것이 어렵지 않다." },

	// D. 친화성 (Agreeableness)
	{ id: 16, trait: "A", text: "다른 사람의 입장에서 생각해보려고 노력하는 편이다." },
	{ id: 17, trait: "A", text: "다른 사람과 의견이 달라도 상대방의 의견을 먼저 이해하려고 한다." },
	{ id: 18, trait: "A", text: "누군가 어려움을 겪고 있으면 도와주고 싶은 마음이 드는 편이다." },
	{ id: 19, trait: "A", text: "갈등이 생겼을 때 이기기보다는 서로 해결할 방법을 찾으려고 한다." },
	{ id: 20, trait: "A", text: "다른 사람이 나에게 부탁했을 때 내가 손해를 보더라도 도와주는 경우가 많다." },

	// E. 신경성 / 정서적 민감성 (Neuroticism)
	{ id: 21, trait: "N", text: "사소한 일도 오래 걱정하는 편이다." },
	{ id: 22, trait: "N", text: "다른 사람이 나를 어떻게 생각하는지 신경을 많이 쓰는 편이다." },
	{ id: 23, trait: "N", text: "스트레스를 받으면 감정적으로 크게 흔들리는 편이다." },
	{ id: 24, trait: "N", text: "일이 잘못되면 최악의 상황까지 생각하는 경우가 있다." },
	{ id: 25, trait: "N", text: "기분이 좋았다가도 작은 일 때문에 기분이 크게 나빠질 때가 있다." },
];

export const LIKERT_OPTIONS = [
	{ value: 1, label: "전혀 그렇지 않다", shortLabel: "전혀 아님" },
	{ value: 2, label: "별로 그렇지 않다", shortLabel: "그렇지 않음" },
	{ value: 3, label: "보통이다", shortLabel: "보통" },
	{ value: 4, label: "대체로 그렇다", shortLabel: "그런 편" },
	{ value: 5, label: "매우 그렇다", shortLabel: "매우 그럼" },
];

export const BIG5_TRAIT_METAS: Record<Big5Trait, Big5TraitMeta> = {
	O: {
		code: "O",
		letter: "A",
		name: "개방성",
		englishName: "Openness",
		chartLabel: "개방적인",
		description: "새로운 경험, 지적 호기심, 창의성과 다양한 시각을 수용하는 정도를 나타냅니다.",
		highDesc: "상상력이 풍부하고 새로운 아이디어와 예술, 색다른 도전에 호기심이 많습니다.",
		lowDesc: "현실적이고 검증된 방식을 선호하며, 익숙하고 안정적인 일상을 추구합니다.",
	},
	C: {
		code: "C",
		letter: "B",
		name: "성실성",
		englishName: "Conscientiousness",
		chartLabel: "성실한",
		description: "목표를 향한 계획성, 책임감, 자기통제력과 끈기를 나타냅니다.",
		highDesc: "철저히 계획하고 약속을 중시하며, 일을 끝까지 책임감 있게 완수합니다.",
		lowDesc: "자유롭고 유연한 방식을 좋아하며, 규칙에 얽매이기보다 즉흥적인 실행을 즐깁니다.",
	},
	E: {
		code: "E",
		letter: "C",
		name: "외향성",
		englishName: "Extraversion",
		chartLabel: "외향적인",
		description: "외부 세계와의 상호작용, 사회적 에너지, 사교성과 적극성을 나타냅니다.",
		highDesc: "사람들과의 교류에서 활력을 얻고, 적극적으로 의사를 표현하며 활기찹니다.",
		lowDesc: "조용하고 차분한 시간을 소중히 여기며, 소수의 깊이 있는 관계에서 편안함을 느낍니다.",
	},
	A: {
		code: "A",
		letter: "D",
		name: "친화성",
		englishName: "Agreeableness",
		chartLabel: "친화적인",
		description: "타인에 대한 배려, 공감 능력, 협조성과 따뜻한 태도를 나타냅니다.",
		highDesc: "타인의 감정에 깊이 공감하고, 갈등을 조화롭게 풀며 남을 기꺼이 돕습니다.",
		lowDesc: "경쟁적이고 독립적이며, 감정보다는 객관적 사실과 현실적인 타당성을 우선시합니다.",
	},
	N: {
		code: "N",
		letter: "E",
		name: "신경성",
		englishName: "Neuroticism",
		chartLabel: "신경적인",
		description: "스트레스에 대한 민감도, 정서적 반응성과 걱정의 정도를 나타냅니다.",
		highDesc: "주변 환경과 스트레스에 민감하게 반응하며, 섬세하고 주의 깊은 감수성을 지닙니다.",
		lowDesc: "정서적으로 안정되어 있고 침착하며, 위기 상황에서도 쉽게 동요하지 않습니다.",
	},
};

// 순서 정의: A->B->C->D->E (개방성, 성실성, 외향성, 친화성, 신경성)
export const TRAIT_ORDER: Big5Trait[] = ["O", "C", "E", "A", "N"];

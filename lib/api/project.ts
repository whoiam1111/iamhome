// 프로젝트 id로 불러오기
export async function getOneProject(id: string) {
  return await fetch(
    `https://iphzyiiv62.execute-api.ap-northeast-2.amazonaws.com/prod/api/v1/events/${id}`
  );
}

// 전체 프로젝트 불러오기
export async function getProjects() {
  return await fetch(
    "https://iphzyiiv62.execute-api.ap-northeast-2.amazonaws.com/prod/api/v1/events?homepage=IAM&limit=100"
  );
}

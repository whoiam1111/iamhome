export async function getProjects() {
  return await fetch(
    "https://iphzyiiv62.execute-api.ap-northeast-2.amazonaws.com/prod/api/v1/events?homepage=IAM&limit=100"
  );
}

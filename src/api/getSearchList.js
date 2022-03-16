const baseURL = "https://dapi.kakao.com";

export const getSearchList = async (inputText) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `KakaoAK ${KAKAO_API_KEY}`,
    },
  };

  const response = await fetch(
    `${baseURL}/v2/search/web?query=${inputText}&sort=accuracy`,
    config
  );
  const data = await response.json();
  return data;
};

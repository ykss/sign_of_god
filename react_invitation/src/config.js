import { KAKAO_MAP_API_KEY, T_MAP_API_KEY } from "./API_KEY";

const config = {
  global: {
    kakaomapAPIKey: KAKAO_MAP_API_KEY,
    tmapAPIKey: T_MAP_API_KEY,
  },
  title: `유영창 장로의 출판 기념회`,
  book: `'하나님의 사인(Sign of GOD)'`,
  author: {
    name: "유영창",
  },
  place: {
    name: "목천교회 본당 (2층)",
    address: "서울 중랑구 용마산로 432(목천교회)",
    contact: "02-434-0153",
    latitude: 37.589756,
    longitude: 127.097318,
  },
  date: "2021년 12월 18일 토요일 3시",
};

export default config;

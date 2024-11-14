/**
 * MBTI를 계산해 콘솔에 출력하는 콘솔 프로그램을 작성해주세요.
 *
 * 아래 questions 배열은 MBTI를 계산하기 위한 문항들입니다.
 * 모든 문항에 대한 선택지는 다섯개로 동일하며 다음과 같습니다.
 *   매우 아니다, 아니다, 보통이다, 그렇다, 매우 그렇다
 *
 * 선택지에 따라 다음과 같이 점수를 부여합니다.
 *   매우 아니다는 disagree 타입에 2점
 *   아니다는 disagree 타입에 1점
 *   보통이다는 양쪽에 0점
 *   그렇다는 agree 타입에 1점
 *   매우 그렇다는 agree 타입에 2점
 *
 * 예를 들어 첫 번째 문항인 `다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.`에
 * 매우 아니다라고 답하면 E 타입에 2점
 * 아니다라고 답하면 E 타입에 1점
 * 보통이다라고 답하면 양쪽에 0점
 * 그렇다라고 답하면 I 타입에 1점
 * 매우 그렇다라고 답하면 I 타입에 2점을 부여합니다.
 *
 * 자리가 같은 두 알파벳의 점수가 같은 경우 다음과 같이 처리합니다.
 *   E == I: E
 *   S == N: N
 *   F == T: F
 *   P == J: P
 * 따라서 모든 항목에 보통이다라고 답하면 결과는 ENFP가 됩니다.
 *
 * 입력값에 오류는 없다고 가정합니다.
 *
 * 필요하다면 questions 변수의 내용을 임의로 바꾸셔도 괜찮습니다.
 *
 * 언어는 자바스크립트나 타입스크립트 모두 무방합니다.
 */

import { MBTICalculator } from "./class";
import { ResponseType } from "./enum";

// 아래에 코드를 작성해주세요. 사용자 응답은 코드에 상수로 작성해주세요.
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////
/// 사용자 응답 입니다
//////////////////////////////
const responses: ResponseType[] = [
  ResponseType.NORMAL, // 질문1
  ResponseType.NORMAL, // 질문2
  ResponseType.NORMAL, // 질문3
  ResponseType.NORMAL, // 질문4
  ResponseType.NORMAL, // 질문5
  ResponseType.NORMAL, // 질문6
  ResponseType.NORMAL, // 질문7
  ResponseType.NORMAL, // 질문8
];

const calculator = new MBTICalculator();
const mbti = calculator.getMBTI(responses);

console.log(`당신의 MBTI는 "${mbti}" 입니다!`);

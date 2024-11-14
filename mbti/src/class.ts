import { Question, QUESTIONS } from "./constant";
import { ResponseType } from "./enum";

export class MBTICalculator {
  private scores: Record<string, number>;

  constructor() {
    this.scores = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };
  }

  // 응답에 따른 점수 계산 함수
  private calculateScore(response: ResponseType, question: Question): void {
    if (response === ResponseType.STRONG_DISAGREE) {
      this.scores[question.disagree] += 2;
    } else if (response === ResponseType.DISAGREE) {
      this.scores[question.disagree] += 1;
    } else if (response === ResponseType.AGREE) {
      this.scores[question.agree] += 1;
    } else if (response === ResponseType.STRONG_AGREE) {
      this.scores[question.agree] += 2;
    }
  }

  // 최종 MBTI 결과 계산
  private calculateMBTI(): string {
    if (this.scores.E === this.scores.I) this.scores.E += 1;
    if (this.scores.S === this.scores.N) this.scores.N += 1;
    if (this.scores.F === this.scores.T) this.scores.F += 1;
    if (this.scores.P === this.scores.J) this.scores.P += 1;

    const selectedTraits = Object.entries(this.scores)
      .filter(([key, value]) => value === 1)
      .map(([key, value]) => key)
      .join("");

    return selectedTraits;
  }

  // 모든 질문과 응답을 받아 MBTI를 계산하는 함수
  public getMBTI(responses: ResponseType[]): string {
    QUESTIONS.forEach((question, index) => {
      this.calculateScore(responses[index], question);
    });

    return this.calculateMBTI();
  }
}

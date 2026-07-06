# CREDITS / 출처 및 라이선스

이 저장소 `codex-lp-builder-ko`는 원본 일본어 키트 `codex-lp-builder-ja`를 한국 사용자와 한국형 모바일 랜딩페이지 제작 흐름에 맞게 번역·현지화한 파생 버전입니다.

한국어판의 목적은 다음과 같습니다.

- Codex에서 한국어로 사전 인터뷰를 진행합니다.
- 한국 시장의 일반적인 전환 경로인 카카오톡 문의, 전화 상담, 신청 폼, 네이버 폼 등을 고려합니다.
- 모바일 390px/430px 기준으로 LP 제작과 QA를 진행합니다.
- 개인정보 수집, 표시광고, 후기·성과 표현, 배포 전 사람 승인 기준을 명확히 합니다.
- 원본과 참고 프로젝트의 저작권 및 MIT 라이선스 표기를 유지합니다.

---


## 제품판 추가 고지

이 100점 제품판에는 한국 실무자의 판매·교육·배포 사용성을 높이기 위해 다음 독자 문서가 추가되었습니다.

- `reference/design-system.md`: 한국형 모바일 디자인 시스템
- `reference/cta-patterns.md`: 업종별 CTA 패턴
- `reference/compliance-templates.md`: 개인정보·표시광고·후기 문구 템플릿
- `reference/deployment-checklist.md`: 공개 배포 전 체크리스트
- `reference/test-scenarios.md`: 교육·검수용 실행 테스트
- `examples/*.md`: 실무 예시 `lp-spec.md`

이 추가 문서들은 한국어판 제작 과정에서 새로 작성된 현지화·제품화 자료입니다. 법률 자문을 대체하지 않으며, 실제 공개 전에는 사업자와 업종에 맞게 검토해야 합니다.

## 1. 한국어판 변경 요약

| 구분 | 한국어판 변경 내용 |
|---|---|
| 언어 | 일본어 중심 설명을 한국어 중심 설명으로 변경 |
| 진행 방식 | 원본의 일본어식 인터뷰 표현을 한국 사용자가 이해하기 쉬운 “사전 인터뷰” 흐름으로 변경 |
| LP 기준 | 한국형 모바일 LP, 카카오톡 CTA, 전화 상담, 신청 폼 기준 반영 |
| 법적 주의 | 개인정보, 표시광고, 후기·성과 문구, 배포 전 승인 규칙 강화 |
| Codex 사용성 | `AGENTS.md`, `skills`, `prompts`, `reference` 구조를 한국어 사용자가 이해하기 쉽게 정리 |
| 보존 항목 | 원본 출처, 참고 프로젝트, MIT 라이선스 원문은 보존 |

---

## 2. 원본 및 참고 프로젝트

| 한국어판 구성 | 원본·참고 | 저자 | 라이선스 | 한국어판에서의 활용 |
|---|---|---|---|---|
| `skills/lp-grilling` | GrillMe / grilling | Matt Pocock | MIT | 한 번에 하나씩 질문하며 LP 사양을 확정하는 인터뷰 방식의 토대 |
| `prompts/goal-loop.md` | goal-setter-skill / makeloop | gotalab / usedhonda | MIT | 목표, 검증, 반복, 중단 조건을 고정하는 루프 설계 방식의 토대 |
| `skills/lp-builder` | 이미지 기반 LP 제작 워크플로 아이디어 | 독자 재구성 | 독자 구현 | 이미지 슬라이스와 HTML 기능화를 분리하는 모바일 LP 제작 흐름 |
| 전체 키트 | codex-lp-builder-ja | fuuuuuuma | MIT | Codex에서 사전 인터뷰 → LP 자동 생성으로 이어지는 배포 키트 구조 |

---

## 3. GrillMe / grilling 출처

- 저장소: https://github.com/mattpocock/skills
- 관련 경로: `skills/productivity/grill-me`, `skills/productivity/grilling`
- 저자: Matt Pocock
- 라이선스: MIT

이 한국어판에서는 “질문은 한 번에 하나씩 진행하고, 각 질문에 추천안을 붙이며, 결정 과정을 단계적으로 좁혀간다”는 방식을 LP 사양 확정용 인터뷰 흐름으로 재구성했습니다.

### MIT License

```text
MIT License

Copyright (c) 2026 Matt Pocock

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 4. goal-setter-skill / makeloop 출처

- goal-setter-skill: https://github.com/gotalab/goal-setter-skill
- makeloop: https://github.com/usedhonda/makeloop
- 저자: gotalab / usedhonda
- 라이선스: MIT

이 한국어판에서는 “완료 조건, 검증 기준, 반복 상한, 중단 조건을 명확히 고정한다”는 루프 설계 원칙을 모바일 LP 제작 QA 흐름에 맞게 재구성했습니다.

### MIT License

```text
MIT License

Copyright (c) 2026 gotalab
Copyright (c) 2026 usedhonda

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 5. 이미지 기반 LP 제작 워크플로

`skills/lp-builder`는 특정 단일 오픈소스를 그대로 복사한 것이 아니라, “시각 디자인은 이미지 슬라이스로 빠르게 만들고, CTA·영상·폼 같은 실제 기능은 HTML로 구현한다”는 2단계 제작 방식을 한국형 모바일 LP에 맞게 독자적으로 재구성한 것입니다.

한국어판에서는 다음 기준을 추가했습니다.

- 모바일 우선 폭: 390px / 430px
- CTA: 카카오톡 문의, 전화, 신청 폼, 상담 예약
- QA: 가로 스크롤, 터치 영역, 폼 동작, 개인정보 동의, 과장 문구 점검
- 배포: GitHub Pages 또는 Vercel 사용 가능, 단 공개 전 사람 승인 필수

---

## 6. 한국어판 독자 작업

- 한국어 현지화: 일본어 중심 안내를 한국어 사용자용으로 재작성
- LP 흐름 현지화: 한국형 모바일 LP 구조, CTA, 폼, 상담 전환 기준 반영
- 안전 기준 강화: 개인정보, 표시광고, 후기·성과 표현, 배포 전 승인 규칙 반영
- 설명 문서 보강: README, onepager, slides, agents metadata, CREDITS 정리

---

## 7. 원문 보존 섹션

아래 내용은 원본 일본어 키트의 출처 표기를 보존하기 위한 원문입니다. 한국어판의 실행 안내는 위 한국어 섹션을 기준으로 보면 됩니다.

> **codex-lp-builder-ja** は、優れた先行オープンソースの考え方を土台に、
> 「Codex で壁打ち → LP を自走生成する」配布キットとして日本語ファーストに再構成した派生版です。
> 原典に深く感謝します。
>
> 本キットの収録物と原典の対応:
>
> | 本キット | 由来・参考 | 作者 | ライセンス |
> |---|---|---|---|
> | `skills/lp-grilling`（壁打ち） | GrillMe / grilling | Matt Pocock | MIT |
> | `prompts/goal-loop`（/goal ループ） | goal-setter-skill ／ makeloop | gotalab ／ usedhonda | MIT |
> | `skills/lp-builder`（LP生成） | Image2スタイルの「画像で見た目・HTMLで機能」2プロンプトLPワークフロー | — | 独自実装 |
>
> 変更点の概要: 名称・説明・手順の全面リブランド、日本語ファースト化、LP制作向けへの特化、壁打ち→/goalループ→LP生成→QA を 1 つの Codex ワークフローへ統合。中核の発想は原典の設計を尊重しています。

---

## 8. 라이선스 안내

이 저장소는 MIT 라이선스를 따릅니다. 자유롭게 사용, 수정, 배포할 수 있습니다. 단, 원본과 참고 프로젝트의 저작권 및 라이선스 표기는 함께 보존해 주세요.

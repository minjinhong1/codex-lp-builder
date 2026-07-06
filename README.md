# codex-lp-builder-ko

**한국 실무자가 바로 판매·교육·배포에 활용할 수 있는 모바일 랜딩페이지 제품판 키트입니다.**

Codex 데스크톱 앱에서 이 폴더를 프로젝트로 열면, AI가 바로 LP를 만들지 않고 먼저 **사전 인터뷰**를 진행합니다. 사업 내용, 타깃, 오퍼, CTA, 참고 URL을 한 문항씩 확인한 뒤 `lp-spec.md` 설계서를 만들고, 그 설계서를 기준으로 이미지 생성, HTML 제작, QA, 배포 전 승인까지 진행합니다.

이 100점 제품판은 단순 한국어 번역본이 아니라, 한국 실무자가 **클라이언트 납품, 내부 교육, 강의 실습, GitHub/Vercel 배포**에 바로 사용할 수 있도록 예시 사양서, 테스트 시나리오, 법적 문구 템플릿, 디자인 시스템, 배포 전 체크리스트를 추가한 버전입니다.

원본은 일본어 저장소 `codex-lp-builder-ja`이며, 이 버전은 한국 사용자와 한국형 모바일 LP 제작에 맞게 언어, 질문, 법적 주의사항, 카피 기준, 배포 흐름을 재구성한 한국어판입니다. 라이선스와 원저작자 표기는 `LICENSE`, `CREDITS.md`를 유지했습니다.

---

## 100점 제품판 기준

이 키트는 아래 기준을 만족하도록 구성되어 있습니다.

| 기준 | 포함 내용 |
|---|---|
| 실무 사용성 | AI 강의, 로컬 서비스, B2B SaaS 예시 `lp-spec.md` 포함 |
| 교육 가능성 | 강의/워크숍에서 그대로 사용할 수 있는 테스트 시나리오 포함 |
| 배포 가능성 | GitHub Pages, Vercel 배포 전 확인 문서 포함 |
| 법적 안전성 | 개인정보 수집 문구, 과장 광고 대체 문구, 후기·성과 표현 기준 포함 |
| 디자인 일관성 | 390~430px 모바일 디자인 시스템과 CTA 패턴 포함 |
| QA 완성도 | 기능, 디자인, 모바일, 속도, 카피, 법적 리스크, 배포 준비까지 100점 체크 |

---

## 핵심 특징

1. **바로 만들지 않고 먼저 묻습니다.** 1차 응답에서 HTML이나 이미지를 만들지 않고, 한 문항씩 질문해 `lp-spec.md`를 확정합니다.
2. **한국형 모바일 LP 기준입니다.** 스마트폰 폭, 한국식 CTA, 카카오톡 문의, 네이버/인스타/유튜브 유입 등을 고려합니다.
3. **품질 루프를 돌립니다.** 기능, 디자인, 모바일·속도, 카피·법적 리스크, 배포 준비 관점에서 점검합니다.
4. **교육·판매용 예시가 포함되어 있습니다.** 실무자가 샘플을 보고 바로 수업, 납품, 내부 자동화에 적용할 수 있습니다.
5. **배포까지 고려합니다.** GitHub Pages 또는 Vercel 배포를 선택할 수 있습니다.

---

## 폴더 구조

```text
codex-lp-builder-ko/
├─ AGENTS.md                              # Codex가 가장 먼저 읽는 전체 지휘 문서
├─ README.md                              # 사용 설명서
├─ prompts/
│  └─ goal-loop.md                         # /goal 품질 루프 지시문
├─ skills/
│  ├─ lp-grilling/
│  │  ├─ SKILL.md                          # 사전 인터뷰 스킬
│  │  └─ references/question-bank.md       # 질문 은행
│  └─ lp-builder/
│     ├─ SKILL.md                          # 이미지/HTML/QA/배포 스킬
│     └─ references/
│        ├─ qa-checklist.md                # QA 체크리스트
│        └─ shareable-prompts.md           # 이미지/카피 프롬프트 예시
├─ reference/
│  ├─ connections.md                       # 이미지 생성과 배포 연결 가이드
│  ├─ lp-playbook.md                       # 한국형 LP 설계 플레이북
│  ├─ ai-lp-notes.md                       # AI LP 제작 주의사항
│  ├─ design-system.md                     # 한국형 모바일 디자인 시스템
│  ├─ cta-patterns.md                      # 업종별 CTA 패턴
│  ├─ compliance-templates.md              # 개인정보/표시광고/후기 문구 템플릿
│  ├─ deployment-checklist.md              # 공개 배포 전 체크리스트
│  └─ test-scenarios.md                    # 교육·검수용 실행 테스트
├─ examples/
│  ├─ ai-course-lp-spec.md                 # AI 강의 신청 LP 예시
│  ├─ local-service-lp-spec.md             # 로컬 서비스 예약 LP 예시
│  └─ b2b-saas-lp-spec.md                  # B2B 문의 LP 예시
├─ onepager.html                           # 교육/영업용 한 장 소개 페이지
└─ slides.html                             # 교육/세일즈 소개 슬라이드
```

---

## 사용 방법

1. 이 폴더를 Codex 데스크톱 앱에서 **프로젝트로 열기**
2. Codex에게 “LP 만들어줘” 또는 “이 키트로 랜딩페이지 만들고 싶어”라고 말하기
3. Codex가 묻는 질문에 답하기
4. `lp-spec.md`가 생성되면 내용을 확인하고 승인하기
5. `/goal` 품질 루프를 실행하기
6. 이미지 생성, HTML 제작, QA 진행
7. `reference/deployment-checklist.md`로 배포 전 확인하기
8. GitHub Pages 또는 Vercel 중 배포 방식을 선택하기

---

## 시작 문장 예시

```text
이 키트로 한국어 모바일 랜딩페이지를 만들고 싶습니다.
상품은 AI 업무 자동화 강의이고, 신청 CTA가 있는 페이지가 필요합니다.
먼저 질문부터 시작해 주세요.
```

교육 실습용으로 시작할 때는 이렇게 입력해도 됩니다.

```text
examples/ai-course-lp-spec.md를 참고해서 같은 구조의 한국형 모바일 LP를 만들어 주세요.
다만 그대로 복사하지 말고, 내 상품 정보에 맞게 사전 인터뷰부터 진행해 주세요.
```

---

## 중요한 안전 규칙

- `lp-spec.md`가 없으면 빌드하지 않습니다.
- 공개, 배포, 결제, 폼 연동, 외부 전송 전에는 사용자의 승인을 받습니다.
- 근거 없는 과장 표현을 쓰지 않습니다.
- 한국 법규상 위험한 표현은 수정 제안합니다.
- CTA는 기본적으로 1개만 사용합니다.
- 개인정보 수집 폼에는 수집 항목, 이용 목적, 보유 기간, 동의 문구, 처리방침 링크 확인 항목을 둡니다.
- 법률 자문이 필요한 업종은 “전문가 검토 필요”로 표시합니다.

---

## 배포 전 최종 확인

배포 전에는 반드시 아래 파일을 확인합니다.

```text
reference/deployment-checklist.md
skills/lp-builder/references/qa-checklist.md
reference/compliance-templates.md
```

완성 보고에는 다음을 반드시 포함합니다.

```text
생성 파일
핵심 CTA
QA 점수표
법적/운영 확인 항목
미확정 링크
배포 방식 선택 요청
```

---

## 라이선스 / 출처

- 본 키트의 원본 구조는 `codex-lp-builder-ja`를 기반으로 합니다.
- 원본 및 파생 아이디어에 대한 표기는 `CREDITS.md`를 유지했습니다.
- 라이선스는 `LICENSE`를 확인하세요.

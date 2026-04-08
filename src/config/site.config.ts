// src/config/site.config.ts
// 랜딩 페이지 전체 텍스트/콘텐츠 중앙 설정.
// 새 프로젝트 재사용 시 이 파일만 수정.

export const siteConfig = {
  site: {
    name: "Claude Code Class",
    title: "Claude Code Class",
    description: "하루 1시간, 5일 Claude Code 클래스",
    folderName: "claude-code-class",
    gitCloneUrl: "",
  },

  hero: {
    badge: "Claude Code Class",
    titleBefore: "'나중에 해야지' 했던",
    titleHighlight: "Claude Code,",
    titleAfter: "지금이 기회입니다.",
    subtitle: "바빠서 미루게 되는 Claude Code,\n지금 같이 해봅시다.\n앱에서 채팅하던 때와는 차원이 다른\n결과물, 자동화가 실제로 가능해집니다.",
  },

  whyNow: {
    heading: "왜 지금이 Claude Code를\n시작하기 좋은 타이밍인가?",
    items: [
      {
        icon: "Cpu",
        title: "AI가 일하는 방식이 바뀌고 있습니다",
        desc: "ChatGPT 채팅을 넘어, AI가 파일을 만들고 도구를 연결하고 자동화까지 하는 시대. 이전과는 차원이 다른 생산성을 만들 수 있습니다.",
      },
      {
        icon: "Layers",
        title: "코딩을 몰라도 됩니다",
        desc: "한국어로 원하는 걸 말하면 됩니다. AI가 계획을 세우고, 코드를 작성하고, 실행합니다. 우리는 결과를 확인하고 방향을 조정할 뿐입니다.",
      },
      {
        icon: "Clock",
        title: "미루면 격차가 됩니다",
        desc: "'나중에 해야지'가 6개월 뒤에는 따라잡기 어려운 차이가 됩니다. 같이 시작하면 훨씬 쉽습니다.",
      },
    ],
  },

  whatWeLearn: {
    heading: "우리가 배우는 건\n코딩이 아닙니다",
    intro: [
      "AI가 **내 생각대로** 계획을 세우고, 자료를 분석하고, 일할 수 있도록 시스템을 만드는 법을 배웁니다.",
      "코드를 직접 작성하는 게 아닙니다. 한국어로 원하는 걸 말하면, Claude Code가 계획을 세우고 실행합니다.",
    ],
    tabs: [
      {
        title: "회의록 → 자동 요약",
        icon: "BookOpen",
        user: "어제 회의록 파일들 전부 읽고, 결정된 사항이랑 오늘 할 일만 뽑아서 markdown으로 정리해줘.",
        claude: [
          "네, 회의록을 분석하여 요약하겠습니다.",
          "Reading files...",
          "회의록 요약이 완료되었습니다. 결정 사항과 할 일을 markdown 파일로 저장했습니다.",
        ],
      },
      {
        title: "데이터 → 분석 리포트",
        icon: "Zap",
        user: "이번 주 주간 보고서 데이터를 분석해서 요약해줘.",
        claude: [
          "네, 주간 보고서 데이터를 분석하겠습니다.",
          "Analyzing data...",
          "분석이 완료되었습니다. 주요 지표 변화와 인사이트를 요약했습니다.",
        ],
      },
      {
        title: "반복 업무 → 자동화",
        icon: "Layers",
        user: "매주 월요일마다 팀원들 주간보고를 수집해서, 부서별로 묶고 요약본을 만들어주는 자동화를 세팅해줘.",
        claude: [
          "네, 주간보고 자동화 파이프라인을 구성하겠습니다.",
          "Creating automation script...",
          "완료했습니다. 매주 월요일 팀원 보고서를 수집 → 부서별 분류 → 요약본 생성까지 자동 실행됩니다.",
        ],
      },
    ],
  },

  curriculum: {
    heading: "하루 1시간씩,\n딱 5일이면 충분합니다",
    days: [
      {
        day: 1,
        title: "기본기 마스터",
        desc: "Claude Code와 인사하고, 첫 번째 자동화 스크립트를 만들어봅니다.",
        topics: ["AI에게 잘 시키는 법", "왜 Claude인가", "첫 번째 자동화 스크립트"],
      },
      {
        day: 2,
        title: "파일 다루기",
        desc: "여러 파일을 동시에 수정하고, 프로젝트 구조를 이해하는 방법을 배웁니다.",
        topics: ["프로젝트 구조 파악", "다중 파일 동시 수정", "코드 리팩토링 기초"],
      },
      {
        day: 3,
        title: "도구 연결하기",
        desc: "MCP를 활용해 외부 도구(Slack, Notion 등)와 연동하는 방법을 익힙니다.",
        topics: ["MCP 개념 이해", "외부 API 연동", "데이터 가져오기 및 가공"],
      },
      {
        day: 4,
        title: "나만의 Skill",
        desc: "자주 쓰는 명령어를 커스텀 Skill로 만들어 업무 효율을 극대화합니다.",
        topics: ["커스텀 Skill 제작", "반복 업무 자동화", "나만의 명령어 세팅"],
      },
      {
        day: 5,
        title: "실전 프로젝트",
        desc: "배운 내용을 종합하여 나만의 자동화 파이프라인을 완성합니다.",
        topics: ["실전 파이프라인 구축", "에러 핸들링", "과정 수료 및 졸업"],
      },
    ],
  },

  oneMoreThing: {
    heading: "앞으로 이런 것들도\n도전해보세요",
    cards: [
      {
        icon: "Layers",
        iconColor: "orange",
        title: "에이전트 팀 만들기",
        desc: "Claude Code를 여러 개 동시에 실행해서 각각 다른 역할을 맡기세요. 하나는 리서치, 하나는 문서 작성, 하나는 검증 — 마치 팀처럼 협업합니다.",
        codeBlock: "# 팁: 각각 다른 규칙 설정\nCLAUDE.md",
      },
      {
        icon: "Zap",
        iconColor: "blue",
        title: "나만의 자동화 파이프라인",
        desc: "Skill + MCP + CLAUDE.md를 조합해서 완전 자동화 워크플로우를 만드세요. 예: 매주 월요일 Notion에서 주간 업무 → 자동 보고서 생성.",
        link: { url: "https://github.com/modelcontextprotocol/servers", text: "MCP 서버 목록 보기" },
      },
    ],
  },

  faq: {
    items: [
      {
        q: "결제가 필요한가요?",
        a: "Cursor 에디터는 무료 플랜으로 충분합니다. 단, Claude Code를 사용하기 위해서는 Claude Pro($20/월) 구독이 필수적으로 필요합니다.",
      },
      {
        q: "코딩을 전혀 모르는데 괜찮을까요?",
        a: "네, 코딩 지식이 없어도 한국어로 대화하며 진행할 수 있도록 커리큘럼이 구성되어 있습니다. AI가 코드를 작성하고 실행하는 과정을 자연스럽게 익히게 됩니다.",
      },
      {
        q: "중간에 막히면 어떻게 하나요?",
        a: "에러 메시지를 그대로 복사해서 Claude에게 물어보면 대부분 해결 방법을 알려줍니다. 그래도 해결이 어렵다면 아래 추천 레퍼런스를 참고해주세요.",
      },
      {
        q: "Windows 환경에서도 똑같이 되나요?",
        a: "네, 가능합니다. 다만 터미널 환경이 조금 다를 수 있어, 본 페이지의 '간단한 사전 세팅'에서 Windows 탭을 선택하여 안내된 주의사항을 꼭 확인해주세요.",
      },
    ],
    contactPerson: "담당자",
  },

  footer: {
    headline: "내일은,\n오늘 시작됩니다.",
    subline: "처음은 원래 어렵고 막막합니다.\n하지만 일단 시작할 때 진짜 변화가 만들어집니다.",
    ctaText: "지금 바로 시작하기",
    copyright: "© 2026 · Claude Code Class",
    contactPerson: "",
  },

  reference: {
    heading: "추천 레퍼런스",
    subheading: "Claude Code를 더 깊이 활용하고 싶다면, 아래 자료들을 참고하세요.",
    articles: [
      {
        title: "Anthropic 해커톤 우승자가 공유한 Claude Code 실전 팁 70가지",
        source: "요즘IT",
        author: "요즘 프로덕트 메이커",
        date: "2026.02.13",
        desc: "Anthropic 해커톤 우승자와 DevRel 팀이 공유한 Claude Code 실전 팁 70가지. 컨텍스트 관리, 태스크 분해, 프롬프트 전략까지.",
        url: "https://yozm.wishket.com/magazine/detail/3607",
        tags: ["실전 팁", "프롬프트", "워크플로우"],
      },
      {
        title: "30가지 이상의 Claude Code 활용 팁 모음",
        source: "PyTorch 한국 커뮤니티",
        author: "박정환 (9bow)",
        date: "2025.12.08",
        desc: "환경 설정, 효과적인 소통법, 워크플로우 관리, Git/DevOps 자동화, 고급 기법까지 5개 카테고리로 정리된 Claude Code 팁 모음.",
        url: "https://discuss.pytorch.kr/t/30-claude-code-feat-ykdojo-claude-code-tips/8368",
        tags: ["팁 모음", "Git 자동화", "환경 설정"],
      },
      {
        title: "갓대희의 작은공간 - Claude Code 시리즈",
        source: "갓대희의 작은공간",
        author: "갓대희",
        date: "연재중",
        desc: "CLAUDE.md 활용법, Anthropic Academy 가이드, 메모리 시스템, Skills 사용법 등 Claude Code 기능별 심층 가이드 시리즈.",
        url: "https://goddaehee.tistory.com/category/AI/Claude",
        tags: ["CLAUDE.md", "메모리", "Skills"],
      },
      {
        title: "Claude Code 고수들은 이렇게 쓴다: 생산성 극대화 꿀팁 모음",
        source: "훈스로그",
        author: "박승훈",
        date: "연재중",
        desc: "Claude Code의 Command, Skill, Subagent, Hooks 등 고급 기능 활용법과 토큰 관리 노하우까지.",
        url: "https://blog.huns.site/blog/posts/ai/claude",
        tags: ["고급 기능", "Hooks", "토큰 관리"],
      },
    ],
  },
} as const;

import {MainCareerItemProps} from "components/main-career-item/main-career-item.component";
import {
    MainCoreCompetenciesItemProps
} from "components/main-core-competencies-item/main-core-competencies-item.component";
import {HeaderTab} from "ui-component/header/header.component";

// for Header
export const HEADER_LOGO_ROOT: string = '/images/logo/logo_white.svg';
export const HEADER_TABS: HeaderTab[] = [
    {
        headerTabName: 'Profile',
        headerTabChilds: [
            {
                headerTabChildName: '개인정보',
                headerTabChildRoot: '/profile/info'
            },
            {
                headerTabChildName: '경력',
                headerTabChildRoot: '/career'
            },
        ]
    },
    {
        headerTabName: 'Projects',
        headerTabChilds: [
            {
                headerTabChildName: '차세대 프론트엔드',
                headerTabChildRoot: '/project/frontend'
            },
            {
                headerTabChildName: '전형흐름 관리',
                headerTabChildRoot: '/project/selection-flow'
            }
        ]
    },
    {
        headerTabName: 'Blog',
        headerTabChilds: [],
        linkUrl: 'https://velog.io/@hajae305',
        isNewWindow: true,
    },
    {
        headerTabName: 'Github',
        headerTabChilds: [],
        linkUrl: 'https://github.com/jaehyeong305',
        isNewWindow: true,
    },
    {
        headerTabName: 'Download',
        headerTabChilds: [
            {
                headerTabChildName: '이력서',
                headerTabChildRoot: 'resume',
                fileName: 'jaehyeong.ha-resume.pdf',
                isDownload: true,
            },
            {
                headerTabChildName: '자기소개서',
                headerTabChildRoot: 'self-introduction',
                fileName: 'jaehyeong.ha-self-introduction.pdf',
                isDownload: true,
            }
        ]
    },
]

// for main career
export const MAIN_CAREER_ITEMS: MainCareerItemProps[] = [
    {
        imgUrl: "/images/bizreach-img.png",
        imgDiscription: "일본 전직(転職)사이트 1위 기업",
        title: "일본기업 Bizreach(ビズリーチ) 입사",
        description: "일본 전직(転職) 업계 1위 기업. 신졸(新卒) 엔지니어로 취업성공하여 일본생활을 시작한 시기. \n" +
            "입사 후, 5개월동안 신입 연수(비즈니스 매너, 개발 연수 등)를 수료. \n\n " +
            "◼︎ 회사명 : 株式会社 ビズリーチ \n" +
            "◼︎ 사원수 : 2,000명↑, 매출액 : 4,395억 \n" +
            "◼︎ 회사소개 : 전직(転職), 헤드헌터 및 하이 클래스 채용",
        linkTitle: "기업정보확인",
        linkUrl: "https://www.bizreach.co.jp/corporate_info/profile/",
        linkIsNewWindow: true
    },
    {
        imgUrl: "/images/hrmos-img.png",
        imgDiscription: "Hrmos 채용",
        title: "Hrmos채용 부서에 배속",
        description: "'Hrmos채용 Product본부 개발2팀'에 배속받아 개발 업무를 시작.\n\n" +
            "◼︎ 부서소개 : 채용 관리 시스템. 기업의 인사, 채용을 지원 (B2B, SaaS)\n " +
            "◼︎ 소속팀 : DeepDive (리더 1, 팀원 5, QA 1)\n " +
            "◼︎ 주요업무 : 웹페이지 유지보수(풀스택 개발자)\n " +
            "◼︎ 기술스택 : Scala(Play), AngularJS(TypeScript)",
        linkTitle: "Hrmos 확인",
        linkUrl: "https://hrmos.co/?utm_source=bizreach.co.jp&utm_medium=referral&trcd=biz_corp&_ga=2.124455242.1341871500.1691029247-2048989049.1684221352",
        linkIsNewWindow: true
    },
    {
        imgUrl: "/images/award.png",
        imgDiscription: "해당 프로젝트로 우수상팀 수상",
        title: "전형 흐름 관리(selection flow) 프로젝트",
        description: "◼︎ 개요 : 고정적인 전형 흐름을 커스터마이징하는 기능을 추가\n" +
            "◼︎ 규모 : PM 1, 개발자 12, 디자이너 3, QA 2, CS 3↑ \n\n" +
            " ▹ 주요 업무(Full-Stack)\n" +
            "• 테이블(DB) 설계/수정\n" +
            "• 화면 설계\n" +
            "• Backend, Frontend 개발\n" +
            "• 1주 단위 스프린트로 업무를 계획/수행\n" +
            "• CS(Customer Success)와 디자이너와 커뮤니케이션\n" +
            "• 코드리뷰 & 에러감시\n",
        linkTitle: "",
        linkUrl: "/project/selection-flow",
        linkIsNewWindow: false
    },
    {
        imgUrl: "/images/angular-upgrade.png",
        imgDiscription: "AngularJS에서 Angular12로 업그레이드",
        title: "차세대 프론트엔드 프로젝트",
        description: "◼︎ 개요 : 서포트 종료 될 AngularJS에 취약성 검출, Angular12로 업그레이드\n" +
            "◼︎ 규모 : PM 1, 개발자 6(사원 2, SES 4), QA 3 \n\n" +
            " ▹ 주요 업무(Front-End)\n" +
            "• 기존에 작성되어 있는 AngularJS코드를 Angular 12버전으로 새롭게 작성\n" +
            "• UI컴포넌트 작성\n" +
            "• 기존에 잠재되어 있던 버그 수정\n" +
            "• 1주 단위 스프린트로 업무를 계획/수행\n" +
            "• CS(Customer Success)와 디자이너와 커뮤니케이션\n" +
            "• 코드리뷰 & 에러감시",
        linkTitle: "",
        linkUrl: "/project/frontend",
        linkIsNewWindow: false
    }
]

export const MAIN_CORE_COMPETENCIES_ITEMS: MainCoreCompetenciesItemProps[] = [
    {
        imageUrl: "/images/core-competencies/core1.png",
        itemTitle: "풀스택 개발 경험",
        itemDescription: "풀스택 개발 경험을 통해 프로젝트의 전반적인 흐름을 이해하고, 문제 발생 시 빠르게 대응하며 효율적인 솔루션을 제공할 수 있습니다."
    },
    {
        imageUrl: "/images/core-competencies/core2.png",
        itemTitle: "프론트엔드 프레임워크(Angular) 개발 경험",
        itemDescription: "취약성이 발견된 AngularJS에서 Angular12 버전으로 업그레이드하며 코드 리팩토링과 아키텍처 통일화 작업을 수행한 경험을 통해 안정적이고 유지보수 가능한 코드베이스를 구축할 수 있습니다."
    },
    {
        imageUrl: "/images/core-competencies/core3.png",
        itemTitle: "다른 직종과의 협업과 커뮤니케이션 능력",
        itemDescription: "각 팀원의 전문성과 역할을 이해하고, 서로를 존중하는것이 중요합니다. 디자이너와 개발자들이 서로의 제안을 수용하고 협력하여 최적의 사용자 경험을 만들 수 있었습니다."
    },
    {
        imageUrl: "/images/core-competencies/core4.png",
        itemTitle: "유연한 적응력으로 글로벌 환경에서의 협업 경험",
        itemDescription: "저는 새로운 문화와 규칙에 적응한 경험이 있고 다양한 배경과 가치관을 가진 사람들과 함께 일한 경험이 있습니다. 이를 통해 저는 다른 문화에 대한 이해와 존중, 그리고 적응력을 키웠습니다."
    }
]
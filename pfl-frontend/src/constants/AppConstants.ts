import {MainCareerItemProps} from "components/main-career-item/main-career-item.component";
import {HeaderTab} from "ui-component/header/header.component";

// for Header
export const HEADER_LOGO_ROOT: string = 'images/logo-black-removebg.png';
export const HEADER_TABS: HeaderTab[] = [
    {
        headerTabName: 'Profile',
        headerTabChilds: [
            {
                headerTabChildName: '개인정보',
                headerTabChildRoot: 'profile'
            },
            {
                headerTabChildName: '학력/경력',
                headerTabChildRoot: 'career'
            },
            {
                headerTabChildName: '어학',
                headerTabChildRoot: 'language'
            },
            {
                headerTabChildName: '취미',
                headerTabChildRoot: 'hobby'
            },
        ]
    },
    {
        headerTabName: 'Projects',
        headerTabChilds: [
            {
                headerTabChildName: '차세대 프론트엔드',
                headerTabChildRoot: 'frontend'
            },
            {
                headerTabChildName: '전형흐름 관리',
                headerTabChildRoot: 'selection-flow'
            }
        ]
    },
    {
        headerTabName: 'Blog',
        headerTabChilds: [],
        isNewWindow: true,
    },
    {
        headerTabName: 'Github',
        headerTabChilds: [],
        isNewWindow: true,
    },
    {
        headerTabName: 'Download',
        headerTabChilds: [
            {
                headerTabChildName: '이력서',
                headerTabChildRoot: 'resume'
            },
            {
                headerTabChildName: '경력기술서',
                headerTabChildRoot: 'work-experience'
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
        description: "일본 전직(転職) 업계 1위 기업. 신졸(新卒) 엔지니어로 취업성공하여 일본생활을 시작한 시기. \n 입사 후, 5개월동안 신입 연수(비즈니스 매너, 개발 연수 등)를 수료. \n \n 회사명 : 株式会社 ビズリーチ \n 사원수 : 2,000명↑, 매출액 : 4,395억 \n 회사소개 : 전직(転職), 헤드헌터 및 하이 클래스 채용",
        linkTitle: "기업정보확인",
        linkUrl: "https://www.bizreach.co.jp/corporate_info/profile/",
        linkIsNewWindow: true
    },
    {
        imgUrl: "/images/hrmos-img.png",
        imgDiscription: "Hrmos 채용",
        title: "Hrmos채용 부서에 배속",
        description: "'Hrmos채용 Product본부 개발2팀'에 배속받아 개발 업무를 시작.\n\n부서소개 : 채용 관리 시스템. 기업의 인사, 채용을 지원 (B2B, SaaS)\n 소속팀 : DeepDive (리더 1, 팀원 5, QA 1)\n 주요업무 : 웹페이지 유지보수(풀스택 개발자)\n 기술스택 : Scala(Play), AngularJS(TypeScript)",
        linkTitle: "Hrmos 확인",
        linkUrl: "https://hrmos.co/?utm_source=bizreach.co.jp&utm_medium=referral&trcd=biz_corp&_ga=2.124455242.1341871500.1691029247-2048989049.1684221352",
        linkIsNewWindow: true
    },
    {
        imgUrl: "/images/selection-flow-img.png",
        imgDiscription: "포지션에 따라 전형흐름 커스터마이징",
        title: "전형 흐름 관리(selection flow) 프로젝트",
        description: "개요 : 고정적인 전형 흐름을 커스터마이징하는 기능을 추가\n 규모: PM: 1, 개발자: 12, 디자이너: 3, QA: 2, CS: 3↑ \n 담당업무: ",
        linkTitle: "> 더보기",
        linkUrl: "/project/selection-flow",
        linkIsNewWindow: false
    }
]
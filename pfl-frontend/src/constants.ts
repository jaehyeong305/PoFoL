import {HeaderTab} from "./ui-component/header/header.component";

// for Header

export const HEADER_LOGO_ROOT: string = '/images/logo-black.png';
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
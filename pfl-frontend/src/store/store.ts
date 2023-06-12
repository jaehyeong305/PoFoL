import { createStore } from 'redux';

// 액션 타입 정의
const SET_HOVERED_TAB = 'SET_HOVERED_TAB';

// 액션 생성자
export const setHoveredTab = (tabName: string) => ({
    type: SET_HOVERED_TAB,
    payload: tabName,
});

const initialState = {
    hoveredTab: '',
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_HOVERED_TAB:
            return {
                ...state,
                hoveredTab: action.payload,
            };
            default:
                return state;
    }
};

// 스토어 생성
const store = createStore(reducer);

export default store;

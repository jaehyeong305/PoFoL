import {createStore} from 'redux';

/* NOTE(hajae)
 * 액션 생성자 및 리듀서 등을 이용한 스토어 작성법(Redux를 이용한)이 있어서 경험해보고자 작성
 * 하지만 Redux의 설정과 코드 구조가 상대적으로 복잡할 수 있으며, 작은 규모의 애플리케이션에서는 상대적으로 오버헤드가 발생하는 단점이 존재
 * 이 후에는 React의 Context를 이용한 상태관리를 이용할 예정
 */

// NOTE(hajae): 액션 타입 정의
const SET_HOVERED_TAB = 'SET_HOVERED_TAB';

// NOTE(hajae): 액션 생성자
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

// NOTE(hajae): 스토어 생성
const store = createStore(reducer);

export default store;

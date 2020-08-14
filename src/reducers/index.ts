import { combineReducers } from 'redux'; // 여러 리듀서들을 하나로 합쳐준다.
import count from './count';
import users from './users';

const rootReducer = combineReducers({
    count, // 여기에 다른 리듀서들을 더 적으면 된다!
    users
});

// 루트 리듀서를 내보내주세요.
export default rootReducer;

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>;

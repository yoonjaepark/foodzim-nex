import { Tabs } from "antd";
const { TabPane } = Tabs;
import React, {useCallback, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { countPlusAction, countMinusAction } from "../../reducers/count";
import { RootState } from '../../reducers';

function callback(key: String) {
  console.log(key);
}

const Home = () => {
  const dispatch = useDispatch(); // dispatch를 사용하기 쉽게 하는 hook
  const count = useSelector((state:RootState) => state.count); // store의 state를 불러오는 hook   store의 state 중에서 count의 state를 불러온다.
  const [text, setText] = useState('init');
  const onClickPlus = useCallback(() => {
    // useCallback은 최적화를 위한 hook이다 이 앱에선 굳이 사용 안 해도 되는데 습관이 들면 좋기에 사용.

    dispatch(countPlusAction());
  }, []);

  const onClickMinus = useCallback(() => {
    dispatch(countMinusAction());
  }, []);


  return (
    <div>
      text: {text}
      <button onClick={() => setText('text')}>텍스트값 변경</button>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
            { count.value }
          <button onClick={onClickPlus}>
            +
          </button>
          <button onClick={onClickMinus}>-</button>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
        {/* {count} */}
      </Tabs>
    </div>
  );
};

export default Home;

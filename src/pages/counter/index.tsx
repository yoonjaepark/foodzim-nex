import {Tabs} from "antd";

const {TabPane} = Tabs;
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../_app";
import {increaseAsync, decreaseAsync} from "../../modules/counter";

function callback(key: String) {
    console.log(key);
}

const Counter = () => {
    const dispatch = useDispatch(); // dispatch를 사용하기 쉽게 하는 hook
    const count = useSelector((state: RootState) => state.counter); // store의 state를 불러오는 hook   store의 state 중에서 count의 state를 불러온다.
    const [text, setText] = useState('init');
    const onClickPlus = () => {
        dispatch(increaseAsync());
    }

    const onClickMinus = () => {
        dispatch(decreaseAsync());
    }


    return (
        <div>
            text: {text}
            <button onClick={() => setText('text')}>텍스트값 변경</button>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                    {count.value}
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

export default Counter;

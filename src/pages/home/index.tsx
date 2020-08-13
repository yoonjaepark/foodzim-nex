import {Tabs} from "antd";
const { TabPane } = Tabs;

function callback(key: String) {
    console.log(key);
}

const Home = () => (
    <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
            </TabPane>
        </Tabs>
    </div>
)

export default Home

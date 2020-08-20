import {Button, Input} from "antd";

const Home = () => {
    return (
        <>
            <div className="our-story-card-text">
                <h1>
                    영화, TV프로그램을 무제한으로.
                </h1>
                <h2>
                    다양한 디바이스에서 시청하세요. 언제든 해지하실수 있습니다.
                </h2>
                <div>
                    <Input placeholder="Basic usage" />
                </div>
                <div>
                    <Button>
                        30일 무료 이용
                    </Button>
                </div>
            </div>
            <style jsx>
                {`
                    .our-story-card-text {
                        position: relative;
                        width: 100%;
                        padding: 75px 0;
                        max-width: 950px;
                        margin: 0 auto;
                        text-align: center;
                        z-index: 1;
                    }
                `}
            </style>
        </>
    );
};

export default Home;

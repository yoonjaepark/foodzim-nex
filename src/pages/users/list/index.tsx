import {GetStaticProps} from 'next'
import {useSelector} from "react-redux";
import {RootState} from "../../_app";
import {useState} from "react";

const WithStaticProps = () => {
    const user = useSelector((state: RootState) => state.user); // store의 state를 불러오는 hook   store의 state 중에서 count의 state를 불러온다.
    console.log(user)
    const [list, setList] = useState<String[]>([]);
    const handleAddList = () => {
        let newList = [...list]
        newList.push('sss')
        setList(newList)
    }
    return (
        <div>
            <button onClick={handleAddList}>리스트 추가</button>
            <hr/>
            {list.map((item, i) => (
                <div key={i}>{item}</div>
            ))}
            <h1>사용자 리스트</h1>
            {user.list.map((user, i) => (
                <div key={i}>
                    ID: <span>{user.id}</span>
                    NAME: <span>{user.name}</span>
                </div>
            ))}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default WithStaticProps

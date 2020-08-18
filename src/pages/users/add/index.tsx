import {GetStaticProps} from 'next'
import {Button, Input} from "antd";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {User} from "../../../../interfaces";
import {addAsync} from "../../../modules/user";

const WithStaticProps = () => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch(); // dispatch를 사용하기 쉽게 하는 hook

    const onClickAdd = () => {
        const user: User = {
            id: Math.floor(Math.random() * 100),
            name: name.toString(),
            phone: phone.toString()
        }
        dispatch(addAsync(user));
    };
    return (
        <div>
            <h1>사용자 추가</h1>
            <div>
                사용자 이름: <Input placeholder="이름" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                전화번호: <Input placeholder="전화번호" value={phone} onChange={(event) => setPhone(event.target.value)}/>
            </div>
            <div>
                <Button onClick={onClickAdd}>추가</Button>
            </div>
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

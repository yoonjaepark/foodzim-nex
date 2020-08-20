import {Button} from "antd";
import {signInWithGoogle} from "../../apis";
import {useDispatch} from "react-redux";
import {add} from "../../modules/auth";

export const Login = () => {
    const dispatch = useDispatch(); // dispatch를 사용하기 쉽게 하는 hook

    const signInGoogle = () => {
        signInWithGoogle().then((res) => {
            console.log(res)
            if (res) {
                // const auth: Auth | Object | null | undefined = res.additionalUserInfo?.profile
                dispatch(add(res.additionalUserInfo?.profile))
            }

        });
    }
    return (
        <div className="login-body">
            <div className="login-content login-form">
                <h1 style={{color: '#fff', fontSize: '32px'}}>로그인</h1>
                <Button className="google-login" onClick={signInGoogle}>
                    <span className="firebaseui-idp-icon-wrapper">
                        <img
                            className="firebaseui-idp-icon" alt=""
                            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"/>
                    </span>
                    <span className="firebaseui-idp-text">Sign in with Google</span>
                </Button>
            </div>
            <style jsx>
                {`
                        
                        .login-form {
                            padding: 60px 68px 40px;
                            margin-bottom: 90px;
                            background-color: rgba(0,0,0,.75);
                            -webkit-border-radius: 4px;
                            -moz-border-radius: 4px;
                            border-radius: 4px;
                            -webkit-box-sizing: border-box;
                            -moz-box-sizing: border-box;
                            box-sizing: border-box;
                            display: -webkit-box;
                            display: -webkit-flex;
                            display: -moz-box;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-box-orient: vertical;
                            -webkit-box-direction: normal;
                            -webkit-flex-direction: column;
                            -moz-box-orient: vertical;
                            -moz-box-direction: normal;
                            -ms-flex-direction: column;
                            flex-direction: column;
                            margin: 0;
                            min-height: 515px;
                            // padding: 20px 0 30px;
                            width: 100%;
                        }
                        .login-body {
                            margin: 0 auto -236px;
                            min-height: 100vh;
                            background-color: transparent;
                            max-width: 450px;
                        }
                        .google-login {
                            border: none;
                            border-radius: 2px;
                             color: #000;
                                position: relative;
                                height: 36px;
                                margin: 0;
                                min-width: 64px;
                                padding: 0 16px;
                                display: inline-block;
                                font-family: Roboto,Helvetica,Arial,sans-serif;
                                font-size: 14px;
                                font-weight: 500;
                                text-transform: uppercase;
                                line-height: 1;
                                letter-spacing: 0;
                                overflow: hidden;
                                will-change: box-shadow;
                                transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);
                                outline: 0;
                                cursor: pointer;
                                text-decoration: none;
                                text-align: center;
                                line-height: 36px;
                                vertical-align: middle;       
                        }
                        .firebaseui-idp-icon-wrapper {
                            display: table-cell;
                            vertical-align: middle;
                        }
                        .firebaseui-idp-icon {
                            border: none;
                            display: inline-block;
                            height: 18px;
                            vertical-align: middle;
                            width: 18px;
                        }
                        .firebaseui-idp-text {
                            display: table-cell;
                            display: table-cell;
                            font-size: 14px;
                            padding-left: 16px;
                            text-transform: none;
                            vertical-align: middle;
                        }
                        @media only screen and (min-width: 740px) {
                            .login-body {
                                margin: 0 auto -236px;
                                min-height: 100vh;
                                background-color: transparent;
                                max-width: 450px;
                            }
                        }
                        @media only screen and (min-width: 500px) {
                            .login-content {
                                min-width: 380px;
                            }
                        }
                    `}
            </style>
        </div>
    )
}

export default Login;
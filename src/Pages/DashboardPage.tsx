import { useRef, useState } from "react";
import { getUserName } from "../functions/common.function";

function DashboardPage() {
    const [loggedIn, setLoggedIn] = useState(!!getUserName());
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    function login() {
        let username = inputRef?.current?.value;
        if (username) {
            setButtonDisabled(true)
            import("../servicess/auth.service").then((module) => {
                if (username) {
                    return module.login(username)
                } else {
                    throw new Error("User Name Required")
                }
            }).then(() => {
                setLoggedIn(true)
            }).finally(() => {
                setButtonDisabled(false)
            })
        } else {
            alert("User Name Required")
        }
    }
    function logout() {
        setButtonDisabled(true)
        import("../servicess/auth.service").then((module) => {
            return module.logout()
        }).then(() => {
            setLoggedIn(false)
        }).finally(() => {
            setButtonDisabled(false)
        })
    }
    if (loggedIn) {
        return <div className='wrapper'>
            <h1>Hi ! {getUserName()}</h1>
            <button disabled={buttonDisabled} onClick={logout}>Logut</button>
        </div>
    } else {
        return <div className='wrapper'>
            <h1>Please, Login First</h1>
            <input ref={inputRef} type="text" id='username' placeholder="Username" />
            <button disabled={buttonDisabled} onClick={login}>Login</button>
        </div>
    }
}

export default DashboardPage;
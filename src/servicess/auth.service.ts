import { wait } from "../functions/common.function";

export function login(username: string) {
    return wait(2000).then(() => {
        window.localStorage.setItem("username", username);
    })
}
export function logout() {
    return wait(2000).then(() => {
        window.localStorage.removeItem("username");
    })
}
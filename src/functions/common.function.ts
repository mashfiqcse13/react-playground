
export function wait(ms:number) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms)
    })
}
export function getUserName() {
    return window.localStorage.getItem("username");
}


function loginStep (){
    const body = document.querySelector("body")
    const intro = document.querySelector(".intro")
    const login = document.querySelector(".intro__login")


    const loginSection = document.createElement("section")
    const formWrapp = document.createElement("div")
    const hello = document.createElement("h3")
    const logonForm = document.createElement("form")
    const formLogin = document.createElement("input")
    const formPassword = document.createElement("input")
    const formButton = document.createElement("button")

    formLogin.setAttribute("type", "text")
    formPassword.setAttribute("type", "password")
    formButton.setAttribute("type", "submit")

    formLogin.setAttribute("placeholder", "Login")
    formPassword.setAttribute("placeholder", "Password")
    formButton.textContent = "Send"
    hello.textContent = "Hello"

    loginSection.classList.add("logon__section")

    login.addEventListener("click", ()=>{
        intro.remove()

        body.insertAdjacentElement("beforeend", loginSection)
        loginSection.insertAdjacentElement("beforeend",formWrapp)
        formWrapp.insertAdjacentElement("beforeend",logonForm)
        logonForm.insertAdjacentElement("beforeend", hello)
        logonForm.insertAdjacentElement("beforeend", formLogin)
        logonForm.insertAdjacentElement("beforeend", formPassword)
        logonForm.insertAdjacentElement("beforeend", formButton)
    })
}
export default loginStep
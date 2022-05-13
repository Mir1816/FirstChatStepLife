

function getCreateIntro(){
    const intro = document.createElement("section")
    const body = document.querySelector("body")
    const container = document.createElement("div")
    const inroInner = document.createElement("div")
    const introBody = document.createElement("div")
    const introBodyContent = document.createElement("div")
    const introH1 = document.createElement("span")
    const introSpan = document.createElement("h1")
    const bottonInner = document.createElement("div")
    const buttonLogin = document.createElement("button")
    const buttonSingIn = document.createElement("button")

    

    

    intro.classList.add("intro")
    container.classList.add("container")
    inroInner.classList.add("inro__Inner")
    introBody.classList.add("intro__body")
    introBodyContent.classList.add("intro__body-content")
    buttonLogin.classList.add("inro__registers")
    buttonSingIn.classList.add("intro__login")

    buttonLogin.setAttribute("type", "button")
    buttonSingIn.setAttribute("type", "button")
   
    



    body.insertAdjacentElement("beforeend", intro)
    intro.insertAdjacentElement("beforeend", container)
    container.insertAdjacentElement("beforeend", inroInner)
    inroInner.insertAdjacentElement("beforeend", introBody)
    introBody.insertAdjacentElement("beforeend", introBodyContent)
    introBodyContent.insertAdjacentElement("beforeend", introH1)
    introBodyContent.insertAdjacentElement("beforeend", introSpan)
    introBodyContent.insertAdjacentElement("beforeend", bottonInner)
    bottonInner.insertAdjacentElement("beforeend", buttonLogin)
    bottonInner.insertAdjacentElement("beforeend", buttonSingIn)



    introH1.textContent = "Welcome to"
    introSpan.textContent = "StepLife"
    buttonLogin.textContent = "Register"
    buttonSingIn.textContent = "Login"





 
}







export default getCreateIntro
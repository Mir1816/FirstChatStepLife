import createStep3 from "./appRegister.js"


function registers(){
    const body = document.querySelector("body")
    const intro = document.querySelector(".intro")
    const register = document.querySelector(".inro__registers")



    //Next Step
    const modalRegister = document.createElement("section")
    const registerStep1 = document.createElement("div")
    const formRegister = document.createElement("form")
    const nameInput = document.createElement("input")
    const emailInput = document.createElement("input")
    const paswordlInput = document.createElement("input")
    const introH1 = document.createElement("span")
    const introSpan = document.createElement("h1")
    const buttonNext = document.createElement("button")


    buttonNext.setAttribute("type", "button")
    nameInput.setAttribute("type", "name")
    nameInput.setAttribute("placeholder", "Login")
    emailInput.setAttribute("type", "email")
    emailInput.setAttribute("placeholder", "Email")
    paswordlInput.setAttribute("type", "password")
    paswordlInput.setAttribute("placeholder", "Password")
   
    registerStep1.classList.add("registers__step1")
    modalRegister.classList.add("modal__register-inner")
    buttonNext.classList.add("registers__step1")

    introH1.textContent = "Welcome to"
    introSpan.textContent = "StepLife"
    buttonNext.textContent = "Next >>>"


    function createStep0(){
        modalRegister.insertAdjacentElement("beforeend", registerStep1)
        registerStep1.insertAdjacentElement("beforeend", introH1)
        registerStep1.insertAdjacentElement("beforeend", introSpan)
        body.insertAdjacentElement("beforeend", modalRegister)
        registerStep1.insertAdjacentElement("beforeend", formRegister)        
        formRegister.insertAdjacentElement("beforeend",nameInput)
        formRegister.insertAdjacentElement("beforeend",emailInput)
        formRegister.insertAdjacentElement("beforeend",paswordlInput)
        formRegister.insertAdjacentElement("beforeend",buttonNext)
    }

    register.addEventListener("click",()=>{
        intro.remove()
        createStep0()
    })

    // Step 1
    
    const step1 = document.createElement("div")
    const stepContainer = document.createElement("div")
    const stepTitle = document.createElement("h1")
    const stepWrap = document.createElement("div")
    const stepText = document.createElement("p")
    const toggleInner = document.createElement("div")
    const backToggle = document.createElement("button")
    const nextToggle = document.createElement("button")
    


    step1.classList.add("step1")
    stepContainer.classList.add("container")
    stepWrap.classList.add("step__wrap")

    stepTitle.textContent = "SL"
    stepText.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo doloribus aspernatur facilis non error corporis sit inventore, vero eveniet molestiae quasi itaque quam architecto perferendis."
    backToggle.textContent = "<< Back"
    nextToggle.textContent = "Next >>"


    function createStep1(){
        modalRegister.insertAdjacentElement("beforeend", stepContainer)
        stepContainer.insertAdjacentElement("beforeend", step1)
        step1.insertAdjacentElement("beforeend", stepTitle)
        step1.insertAdjacentElement("beforeend", stepWrap)
        stepWrap.insertAdjacentElement("beforeend", stepText)
        stepWrap.insertAdjacentElement("beforeend", toggleInner)
        toggleInner.insertAdjacentElement("beforeend", backToggle)
        toggleInner.insertAdjacentElement("beforeend", nextToggle)
    }


    //Remove Step 0

    buttonNext.addEventListener("click", ()=>{
        registerStep1.remove()
        createStep1()
            
    })



    // Next Step

    backToggle.addEventListener("click",()=>{
        step1.remove()    
        createStep0()
    })

   
    // Step 2 
    const step2 = document.createElement("div")
    const step2Title = document.createElement("h1")
    const step2Text = document.createElement("p")
    const step2Wrap = document.createElement("div")
    const step2Frorm = document.createElement("form")
    const step2InputCode = document.createElement("input")
    const step2InputPasword = document.createElement("input")  

    const step2ToggleInner = document.createElement("div")
    const step2GoStep1 = document.createElement("button")
    const step2GoStepNext = document.createElement("button")


    step2.classList.add("step2")
    step2Wrap.classList.add("step2__wrap")

    step2InputCode.setAttribute("type", "text")
    step2InputCode.setAttribute("placeholder", "Code")

    step2InputPasword.setAttribute("type", "password")
    step2InputPasword.setAttribute("placeholder", "Password")


    step2Title.textContent = "SL"
    step2Text.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo doloribus aspernatur facilis non error corporis sit inventore, vero eveniet molestiae quasi itaque quam architecto perferendis."
    step2GoStep1.textContent = "<< Back"
    step2GoStepNext.textContent = "Next >>"

    function  createStep2(){
        stepContainer.insertAdjacentElement("beforeend", step2)
        step2.insertAdjacentElement("beforeend", step2Title)
        step2.insertAdjacentElement("beforeend", step2Wrap)
        step2Wrap.insertAdjacentElement("beforeend", step2Text)
        step2Wrap.insertAdjacentElement("beforeend", step2Frorm)
        step2Frorm.insertAdjacentElement("beforeend",step2InputCode)
        step2Frorm.insertAdjacentElement("beforeend",step2InputPasword)
        step2Wrap.insertAdjacentElement("beforeend", step2ToggleInner)
        step2ToggleInner.insertAdjacentElement("beforeend", step2GoStep1)
        step2ToggleInner.insertAdjacentElement("beforeend", step2GoStepNext)
        
    }


    nextToggle.addEventListener("click", ()=>{
        step1.remove()
        createStep2()
    })

    step2GoStep1.addEventListener("click",()=>{
        step2.remove()
        createStep0()
    })

    step2GoStepNext.addEventListener("click", ()=>{
        step2.remove()
        createStep3()
    })

   
}

export default registers
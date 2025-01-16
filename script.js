// Get DOM elements
const container = document.querySelector(".container")
const userImg = document.querySelector(".user-img img")
const botImg = document.querySelector(".bot-img img")
const  optionImgs= document.querySelectorAll(".option-img")
const  resultText= document.querySelector(".result-text")


// Define possible images and outcomes
const botImgs = [
    'imgs/rock.png', 
    'imgs/paper.png', 
    'imgs/scissors.png'
]
    const outcomes = {
        RR: "Draw",
        RP: "Bot",
        RS: "You", 
        PP: "Draw",
        PR : "You", 
        PS: "Bot",
        SS : "Draw",
        SR : "Bot",
        SP : "You"
    }
// Event handler for image click
function mainFunction(e) {
    const clickedImage =  e.currentTarget
    const clickedIndex = Array.from(optionImgs).indexOf(clickedImage)
    // Reset results and display "Wait..."
    userImg.src = botImg.src = "imgs/rock.png" 
    resultText.textContent = "Waiting..."

// Activate clicked image and deactivate others
optionImgs.forEach((image, index)=>{
image.classList.toggle("active", index === clickedIndex)
})
container.classList.add("start")
setTimeout(()=> {
    container.classList.remove("start")
    // Set user and bot images
    const userImgSrc = clickedImage.querySelector("img").src
    userImg.src = userImgSrc
    const random = Math.floor(Math.random() * botImgs.length)
    const botImgSrc = botImgs[random]
    botImg.src = botImgSrc
    // Determine the result
    const userValue = ["R", "P", "S"][clickedIndex]
    const botValue = ["R", "P", "S"][random]
    const outcomeKey = userValue + botValue
    // console.log(outcomeKey);
    
    const finalOutcome = outcomes[outcomeKey] || "unknown"
    // Display the result
    resultText.textContent = userValue === botValue ? "Match Draw" : `${finalOutcome} Won`
}, 2000)
}


// Attach event listeners to option images
optionImgs.forEach(image => {
image.addEventListener("click",mainFunction)
})

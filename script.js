document.addEventListener("DOMContentLoaded", () => {

    const catGif = document.getElementById('cat-gif')
    const yesBtn = document.getElementById('yes-btn')
    const noBtn = document.getElementById('no-btn')

    const gifStages = [
        "https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif",
        "https://media1.tenor.com/m/uDugCXK4vI4AAAAd/chiikawa-hachiware.gif",
        "https://media.tenor.com/f_rkpJbH1s8AAAAj/somsom1012.gif",
        "https://media.tenor.com/OGY9zdREsVAAAAAj/somsom1012.gif",
        "https://media1.tenor.com/m/WGfra-Y_Ke0AAAAd/chiikawa-sad.gif"
    ]

    const noMessages = [
        "Nahi 😒",
        "Pakka mana karogi? 🤔",
        "Soch lo... 😏",
        "Please haan bol do... 🥺",
        "Last chance 😭"
    ]

    let noClickCount = 0

    // YES BUTTON
    yesBtn.onclick = () => {
        window.location.href = "yes.html"
    }

    // NO BUTTON
    noBtn.onclick = () => {
        noClickCount++

        noBtn.textContent = noMessages[Math.min(noClickCount, noMessages.length - 1)]

        const size = parseFloat(window.getComputedStyle(yesBtn).fontSize)
        yesBtn.style.fontSize = (size * 1.3) + "px"

        catGif.src = gifStages[Math.min(noClickCount, gifStages.length - 1)]

        if (noClickCount >= 3) {
            moveButton()
        }
    }

    function moveButton() {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth)
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight)

        noBtn.style.position = "fixed"
        noBtn.style.left = x + "px"
        noBtn.style.top = y + "px"
    }

})

const surpriseSection = document.getElementById('surprise')

function showSurprise() {
  surpriseSection.textContent = '🎉 Surprise! 🎉'
}

//generate a random time
const randomTime = Math.random() * 4000

//invoke showSurprise() after a random period of time
//setTimeOut(callback, time in milliseconds)
setTimeout(showSurprise, randomTime)

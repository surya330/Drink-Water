const smallcups = document.querySelectorAll('.cup-small');
const listers = document.getElementById("litres");
const percentages = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallcups.forEach((cup,idx) => {
    cup.addEventListener("click", () => highlightcups(idx));
});

function highlightcups(idx){
    if (smallcups[idx].classList.contains('full')){
            idx--
    }
    smallcups.forEach((cup,idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full')
        }
        else{
            cup.classList.remove('full')
        }
    });
    updateBig();
}

function updateBig() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallcups.length

    if(fullCups == 0){
        percentages.style.visibility = 'hidden'
        percentages.style.height = 0
    }
    else{
        percentages.style.visibility = 'visible'
        percentages.style.height = `${fullCups / totalCups * 330}px`
        percentages.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        listers.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
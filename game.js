const textElement = document.getElementById('text')
const optionButtonElement = document.getElementById('option-button')

function startGame(){

}

function showTextNode(1){
    const textNode = textNodes.find(textNodes => textNode.id === textNodeIndex)
    textElement.innerText == textNode.text
    while (optionButtonElement.firstChild){
        optionButtonElement.removeChild(optionButtonElement.firstChild)
    }
    textNode.option.for(option => )
}

function selectedOption(){

}

const textNodes = [
    {
        id:1,
        text: 'Ich habe dich lieb! Bitte klick dich hier durch',
        option:[
            {
                text: 'Weiter'
                nextText: 2
            }
        ]
    }
    {
        id: 2,
        text: 'Du bist eine Disney Prinzessin und solltest auch wie eine behandelt werden!'
        option:[
            {
                text: 'Weiter'
                nextText: 3
            }
        ]
    }

]

startGame()
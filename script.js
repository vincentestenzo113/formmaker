const insert = () => {

    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
    }

}

const appendText = (label = "Default") => {

    let elem = document.createElement('div')
    let input = document.createElement('input')
    let removeBtn = document.createElement('button')

    input.setAttribute('placeholder', label)
    input.setAttribute('class', 'form-control mt-2')
    removeBtn.setAttribute('class', 'btn btn-warning remove-btn ms-2 mt-2 mb-2')
    removeBtn.textContent = 'Remove'
    removeBtn.addEventListener('click', () => {
        removeElement(elem)
    })

    elem.appendChild(input)
    elem.appendChild(removeBtn)

    document.querySelector('#display').append(elem)

    addRemoveButtonContainer()
}

const appendButton = (label = "Default") => {

    let elem = document.createElement('div')
    let button = document.createElement('button')
    let removeBtn = document.createElement('button')

    button.setAttribute('class', 'btn btn-primary form-control mt-2')
    button.textContent = label
    removeBtn.setAttribute('class', 'btn btn-warning remove-btn ms-2')
    removeBtn.textContent = 'Remove'
    removeBtn.addEventListener('click', () => {
        removeElement(elem)
    })

    elem.appendChild(button)
    elem.appendChild(removeBtn)

    document.querySelector('#display').append(elem)

    addRemoveButtonContainer()
}


const removeElement = (element) => {
    element.remove()
    let removeButtons = document.querySelectorAll('.remove-btn')
    
    if (removeButtons.length === 0) {
        let removeButtonContainer = document.querySelector('#remove-buttons-container')
        removeButtonContainer.innerHTML = ''
    }
}

const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')

function addItem(e) {
    e.preventDefault()
    const newItem = itemInput.value

    if (newItem === '') {
        alert('Please enter something')
    } else {
        const li = document.createElement('li')
        li.textContent = newItem
    
        const button = addBtn('remove-item btn-link text-red')
    
        li.appendChild(button)
    
        itemList.appendChild(li)
    
        newItem.value = ''
    }
}

function addBtn(classes) {
    const button = document.createElement('button')
    button.className = classes
    const icon = CreateIcon('fa-solid fa-xmark')
    button.appendChild(icon)
    return button
}

function CreateIcon(classes) {
    const icon = document.createElement('i')
    icon.className = classes
    return icon
}


itemForm.addEventListener('submit', addItem)

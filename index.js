const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button')


function addItem(e) {
    e.preventDefault()

    const newItem = itemInput.value

    if (newItem === '') {
        alert('Please enter a new item')
    } else {
        const li = document.createElement('li')
        li.textContent = newItem

        itemList.appendChild(li)

        const button = createbutton('remove-item btn-link text-red')
        li.appendChild(button)

        newItem.value = ''
    }
}


function createbutton(classes) {
    const button = document.createElement('button')
    button.className = classes
    const icon = createicon('fa-solid fa-xmark')
    button.appendChild(icon)
    return button
}


function createicon(classes) {
    const icon = document.createElement('i')
    icon.className = classes
    return icon
}

function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove()
    }
}

 
function clearItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
    }
}


itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearItems)
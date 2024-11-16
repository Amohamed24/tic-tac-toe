

const itemElement = document.querySelector("ul")
const inputElemenent = document.querySelector("input")
const button = document.querySelector("button")

function addItem() {
    button.addEventListener('click', () => {
        inputElemenent.innerText = `${inputElemenent.value}`


    const newList = document.createElement("ul")
    const spanElement = document.createElement("span")
    const newBtnElement = document.createElement("button")

    newList.appendChild(spanElement);
    newList.appendChild(newBtnElement);

    spanElement.textContent = inputElemenent.value
    newBtnElement.textContent = "Delete"

    itemElement.appendChild(newList)



    newBtnElement.addEventListener('click', () => {
        // delete the entire list item
        alert("DELETED!")
        // removes the node
        newList.remove()
    })

    // clears the input
    inputElemenent.value = ''
})
}





const dialog = document.querySelector("dialog")
const dialogBtn = document.querySelector(".dialogBtn")
const dialogInput = document.querySelector(".dialogInput")

const submitBtn = document.createElement("button")


function popUp() {
    dialogBtn.addEventListener('click', () => {
        dialog.showModal()    

        // stores value from input
        dialogInput.innerText = `${dialogInput.value}`
   //     console.log
        

        // submit in dialog
        submitBtn.textContent = "Submit"
        dialog.appendChild(submitBtn)

        
        const newSpanEli = document.createElement("span")

        
        submitBtn.addEventListener('click', () => {
            const newName = document.createElement("p")
            newName.textContent = dialogInput.value
            newSpanEli.appendChild(newName);
            itemElement.appendChild(newSpanEli);

            //alert(newName.textContent)

            // clear input 
            dialogInput.value = ''
            dialog.close()
        })

    })
}


popUp()
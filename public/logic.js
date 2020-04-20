let socket = io()

socket.on('message', (msg) => {
    let list = document.getElementById("messages")
    let listItem = document.createElement("li")
    listItem.innerText = msg
    list.appendChild(listItem) 

})

function sendMessage() {
    let input = document.getElementById("m")
    let message = input.value
    input.value = ""
    console.log(message)
    socket.emit('message', message)

}
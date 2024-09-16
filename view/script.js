let namee = document.getElementById('name')
let down = document.getElementById('down')
let small = document.getElementById('small')
let pic = document.getElementById('pic')
let border = document.getElementById('border')
let candle = document.getElementById('candle')
let form = document.getElementById('form')
let body = document.getElementById('body')
let email = document.getElementById('email')
let message = document.getElementById('message')
let wait = document.getElementById('wait')


function intro(){
    namee.style.opacity = '0'
    down.style.opacity = '0'
    small.style.opacity = '0'
    down.style.transform = 'translate(0%,50%)'
    small.style.transform = 'translate(50%,0%)'
    candle.style.opacity = '0'
    form.style.display = 'none'
    body.style.overflow = 'hidden'
    setTimeout(pic.style.scale = '1.3' , 1000)
    setTimeout(() => {
        pic.style.scale = '1'
        pic.style.transform = 'translate(0%,0%)'
    },1500)
    setTimeout(() => {
        namee.style.opacity = '1'
        down.style.opacity = '1'
        small.style.opacity = '1'
        down.style.transform = 'translate(0%,0%)'
        small.style.transform = 'translate(0%,0%)'
        candle.style.opacity = '1'
        form.style.display = 'block'
        body.style.overflow = 'auto'
    },1800)
}
intro()

function openInNewTab(event, url) {
    event.preventDefault(); // Prevents navigation to the link
    window.open(url, '_blank'); // Opens the URL in a new tab
}

function changeborder(url){
    border.style.backgroundImage = `url('${url}')`;
}
function backborder(){
    border.style.backgroundImage = 'url(border.jpeg)';
}

function contact(){
    location.href = '#form'
}

function sendmessage(event){
    event.preventDefault(); // Stop the form from submitting
    if(email.value && message.value){
        fetch(location.href,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:email.value,
                message:message.value
            })
        }   
        ).then(async respons => {
            wait.style.display = 'block';
            await respons.json()
            if(Number(respons.status) === 200){
                email.value = ''
                message.value = ''
                email.style.borderColor = 'black'
                message.style.borderColor = 'black'
                location.href = '#'
                wait.style.display = 'none';
            }else{
                email.style.borderColor = 'red'
                message.style.borderColor = 'red'
                wait.style.display = 'none';
            }
        })
    }
}
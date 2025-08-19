let fuhadShiblu_getSelector = document.querySelector('.fuhadShiblu_getSelector');
let fuhadShiblu_getCircle   = document.querySelector('.fuhadShiblu_getCircle');
let fuhadShiblugetMonthly   = document.querySelector('.fuhadShiblugetMonthly');
let fuhadShiblugetYearly    = document.querySelector('.fuhadShiblugetYearly');
let fuhadShiblu_disPrice    = document.querySelector('.fuhadShiblu_disPrice');

let fuhadShiblu_turn        = true

fuhadShiblu_getSelector.addEventListener('click' , (e)=>{
    e.preventDefault()
    if(fuhadShiblu_turn){
        fuhadShiblu_getCircle.style = 'left:50px;transition:all linear .1s'
        fuhadShiblu_turn            = false
        fuhadShiblugetMonthly.style = 'color:#000!important;transition:all linear .1s'
        fuhadShiblugetYearly.style  = 'color:#B00000;transition:all linear .1s'
        fuhadShiblu_disPrice.style  = 'display:block'
    }else{
        fuhadShiblu_getCircle.style = 'left:9px;transition:all linear .1s'
        fuhadShiblu_turn            = true
        fuhadShiblugetMonthly.style = 'color:#000;transition:all linear .1s'
        fuhadShiblugetYearly.style  = 'color:#000;transition:all linear .1s'
        fuhadShiblu_disPrice.style  = 'display:none'
    }
})
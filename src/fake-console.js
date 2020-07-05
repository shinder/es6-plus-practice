let info;
if(document && document.querySelector && document.querySelector('#info')){
    info = document.querySelector('#info');
}

export default {
    log: function(...msg){
        if(info){
            info.innerHTML += msg.join(' ') +'<br>';
        } else {
            console.log(...msg);
        }
    }
}
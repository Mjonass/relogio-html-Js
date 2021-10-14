function Relogio(){
    var data = new Date()
    var hr = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()

    var horat = hr + ':' + min + ':' + sec

    var res = window.document.getElementById('res')
    res.innerHTML = horat
}
setInterval(Relogio,500)
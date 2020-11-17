/* eslint-disable */
function generate(){
    var token = document.getElementById('token').value
    var mongodb = document.getElementById('mongodb').value
    var status = document.getElementById('status').value
    var prefix = document.getElementById('prefix').value
    if (!prefix || !status || !mongodb || !token) {
        return document.getElementById('code').innerHTML = 'You did not provide correct options'
    }
    if (document.getElementById('lavalinkCheckbox').checked) {
        var llPort = document.getElementById('llPort').value
        var llHname = document.getElementById('llHname').value
        var llPassword = document.getElementById('llPassword').value
        var llSecure = document.getElementById('llSecure').value
        if (!llPort || !llHname ||  !llPassword || parseInt(llPort) > 65555 || parseInt(llPort) < 1) {
            return document.getElementById('code').innerHTML = 'You did not provide correct lavalink options'
        }
    }
    if (status !== 'invisible' && status !== 'dnd' && status !== 'idle' && status !== 'online') {
        return document.getElementById('code').innerHTML = 'You did not provide a correct status. Provide either "invisible", "dnd", "idle" or "online"'
    }
    if (!mongodb.startsWith('mongodb')) {
        return document.getElementById('code').innerHTML = 'Your mongodb url doesn\'t have mongodb at the start of it. (Invalid mongo URI)'
    }
    if (!document.getElementById('lavalinkCheckbox').checked) return document.getElementById('code').innerHTML = `{status: ${status}, mongoURI: ${mongodb}, token: ${token}, prefix: ${prefix}}`
    if (document.getElementById('lavalinkCheckbox').checked) return document.getElementById('code').innerHTML = `{status: ${status}, mongoURI: ${mongodb}, token: ${token}, prefix: ${prefix}, lavalinkNode: {host: ${llHname}, port: ${parseInt(llPort)}, secure: ${llSecure}, password: ${llPassword}, "retryAmount": 10000,"retryDelay": 10000}}`
}
function lavalink(){
    var checked = document.getElementById('lavalinkCheckbox').checked
    if (checked) {
        document.getElementById('lavalinkOptions').style = 'display: block;'
    }
    if (!checked) {
        document.getElementById('lavalinkOptions').style = 'display: none;'
    }
}
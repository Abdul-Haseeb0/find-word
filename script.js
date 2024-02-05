function find() {
    var para = document.getElementById("para")
    var inp = document.getElementById("inp").value
    document.getElementById("para").innerHTML = para.innerText.replaceAll(inp, `<mark>${inp}</mark>`)

}
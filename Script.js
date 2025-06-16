const header1 = document.querySelector('#header')

fetch('/header.html')
.then(res=>res.text())
.then(data=>{
    header1.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})
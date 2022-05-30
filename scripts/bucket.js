// On clicking remove button the item should be removed from DOM as well as localstorage.

// console.log("hello");
let bucketData = JSON.parse(localStorage.getItem("coffee"))

let total = document.getElementById("total_amount")

let out = bucketData.reduce(function(sum,ele){
    return sum = sum + Number(el.price)
},0)
total.innerText = out


let parentCart = document.getElementById("bucket")
bucketData.map(function(ele,index){
    let div = document.createElement("div")
    div.id = "div2"

    let name = document.createElement("h2")

    let img = document.createElement("img")

    let price = document.createElement("p")

    let btn = document.createElement("button")

    name.innerText =ele.name
    name.id = "name1"
    img.src = ele.image;
    img.id  ="img2"
    price.innerText = ele.price;
    price.id = "price1"
    btn.innerText = "Remove"
    btn.id = "remove_coffee"

    btn.addEventListener("click",function(){
        Remove(index)
    })
    div.append(name,img,price,btn)
    parentCart.append(div)
})
function Remove(index){
    bucketData.splice(index,1)

    localStorage.setItem("coffee",JSON.stringify(bucketData))
    window.location.reload()
}
function checkout(){
    window.location.href = "checkout.html"
}
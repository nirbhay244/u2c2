// Add the coffee to local storage with key "coffee"


// ===================
// try {
//     let url  = "https://masai-mock-api.herokuapp.com/coffee/menu"
    
//     let res = fetch(url);
//     let data = res.json()
// } catch (error) {
//     console.log(error);






let menu = document.getElementById("menu")

async function coffeeShop(){
    let url = "https://masai-mock-api.herokuapp.com/coffee/menu"

    let res =await fetch(url)

     let data = await res.json()
     data =data.menu.data
     console.log(data);
     append(data)
}
coffeeShop()

function append(data){
    data.map(function(el){
        let div1 = document.createElement("div")
        let title = document.createElement('h2')
        let img = document.createElement("img")
        let price = document.createElement("p")
        let btn = document.createElement("button")
        title.innerText = ele.title;
        name.id = "name"
        img.src = ele.image;
        img.id  ="img1"
        price.innerText = ele.price;
        price.id = "price"
        btn.innerText = "Add to Bucket"
        btn.id = "add_to_bucket"
        
        btn.addEventListener("click",function(){
            addtobuck(ele)
        })
        div1.append(title,img, price,btn)
        // perent.append(div)4
        document.getElementById("menu").append(div1)

    })
}
let bucketArr = []
function addtobuck(el){
    bucketArr.push(el)
    localStorage.setItem("coffee",json.stringify(bucketArr))
    let count1 = document.getElementById("coffee_count")
    count1.innerText =bucketArr.length
console.log(count1);    
}














// }





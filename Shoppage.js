const imgsources = ["https://th.bing.com/th/id/OIP.gSwq2xfYTwAWXi2YWfZr_gHaEK?pid=ImgDet&rs=1",'https://i.ytimg.com/vi/0frNP0qzxQc/maxresdefault.jpg','https://th.bing.com/th/id/OIP.f8Mwb728eAtMcQ-Ogq8CTQHaFB?pid=ImgDet&rs=1']




function additemToCart(id, maxquantity,onstart) {
    const remcart = document.getElementById("Cartrem")
    let pairs = document.cookie.split(';');
    let idquantitypairs = {};
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i].split('=');
        let key = pair[0].trim();
        let value = pair[1].trim();
        if (key === 'idquantitypairs') {
            idquantitypairs = JSON.parse(decodeURIComponent(value));
            break;
        }
    }
    const cartstock = document.getElementById("CartNumber")
    
    if (idquantitypairs.hasOwnProperty(id)) {
        cartstock.textContent = idquantitypairs[id]
        if(onstart===true&&idquantitypairs[id]>0){
            remcart.style.visibility = "visible"
        }
        if(onstart!=true){
            if (idquantitypairs[id] >= maxquantity) {
                alert("Not enough stock! Maximum quantity is "+maxquantity);
                idquantitypairs[id] = maxquantity
            } else {
                
                idquantitypairs[id] += 1;
                remcart.style.visibility = "visible"
                cartstock.textContent = idquantitypairs[id]
            }
        }
    } else {
        if(onstart!=true){
            if (maxquantity === 0) {
                alert("This item is out of stock!");
            } else if (maxquantity === 1) {
                alert("Not enough!");
            } else {
                idquantitypairs[id] = 1;
            }
        }
    }
    document.cookie = `idquantitypairs=${encodeURIComponent(JSON.stringify(idquantitypairs))}`;
    
    console.log(idquantitypairs);
}
function remcartitem(id,maxquantity){
    console.log("item removed from cart")
    let pairs = document.cookie.split(';');
    let idquantitypairs = {};
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i].split('=');
        let key = pair[0].trim();
        let value = pair[1].trim();
        if (key === 'idquantitypairs') {
            idquantitypairs = JSON.parse(decodeURIComponent(value));
            break;
    }
}
if (idquantitypairs.hasOwnProperty(id)) {
    idquantitypairs[id]=0
    const cartstock = document.getElementById("CartNumber")
    cartstock.textContent = idquantitypairs[id]
    const remcart = document.getElementById("Cartrem")
    remcart.style.visibility = "hidden"
    console.log(idquantitypairs[id])
    console.log(id)
    document.cookie = `idquantitypairs=${encodeURIComponent(JSON.stringify(idquantitypairs))}`;
}
}


function changeImage(lr) {
    // Find the index of the current source within the imgsources array
    let imgID = document.getElementById("ItemPictures")
    let currentSRC = imgID.src
    var currentIndex = imgsources.indexOf(currentSRC);
    
    // If the current source is not in the array, display an error message
    if (currentIndex < 0) {
      alert("Image carousel error, index not defined: "+currentIndex);
      return;
    }
    
    // Calculate the index of the new source based on the direction
    var newIndex = lr === "left" ? currentIndex - 1 : currentIndex + 1;
    
    // If the new index is out of bounds, loop back around to the beginning or end of the array
    if (newIndex < 0) {
      newIndex = imgsources.length - 1;
    } else if (newIndex >= imgsources.length) {
      newIndex = 0;
    }
    
    // Set the new source for the image
    var newSRC = imgsources[newIndex];
    imgID.src = newSRC;
    console.log("carousel index is now "+newIndex)
  }
  





window.onload = function() {
    const remcart = document.getElementById("Cartrem")
    const ItemTitle = document.getElementById("ItemTitle").innerText;
    const ItemStock = document.getElementById("ItemStock").innerText;
    const cartbutton = document.getElementById("addtocart");
    additemToCart(ItemTitle,parseInt(ItemStock),true)
    cartbutton.addEventListener('click', event => {
      
      additemToCart(ItemTitle,parseInt(ItemStock),false)
    });

    remcart.addEventListener('click', event => {
        
    remcartitem(ItemTitle,parseInt(ItemStock))
    })
};





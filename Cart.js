// Get a reference to the table

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
window.onload = function() {
    const cartmaintable = document.getElementById("Cartitems");
    
    for (let key in idquantitypairs) {
      // Insert new row
      let id = key;
      let quantity = idquantitypairs[key];
      
      var newRow = cartmaintable.insertRow(-1);
      
      console.log("PAR FOUND"+key+'vvvvvvvvv'+quantity)
      // Insert cells 
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1); 
      var cell3 = newRow.insertCell(2);
  
      // Add data to cells
      cell1.innerHTML = id;
      cell2.innerHTML = quantity;
      cell3.innerHTML = "";
  
      // Append row to table
      cartmaintable.appendChild(newRow);
    }
  };




let groceryStore = document.getElementById("dropDown")

const groceryRef = firebase.database().ref().child("Grocery Stores List")

addListButton.addEventListener('click', function(){

  groceryRef.push().set({
    Store_Name:$('#dropDown').val(),
    Grocery_Items:$('#item').val(),
    Grocery_Items_Quantity:$('#itemQuantity')

  })


})

addNewItem.addEventListener('click', function(){
    let newItem =`<li>
    <input id="item" type="text" placeholder="Grocery Item"/>
    <input id="itemQuantity"type="number" placeholder="Quantity"/>
    </li>`
    addGroceryItem.insertAdjacentHTML('beforeend',newItem)

})

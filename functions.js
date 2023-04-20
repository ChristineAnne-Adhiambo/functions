/*
You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to manipulate and analyze the data.
Create an array containing the names of all items in the inventory.*/

let vegetables=["Kales","Onions","Brocolli"];
var quantity = [10,20,30];
console.log(vegetables);
console.log(quantity);

//Write a function to add a new item to the inventory, updating both arrays.
function addItems(inventory1,inventory2){   
  if(vegetables.length>=10||quantity.length>=10){
       console.log("my stock")
  }
console.log(vegetables.push("Garlic"));
console.log(quantity.push(40));  
console.log(vegetables);
console.log(quantity);
  
}
addItems("Garlic",40);

//Write a function to update the stock quantity of an existing item.

function updateQuantity(inventory1,newInventory){
  const index= vegetables.indexOf(inventory1)

  if(index===-1){
      console.log(inventory1 +" cannot be found")
      
  }
      quantity.push(newInventory)
      console.log(inventory1 + " has been updated with " +  newInventory + " as it's quantity")
  
}
updateQuantity("Njugu",500)


console.log("This is my new array of vegetables")
console.log(vegetables)

console.log("This is the new Quantity")
console.log(quantity)


//Write a function to calculate the total number of items in the inventory.
function totalItems(){
  let total=0
  for(let i=0;i<quantity.length;i++){
  total+=quantity[i]
}
console.log(total)
}
totalItems()

//Write a function to find the item with the lowest stock quantity.

function minQuantityItem(vegetables,quantity){
  let lowvegetables=null
  let lowQuantity=null
 for(let x=0; x<vegetables.length; x++){

  const itema=vegetables[x]
  const quant=quantity[x]

  if (lowQuantity===null||quant<lowQuantity ){
  lowItem=itema
  lowQuantity=quant

 }
}
return lowItem
}
console.log("This is the item with minimum quantity:"+ minQuantityItem(vegetables,quantity));

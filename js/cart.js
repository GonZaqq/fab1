// //Cart

// function ready(){
//   var removeCartButtons = document.getElementsByClassName('cart-remove')
//   console.log(removeCartButtons)
//   for (var i=0; i < reomveCartButtons.length; i++){
//     var button = removeCartButtons[i];
//     button.addEventListener("click", removeCartItem);
//   }
// }


// function removeCartItem(event){
//   var ButtonClcked = event.target 
//   ButtonClcked.parentElements.remove()
// }
if(!localStorage.getItem('goods')) {
  localStorage.setItem('goods', JSON.stringify([]))
}
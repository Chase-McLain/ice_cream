console.log("rat")

let shopItems = [
  {
    item: 'gumCream',
    price: 7.99,
    qty: 0
  },
  {
    item: 'comboCream',
    price: 7.99,
    qty: 0
  },
  {
    item: 'beefCream',
    price: 7.99,
    qty: 0
  },
  {
    item: 'gumShoe',
    price: 2,
    qty: 0
  },
  {
    item: 'hands',
    price: .10,
    qty: 0
  },
  {
    item: 'beefBox',
    price: 1,
    qty: 0
  },
  {
    item: 'gum',
    price: .50,
    qty: 0
  },
  {
    item: 'geef',
    price: 11.99,
    qty: 0
  },
  {
    item: 'beef',
    price: 5,
    qty: 0
  }
]

function purchase(itemType) {
  for (let i = 0; i < shopItems.length; i += 1) {
    let itemPurchase = shopItems[i]
    if (itemPurchase.item == itemType) {
      itemPurchase.qty += 1
      console.log(itemType, itemPurchase.qty)
    }
  }
  addItemToCart()

}

let cartItems = document.getElementById('cart')

function addItemToCart() {
  cartItems.innerHTML = ''
  for (let i = 0; i < shopItems.length; i += 1) {
    let cartItem = shopItems[i]
    if (cartItem.qty >= 1) {
      cartItems.innerHTML += `
        <div class="col">
          <p> ${cartItem.item} x ${cartItem.qty} -- $${cartItem.qty * cartItem.price}</p>
        </div>`
    }
  }
  cartprice()
}

let cartTotal = document.getElementById('cartTotal')

function cartprice() {
  cartTotal.innerHTML = 'TOTAL:'
  let totalPrice = 0
  for (let i = 0; i < shopItems.length; i += 1) {
    let cartItem = shopItems[i]
    totalPrice += cartItem.qty * cartItem.price
  }
  cartTotal.innerHTML = `
    <div>
      <p> Total: $${totalPrice}$</p>
    </div>`

}



























// let shopFlavors = [
//   {
//     flavor: gumCream,
//     price: 7.99,
//     qty: 0
//   },
//   {
//     flavor: comboCream,
//     price: 7.99,
//     qty: 0
//   },
//   {
//     flavor: beefCream,
//     price: 7.99,
//     qty: 0
//   }
// ]

// let shopContainers = [
//   {
//     container: gumShoe,
//     price: 2,
//     qty: 0
//   },
//   {
//     container: hands,
//     price: .10,
//     qty: 0
//   },
//   {
//     container: beefBox,
//     price: 1,
//     qty: 0
//   }
// ]

// let shopToppings = [
//   {
//     topping: gum,
//     price: .50,
//     qty: 0
//   },
//   {
//     topping: geef,
//     price: 11.99,
//     qty: 0
//   },
//   {
//     topping: beef,
//     price: 5,
//     qty: 0
//   }
// ]

















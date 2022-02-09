let yourName = "Arturo Palafox"
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

credit.textContent = `Created by ${yourName}`

const cookieTotal = document.querySelector('#qty-total')
const gbQty = document.querySelector('#qty-gb')
const gbAdd = document.querySelector('#add-gb')
const gbMinus = document.querySelector('#minus-gb')
const ccQty = document.querySelector('#qty-cc')
const ccAdd = document.querySelector('#add-cc')
const ccMinus = document.querySelector('#minus-cc')
const sugarQty = document.querySelector('#qty-sugar')
const sugarAdd = document.querySelector('#add-sugar')
const sugarMinus = document.querySelector('#minus-sugar')

gbAdd.addEventListener('click', function() {
    gb = gb +1;
    gbQty.textContent = gb;
    cookieTotal.textContent = gb + cc + sugar;
    console.log('gb was pressed')
})
gbMinus.addEventListener('click', function() {
    gb = gb -1;
    gbQty.textContent = gb;
    cookieTotal.textContent = gb + cc + sugar;
    console.log('gb minus was pressed')
})

ccAdd.addEventListener('click', function() {
    cc = cc +1;
    ccQty.textContent = cc;
    cookieTotal.textContent = gb + cc + sugar;
    console.log('cc was pressed')
})
ccMinus.addEventListener('click', function() {
    cc = cc -1;
    ccQty.textContent = cc;
    cookieTotal.textContent = gb + cc + sugar;
    console.log('cc minus was pressed')
})

sugarAdd.addEventListener('click', function() {
    sugar = sugar +1;
    sugarQty.textContent = sugar;
    cookieTotal.textContent = gb + cc + sugar;
    console.log('sugar was pressed')
})
sugarMinus.addEventListener('click', function() {
    sugar = sugar -1;
    sugarQty.textContent = sugar;
    cookieTotal.textContent = gb + cc + sugar;
    console.log('sugar minus was pressed')
}) 
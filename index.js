/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/


// uk index 
let usaMacPrice = 5.66
let ukMacPrice = 4.69
let ukUsaImpliedPurchasingPower = usaMacPrice / ukMacPrice
let ukSterlingValue = 1
let ukUsaDollarValue = 1.38
let usaUkIndex = (ukUsaDollarValue - ukUsaImpliedPurchasingPower) / ukUsaImpliedPurchasingPower

console.log("Mac USA-UK Index =" + Math.round(usaUkIndex * 100) + "%")

// italy index 
let italyMacPrice = 4.98
let italyUsaImpliedPurchasingPower = usaMacPrice / italyMacPrice
let italyEuroValue = 1
let italyUsaDollarValue = 1.20
let usaItalyIndex = (italyUsaDollarValue - italyUsaImpliedPurchasingPower) / italyUsaImpliedPurchasingPower

console.log("Mac USA-Italy Index =", Math.round(usaItalyIndex * 100) + "%")

// france index 
let franceMacPrice = 4.98
let franceUsaImpliedPurchasingPower = usaMacPrice / franceMacPrice
let franceEuroValue = 1
let franceUsaDollarValue = 1.20
let usaFranceIndex = (italyUsaDollarValue - franceUsaImpliedPurchasingPower) / franceUsaImpliedPurchasingPower

console.log("Mac USA-France Index =", Math.round(usaFranceIndex * 100) + "%")

// russia index 
let russiaMacPrice = 250
let russiaUsaImpliedPurchasingPower = usaMacPrice / russiaMacPrice
let russiaEuroValue = 1
let russiaUsaDollarValue = 0.01
let usaRussiaIndex = (russiaUsaDollarValue - russiaUsaImpliedPurchasingPower) / russiaUsaImpliedPurchasingPower

// mexico index 
console.log("Mac USA-Russia Index =", Math.round(usaRussiaIndex * 100) + "%")

let mexicoMacPrice = 50
let mexicoUsaImpliedPurchasingPower = usaMacPrice / mexicoMacPrice
let mexicoEuroValue = 1
let mexicoUsaDollarValue = 0.05
let usaMexicoIndex = (mexicoUsaDollarValue - mexicoUsaImpliedPurchasingPower) / mexicoUsaImpliedPurchasingPower

console.log("Mac USA-Mex Index =", Math.round(usaMexicoIndex * 100) + "%")

// comparing Mex index with the others
console.log("USA-Mex > USA-France Index =", usaMexicoIndex > usaFranceIndex)
console.log("USA-Mex > USA-Russia Index =", usaMexicoIndex > usaRussiaIndex)
console.log("USA-Mex > USA-Italy Index =", usaMexicoIndex > usaItalyIndex)
console.log("USA-Mex > USA-UK Index =", usaMexicoIndex > usaUkIndex)

// comparing Italy index with the others
console.log("USA-Italy > USA-France Index =", usaItalyIndex > usaFranceIndex)
console.log("USA-Italy > USA-Russia Index =", usaItalyIndex > usaRussiaIndex)
console.log("USA-Italy > USA-Mex Index =", usaItalyIndex > usaMexicoIndex)
console.log("USA-Italy > USA-UK Index =", usaItalyIndex > usaUkIndex)

// comparing UK index with the others
console.log("USA-UK > USA-France Index =", usaUkIndex > usaFranceIndex)
console.log("USA-UK > USA-Russia Index =", usaUkIndex > usaRussiaIndex)
console.log("USA-UK > USA-Mex Index =", usaUkIndex > usaMexicoIndex)
console.log("USA-UK > USA-Italy Index =", usaUkIndex > usaItalyIndex)

// comparing France index with the others
console.log("USA-France > USA-Uk Index =", usaFranceIndex > usaUkIndex)
console.log("USA-France > USA-Russia Index =", usaFranceIndex > usaRussiaIndex)
console.log("USA-France > USA-Mex Index =", usaFranceIndex > usaMexicoIndex)
console.log("USA-France > USA-Italy Index =", usaFranceIndex > usaItalyIndex)





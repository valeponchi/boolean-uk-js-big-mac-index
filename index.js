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
let usaMacPrice = 5.66
let ukMacPrice = 4.69
let ukUsaImpliedPurchasingPower = usaMacPrice / ukMacPrice
let ukSterlingValue = 1
let ukUsaDollarValue = 1.38
let usaUkIndex = (ukUsaDollarValue - ukUsaImpliedPurchasingPower) / ukUsaImpliedPurchasingPower


console.log("Mac USA-UK Index =", usaUkIndex)

let italyMacPrice = 4.98
let italyUsaImpliedPurchasingPower = usaMacPrice / italyMacPrice
let italyEuroValue = 1
let italyUsaDollarValue = 1.20
let usaItalyIndex = (italyUsaDollarValue - italyUsaImpliedPurchasingPower) / italyUsaImpliedPurchasingPower


console.log("Mac USA-Italy Index =", usaItalyIndex)

let franceMacPrice = 4.98
let franceUsaImpliedPurchasingPower = usaMacPrice / franceMacPrice
let franceEuroValue = 1
let franceUsaDollarValue = 1.20
let usaFranceIndex = (italyUsaDollarValue - franceUsaImpliedPurchasingPower) / franceUsaImpliedPurchasingPower


console.log("Mac USA-France Index =", usaFranceIndex)

let russiaMacPrice = 250
let russiaUsaImpliedPurchasingPower = usaMacPrice / russiaMacPrice
let russiaEuroValue = 1
let russiaUsaDollarValue = 0.01
let usaRussiaIndex = (russiaUsaDollarValue - russiaUsaImpliedPurchasingPower) / russiaUsaImpliedPurchasingPower


console.log("Mac USA-Russia Index =", usaRussiaIndex)

let mexicoMacPrice = 50
let mexicoUsaImpliedPurchasingPower = usaMacPrice / mexicoMacPrice
let mexicoEuroValue = 1
let mexicoUsaDollarValue = 6.54
let usaMexicoIndex = (mexicoUsaDollarValue - mexicoUsaImpliedPurchasingPower) / mexicoUsaImpliedPurchasingPower


console.log("Mac USA-Mexico Index =", usaMexicoIndex)


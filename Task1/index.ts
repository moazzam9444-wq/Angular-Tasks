const storeName: string = "ElectroShop";

const storeDescription: string = "Electronics and Accessories Store";

const currency: string = "JOD";

let availableProducts: number = 20;

let isOpen: boolean = true;

let arr: string[] = ["Laptop", "Mouse", "Keypord", "Headphone", "Monitor"];

let arr2: (string | number | boolean)[] = ["Laptop", 30, true];

if (isOpen == true) {
  console.log("The Store Is Open");
} else {
  console.log("The Store Is Closed");
}

if (typeof arr2[1] === "number") {
  if (arr2[1] > 500) {
    console.log("Expensive Product");
  } else if (arr2[1] >= 100 && arr2[1] <= 500) {
    console.log("Medium Price");
  } else {
    console.log("Affordable Product");
  }
}

arr.forEach((element) => {
  console.log(element);
});

let prices: Number[] = [150, 350, 450, 220, 150];

let biggest = 0;

prices.forEach((element) => {
  if (typeof element === "number") {
    if (element > 100) {
      biggest++;
    }
  }
});

console.log("The Products Greater Than 100 Is " + biggest);

// Day 2  Functions and Product Management
let FinalPrice = 0;
function calculateDiscount(
  originalPrice: number,
  discountPercentege: number,
): number {
  FinalPrice = originalPrice * (discountPercentege / 100);
  return FinalPrice;
}
console.log(calculateDiscount(500, 20));

function checkProductAvailability(quantity: number): void {
  if (quantity > 0) {
    console.log("In Stuck");
  } else {
    console.log("Out Of Stuck");
  }
}

checkProductAvailability(5);

function displayStoreMessage(message: string): void {
  console.log(message);
}

displayStoreMessage("Hello World");

function displayProductInfo(
  productName: string,
  productPrice: number,
  productDesc?: string,
  Currency: string = "USD",
) {
  console.log(`The Product Name is ${productName} 
        and its Price is ${productPrice} descriptison ${productDesc} currency ${Currency}`);
}

displayProductInfo("Laptops", 750, "good lap");

function calculateTotalPrice(...Pricess: number[]): number {
  let TotalPrices: number = 0;
  Pricess.forEach((element) => {
    TotalPrices += element;
  });
  return TotalPrices;
}
calculateTotalPrice(100, 200, 50, 150);

interface electronicProducts {
  name: string;
  description: string;
  price: number;
}
let arrayOf: electronicProducts[] = [
  {
    name: "Laptop",
    description: "Core i5, 8GB RAM",
    price: 850,
  },
  {
    name: "HeadPhones",
    description: "Wireless Bluetooth headphones",
    price: 54,
  },
  {
    name: "Keyboard",
    description: "Mechanical gaming keyboard",
    price: 27,
  },
];

let container = document.getElementById("content");
let btn = document.getElementById("btn");
function show() {
  for (var element of arrayOf) {
    if (container) {
      container.innerHTML = "";
      container.innerHTML += `The Product Is: ${element.name}<br>
    desc is : ${element.description}<br>
    price is:  ${element.price}`;
    }
  }
}
btn?.addEventListener("click", show);

export {};

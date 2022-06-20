import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import React, { useState } from "react";
import AddItems from "./components/AddItems";

function App() {
  const products = [
    {
      price: 5000,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 4000,
      name: "Redmi Note 7",
      quantity: 0,
    },
    {
      price: 2000,
      name: "Realme 10",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products); //Using Hooks
  let [totalAmount, setTotalAmount] = useState(0);

  //if u define any function inside functional Component=>it should be define with arrow bcoz of this binding
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity=()=>{
    let newProductList = [...productList];
    newProductList.map((products)=>{
      products.quantity=0;
    })

    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem=(index)=>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount-=newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const addItem=(name,price)=>{
    let newProductList = [...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0

    });
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItems addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          resetQuantity={resetQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;

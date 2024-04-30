import { useState } from "react";

export default function Input() {
  const [Item, setItem] = useState(""); // this first is needed to get some response from the input
  const [Array, setArray] = useState([]); //this one will hold all our new items
  function addItem() {
    if (!Item) {
      // if nothing insert into input return alert
      alert("Enter Item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000), //random id generated that we can use later on
      value: Item, //we get it from the input
    };

    //whatever is currently in the array plus a new item
    setArray((oldList) => [...oldList, item]);

    // Reset newItem back to original state
    setItem("");
  }

  function deleteItem(id) {//this gets a new array,check if this item id does not equal to the one  we just pass
    const newArray = Array.filter((item) => item.id !== id);
    setArray(newArray);
    console.log(Array)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add"
        value={Item}
        onChange={(e) => setItem(e.target.value)} //this will update whats inside of the input
      ></input>
      <button onClick={() => addItem()}>click</button>

      {Array.map((whatever) => {
        //we fish inside of new items
        return (
          //the key to identify each item expecifically,this will display items on screen  
     
          <h1 key={whatever.id}> 
            {whatever.value} 
            {/* //another button to delete */}
            <button onClick={() => deleteItem(whatever.id)}>x</button>
          </h1> 
        );
      })}
    </div>
  );
}

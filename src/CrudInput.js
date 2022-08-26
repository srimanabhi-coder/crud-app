import React, { useState } from 'react'
import "./CrudInput.css"
import ShowCrudData from './ShowCrudData';

const CrudInput = () => {
    const [input, setInput] = useState({
        itemName: "",
        itemPrice: "",
        itemQuantity: ""
    })
    const [itemArr, setItemArr] = useState([]);

    const changeName = (e) => {
        return (
            setInput(
                {
                    ...input,
                    itemName: e.target.value
                }
            )
        )
    }
    const changePrice = (e) => {
        return (setInput({
            ...input,
            itemPrice: e.target.value
        }))
    }
    const changeQuantity = (e) => {
        if(e.target.value === '.'){
            console.log("yes");
        }
        return (setInput({
            ...input,
            itemQuantity: Math.floor(e.target.value)
        }))
    }

    const setData = (e) => {
        e.preventDefault();
        // console.log("yes");
        if (input.itemName !== "" && input.itemPrice !== "" && input.itemQuantity !== "") {
            console.log(input);
            setItemArr(prevState => [...prevState, input]);
            setInput({
                itemName:"",
                itemPrice:"",
                itemQuantity:""
            })
            
        }
    }

    return (
        <>
        <div className="inputContainer">
            <form onSubmit={setData}>
                <label htmlFor="ItemName">Name : </label>
                <input name="ItemName" type="text" value={input.itemName} onChange={changeName} /><br /><br />
                <label htmlFor="ItemPrice">Price : </label>
                <input name="ItemPrice" className='handlePriceCss' type="number" value={input.itemPrice} onChange={changePrice} /><br /><br />
                <label htmlFor="ItemQuan">Quant :</label>
                <input name="ItemQuan" type="number" value={input.itemQuantity} onChange={changeQuantity} /><br /><br />
                <button type="submit" onClick={setData}>Add</button>
            </form>
        </div>
        {
          itemArr.length>0?<ShowCrudData arr={itemArr} setArr={setItemArr}/>: "" 
        }
        </>
    )
}

export default CrudInput
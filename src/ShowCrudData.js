import React from 'react'

const ShowCrudData = ({arr, setArr}) => {

    const deleteItem = (delIndex) =>{
        console.log(delIndex);
        setArr(arr.filter((value, index)=> index !== delIndex))
    }
  return (
    <>
        <h2>Grocery Table</h2>
        <table border={1}>
            <thead>
                <th>Sr. No</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Item Quantity</th>
                <th>Total Price</th>
                <th>Delete Item</th>
            </thead>
            {
                arr.map((value, index)=>{
                    return(
                        <tr>
                            <td>{index + 1}</td>
                            <td>{value.itemName}</td>
                            <td>{value.itemPrice}</td>
                            <td>{value.itemQuantity}</td>
                            <td>{(value.itemPrice * Math.floor(value.itemQuantity))}</td>
                            <td>
                                <button onClick={()=>deleteItem(index)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </table>
        
    </>
  )
}

export default ShowCrudData
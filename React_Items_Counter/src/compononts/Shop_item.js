import React, { useState } from 'react'
import '../style.css';

function Shopitem(props) {

    const [number, setnumber] = useState(0);
    const plusClick = () => setnumber(number + 1);
    const minusClick = () => {
        setnumber(number - 1)
        if (number < 1) {
            setnumber(0)
        }
    };
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.img} alt="item" />
            </div>
            <div className="info">
                <h4>{props.name}</h4>
                <div className="reatee">{props.rate}</div>
                <div className="price">{props.price}</div>
                <div className="numberItem">
                    <span>
                        <button className="minus" onClick={minusClick} > - </button>
                        <strong >{number}</strong>
                        <button className="plus" onClick={plusClick}>+</button>
                    </span>
                </div>
                <button className="btnCart">ADD TO CART </button>
                <div className="numberofElement">{number}</div>
            </div>
        </div>
    );
}
export default Shopitem





 //************************************************************************** */
    // const addButton =document.querySelector('.btnCart');
    // let itemsArray="";
    // let itemArray = []
    // let plusButton = document.querySelector(".plus");
    // plusButton.onClick = () => {
    //     itemArray.push({number})
    // }
    // console.log(itemArray)


    // let numberElement=document.querySelector(".numberofElement")
    // numberElement.innerHTML=setnumber(number)


    /****************************************************************************** */
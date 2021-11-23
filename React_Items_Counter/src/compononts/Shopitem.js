import React, { Component } from "react";
import "../style.css";

class Shopitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        };
    }
    plusClick = () => {
        this.setState({ number: this.state.number + 1 });
        this.props.plustItem();
    };
    minusClick = () => {
        this.setState({ number: this.state.number - 1 });
        this.props.minusItem();
        if (this.state.number < 1) {
            this.setState({ number:0});
        }
    };
    render() {
        return (
            <div className="card">
                <div className="card-img">
                    <img src={this.props.img} alt="item" />
                </div>
                <div className="info">
                    <h4>{this.name}</h4>
                    <div className="reatee">{this.props.rate}</div>
                    <div className="price">{this.props.price}</div>
                    <div className="numberItem">
                        <span>
                            <button disabled={this.state.number===0} className="minus" onClick={this.minusClick}>
                                {" "}
                                -{" "}
                            </button>
                            <strong>{this.state.number}</strong>
                            <button className="plus" onClick={this.plusClick}>
                                +
                            </button>
                        </span>
                    </div>
                    <button className="btn" onClick={this.addItems}>
                        ADD TO CART{" "}
                    </button>
                </div>
            </div>
        );
    }
}
export default Shopitem;

// itemArray = []

// addItems=()=>{

//     this.itemArray.push(this.state.number)
//     console.log(this.itemArray)
//     this.lastItem=this.itemArray[this.itemArray.length-1]
//     console.log(this.lastItem)

// console.log(this.map(this.lastItem.length))
//}



// itemArray = []
//     sum=0
//     addItems = () => {

//         this.itemArray.push(this.state.number)
//         console.log(this.itemArray)
//         this.lastItem = this.itemArray[this.itemArray.length - 1]
//         console.log(this.lastItem)
        
// for(let i=0;i<this.itemArray.length;i++){
//     this.sum=this.sum+this.itemArray[i];
   
// }
// console.log(this.sum)
//         // console.log(this.map(this.lastItem.length))
//     }


import React, { Component } from 'react'
import Shopitem from "./Shopitem";
// import Shopitem from "./Shop_item";
import Test from "./Test"
import '../style.css';

class Shop extends Component {
    constructor() {
        super();
        this.state = {
            numberItem: 0
        };
    }
    items = [
        {id: 1,  img:'/img/moniter.jpg',    name: 'Samsung 144Hz',              rate: '*****',price: '299  JOD'},
        {id: 2,  img:'/img/pc.jpg',         name: 'RTX 3090 Liquid Cooled',     rate: '*****',price: '4250 JOD'},
        {id: 3,  img:'/img/laptop.jpg',     name: 'HP Spectre x360',            rate: '*****',price: '4250 JOD'},
    ];
    caseOne = () => this.setState({ numberItem: this.state.numberItem + 1 });
    caseTwo = () => this.setState({ numberItem: this.state.numberItem - 1 });
    infoitems = this.items.map((infoitem) =>
       
            <Shopitem
                key={infoitem.id}
                img={infoitem.img}
                name={infoitem.name}
                rate={infoitem.rate}
                price={infoitem.price}
                plustItem={this.caseOne}
                minusItem={this.caseTwo}
            />
    );
    render() {
        return (
            <div>
            <div className="item">
                {this.infoitems}
                </div>
                <Test value="test">
                <h1>{`Total ${this.state.numberItem}`}</h1>
                </Test>
            </div>
        )
    }
}
export default Shop





import React, { Component } from  'react';
import header from '../../assets/img/header.PNG'
import gift from '../../assets/img/gift.png'
import meSurpreenda from '../../assets/img/meSurpreenda.PNG'
import ItemSorte from '../itemSort';
import button from '../../assets/img/search.png'
import './styles.css'

const list = [
    "Tablets",
    "Celulares",
    "Bebidas",
    "Fraldas",
    "Chocolates",
    "Perfumaria",
    "Shampoo",
    "Sapatos",
    "Informática"
]

export default class Surpreenda extends Component {

    constructor() {
        super();
    
        this.state = {
          searchItem: false,
          divImageGift: false
        };
        this.searchItem = this.searchItem.bind(this);
      }
    
      
    searchItem() {
        this.setState({
            searchItem: true,
            divImageGift: true
          });
    }

    render() {
        return(
            <div className="container"> 
            <img className="img" src={header}></img>
            <div className="containerAlign">

            <img className="surpreenda" src={meSurpreenda}></img>
                <div className="header">
                    <div className="filter">
                       <h1>Quanto você quer pagar?</h1>
                       <label className="dollarSign">R$</label>
                       <input className="inputPay" type="text"></input>
                       <h1>Qual tipo de item você quer?</h1>
                       <input className="inputPay" type="text">
                       </input>
                               <img className="search" src={button} onClick={this.searchItem} />
                       <div className="itemsType">
                       {list.map(function(item) {
                           return (
                               <button className="itemType">
                               {item}
                               </button>
                               )
                            })}
                        </div>
                    </div>
                    <div className="vl"></div>
                    <div className="frete">
                        <h1>Completar o carrinho para frete grátis?</h1>
                        <div className="checkbox">
                            <input type="checkbox" className="buttonFrete"></input>
                            <label>Sim</label>
                        </div>
                    </div>
                    <div className={this.state.divImageGift ? 'divImageGiftTrue' : 'divImageGift'}>
                        {this.state.searchItem ? <ItemSorte></ItemSorte> : <img src={gift} />}
                    

                    </div>
                </div>
            </div>
            </div>
        )
    }
}
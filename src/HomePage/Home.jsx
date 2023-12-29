import React, { Component } from 'react';
import Header from '../components/header/header';
import Shop from '../components/main/ShopForYou/Shop'
import New from '../components/main/New/New';
import Kupit from '../components/main/UspeyKupit/Kupit';
import Reacomend from '../components/main/RecomendForYou/Reacomend'
import Slide from '../components/main/Slide/Slide';

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        orders: [],
        items: [],
      };
      this.addToOrder = this.addToOrder.bind(this);
      this.removeFromOrder = this.removeFromOrder.bind(this); 
    }
  
    render() {
      return (
        <div className='App'>
          {/* <Header items={this.state.items} onRemoveFromCart={this.removeFromOrder} /> */}
          <Kupit onAdd={this.addToOrder} />
          <New />
          <Shop />
          <Reacomend />
          <Slide />
        </div>
      );
    }
  
    addToOrder(item) {
      this.setState(prevState => ({
        items: [...prevState.items, item],
      }));
    }
  
    removeFromOrder(index) {
      this.setState((prevState) => ({
        items: prevState.items.filter((_, i) => i !== index),
      }));
    }
  }

export default Home;

import React from 'react';
import Header from '../components/header/header';
import Shop from '../components/main/ShopForYou/Shop'
import New from '../components/main/New/New';
import Kupit from '../components/main/UspeyKupit/Kupit';

const Home = () => {
    return (
        <div>
            <div className="AllS">
                <Header/>
                <div className="Main">
                    <New/>
                <Reacomend/>
                <Shop/>
                <Kupit/>
                </div>
            </div>
        </div>
    );
}

export default Home;

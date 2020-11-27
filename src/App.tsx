import React from 'react';
import './App.css';
import classes from "./app.module.css";
import ShopList from "./main/app/ui/ShopList/ShopList";
import Header from "./main/app/ui/Header/Header";
import ShopListContainer from "./main/app/ui/ShopList/ShopListContainer";
import { Route } from 'react-router-dom';
import BuyListContainer from "./main/app/ui/BuyList/BuyListContainer";

function App() {
  return (
    <div className={classes.back}>
        <Header/>
        <Route path={'/ShopList'} render={()=>
            <ShopListContainer/>
        }/>
        <Route path={'/BuyList'} render={()=>
            <BuyListContainer/>
        }/>
    </div>
  );
}

export default App;

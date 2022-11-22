import React from "react";
import { Route, Routes } from "react-router-dom"

import Navigation from "./Components/Navigation"
import Home from "./Pages/Home"

import Guarantee from "./Pages/Guarantee"
import Refound from "./Pages/Refound"
import CorporateSales from "./Pages/CorporateSales"
import DeliveryService from "./Pages/DeliveryService"
import GiftCards from "./Pages/GiftCards"

import Phones from "./ProductsPage/Phones"
import Headphones from "./ProductsPage/Headphones"

import Apple from "./BrandPage/Apple"
import Vivo from "./BrandPage/Vivo"
import Skullcandy from "./BrandPage/Skullcandy"
import Realme from "./BrandPage/Realme"
import Xiaomi from "./BrandPage/Xiaomi"

import Iphone14PG from "./ProductPage/Iphone14PG"
import Iphone14PlusPG from "./ProductPage/Iphone14PlusPG"
import Iphone14ProPG from "./ProductPage/Iphone14ProPG"
import Iphone14ProMaxPG from "./ProductPage/Iphone14ProMaxPG"

import AirPodsPro2PG from "./ProductPage/AirPodsPro2PG"
import AirPodsProPG from "./ProductPage/AirPodsProPG"
import AirPods3PG from "./ProductPage/AirPods3PG"
import AirPods2PG from "./ProductPage/AirPods2PG"

import MacBookAir13M2PG from "./ProductPage/MacBookAir13M2PG"
import MacBookAir13M1PG from "./ProductPage/MacBookAir13M1PG"
import MacBookPro13PG from "./ProductPage/MacBookPro13PG"
import MacbookPro14PG from "./ProductPage/MacbookPro14PG"

import VivoV23PG from "./ProductPage/VivoV23PG"
import VivoY21PG from "./ProductPage/VivoY21PG"
import VivoY33sPG from "./ProductPage/VivoY33sPG"
import VivoY53sPG from "./ProductPage/VivoY53sPG" 

import BlackShark5PG from "./ProductPage/XiaomiBlackShark5PG"
import PocoX4ProPG from "./ProductPage/XiaomiPocoX4ProPG"
import RedmiNote11PG from "./ProductPage/XiaomiRedmiNote11PG"
import RedmiNote11SPG from "./ProductPage/XiaomiRedmiNote11SPG"

import XiaomiBlackSharkJoyBuds from "./ProductPage/XiaomiBlackSharkJoyBudsPG"
import XiaomiBlackSharkLuciferT10 from "./ProductPage/XiaomiBlackSharkLuciferT10PG"
import XiaomiRedmiBuds3 from "./ProductPage/XiaomiRedmiBuds3PG"
import XiaomiRedmiBudsPro3 from "./ProductPage/XiaomiRedmiBudsPro3PG"

import Realme9iPG from "./ProductPage/Realme9iPG"
import Realme9ProPG from "./ProductPage/Realme9ProPG"
import Realme9ProPlusPG from "./ProductPage/Realme9ProPlusPG"
import RealmeC35PG from "./ProductPage/RealmeC35PG"

import RealmeBudsAir2PG from "./ProductPage/RealmeBudsAir2PG"
import RealmeBudsAir3PG from "./ProductPage/RealmeBudsAir3PG"
import RealmeBudsQ2sPG from "./ProductPage/RealmeBudsQ2sPG"
import RealmeTechLifeBudsT100PG from "./ProductPage/RealmeTechLifeBudsT100PG"

import SkullcandyJIBWithMICPG from "./ProductPage/SkullcandyJIBWithMICPG"
import SkullcandyJIBWithoutMICPG from "./ProductPage/SkullcandyJIBWithoutMICPG"
import SkullcandyCrusherPG from "./ProductPage/SkullcandyCrusherPG"
import SkullcandyIndyFuelTruePG from "./ProductPage/SkullcandyIndyFuelTruePG"


import Contact from "./Pages/Contact"

function App() {
  return (
    <div>
      <Navigation />
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/Contact' element={<Contact />} />

        <Route path='/Guarantee' element={<Guarantee />} />
        <Route path='/Refound' element={<Refound />} />
        <Route path='/CorporateSales' element={<CorporateSales />} /> 
        <Route path='/DeliveryService' element={<DeliveryService />} />
        <Route path='/GiftCards' element={<GiftCards />} />

        <Route path='/Phones' element={<Phones />} />
        <Route path='/Headphones' element={<Headphones />} />

        <Route path='/Apple' element={<Apple />} />
        <Route path='/Vivo' element={<Vivo />} />
        <Route path='/Skullcandy' element={<Skullcandy />} />
        <Route path='/Realme' element={<Realme />} />
        <Route path='/Xiaomi' element={<Xiaomi />} />

        <Route path='/Iphone14' element={<Iphone14PG />} />
        <Route path='/Iphone14Plus' element={<Iphone14PlusPG />} />
        <Route path='/Iphone14Pro' element={<Iphone14ProPG />} />
        <Route path='/Iphone14ProMax' element={<Iphone14ProMaxPG />} />

        <Route path='/AirPodsPro2' element={<AirPodsPro2PG />} />
        <Route path='/AirPodsPro' element={<AirPodsProPG />} />
        <Route path='/AirPods3' element={<AirPods3PG />} />
        <Route path='/AirPods2' element={<AirPods2PG />} />

        <Route path='/MacBookAir13M2' element={<MacBookAir13M2PG />} />
        <Route path='/MacBookAir13M1' element={<MacBookAir13M1PG />} />
        <Route path='/MacBookPro13' element={<MacBookPro13PG />} />
        <Route path='/MacbookPro14' element={<MacbookPro14PG />} />

        <Route path='/VivoV23' element={<VivoV23PG />} />
        <Route path='/VivoY21' element={<VivoY21PG />} />
        <Route path='/VivoY33s' element={<VivoY33sPG />} />
        <Route path='/VivoY53s' element={<VivoY53sPG />} />

        <Route path='/BlackShark5' element={<BlackShark5PG />} />
        <Route path='/PocoX4Pro' element={<PocoX4ProPG />} />
        <Route path='/RedmiNote11' element={<RedmiNote11PG />} />
        <Route path='/RedmiNote11S' element={<RedmiNote11SPG />} />

        <Route path='/BlackSharkJoyBuds' element={<XiaomiBlackSharkJoyBuds />} />
        <Route path='/BlackSharkLuciferT10' element={<XiaomiBlackSharkLuciferT10 />} />
        <Route path='/RedmiBuds3' element={<XiaomiRedmiBuds3 />} />
        <Route path='/RedmiBudsPro3' element={<XiaomiRedmiBudsPro3 />} />

        <Route path='/Realme9i' element={<Realme9iPG />} />
        <Route path='/Realme9Pro' element={<Realme9ProPG />} />
        <Route path='/Realme9ProPlus' element={<Realme9ProPlusPG />} />
        <Route path='/RealmeC35' element={<RealmeC35PG />} />

        <Route path='/RealmeBudsAir2' element={<RealmeBudsAir2PG />} />
        <Route path='/RealmeBudsAir3' element={<RealmeBudsAir3PG />} />
        <Route path='/RealmeBudsQ2s' element={<RealmeBudsQ2sPG />} />
        <Route path='/RealmeTechLifeBudsT100' element={<RealmeTechLifeBudsT100PG />} />

        <Route path='/SkullcandyJIBWithMIC' element={<SkullcandyJIBWithMICPG />} />
        <Route path='/SkullcandyJIBWithoutMIC' element={<SkullcandyJIBWithoutMICPG />} />
        <Route path='/SkullcandyCrusher' element={<SkullcandyCrusherPG />} />
        <Route path='/SkullcandyIndyFuelTrue' element={<SkullcandyIndyFuelTruePG />} />
      </Routes>
    </div>
  );
}

export default App;

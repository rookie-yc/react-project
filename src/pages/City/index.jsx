import React,{ useState } from "react";
import PubHeader from "../../components/PubHeader";
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";

const City = () => {

  const [city,setCity] = useState("北京");

  function onCityEvent(city) {
    setCity(city)
  }

  return(
    <div>
      <PubHeader title={"城市选择"}/>
      <CurrentCity city={ city }/>
      <CityList onEvent= { onCityEvent }/>
    </div>
  )
}

export default City;
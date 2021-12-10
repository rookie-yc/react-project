import React from "react";
import PubHeader from "../../components/PubHeader";
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";
import { useSelector, useDispatch } from "react-redux";
import { changeCity } from "../../redux/actions/city";

const City = () => {

  // const [city,setCity] = useState("北京");
  const dispatch = useDispatch();
  const city = useSelector(state => state.city)

  function onCityEvent(city) {
    dispatch(changeCity(city))
  }

  return(
    <div>
      <PubHeader title={"城市选择"}/>
      <CurrentCity city={ city.cityName }/>
      <CityList onEvent= { onCityEvent }/>
    </div>
  )
}

export default City;
import React,{ useState } from "react"
import CityHeader from "../../components/PubHeader"
import CurrentCity from "./CurrentCity"
import CityList from "./CityList"
import { useSelector,useDispatch } from "react-redux"
import { initCity,changeCity } from "../../redux/actions/city"
import CityLists from "./CityLists"
import { useNavigate  } from "react-router-dom"

const City = (props) =>{
    
    let navigate = useNavigate();
    // const [city,setCity] = useState("北京")
    const dispatch = useDispatch();
    const city = useSelector(state => state.city)

    function onCityEvent(city){
        dispatch(changeCity(city))
        navigate("/")    
    }

    return(
        <div>
            <CityHeader title={"城市选择"}/>
            <CurrentCity city={ city.cityName }/>
            <CityList onEvent={ onCityEvent }/>
            <CityLists onEvent={ onCityEvent }/>
        </div>
    )
}

export default City
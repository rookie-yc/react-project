import React, {useEffect} from "react";
import OrderHeader from "../../components/PubHeader";
import UserInfo from "./UserInfo";
import { useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom"
import OrderList from "./OrderList";

const Order = (props) => {

  const navigate = useNavigate()
  const city = useSelector(state => state.city)
  const user = useSelector(state => state.login.user)

  useEffect(() => {
    if (!user.token) {
      navigate("/login")
    }
  }, [])

  return(
    <div>
      <OrderHeader title={"订单评价"}/>
      <UserInfo city={ city } user={ user }/>
      <OrderList user= {user} />
    </div>
  )
}

export default Order;
import React from "react";
import { useParams } from "react-router";

const Details = () => {

  const params = useParams()

  return(
    <div>
      详情页:{ params.id }
    </div>
  )
}

export default Details
import React, { Fragment } from 'react'

const Sushi = (props) => {
  console.log("SUSHI PROPS", props.sushi)

  return (
    <div className="sushi">
      <div className="plate"
           onClick={/* Give me a callback! */ null}>
        {
          /* Tell me if this sushi has been eaten! */
          false ?
            null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi

// {id: 89, name: "Tako Supreme", img_url: "https://sushistickers.com/img/sushi-slice_99.png", price: 20, created_at: "2018-07-27T18:53:16.491Z"}

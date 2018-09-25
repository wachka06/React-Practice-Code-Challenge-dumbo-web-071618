import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log("PROPS", props.sushiArray)

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiArray.slice(0, 4).map((sushi) => {
            return <Sushi sushi={sushi} />
          })
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer

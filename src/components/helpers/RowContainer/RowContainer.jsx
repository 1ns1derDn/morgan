import React from 'react'

import './RowContainer.scss'

const RowContainer = ({ left, right, classes }) => (
  <div className={classes ? 'RowContainer ' + classes : 'RowContainer'}>
    {left}
    {right}
  </div>
)

export default RowContainer
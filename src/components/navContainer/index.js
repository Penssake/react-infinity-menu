import React from 'react'
import NestedNav from './nestedNav'

const NavContainer = (props) => {
  const DATA = props.data
  return (
    <div className='nav-container'>
      <NestedNav
        parentClass='parent'
        nestParentClass='nested-parent'
        childClass='child'
        data={DATA}
      />
    </div>
  )
}

export default NavContainer
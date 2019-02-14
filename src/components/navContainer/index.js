import React from 'react'
import NestedNav from './nestedNav'
import './nav.scss'

const NavContainer = (props) => {
  const DATA = props.data
  return (
    <div className='nav-container'>
      <NestedNav
        parentClass='parent'
        nestedParentClass='nested-parent'
        childClass='child'
        data={DATA}
      />
    </div>
  )
}

export default NavContainer
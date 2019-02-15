import React, {Component} from 'react'

const NestedNav = (props) => {

  const {data, parentClass, nestedParentClass, childClass} = props

  const mappedChildren = (child) => {
    let childElement
    if(child) {
      return childElement = child.map((child, i) => <li
        key={i}
        id={child.id}
        url={child.url}>{child.title}
        <ul className={childClass}>{mappedChildren(child.children)}</ul>
      </li>
      )}
    return ''
  }
  const navListItems = data.map((collection, i) => <li
    key={i}
    id={collection.id}
    className={parentClass}
    url={collection.url}><span>{collection.icon}</span>{collection.title}
    <ul className={nestedParentClass}>{mappedChildren(collection.children)}</ul>
  </li>)

  return (
    <div className='nested-nav'>
      <ul>
        {navListItems}
      </ul>
    </div>
  )
}

export default NestedNav
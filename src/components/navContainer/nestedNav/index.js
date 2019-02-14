import React, {Component} from 'react'
import './nested.scss'

const NestedNav = (props) => {

  const {data} = props

  const mappedChildren = (child) => {
    let childElement
    if(child) {
      return childElement = child.map((child, i) => <li
        key={i}
        id={child.id}
        url={child.url}>{child.title}
        <ul className='second-nest'>{mappedChildren(child.children)}</ul>
      </li>
      )}
    return ''
  }
  const navListItems = data.map((collection, i) => <li
    key={i}
    id={collection.id}
    url={collection.url}><span>{collection.icon}</span>{collection.title}
    <ul className='first-nest'>{mappedChildren(collection.children)}</ul>
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
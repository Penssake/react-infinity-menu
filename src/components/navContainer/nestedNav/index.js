import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {findIconDefinition} from '@fortawesome/fontawesome-svg-core'
import {faArrowCircleRight, faArrowCircleDown} from '@fortawesome/free-solid-svg-icons'

class NestedNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '',
      nestSelect: '',
      children: [],
      active: '',
    }
  }

 handleClick = (title) => {
   this.setState({
     selected: '',
     nestSelect: '',
     children: [],
     active: '',
   })
 }

 render() {

   const {data, parentClass, nestedParentClass} = this.props
   const renderedChildElements = this.state.children
   const active = this.state.active === 'true' ? 'true' : ''

   const mappedChildren = (child, title) => {
     let childElement
     if(child) {
       childElement = child.map((child, i) => <li
         key={i}
         id={child.id}
         className={nestedParentClass + (this.state.nestSelect === child.title ? 'nest-selected' : '')}
         url={child.url}><Link to={'/'}>{child.title}</Link>
         {child.children ?
           <FontAwesomeIcon
             onClick={() => mappedChildren(child.children, this.state.select)}
             className='i button'
             icon={faArrowCircleDown} /> : null}
       </li>)
       this.setState({
         selected: title,
         children: childElement,
         active: 'true',
       })
     }
     return ''
   }

   const navListItems = data.map((collection, i) => <li
     key={i}
     id={collection.id}
     className={parentClass + (this.state.selected === collection.title ? 'selected' : '')}
     url={collection.url}><i onClick={this.handleClick}>{collection.icon}</i><Link to={'/'}><span>{collection.title}</span></Link>
     {collection.children ?
       <FontAwesomeIcon
         onClick={() => mappedChildren(collection.children, collection.title)}
         className='i button'
         icon={faArrowCircleRight} /> : null}
   </li>)

   return (
     <div className={'nested-nav'}>
       <div className={'container-two-' + active}>
         <h2>{this.state.selected}</h2>
         {this.state.children}
         {this.state.subChildren}
       </div>
       <div className='container-one'>{navListItems}</div>
     </div>
   )
 }
}

export default NestedNav
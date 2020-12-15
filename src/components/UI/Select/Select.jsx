import React from 'react'
import './Select.scss'

const RenderSelectItem = (props) => (
  <label className={props.selected ? 'Select-Label Select-Label_Selected' : 'Select-Label'} htmlFor={props.id}>
    <input
      onClick={(e) => props.handleSelected(e, props.id)}
      className='Select-Input'
      type='button'
      value={props.value}
      id={props.id} />
  </label>
)

const Select = ({ select, clazz, handleToggleOpen, handleSelected }) => {
  let classes = 'Select'

  if (clazz) {
    classes += ` ${clazz}`
  }

  if (select.isOpen) {
    classes += ' Select_Open'
  }
  
  return (
    <div className={classes}>
      <div className='Select-Head'>
        <label className='Select-HeadSelect'>
          Sort by:<input onClick={handleToggleOpen} className='Select-HeadInput' type='button' value={select.value} />
        </label>
      </div>
      <ul className='Select-Drop'>
        {
          select.selectItems.map(({ value, id, selected }) => {
            return (
              <li key={id}>
                <RenderSelectItem
                  value={value}
                  id={id}
                  selected={selected}
                  handleSelected={handleSelected}
                />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Select
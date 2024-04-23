import React from 'react'
import PropTypes from 'prop-types'

function Person(props) {
    const {
       name,
       

    } = props.person;
  return (
    <div className='user-card'>
        <h2>{name}</h2>
      
    </div>
  )
}

Person.propTypes = {

}

export default Person


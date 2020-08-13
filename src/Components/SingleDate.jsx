import React from 'react'
import { SingleDatePicker } from 'react-dates'
import DateIcon from './../assets/dateIcon.png'

const SingleDate = (props) => {

    const { 
        date, // moment.Moment
        focused, // boolean
        onDateChange, // (date: moment.Moment) => void
        toggleFocus // function...
    } = props

    return <SingleDatePicker
        customInputIcon={<img height="50" src={DateIcon}/>}
        date={date} 
        onDateChange={onDateChange}
        focused={focused} 
        onFocusChange={toggleFocus} 
        numberOfMonths={1}
        isOutsideRange={() => false}
        displayFormat="MM/DD/YYYY"
    />

}

export default SingleDate
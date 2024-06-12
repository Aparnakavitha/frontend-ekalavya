import React from 'react'
import BatchSearch from '../../common/components/BatchSearch'
import EventActionData from './EventActionData'

const EventAction = () => {
  return (
    <div>
        <BatchSearch {...EventActionData}/>
    </div>
  )
}

export default EventAction

import React from 'react'
import Input from './Input'

export default {
    title:'Input',
    component: Input
}

const inputData = {
    label: 'Enter email addresses', 
    width: "526px",
    height: "57px",
    placeholders: ['Address 1', 'Address 2', 'Address 3'] 
}

export const input = {
    args: {
        ...inputData
    }
}

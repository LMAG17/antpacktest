import React from 'react'
import { useSelector } from 'react-redux'

export default function Login() {
    const test = useSelector(state => state.test)
    return (
        <div>
            {test}
        </div>
    )
}

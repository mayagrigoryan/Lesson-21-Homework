import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

function Profile() {
    const {id} = useParams()
    const {state} = useLocation()

  return (
    <div>
        <h2>{state?.name}</h2>
        <h2>{state?.email}</h2>
    </div>
  )
}

export default Profile
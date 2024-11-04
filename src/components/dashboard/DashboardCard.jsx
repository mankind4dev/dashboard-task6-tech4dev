import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Home from '../../layout'

const DashboardCard = () => {
  const card = useSelector((state) => state.dashboard.cards)
  console.log(card, "okay")
  const dispatch = useDispatch()
  return (
    <>
    <Home>
      
    </Home>
      
    </>
  )
}

export default DashboardCard
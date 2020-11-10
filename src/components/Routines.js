import React, { useState, useEffect } from 'react'
import { getRoutines } from '../api/routines'
import { card } from 'react-bootstrap'
import './Routines.css'

const publicRoutines = ({
    props
}) => [getAllRoutines, setRoutines] = useState([])



import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
// import { logo } from '../utils/constants'
import logo from '../assets/logo.png'
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <Stack
            direction='row'
            alignItems='center'
            p={2} sx={{ position: 'sticky', background: '#000', top: '0', justifyContent: 'space-between' }}
        >
            <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt='Logo' style={{ height: '55px' }} />
                <Typography variant='h5' color='white' sx={{ display: { xs: 'none' } }}>VidVerse</Typography>
            </Link>
            <SearchBar />

        </Stack>
    )
}

export default Navbar

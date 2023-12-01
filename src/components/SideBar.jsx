import { Button, Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'


const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack
            direction='row'
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' }
            }}
        >
            {categories.map((category, index) => (
                <button
                    key={index}
                    className='category-btn'
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        background: category.name === selectedCategory && '#00adb5',
                        color: 'white'
                    }}
                >
                    <span
                        style={{
                            color: category.name === selectedCategory ? 'white' : '#00adb5',
                            marginRight: '15px'
                        }}
                    >
                        {category.icon}
                    </span>
                    <span
                        style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}
                    >
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    )
}

export default SideBar

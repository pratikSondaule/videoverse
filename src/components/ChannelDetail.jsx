import React, { useEffect, useState } from 'react'
import { Videos, ChannelCard } from './'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromApi'
import { Box } from '@mui/material'

const ChannelDetail = () => {

    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then(data => setChannelDetail(data?.items[0]))

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then(data => setVideos(data?.items))
    }, [id])
    return (
        <Box minHeight='95vh'>
            <Box>
                <div
                    style={{
                        background: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
                        zIndex: 10,
                        height: '300px'
                    }}
                />
                <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
            </Box>
            <Box display='flex' p='2'>
                <Box sx={{ mr: { sm: '70px' } }} />
                <Videos videos={videos} />

            </Box>

        </Box>
    )
}

export default ChannelDetail

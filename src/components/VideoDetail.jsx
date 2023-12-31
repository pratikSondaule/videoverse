import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromApi'
import ReactPlayer from 'react-player'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Videos } from './'

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null)
    const [videos, setVideos] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]))

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideos(data.items))
    }, [id])

    console.log("Videos ", videos);

    if (!videoDetail) return 'Loading ...';

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail

    return (
        <Box minHeight='95vh'>
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
                        <Typography
                            color='#fff'
                            variant='h5'
                            fontWeight='bold'
                            padding='16px'
                        >
                            {title}
                        </Typography>
                        <Stack direction='row' justifyContent='space-between' sx={{ color: 'white' }} py={1} px={2}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='white'>
                                    {channelTitle}
                                    <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
                                </Typography>
                            </Link>
                            <Stack direction='row' gap='20px' alignItems='center'>
                                <Typography variant='body1' sx={{ opacity: '0.7' }}>
                                    {Number(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant='body1' sx={{ opacity: '0.7' }}>
                                    {Number(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
                    {videos && <Videos videos={videos} direction='column' />}
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail

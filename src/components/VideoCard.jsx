import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : ''}>
                <CardMedia
                    component="img"
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: '180px' }}
                />
                <CardContent sx={{ background: '#1e1e1e', height: '106px' }}>
                    <Link to={videoId ? `/video/${videoId}` : ''}>
                        <Typography
                            variant='subtitle2'
                            fontWeight='bold'
                            color='#fff'
                        >
                            {snippet?.title.slice(0, 60)}
                        </Typography>
                    </Link>
                    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : ''}>
                        <Typography
                            variant='subtitle2'
                            fontWeight='bold'
                            color='gray'
                        >
                            {snippet?.channelTitle}
                            <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
                        </Typography>
                    </Link>
                </CardContent>
            </Link>
        </Card>
    );
};

export default VideoCard;

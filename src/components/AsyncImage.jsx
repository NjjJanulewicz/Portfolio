import React, {useState, useEffect} from 'react';
import {CircularProgress} from "@mui/material";

function AsyncImage({src, alt, ...props}) {
    const [loaded, setLoaded] = useState(false);
    const [aborted, setAborted] = useState(false);

    useEffect(() => {
        const img = new window.Image();
        img.src = src;
        img.onerror = (e) =>
        {
            console.error(e);
            setAborted(true);
        }
        img.onabort = () => setAborted(true);
        img.onload = async () => setLoaded(true);
    }, [src]);

    let content;
    if (loaded && !aborted) {
        content = <img
            src={src}
            alt={alt}
            {...props}
            loading="lazy"/>;
    } else if (!loaded && !aborted) {
        content = <CircularProgress/>;
    } else {
        content = "Failed to load image";
    }

    return (
        <div
            style={{
                minHeight: '200px',
                minWidth: '200px',
                display: 'flex',
                justifyContent: 'center',  // Horizontal alignment
                alignItems: 'center'       // Vertical alignment
            }}
        >
            {content}
        </div>
    );
}

export default AsyncImage;


// eslint-disable-next-line react/prop-types
const VideoContent=({asset_content, asset_title})=>{
    return(
        <iframe
          src={asset_content}
          title={asset_title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )
}

export default VideoContent;
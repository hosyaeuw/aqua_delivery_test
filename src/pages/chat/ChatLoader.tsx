import React from "react"
import ContentLoader from "react-content-loader"

const ChatLoader: React.FC = () => (
    <ContentLoader
        speed={2}
        width={852}
        height={750}
        viewBox="0 0 750 852"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="3" ry="3" width="852" height="750" />
    </ContentLoader>
)

export default ChatLoader
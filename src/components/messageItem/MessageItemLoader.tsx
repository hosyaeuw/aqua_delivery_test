import React from "react"
import ContentLoader from "react-content-loader"

import './style.scss'

const MessageItemLoader: React.FC = () => (
    <div className="message-wrapper">
        <ContentLoader
            speed={2}
            width={750}
            height={76}
            viewBox="0 0 750 76"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="18" cy="18" r="18" />
            <rect x="60" y="0" rx="3" ry="3" width="516" height="50" />
            <rect x="588" y="13" rx="3" ry="3" width="24" height="24" />
            <rect x="447" y="54" rx="3" ry="3" width="129" height="26" />
        </ContentLoader>
    </div>
)

export default MessageItemLoader
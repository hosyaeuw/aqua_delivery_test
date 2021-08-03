import React from "react"
import ContentLoader from "react-content-loader"

const AuthLoader: React.FC = () => (
    <ContentLoader
        speed={2}
        width={472}
        height={472}
        viewBox="0 0 472 472"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="3" ry="3" width="472" height="472" />
    </ContentLoader>
)

export default AuthLoader
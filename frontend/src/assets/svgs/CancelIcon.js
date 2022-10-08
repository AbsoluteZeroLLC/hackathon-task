import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CancelIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.9 18.299 5.701 7.1a.997.997 0 0 1 0-1.4.997.997 0 0 1 1.4 0L18.299 16.9a.997.997 0 0 1 0 1.4.997.997 0 0 1-1.4 0Z"
      fill="#292D32"
    />
    <Path
      d="M5.701 18.299a.997.997 0 0 1 0-1.4L16.898 5.702a.997.997 0 0 1 1.4 0 .997.997 0 0 1 0 1.4L7.1 18.298a.997.997 0 0 1-1.4 0Z"
      fill="#292D32"
    />
  </Svg>
)

export default CancelIcon

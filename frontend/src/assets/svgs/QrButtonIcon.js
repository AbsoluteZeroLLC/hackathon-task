import React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const QrButton = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G
      clipPath="url(#clip0_4_5016)"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M6.5 8v4M10.17 8v4M13.83 8v4M7 21H6v0a3 3 0 01-3-3v0-1M17 3h1v0a3 3 0 013 3v1M3 7V6v0a3 3 0 013-3h1m14 14v1a3 3 0 01-3 3h-1M6.5 15v2M10.17 15v2M13.83 15.13V17M17.5 15.13V17M17.5 8v4M4 12h16" />
    </G>
    <Defs>
      <ClipPath id="clip0_4_5016">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default QrButton

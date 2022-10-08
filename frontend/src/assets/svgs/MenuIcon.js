import React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const MenuIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#clip0_4_5001)">
      <Path
        d="M3 5h18M3 12h18M3 19h18"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4_5001">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default MenuIcon

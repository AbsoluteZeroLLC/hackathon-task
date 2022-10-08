import React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const RestaurantIcon = props => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <G clipPath="url(#clip0_4_6368)">
      <Path
        d="M2.5 2.57v3.793-.075c0 1.062.438 2.002 1.116 2.61.331.298.55.7.55 1.145v6.207a1.25 1.25 0 002.5 0v-6.207c0-.445.22-.847.551-1.145.679-.608 1.116-1.548 1.116-2.61V2.57v3.718m-2.916.379V2.5m11.25.877a.834.834 0 00-.834-.834H15a2.5 2.5 0 00-2.5 2.5v5c0 1.087.697 2.003 1.667 2.347v3.86a1.25 1.25 0 002.5 0V3.377z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4_6368">
        <Path fill="#fff" d="M0 0H20V20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default RestaurantIcon
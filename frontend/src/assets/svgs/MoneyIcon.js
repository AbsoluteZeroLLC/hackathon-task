import React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const MoneyIcon = props => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <G
      clipPath="url(#clip0_4_6372)"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M15 6.667h.833c.921 0 1.667.745 1.667 1.666v5.834c0 .92-.746 1.666-1.667 1.666H6.667c-.921 0-1.667-.745-1.667-1.666v-1.32m.104-5.208v1.736m7.378-1.736v1.736" />
      <Path d="M4.236 12.848h9.027c.96 0 1.736-.778 1.736-1.736V5.903c.001-.959-.777-1.736-1.735-1.736H4.236c-.958 0-1.736.777-1.736 1.735v5.209c0 .959.777 1.736 1.736 1.736v0z" />
      <Path d="M9.714 7.586a1.303 1.303 0 11-1.843 1.842 1.303 1.303 0 011.843-1.842z" />
    </G>
    <Defs>
      <ClipPath id="clip0_4_6372">
        <Path fill="#fff" d="M0 0H20V20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default MoneyIcon
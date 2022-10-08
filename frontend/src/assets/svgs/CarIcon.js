import React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const CarIcon = props => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <G
      clipPath="url(#clip0_4_6378)"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M17.5 15.417v1.25c0 .46-.373.833-.833.833H15a.834.834 0 01-.833-.833v-1.25m-8.334 0v1.25c0 .46-.373.833-.833.833H3.333a.834.834 0 01-.833-.833v-1.25m15-3.334l-2.5.209m-10 0l-2.5-.209m0 3.334v-3.964c0-.664.263-1.3.732-1.768l.935-.935h11.666l.934.934a2.5 2.5 0 01.733 1.769v3.964h-15z" />
      <Path d="M6.667 15.417l.833-2.5h5l.833 2.5M17.5 7.917l-1.667.416m-11.666 0L2.5 7.917m1.667.833v-.422l.696-2.614a2.083 2.083 0 012.013-1.547h6.32c.964 0 1.802.661 2.027 1.6l.61 2.561v.422" />
    </G>
    <Defs>
      <ClipPath id="clip0_4_6378">
        <Path fill="#fff" d="M0 0H20V20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default CarIcon

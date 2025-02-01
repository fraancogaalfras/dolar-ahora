import Svg, { G, Path } from 'react-native-svg';

export function IconDollar({ opacity = 1 }) {
  return (
    <Svg width="35" height="35" viewBox="0 0 48 48" opacity={opacity}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M26 8a2 2 0 1 0-4 0v2a8 8 0 1 0 0 16v8a4 4 0 0 1-3.773-2.666a2 2 0 0 0-3.771 1.332A8 8 0 0 0 22 38v2a2 2 0 1 0 4 0v-2a8 8 0 1 0 0-16v-8a4 4 0 0 1 3.773 2.666a2 2 0 0 0 3.771-1.332A8 8 0 0 0 26 10zm-4 6a4 4 0 0 0 0 8zm4 12v8a4 4 0 0 0 0-8"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export function IconConverter({ opacity = 1 }) {
  return (
    <Svg width="30" height="30" viewBox="0 0 24 24" opacity={opacity}>
      <Path
        d="M6 22h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm3-3H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V9h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm4 8h-2v-6h2v6zm0-8h-2V9h2v2zM6 4h12v3H6V4z"
        fill="#fff"
      />
    </Svg>
  );
}

export function IconReverse() {
  return (
    <Svg width="30" height="30" viewBox="0 0 24 24">
      <Path
        fill="#fff"
        d="M5 6.09v12l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42a1 1 0 0 0-1.42 0L7 18.09v-12A1.56 1.56 0 0 1 8.53 4.5H11a1 1 0 0 0 0-2H8.53A3.56 3.56 0 0 0 5 6.09m9.29-.3a1 1 0 0 0 1.42 1.42L17 5.91v12a1.56 1.56 0 0 1-1.53 1.59H13a1 1 0 0 0 0 2h2.47A3.56 3.56 0 0 0 19 17.91v-12l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0Z"
      />
    </Svg>
  );
}

export function IconArrowRight() {
  return (
    <Svg width="40" height="40" viewBox="0 0 24 24">
      <Path fill="#fff" d="M14.707 7.293a1 1 0 1 0-1.414 1.414L15.586 11H6a1 1 0 1 0 0 2h9.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414z" />
    </Svg>
  );
}

export function IconCoffee() {
  return (
    <Svg width="30" height="30" viewBox="0 0 24 24">
      <Path
        fill="#9f9f9f"
        opacity={0.3}
        d="m20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379c-.197-.069-.42-.098-.57-.241c-.152-.143-.196-.366-.231-.572c-.065-.378-.125-.756-.192-1.133c-.057-.325-.102-.69-.25-.987c-.195-.4-.597-.634-.996-.788a6 6 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a26 26 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5c-.318.116-.646.256-.888.501c-.297.302-.393.77-.177 1.146c.154.267.415.456.692.58c.36.162.737.284 1.123.366c1.075.238 2.189.331 3.287.37q1.829.074 3.65-.118q.449-.05.896-.119c.352-.054.578-.513.474-.834c-.124-.383-.457-.531-.834-.473c-.466.074-.96.108-1.382.146q-1.767.12-3.536.006a22 22 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036q-.364-.055-.724-.13c-.111-.027-.111-.185 0-.212h.005q.416-.09.838-.147h.002c.131-.009.263-.032.394-.048a25 25 0 0 1 3.426-.12q1.011.029 2.017.144l.228.031q.4.06.798.145c.392.085.895.113 1.07.542c.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003l-.112.015a37 37 0 0 1-4.743.295a37 37 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06c-.326-.048-.649-.108-.973-.161c-.393-.065-.768-.032-1.123.161c-.29.16-.527.404-.675.701c-.154.316-.199.66-.267 1c-.069.34-.176.707-.135 1.056c.087.753.613 1.365 1.37 1.502a39.7 39.7 0 0 0 11.343.376a.483.483 0 0 1 .535.53l-.071.697l-1.018 9.907c-.041.41-.047.832-.125 1.237c-.122.637-.553 1.028-1.182 1.171q-.868.197-1.756.205c-.656.004-1.31-.025-1.966-.022c-.699.004-1.556-.06-2.095-.58c-.475-.458-.54-1.174-.605-1.793l-.731-7.013l-.322-3.094c-.037-.351-.286-.695-.678-.678c-.336.015-.718.3-.678.679l.228 2.185l.949 9.112c.147 1.344 1.174 2.068 2.446 2.272c.742.12 1.503.144 2.257.156c.966.016 1.942.053 2.892-.122c1.408-.258 2.465-1.198 2.616-2.657l1.024-9.995l.215-2.087a.48.48 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518c.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233c-2.416.359-4.866.54-7.308.46c-1.748-.06-3.477-.254-5.207-.498c-.17-.024-.353-.055-.47-.18c-.22-.236-.111-.71-.054-.995c.052-.26.152-.609.463-.646c.484-.057 1.046.148 1.526.22q.865.132 1.737.212c2.48.226 5.002.19 7.472-.14q.675-.09 1.345-.21c.399-.072.84-.206 1.08.206c.166.281.188.657.162.974a.54.54 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a6 6 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38c0 0 1.243.065 1.658.065c.447 0 1.786-.065 1.786-.065c.783 0 1.434-.6 1.499-1.38l.94-9.95a4 4 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613"
      />
    </Svg>
  );
}

export function IconGithub() {
  return (
    <Svg width="30" height="30" viewBox="0 0 24 24">
      <Path
        fill="#9f9f9f"
        opacity={0.3}
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      />
    </Svg>
  );
}

export function IconFrancoGalfrascoli() {
  return (
    <Svg width="200.000000pt" height="65.000000pt" viewBox="0 0 485.000000 65.000000" preserveAspectRatio="xMidYMid meet">
      <G transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)" fill="#9f9f9f" stroke="none" opacity={0.3}>
        <Path d="M505 634 c-171 -17 -289 -38 -363 -66 -73 -27 -142 -93 -142 -135 0 -38 27 -63 68 -63 37 0 39 3 12 30 -11 11 -20 25 -20 31 0 23 63 68 123 87 61 20 117 32 117 26 0 -1 -19 -33 -42 -69 -36 -58 -49 -70 -102 -96 -34 -16 -68 -35 -76 -42 -46 -36 -66 -109 -34 -121 23 -9 32 0 26 29 -5 29 17 59 60 81 45 23 48 16 19 -48 -38 -83 -45 -123 -25 -143 24 -23 34 -15 54 43 30 85 91 190 114 196 12 2 59 8 104 12 75 6 85 9 94 30 6 13 9 26 7 28 -2 2 -43 -2 -91 -9 -49 -6 -88 -9 -88 -5 0 3 14 25 31 48 21 28 28 48 24 62 -5 16 -2 20 17 20 13 0 75 5 138 10 90 7 118 13 127 27 17 22 17 53 1 52 -7 -1 -76 -8 -153 -15z" />
        <Path d="M2402 624 c-86 -23 -162 -65 -227 -126 -79 -74 -117 -148 -114 -223 2 -48 -1 -57 -29 -86 -39 -40 -48 -78 -28 -117 24 -46 77 -67 171 -66 168 1 268 75 370 274 l58 114 -23 18 c-12 10 -27 18 -34 18 -6 0 -24 -31 -41 -68 -16 -37 -42 -81 -57 -98 -56 -64 -210 -104 -263 -70 -14 9 -23 21 -20 26 4 6 45 10 92 10 l86 0 -19 21 c-17 19 -27 21 -89 16 -38 -2 -77 -6 -85 -8 -22 -6 -14 55 17 115 37 73 116 147 203 189 170 83 282 45 185 -62 -40 -44 -34 -57 20 -47 83 16 114 135 45 171 -37 19 -146 19 -218 -1z m-277 -454 c53 -27 156 -27 227 0 28 11 53 18 54 17 8 -8 -74 -91 -110 -112 -103 -60 -246 -37 -246 40 0 20 25 75 34 75 1 0 19 -9 41 -20z" />
        <Path d="M3067 561 c-10 -40 -135 -238 -178 -283 -64 -67 -91 -60 -53 13 9 17 12 38 8 47 -4 10 -6 29 -5 43 5 65 -88 79 -169 25 -84 -55 -128 -160 -84 -197 26 -21 89 -17 123 9 29 21 30 21 36 2 13 -41 82 -38 134 6 29 24 31 24 31 6 0 -31 25 -45 69 -38 l39 6 -19 -50 c-26 -69 -25 -98 6 -112 19 -9 29 -7 51 6 34 23 68 99 60 137 -4 22 -2 29 11 29 29 0 83 41 129 101 35 44 53 59 72 59 24 0 23 -1 -16 -44 -73 -79 -68 -131 11 -130 33 0 54 7 80 27 35 26 36 27 42 6 7 -20 42 -39 74 -39 10 0 35 11 55 25 20 13 36 20 36 15 0 -18 32 -40 58 -40 15 0 41 8 57 18 29 18 31 18 56 -1 34 -25 94 -25 128 1 23 17 27 28 31 93 5 67 23 119 42 119 19 0 6 32 -17 42 -23 10 -29 8 -61 -23 -20 -19 -67 -71 -106 -116 -67 -77 -94 -100 -106 -88 -3 2 3 23 13 44 11 25 15 47 10 58 -4 10 -7 30 -6 44 7 89 -146 72 -222 -24 -54 -68 -107 -117 -127 -117 -11 0 -20 4 -20 9 0 5 29 41 65 80 36 39 65 77 65 85 0 21 -28 27 -58 12 -15 -7 -38 -17 -52 -21 -20 -6 -23 -5 -12 6 18 20 15 47 -9 59 -11 7 -22 10 -23 8 -33 -46 -46 -70 -46 -86 0 -34 -130 -166 -147 -149 -3 3 13 32 35 64 76 112 142 223 142 238 0 14 -29 35 -48 35 -6 0 -29 -35 -53 -77 -85 -157 -175 -273 -209 -273 -28 0 -4 54 90 207 33 53 60 103 60 110 0 14 -31 33 -53 33 -8 0 -17 -8 -20 -19z m-266 -167 c11 -13 11 -17 -3 -25 -9 -5 -18 -19 -22 -33 -7 -30 -80 -96 -105 -96 -29 0 -33 15 -16 57 20 47 51 82 90 99 39 17 40 17 56 -2z m863 10 c17 -7 22 -34 6 -34 -5 0 -16 -15 -24 -32 -33 -79 -135 -132 -128 -68 4 37 53 103 92 122 41 21 34 20 54 12z m202 -170 c-7 -18 -50 -18 -65 -1 -14 18 5 37 36 37 25 0 30 19 11 38 -8 8 -8 15 3 28 12 15 14 11 17 -36 2 -29 1 -59 -2 -66z m-786 -81 c0 -31 -41 -105 -47 -86 -4 11 35 113 43 113 2 0 4 -12 4 -27z" />
        <Path d="M4625 522 c-17 -31 -52 -94 -79 -139 -70 -120 -73 -193 -7 -193 14 0 40 9 57 19 30 18 31 18 42 0 15 -23 53 -24 94 -3 41 21 118 93 118 110 0 20 -14 17 -36 -7 -23 -26 -94 -79 -106 -79 -18 0 -6 32 37 94 25 37 45 73 45 81 0 14 -46 44 -53 34 -2 -2 -24 -39 -50 -81 -44 -71 -96 -128 -118 -128 -25 0 -1 58 72 179 78 128 80 133 63 152 -28 31 -47 23 -79 -39z" />
        <Path d="M4781 533 c-15 -54 -14 -71 8 -83 16 -8 23 -5 40 24 26 42 26 50 -1 76 -30 28 -35 26 -47 -17z" />
        <Path d="M553 445 c-13 -19 -23 -42 -23 -51 0 -9 -9 -29 -20 -44 -30 -42 -4 -52 29 -11 16 19 35 31 49 31 22 0 20 -4 -22 -51 -49 -54 -59 -95 -31 -119 22 -19 90 -6 129 24 32 24 34 24 39 6 11 -43 91 -48 141 -9 24 19 25 19 31 -1 13 -42 82 -38 136 7 23 20 31 23 26 11 -4 -12 1 -23 16 -33 30 -21 34 -19 42 17 13 58 42 102 89 136 25 18 46 29 46 24 0 -6 -11 -34 -25 -64 -30 -65 -32 -104 -6 -118 32 -16 62 -12 102 16 l37 25 27 -27 c24 -24 32 -26 86 -22 46 3 69 11 103 35 l43 30 24 -29 c66 -81 221 -14 236 101 7 48 -18 98 -52 107 -67 17 -140 -24 -200 -112 -83 -121 -226 -137 -169 -19 33 70 124 125 124 75 0 -28 18 -25 32 6 11 22 10 28 -7 40 -49 36 -154 -9 -215 -92 -42 -56 -106 -111 -117 -100 -4 4 10 41 30 82 53 108 33 145 -56 106 -42 -19 -44 -19 -66 -1 -13 11 -27 19 -32 19 -4 0 -24 -31 -45 -70 -34 -65 -101 -140 -124 -140 -15 0 -12 27 6 61 9 17 12 38 8 47 -4 10 -6 29 -5 43 7 88 -142 73 -221 -22 -62 -76 -109 -119 -128 -119 -32 0 -24 17 45 90 36 38 65 73 65 78 0 5 -6 15 -14 21 -11 10 -21 9 -43 -2 -15 -8 -38 -18 -51 -21 -21 -7 -22 -6 -10 19 11 24 10 29 -7 41 -26 19 -27 19 -52 -21z m378 -51 c11 -13 11 -17 -3 -25 -9 -5 -18 -19 -22 -33 -7 -30 -80 -96 -105 -96 -29 0 -33 15 -16 57 20 47 51 82 90 99 39 17 40 17 56 -2z m856 -2 c-16 -17 -23 -52 -12 -52 3 0 17 7 30 16 29 19 32 9 11 -39 -36 -86 -146 -118 -146 -43 0 36 44 100 80 118 45 23 57 23 37 0z" />
        <Path d="M4107 426 c-56 -21 -103 -60 -126 -110 -38 -77 -7 -126 79 -126 49 0 116 27 139 54 13 15 16 14 40 -14 67 -80 208 -26 241 91 10 35 -16 102 -45 113 -60 23 -152 -23 -201 -99 -35 -56 -88 -99 -136 -110 -21 -5 -30 -2 -43 18 -15 24 -15 28 4 66 35 68 121 119 121 71 0 -23 10 -26 28 -8 18 18 14 46 -7 58 -25 13 -47 12 -94 -4z m313 -25 c0 -5 -7 -11 -15 -15 -8 -3 -15 -15 -15 -26 0 -24 4 -25 35 -4 24 15 25 15 25 -3 0 -26 -37 -80 -72 -106 -34 -25 -75 -17 -84 18 -9 34 36 108 78 128 38 19 48 21 48 8z" />
      </G>
    </Svg>
  );
}

import React, { Component } from 'react'
import marcus from './mpeck.svg';


const Face = ({
    style = {},
    width = "100%",
    className = "",
    viewBox = "0 0 92.891876 157.86879",

}) => (
<svg
width={width}
height={width}
viewBox={viewBox}
className={`marcus-face${className || ""}`}
>

<defs
  id="defs888" />

<g

  id="layer1"
  transform="translate(-61.961858,-57.698953)">
 <path
       id="face"
       d="m 70.461542,87.56777 c -0.80181,1.069078 -4.54358,13.36348 -3.74177,18.4416 0,0 0.0432,10.91934 1.17717,14.7936 0,0 0.37797,5.19717 0,10.67782 0,0 0,14.45759 1.03943,19.46578 0,0 13.151401,69.05327 63.798968,0.49862 0,0 19.51068,-44.09947 18.70887,-52.384833 0,0 -16.57072,-61.73926 -80.982668,-11.492587 z" 
       />
    <path
       id="hair"
       d="m 67.254312,103.60395 c 0,0 -7.216278,-5.078133 -4.54358,-15.234371 0,0 -2.672697,-13.630745 3.20723,-16.036171 0,0 6.68174,-8.552625 18.97614,-11.759859 0,0 22.450638,-8.552624 45.703088,4.543582 0,0 14.96709,3.741773 23.25245,28.86511 0,0 -0.53454,30.735999 -10.15624,50.513939 l -1.33635,-2.67269 -0.53455,1.60362 -1.87088,-5.07813 -5.34539,-0.8018 c 0,0 -1.33635,-28.0633 -14.16528,-34.74504 0,0 7.75081,-15.501639 -4.27632,-21.114298 l 10.69079,-8.552625 -21.91611,7.483546 c 0,0 -18.708857,0 -25.925137,4.276313 0,0 -12.027131,1.603626 -11.759861,18.708874 z"
       />
    <path
       id="right_brow"
       d="m 87.032253,107.88026 c 0,0 -1.336341,2.93996 3.20724,4.54358 0,0 8.81989,-3.4745 18.708867,-2.13816 l 4.27631,-0.8018 c 0,0 -5.87993,-4.27632 -10.15624,-4.00905 0,0 -12.294407,0.80181 -16.036177,2.40543 z"
      />
       <path
       id="left_brow"
       d="m 66.719772,118.30377 c 0,0 -2.40543,-2.93997 -0.80181,-5.61266 2.40543,0 5.34539,-2.13816 8.28536,-1.33635 0,0 4.276311,1.87089 2.93996,2.40543 -13.43223,0.61124 -10.42351,4.54358 -10.42351,4.54358 z"
       />
    <path
       id="r_eye"
       d="m 93.315843,118.25163 c 0,0 8.315467,-10.20536 17.008917,-3.2128 -7.37054,5.66964 -17.008917,3.2128 -17.008917,3.2128 z"
       />
    <path
       id="l_eye"
       d="m 69.692322,120.33049 c 0,0 6.803581,-5.66964 11.150301,-1.5119 -3.2128,3.40178 -11.150301,1.5119 -11.150301,1.5119 z"
       />
    <circle
       r="2.0552454"
       cy="119.06899"
       cx="76.727425"
       id="l_eyeball"
       />
    <circle
       id="r_eyeball"
       cx="104.32304"
       cy="115.01183"
       r="2.7673085" />
    <path
       id="nose"
       d="m 81.419603,115.09653 c 0,0 -3.74178,16.83799 -5.078131,17.37252 0,0 -3.34185,5.43734 1.47734,7.79969 0,0 2.92932,0.28348 4.630211,-0.75595 0,0 4.7247,-2.17337 7.559531,-1.22842 0,0 3.496278,1.32291 5.102669,-1.88989"
      />
       <path
       id="lip"
       d="m 81.820502,151.31155 c 0,0 19.644308,0.13364 22.851538,-4.67721 0,0 1.87089,4.54358 -4.00904,7.48355 0,0 -13.898007,2.13815 -16.437068,1.87088 0,0 -3.474509,0.53453 -2.40543,-4.67722 z"
/>
       <path
       id="beard"
       d="m 134.94918,135.35641 c -2.02467,0.002 -4.58009,0.29404 -7.8047,1.03818 l -13.22916,9.07128 c 0,0 -3.77976,-7.55953 -13.22917,-5.29167 -21.759096,0.35528 -28.915028,4.15789 -28.915028,4.15789 0,0 -6.992567,6.42538 -9.260417,34.77359 0,0 -6.047475,37.79755 27.970384,36.28565 0,0 38.931251,1.88995 52.538391,-28.34815 0,0 3.77999,-24.19025 -0.37775,-48.00276 0,0 -0.4616,-3.69122 -7.69255,-3.68401 z m -30.17181,11.15643 c 0,0 1.87088,4.54381 -4.00905,7.48378 0,0 -13.898181,2.13796 -16.437242,1.87069 0,0 -3.474617,0.53451 -2.405539,-4.67724 0,0 19.644601,0.13362 22.851831,-4.67723 z"
/>
       <path
       id="ear"
       d="m 139.68435,128.32638 c 0,0 -0.26727,5.07812 3.87541,4.94448 0,0 3.74177,1.06908 5.87993,-7.34991 0,0 3.20723,-6.94901 3.34087,-8.28535 0,0 4.27631,-4.94449 0.13363,-8.28536 0,0 -1.20271,-2.53906 -4.94448,-1.20271 -3.74178,1.33635 -4.54358,5.47902 -4.54358,5.47902"
/>
       <path
       id="ear_d_1"
       d="m 142.22341,122.31281 c 0,0 2.53906,1.06908 3.4745,-2.00452 1e-5,-1.46998 -0.4009,-4.94449 -0.8018,-4.94449"
/>
       <path
       id="ear_d_2"
       d="m 148.63788,123.11462 c 0,0 3.4745,-7.61718 3.20723,-9.75534 0,0 -1.46998,-5.87993 -5.47902,-3.34087"
/>  
</g>
</svg>);

export default Face;
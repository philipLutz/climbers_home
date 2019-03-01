import React from 'react';

export function Logo({
	width,
	height,
	fill,
	viewBox
}) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox}>
		    <defs>
		        <clipPath id="clip1">
		            <path d="M 301 0.230469 L 367 0.230469 L 367 56 L 301 56 Z M 301 0.230469"
		            />
		        </clipPath>
		    </defs>
		    <g id="surface1">
		        <path fill={fill} d="M 20.859375 280.074219 C 28.316406 282.488281 35.40625 282.132812 42.128906 279.007812 C 48.871094 275.917969 53.847656 269.398438 57.066406 259.457031 C 59.425781 252.171875 59.496094 245.878906 57.285156 240.578125 C 55.082031 235.332031 51.394531 231.242188 46.222656 228.304688 L 37.128906 240.234375 C 44.285156 244.007812 47.039062 248.4375 45.390625 253.535156 C 43.507812 259.351562 37.71875 260.691406 28.023438 257.554688 C 18.351562 254.425781 14.425781 250.050781 16.246094 244.433594 C 16.902344 242.394531 18.160156 240.796875 20.019531 239.640625 C 21.902344 238.492188 24.132812 237.964844 26.710938 238.058594 L 30.898438 225.117188 L 11.957031 218.988281 L 7.925781 231.441406 L 11.394531 232.566406 C 7.148438 235.417969 4.039062 239.890625 2.066406 245.980469 C -0.363281 253.488281 0.285156 260.441406 4.007812 266.839844 C 7.734375 273.234375 13.351562 277.648438 20.859375 280.074219" />
		        <path fill={fill} d="M 32.832031 205.332031 L 57.628906 219.210938 L 55.234375 223.480469 L 66.625 229.855469 L 91.964844 184.574219 L 72.949219 173.933594 L 66.59375 185.285156 L 74.222656 189.554688 L 67.925781 200.808594 L 43.128906 186.929688 L 45.65625 182.417969 L 34.265625 176.042969 L 19.050781 203.230469 L 30.4375 209.605469 L 32.832031 205.332031" />
		        <path fill={fill} d="M 64.835938 152.910156 L 87.25 170.375 L 84.167969 174.332031 L 94.460938 182.355469 L 113.566406 157.839844 L 103.269531 149.816406 L 100.210938 153.742188 L 77.796875 136.277344 L 80.859375 132.351562 L 70.5625 124.328125 L 51.460938 148.84375 L 61.753906 156.867188 L 64.835938 152.910156" />
		        <path fill={fill} d="M 92.464844 117.125 L 110.796875 138.832031 L 107.59375 141.539062 L 116.015625 151.507812 L 132.15625 137.878906 L 123.734375 127.90625 L 120.441406 130.6875 L 101.042969 107.722656 L 141.316406 130.140625 L 147.546875 124.878906 L 132.050781 81.023438 L 151.699219 104.289062 L 148.375 107.09375 L 156.796875 117.066406 L 178.535156 98.707031 L 170.113281 88.734375 L 166.761719 91.566406 L 148.425781 69.859375 L 151.691406 67.101562 L 143.269531 57.132812 L 118.296875 78.222656 L 125.589844 99.613281 L 105.871094 88.71875 L 80.75 109.9375 L 89.171875 119.90625 L 92.464844 117.125" />
		        <path fill={fill} d="M 192.890625 45.367188 C 196.382812 43.710938 198.738281 43.15625 199.953125 43.710938 C 201.167969 44.261719 202.050781 45.113281 202.601562 46.269531 C 203.238281 47.617188 203.328125 48.902344 202.871094 50.132812 C 202.363281 51.386719 200.683594 52.6875 197.828125 54.042969 L 193.613281 56.042969 L 189.347656 47.046875 Z M 208.792969 61.246094 C 210.238281 61.546875 211.355469 62.535156 212.152344 64.210938 C 213.003906 66.003906 213.007812 67.535156 212.160156 68.804688 C 211.292969 70.082031 209.488281 71.371094 206.753906 72.671875 L 202.46875 74.703125 L 197.863281 65 L 202.078125 63.003906 C 205.125 61.558594 207.363281 60.972656 208.792969 61.246094 Z M 170.769531 57.074219 L 182.945312 82.75 L 178.660156 84.78125 L 184.253906 96.574219 L 212.121094 83.355469 C 219.15625 80.019531 224.332031 77.117188 227.644531 74.644531 C 231.011719 72.179688 233.21875 69.300781 234.257812 66 C 235.285156 62.679688 235.011719 59.367188 233.445312 56.0625 C 232.136719 53.300781 230.007812 51.257812 227.066406 49.933594 C 224.171875 48.644531 220.742188 48.308594 216.78125 48.914062 C 218.992188 47.054688 220.582031 44.855469 221.546875 42.316406 C 222.484375 39.847656 222.296875 37.21875 220.972656 34.433594 C 219.617188 31.574219 217.523438 29.503906 214.6875 28.21875 C 211.871094 26.980469 208.703125 26.761719 205.179688 27.566406 C 201.621094 28.414062 196.890625 30.238281 190.988281 33.039062 L 160.890625 47.316406 L 166.484375 59.109375 L 170.769531 57.074219" />
		        <path fill={fill} d="M 239.535156 27.550781 L 246.097656 55.195312 L 241.976562 56.175781 L 244.992188 68.871094 L 295.59375 56.863281 L 291.566406 39.894531 L 277.648438 43.199219 L 278.660156 47.46875 L 266.613281 50.328125 L 264.546875 41.632812 L 275.035156 39.144531 L 272.472656 28.351562 L 261.988281 30.84375 L 260.050781 22.683594 L 272.101562 19.820312 L 273.113281 24.09375 L 287.03125 20.789062 L 283.007812 3.820312 L 232.328125 15.847656 L 235.339844 28.546875 L 239.535156 27.550781" />
		        <g clipPath="url(#clip1)">
		            <path fill={fill} d="M 329.171875 12.28125 C 332.359375 12.210938 334.554688 12.257812 335.761719 12.414062 C 337.019531 12.566406 338.0625 13.066406 338.890625 13.910156 C 339.71875 14.730469 340.148438 15.84375 340.179688 17.253906 C 340.210938 18.667969 339.828125 19.785156 339.035156 20.613281 C 338.246094 21.492188 337.265625 22.035156 336.09375 22.246094 C 335 22.453125 332.910156 22.589844 329.828125 22.65625 L 327.476562 22.707031 L 327.253906 12.324219 Z M 306.195312 13.878906 L 306.8125 42.285156 L 302.386719 42.382812 L 302.671875 55.433594 L 332.292969 54.785156 L 332.007812 41.738281 L 327.894531 41.828125 L 327.691406 32.621094 L 334.394531 32.472656 L 346.753906 54.472656 L 366.382812 54.042969 L 366.097656 40.996094 L 362.179688 41.082031 L 354.386719 28.785156 C 356.738281 27.664062 358.621094 25.949219 360.035156 23.644531 C 361.449219 21.3125 362.125 18.738281 362.0625 15.917969 C 361.980469 12.15625 360.710938 8.914062 358.246094 6.199219 C 355.808594 3.535156 352.675781 1.839844 348.84375 1.109375 C 347.476562 0.855469 345.984375 0.65625 344.359375 0.523438 C 342.738281 0.390625 340.789062 0.300781 338.515625 0.257812 C 336.238281 0.21875 333.769531 0.222656 331.105469 0.28125 L 301.484375 0.925781 L 301.765625 13.976562 L 306.195312 13.878906" />
		        </g>
		        <path fill={fill} d="M 384.824219 32.4375 C 387.078125 32.136719 389.050781 31.308594 390.734375 29.953125 C 392.441406 28.628906 393.5625 27.171875 394.09375 25.582031 C 394.621094 24.019531 395.175781 21.074219 395.761719 16.75 L 397.390625 4.671875 L 378.007812 2.054688 L 376.101562 16.195312 L 383.324219 17.167969 C 382.96875 19.601562 382.59375 21.222656 382.195312 22.039062 C 381.824219 22.832031 381.050781 23.480469 379.875 23.980469 C 378.703125 24.453125 377.082031 24.554688 375.011719 24.273438 L 373.984375 31.886719 C 378.953125 32.558594 382.570312 32.742188 384.824219 32.4375" />
		        <path fill={fill} d="M 411.511719 59.46875 C 414.511719 63.246094 418.332031 65.773438 422.964844 67.046875 C 427.957031 68.417969 432.511719 68 436.640625 65.800781 C 440.753906 63.652344 443.414062 60.375 444.625 55.964844 C 445.414062 53.089844 445.453125 50.230469 444.746094 47.378906 C 444.445312 46.105469 443.980469 44.820312 443.347656 43.519531 C 442.714844 42.222656 442.035156 41.164062 441.3125 40.339844 C 439.902344 38.679688 436.964844 35.855469 432.503906 31.867188 C 429.167969 28.917969 427.222656 27.070312 426.671875 26.320312 C 426.085938 25.59375 425.9375 24.699219 426.226562 23.640625 C 426.832031 21.449219 428.417969 20.703125 430.984375 21.410156 C 434.640625 22.414062 436.617188 25.179688 436.917969 29.703125 L 448.671875 32.933594 L 452.78125 17.964844 L 440.878906 14.695312 L 439.984375 17.945312 C 437.503906 14.449219 433.960938 12.066406 429.347656 10.800781 C 424.738281 9.535156 420.480469 9.84375 416.574219 11.722656 C 412.648438 13.597656 410.011719 16.980469 408.671875 21.867188 C 407.921875 24.589844 407.910156 27.253906 408.628906 29.863281 C 409.339844 32.496094 410.464844 34.714844 412.003906 36.519531 C 413.628906 38.484375 416.320312 41.023438 420.070312 44.140625 C 423.058594 46.585938 424.964844 48.382812 425.785156 49.53125 C 426.554688 50.582031 426.773438 51.699219 426.449219 52.882812 C 425.828125 55.148438 424.105469 55.898438 421.285156 55.121094 C 417.378906 54.050781 415.347656 51.027344 415.195312 46.054688 L 403.367188 42.804688 L 398.738281 59.660156 L 410.566406 62.910156 L 411.511719 59.46875" />
		        <path fill={fill} d="M 494.132812 82.253906 L 491.117188 80.503906 L 495.605469 72.777344 L 506.519531 79.113281 L 502.03125 86.84375 L 498.980469 85.070312 L 492.425781 96.355469 L 517.265625 110.785156 L 523.820312 99.496094 L 520.265625 97.433594 L 534.535156 72.859375 L 538.09375 74.929688 L 544.648438 63.640625 L 519.804688 49.214844 L 513.25 60.5 L 516.300781 62.273438 L 512.128906 69.457031 L 501.214844 63.117188 L 505.386719 55.933594 L 508.40625 57.683594 L 514.960938 46.398438 L 490.082031 31.949219 L 483.527344 43.238281 L 487.15625 45.34375 L 472.882812 69.914062 L 469.324219 67.847656 L 462.769531 79.132812 L 487.578125 93.539062 L 494.132812 82.253906" />
		        <path fill={fill} d="M 549.664062 119.652344 C 550.242188 117.300781 552.589844 113.902344 556.710938 109.457031 C 560.902344 104.933594 564.128906 102.316406 566.394531 101.597656 C 568.660156 100.886719 570.65625 101.328125 572.378906 102.925781 C 574.179688 104.59375 574.765625 106.597656 574.132812 108.933594 C 573.503906 111.304688 571.152344 114.683594 567.085938 119.070312 C 562.894531 123.597656 559.65625 126.222656 557.375 126.960938 C 555.109375 127.671875 553.105469 127.222656 551.359375 125.605469 C 549.597656 123.972656 549.03125 121.988281 549.664062 119.652344 Z M 539.347656 93.363281 C 533.699219 99.460938 531.179688 106.367188 531.785156 114.089844 C 532.359375 121.816406 535.988281 128.777344 542.675781 134.976562 C 549.59375 141.390625 556.992188 144.417969 564.875 144.0625 C 572.757812 143.707031 579.28125 140.742188 584.449219 135.164062 C 586.953125 132.460938 588.828125 129.441406 590.066406 126.105469 C 591.308594 122.765625 591.910156 119.15625 591.875 115.273438 C 591.835938 107.4375 588.230469 100.195312 581.066406 93.554688 C 579.414062 92.027344 577.734375 90.691406 576.015625 89.542969 C 574.300781 88.398438 572.601562 87.457031 570.917969 86.714844 C 569.234375 85.976562 567.441406 85.417969 565.542969 85.046875 C 560.179688 84.03125 555.253906 84.328125 550.765625 85.941406 C 546.242188 87.554688 542.4375 90.03125 539.347656 93.363281" />
		        <path fill={fill} d="M 582.652344 154.011719 L 580.378906 150.484375 L 569.410156 157.558594 L 580.859375 175.3125 L 591.828125 168.238281 L 589.492188 164.617188 L 614.753906 148.320312 L 587.359375 185.390625 L 591.78125 192.242188 L 637.261719 182.496094 L 611.671875 199.003906 L 609.3125 195.34375 L 598.34375 202.421875 L 613.765625 226.332031 L 624.734375 219.257812 L 622.355469 215.570312 L 646.234375 200.167969 L 648.546875 203.757812 L 659.515625 196.683594 L 641.800781 169.214844 L 619.652344 173.707031 L 632.984375 155.546875 L 615.160156 127.910156 L 604.195312 134.984375 L 606.53125 138.609375 L 582.652344 154.011719" />
		        <path fill={fill} d="M 655.429688 223.238281 L 628.519531 232.367188 L 627.160156 228.359375 L 614.800781 232.554688 L 631.511719 281.804688 L 648.027344 276.199219 L 643.429688 262.652344 L 639.273438 264.0625 L 635.296875 252.335938 L 643.757812 249.464844 L 647.21875 259.671875 L 657.722656 256.109375 L 654.261719 245.898438 L 662.203125 243.207031 L 666.183594 254.933594 L 662.027344 256.34375 L 666.621094 269.890625 L 683.136719 264.289062 L 666.402344 214.960938 L 654.042969 219.15625 L 655.429688 223.238281" />
		        <path fill={fill} d="M 509.96875 576.542969 L 509.96875 409.949219 L 375.214844 409.949219 L 375.214844 448.453125 L 304.875 448.453125 L 304.875 409.949219 L 170.121094 409.949219 L 170.121094 576.542969 L 304.875 576.542969 L 304.875 536.5625 L 375.214844 536.5625 L 375.214844 576.542969 L 509.96875 576.542969" />
		        <path fill={fill} d="M 286.359375 164.984375 C 308.503906 164.984375 327.878906 177.292969 338.703125 195.722656 C 337.476562 196.667969 335.832031 198.359375 335.679688 198.953125 C 335.09375 201.285156 337.945312 225.699219 338.871094 228.292969 C 338.871094 228.292969 328.878906 224.035156 327.765625 222.367188 C 326.8125 220.9375 318.359375 222.777344 314.820312 222.625 C 314.871094 222.390625 314.90625 222.1875 314.875 222.078125 C 314.824219 221.910156 314.375 221.007812 314.28125 220.753906 C 314.1875 220.503906 313.992188 220.066406 314.042969 219.804688 C 314.09375 219.535156 314.253906 219.515625 314.789062 219.351562 C 315.328125 219.1875 316.679688 218.921875 317.171875 218.785156 C 317.65625 218.648438 318.367188 218.28125 318.527344 218.023438 C 318.6875 217.761719 319.023438 217.1875 319.058594 216.886719 C 319.089844 216.589844 319.085938 216.027344 318.679688 215.683594 C 318.277344 215.34375 317.996094 215.101562 317.769531 214.769531 C 317.539062 214.441406 317.527344 214.234375 317.589844 214.085938 C 317.65625 213.9375 317.910156 213.359375 317.917969 213.257812 C 317.925781 213.15625 317.921875 212.816406 317.535156 212.621094 C 317.152344 212.425781 316.949219 212.472656 316.949219 212.472656 C 316.949219 212.472656 317.128906 212.230469 317.226562 211.996094 C 317.328125 211.761719 317.4375 211.667969 317.3125 211.410156 C 317.191406 211.152344 316.90625 211.113281 316.652344 210.734375 C 316.394531 210.355469 316.40625 210.105469 316.578125 209.832031 C 316.753906 209.554688 317.160156 208.929688 317.25 208.652344 C 317.34375 208.371094 317.390625 207.894531 316.933594 207.6875 C 316.480469 207.480469 314.117188 206.515625 313.84375 206.371094 C 313.570312 206.226562 312.902344 205.894531 312.71875 205.765625 C 312.535156 205.640625 312.308594 205.40625 312.324219 205.167969 C 312.34375 204.933594 312.335938 204.625 312.324219 204.160156 C 312.316406 203.695312 312.003906 202.972656 311.121094 202.222656 C 310.238281 201.46875 308.449219 200.039062 308.449219 200.039062 C 308.449219 200.039062 308.277344 199.875 308.191406 199.628906 C 308.105469 199.382812 308 198.890625 307.941406 198.515625 C 307.882812 198.140625 307.929688 197.871094 307.847656 197.753906 C 307.769531 197.636719 307.5625 197.554688 307.019531 197.289062 C 307.289062 197.351562 307.546875 197.371094 307.65625 197.425781 C 307.859375 197.519531 308.042969 197.691406 308.042969 197.691406 C 308.042969 197.691406 307.847656 197.214844 307.269531 197.03125 C 306.753906 196.867188 306.257812 196.640625 306.007812 196.660156 C 306 196.65625 305.996094 196.652344 305.996094 196.652344 C 305.996094 196.652344 306.328125 196.519531 306.4375 196.539062 C 306.546875 196.5625 306.0625 196.390625 305.507812 196.351562 C 304.949219 196.316406 304.660156 196.292969 304.28125 196.371094 C 303.902344 196.449219 303.507812 196.746094 303.058594 196.71875 C 302.609375 196.695312 302.597656 196.59375 302.09375 196.597656 C 301.589844 196.605469 301.46875 196.746094 301.3125 196.753906 C 301.15625 196.765625 301.085938 196.792969 300.882812 196.882812 C 300.683594 196.96875 300.441406 196.851562 299.980469 197.09375 C 299.515625 197.335938 299.164062 197.722656 298.878906 197.792969 C 298.59375 197.863281 297.890625 197.847656 297.769531 197.824219 C 297.648438 197.804688 298.1875 197.738281 298.1875 197.738281 C 298.1875 197.738281 297.910156 197.605469 297.550781 197.703125 C 297.195312 197.804688 296.601562 198.027344 296.242188 198.398438 C 295.882812 198.769531 295.789062 198.9375 295.789062 198.9375 C 295.789062 198.9375 295.769531 198.746094 295.875 198.621094 C 295.980469 198.5 296.109375 198.375 296.109375 198.375 C 296.109375 198.375 295.941406 198.347656 295.617188 198.6875 C 295.296875 199.023438 295.207031 199.160156 295.003906 199.445312 C 294.800781 199.730469 294.664062 199.792969 294.535156 199.851562 C 294.40625 199.914062 294.117188 199.84375 293.359375 200.222656 C 292.605469 200.605469 292.558594 200.71875 292.332031 200.894531 C 292.105469 201.074219 291.875 201.015625 291.390625 201.53125 C 290.902344 202.046875 290.464844 203.085938 290.34375 203.347656 C 290.226562 203.605469 290.394531 202.765625 290.507812 202.554688 C 290.617188 202.339844 290.820312 201.960938 290.820312 201.960938 C 290.820312 201.960938 290.5 202.144531 290.21875 202.699219 C 289.9375 203.253906 289.695312 204.277344 289.546875 204.820312 C 289.402344 205.367188 289.378906 206.054688 289.378906 206.054688 C 289.378906 206.054688 289.332031 205.316406 289.398438 205.023438 C 289.464844 204.726562 289.441406 204.78125 289.441406 204.78125 C 289.441406 204.78125 289.222656 205.355469 289.1875 205.863281 C 289.148438 206.371094 289.199219 207.09375 289.199219 207.09375 C 289.199219 207.09375 289.019531 206.746094 289.027344 206.40625 C 289.035156 206.066406 289.011719 205.960938 289.011719 205.960938 C 289.011719 205.960938 288.867188 206.289062 288.957031 206.867188 C 289.046875 207.445312 289.257812 207.914062 289.257812 207.914062 C 289.257812 207.914062 288.816406 207.886719 288.367188 208.304688 C 287.914062 208.726562 287.667969 209.425781 287.667969 209.425781 C 287.667969 209.425781 287.703125 209.394531 287.957031 209.242188 C 288.210938 209.09375 288.121094 209.1875 288.121094 209.1875 C 288.121094 209.1875 287.902344 209.65625 287.851562 210.082031 C 287.804688 210.507812 287.890625 210.808594 287.890625 210.808594 C 287.890625 210.808594 288.050781 210.386719 288.183594 210.054688 C 288.316406 209.71875 288.398438 209.675781 288.398438 209.675781 C 288.398438 209.675781 288.183594 210.605469 288.191406 210.980469 C 288.199219 211.355469 288.199219 211.355469 288.199219 211.355469 L 288.363281 210.9375 C 288.363281 210.9375 288.597656 211.222656 288.574219 211.519531 C 288.550781 211.8125 288.558594 211.851562 288.683594 212.140625 C 288.8125 212.429688 289.019531 212.453125 288.988281 212.734375 C 288.953125 213.011719 288.636719 213.476562 288.734375 213.933594 C 288.832031 214.390625 288.9375 214.503906 289.421875 214.953125 C 289.90625 215.402344 290.0625 215.828125 290.195312 216.1875 C 290.328125 216.550781 290.503906 216.476562 290.824219 216.808594 C 291.148438 217.140625 291.300781 217.082031 291.6875 217.550781 C 292.074219 218.023438 292.1875 218.285156 292.484375 218.535156 C 292.78125 218.78125 293.136719 218.957031 293.136719 218.957031 C 293.136719 218.957031 292.730469 218.488281 292.707031 218.425781 C 292.683594 218.359375 292.78125 218.328125 293.03125 218.582031 C 293.277344 218.835938 293.703125 219.222656 293.914062 219.507812 C 294.125 219.792969 294.316406 220.078125 294.386719 220.214844 C 294.460938 220.347656 294.648438 220.449219 294.648438 220.449219 C 294.648438 220.449219 294.351562 219.949219 294.304688 219.78125 C 294.253906 219.613281 294.417969 219.675781 294.425781 219.703125 C 294.429688 219.734375 294.769531 220.339844 295.019531 220.65625 C 295.269531 220.976562 295.472656 221.070312 295.578125 221.121094 C 295.683594 221.171875 295.691406 221.015625 295.828125 221.082031 C 295.960938 221.148438 296.214844 221.316406 296.273438 221.402344 C 296.332031 221.488281 296.5 221.460938 296.5 221.460938 C 296.5 221.460938 296.527344 221.351562 296.636719 221.433594 C 296.746094 221.511719 297.09375 222.015625 297.507812 222.394531 C 297.640625 222.515625 297.734375 222.589844 297.816406 222.652344 C 296.027344 223.855469 291.15625 222.097656 289.636719 217 C 288.511719 213.242188 281.859375 204.042969 281.859375 201.820312 C 281.859375 199.601562 273.53125 182.199219 272.050781 179.980469 C 271.085938 178.53125 268.230469 172.75 266.515625 168.441406 C 272.746094 166.214844 279.414062 164.984375 286.359375 164.984375 Z M 340.03125 198.03125 C 340.035156 198.039062 340.039062 198.046875 340.046875 198.054688 C 350.5625 178.324219 370.660156 164.984375 393.730469 164.984375 C 397.277344 164.984375 400.753906 165.320312 404.136719 165.925781 C 403.734375 167.960938 402.777344 172.34375 401.746094 173.746094 C 400.746094 175.109375 398.285156 178.609375 397.789062 181.394531 C 396.949219 181.585938 396.441406 181.769531 396.441406 181.769531 L 348.035156 233.078125 C 345.761719 225.117188 340.351562 212.710938 341.277344 211.261719 C 343.175781 208.300781 340.476562 205.710938 340.046875 204.042969 C 339.78125 203.027344 339.929688 200.230469 340.03125 198.03125 Z M 405.078125 180.410156 C 405.078125 176.464844 405.449219 171.773438 406.433594 170.785156 C 406.996094 170.222656 407.917969 168.382812 408.609375 166.898438 C 424.488281 171.042969 437.925781 181.660156 446.234375 195.933594 C 436.769531 192.636719 409.679688 183.191406 405.820312 181.769531 C 405.523438 181.660156 405.230469 181.566406 404.933594 181.484375 C 405.019531 181.140625 405.078125 180.785156 405.078125 180.410156 Z M 402.734375 181.058594 C 401.945312 181.003906 401.132812 181.027344 400.359375 181.09375 C 400.367188 178.800781 402.953125 176.054688 402.953125 176.054688 C 403.925781 176.296875 403.53125 179.132812 402.734375 181.058594 Z M 334.246094 247.417969 L 332.394531 243.71875 C 335.972656 240.753906 340.046875 243.71875 340.046875 243.71875 Z M 319.929688 301.34375 C 318.820312 301.097656 319.929688 294.683594 319.929688 294.683594 C 320.796875 293.941406 322.398438 294.1875 323.015625 298.011719 C 323.632812 301.839844 321.042969 301.59375 319.929688 301.34375 Z M 320.011719 283.492188 C 320.160156 282.585938 320.597656 281.75 321.261719 281.113281 L 321.78125 280.613281 L 321.042969 291.597656 L 318.695312 291.597656 Z M 315.980469 266.175781 C 314.5 267.285156 314.378906 265.3125 314.746094 263.089844 C 314.746094 263.089844 317.464844 265.066406 315.980469 266.175781 Z M 316.105469 300.359375 C 315.242188 300.359375 313.144531 298.542969 313.265625 297.355469 C 313.390625 296.164062 314.746094 293.199219 317.339844 294.347656 C 317.339844 294.347656 316.96875 300.359375 316.105469 300.359375 Z M 529.582031 277.3125 L 438.40625 277.300781 C 423.652344 300.613281 394.898438 334.171875 340.046875 367.671875 C 240.855469 307.09375 226.976562 246.300781 226.976562 246.300781 C 225.609375 240.953125 224.878906 235.332031 224.878906 229.53125 C 224.878906 206.316406 236.558594 185.972656 254.082031 174.597656 C 254.078125 174.65625 254.015625 176.925781 254.929688 176.925781 C 255.855469 176.925781 256.039062 175.027344 256.6875 174.589844 C 257.335938 174.148438 259.835938 173.570312 260.945312 175.757812 C 262.054688 177.941406 263.257812 180.441406 265.109375 181.644531 C 266.960938 182.847656 267.054688 184.699219 267.054688 185.996094 C 267.054688 187.292969 269.550781 204.320312 270.664062 205.800781 C 271.773438 207.28125 281.246094 221.730469 282.867188 224.136719 C 284.054688 225.902344 282.464844 225.699219 282.554688 226.253906 C 282.648438 226.8125 287.691406 235.601562 288.246094 236.714844 C 288.804688 237.824219 295.652344 244.949219 296.023438 245.136719 C 296.390625 245.320312 299.074219 249.300781 301.019531 250.132812 C 302.964844 250.964844 312.960938 261.054688 312.960938 261.054688 C 312.960938 261.054688 312.773438 270.125 312.15625 270.125 C 311.539062 270.125 302.65625 267.410156 301.914062 267.902344 C 301.175781 268.398438 300.925781 273.457031 300.804688 274.445312 C 300.679688 275.429688 298.828125 280.859375 298.210938 281.355469 C 297.59375 281.847656 295.375 286.414062 300.925781 288.265625 C 306.480469 290.117188 313.265625 291.101562 312.960938 281.972656 C 312.660156 273.09375 315.914062 268.078125 318.703125 266.78125 C 319.484375 268.257812 319.761719 269.867188 318.882812 271.421875 C 316.105469 276.324219 316.476562 276.789062 318.882812 278.453125 C 318.882812 278.453125 317.09375 291.472656 316.351562 291.71875 C 315.613281 291.96875 313.390625 291.84375 312.648438 294.0625 C 311.910156 296.285156 311.046875 296.777344 311.046875 296.777344 C 311.046875 296.777344 310.183594 298.261719 311.539062 299.742188 C 312.898438 301.222656 314.625 303.566406 317.09375 303.320312 C 319.5625 303.074219 322.894531 305.578125 324.867188 303.339844 C 326.839844 301.097656 324.371094 294.1875 323.757812 293.570312 C 323.3125 293.125 323.894531 285.433594 324.253906 281.199219 C 324.472656 281.132812 324.6875 281.023438 324.898438 280.859375 C 326.5625 279.566406 326.839844 277.160156 329.527344 277.621094 C 332.210938 278.085938 333.875 281.496094 339.613281 281.269531 C 339.613281 281.269531 341.09375 281.414062 341.277344 282.0625 C 341.464844 282.710938 346.554688 282.433594 347.296875 281.507812 C 348.035156 280.582031 349.703125 280.304688 351.367188 280.582031 C 353.035156 280.859375 365.15625 281.324219 367.933594 280.675781 C 367.933594 280.675781 366.636719 292.523438 363.863281 300.203125 C 363.398438 301.484375 363.132812 302.554688 362.988281 303.472656 C 362.75 304.144531 361.835938 306.835938 362.429688 307.269531 C 363.105469 307.761719 366.253906 309.085938 366.871094 309.949219 C 367.636719 310.953125 368.097656 312.535156 366.269531 314.363281 C 363.492188 317.140625 357.289062 318.4375 361.734375 324.359375 C 366.175781 330.28125 365.714844 328.894531 364.601562 342.871094 C 364.601562 342.871094 365.15625 343.609375 366.546875 342.871094 C 367.933594 342.128906 371.171875 339.445312 373.210938 335.742188 C 373.890625 334.503906 374.171875 332.132812 374.253906 329.53125 C 374.574219 329.503906 374.828125 329.242188 374.828125 328.914062 L 374.828125 326.46875 C 374.828125 326.140625 374.574219 325.882812 374.253906 325.851562 C 374.148438 321.84375 373.765625 318.25 373.765625 318.25 C 373.765625 318.25 376.449219 311.496094 378.300781 306.960938 C 378.300781 306.960938 382.371094 286.597656 384.222656 282.710938 C 386.074219 278.824219 388.664062 273.828125 382.371094 269.753906 C 376.078125 265.683594 367.378906 262.351562 365.898438 261.980469 C 364.417969 261.609375 362.382812 259.019531 365.714844 256.242188 C 369.046875 253.464844 374.042969 246.800781 379.964844 249.394531 C 385.890625 251.984375 394.3125 253.855469 397.179688 255.6875 C 402.78125 259.265625 404.027344 257.539062 407.175781 251.984375 C 407.175781 251.984375 414.578125 251.984375 415.691406 255.6875 C 416.800781 259.390625 422.207031 257.941406 423.09375 256.425781 C 424.253906 254.453125 426.636719 247.28125 431.425781 246.800781 C 437.578125 246.183594 439.839844 245.25 437.902344 243.46875 C 435.480469 241.25 431.054688 240.691406 431.054688 240.691406 C 431.054688 240.691406 426.71875 239.644531 424.390625 241.804688 C 420.996094 244.949219 415.136719 246.988281 409.953125 244.210938 C 404.769531 241.433594 378.855469 231.066406 378.855469 231.066406 C 378.855469 231.066406 371.636719 228.292969 365.15625 233.84375 C 358.679688 239.398438 342.203125 250.875 341.464844 250.320312 C 341.105469 250.050781 340.707031 248.992188 340.726562 247.6875 C 342.179688 246.078125 343.980469 244.097656 346.03125 241.835938 C 347.289062 241.578125 348.242188 241.285156 348.796875 238.785156 C 365.921875 219.894531 395.363281 187.390625 396.933594 185.472656 C 397.367188 184.9375 397.871094 184.542969 398.394531 184.246094 C 399.691406 185.640625 402.097656 185.214844 403.648438 183.707031 L 448.988281 201.214844 C 452.972656 209.765625 455.214844 219.371094 455.214844 229.53125 C 455.214844 233.535156 454.839844 237.445312 454.175781 241.25 L 520.214844 241.25 L 488.867188 120.5625 L 191.222656 120.5625 L 117.183594 405.621094 L 562.910156 405.621094 L 529.582031 277.3125" />
		        <path fill={fill} d="M 340.046875 647.101562 C 171.785156 647.101562 34.898438 510.210938 34.898438 341.953125 L 0 341.953125 C 0 529.457031 152.542969 682 340.046875 682 C 527.546875 682 680.089844 529.457031 680.089844 341.953125 L 645.191406 341.953125 C 645.191406 510.210938 508.304688 647.101562 340.046875 647.101562" />
		        <path fill={fill} d="M 651.972656 309.359375 C 651.972656 314.289062 655.96875 318.285156 660.898438 318.285156 C 665.824219 318.285156 669.820312 314.289062 669.820312 309.359375 C 669.820312 304.429688 665.824219 300.433594 660.898438 300.433594 C 655.96875 300.433594 651.972656 304.429688 651.972656 309.359375" />
		        <path fill={fill} d="M 9.640625 309.359375 C 9.640625 314.289062 13.636719 318.285156 18.566406 318.285156 C 23.492188 318.285156 27.488281 314.289062 27.488281 309.359375 C 27.488281 304.429688 23.492188 300.433594 18.566406 300.433594 C 13.636719 300.433594 9.640625 304.429688 9.640625 309.359375" />
		    </g>
		</svg>
	);
}

export default Logo;
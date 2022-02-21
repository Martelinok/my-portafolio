import './SvgIcon.css';

export default function SvgIcon({
  name,
  fill = '#000000',
  strock = 'none'
}) {

  const icons = {
    logo: (
      <svg width="30" height="30" viewBox="0 0 461 368" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M230.149 74.939L65.986 210.274C65.986 210.465 65.938 210.746 65.842 211.129C65.748 211.509 65.698 211.785 65.698 211.981V349.022C65.698 353.97 67.507 358.258 71.124 361.869C74.74 365.482 79.022 367.3 83.971 367.3H193.601V257.664H266.698V367.304H376.327C381.275 367.304 385.563 365.49 389.174 361.869C392.791 358.262 394.606 353.971 394.606 349.022V211.981C394.606 211.221 394.502 210.647 394.318 210.274L230.149 74.939Z" fill={fill} />
        <path d="M457.122 179.438L394.6 127.476V10.989C394.6 8.32599 393.744 6.13599 392.026 4.42199C390.322 2.70999 388.132 1.85399 385.463 1.85399H330.647C327.981 1.85399 325.792 2.70999 324.077 4.42199C322.366 6.13599 321.511 8.32699 321.511 10.989V66.662L251.849 8.41699C245.765 3.46799 238.531 0.993988 230.155 0.993988C221.78 0.993988 214.547 3.46799 208.457 8.41699L3.17199 179.438C1.26899 180.958 0.225993 183.004 0.0319929 185.574C-0.161007 188.142 0.503993 190.385 2.02899 192.287L19.73 213.415C21.255 215.127 23.251 216.174 25.726 216.557C28.011 216.749 30.296 216.081 32.581 214.559L230.149 49.817L427.719 214.558C429.245 215.886 431.24 216.549 433.715 216.549H434.573C437.044 216.173 439.036 215.119 440.569 213.411L458.272 192.286C459.794 190.38 460.461 188.141 460.263 185.57C460.068 183.007 459.021 180.961 457.122 179.438Z" fill={fill} />
      </svg>
    ),
    Menu: (
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.0562 11.946H0.943756C0.422534 11.946 0 12.3401 0 12.8263V13.0567C0 13.5429 0.422534 13.937 0.943756 13.937H19.0562C19.5775 13.937 20 13.5429 20 13.0567V12.8263C20 12.3401 19.5775 11.946 19.0562 11.946Z" fill={fill} />
        <path d="M19.0562 5.97302H0.943756C0.422534 5.97302 0 6.36714 0 6.8533V7.08374C0 7.56991 0.422534 7.96402 0.943756 7.96402H19.0562C19.5775 7.96402 20 7.56991 20 7.08374V6.8533C20 6.36714 19.5775 5.97302 19.0562 5.97302Z" fill={fill} />
        <path d="M19.0562 0H0.943756C0.422534 0 0 0.394114 0 0.88028V1.11072C0 1.59689 0.422534 1.991 0.943756 1.991H19.0562C19.5775 1.991 20 1.59689 20 1.11072V0.88028C20 0.394114 19.5775 0 19.0562 0Z" fill={fill} />
      </svg>
    ),
    BackArrow: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.1667 11.2216C19.6269 11.2216 20 10.6746 20 9.99992C20 9.3252 19.6269 8.7782 19.1667 8.7782H0.833338C0.373109 8.7782 0 9.32519 0 9.99992C0 10.6746 0.373108 11.2216 0.833338 11.2216H19.1667Z" fill={fill} />
        <path d="M7.97687 19.6422C8.39338 20.1193 9.0687 20.1193 9.48521 19.6422C9.90173 19.1651 9.90173 18.3917 9.48521 17.9146L2.57501 10L9.48521 2.08538C9.90173 1.60832 9.90173 0.83485 9.48521 0.357793C9.0687 -0.119264 8.39338 -0.119264 7.97687 0.357793L0.318715 9.12908L0.312416 9.13611C-0.104139 9.61322 -0.104139 10.3868 0.312416 10.8639L0.312495 10.8638L7.97684 19.6422L7.97687 19.6422V19.6422Z" fill={fill} />
      </svg>
    ),
    en: (
      <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#1A3086" />
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
          <circle cx="20" cy="20" r="20" fill="#1A3086" />
        </mask>
        <g mask="url(#mask0)">
          <mask id="path-3-outside-1" maskUnits="userSpaceOnUse" x="0" y="5" width="40" height="30" fill={fill}>
            <rect fill="white" y="5" width="40" height="30" />
            <path fillRule="evenodd" clipRule="evenodd" d="M35.3518 33.1085L38.0171 29.083L24.6874 20.2571L38.3483 11.2537L35.6916 7.2226L20.3109 17.3593L4.66536 7L2 11.0255L15.9283 20.2477L2.29272 29.2343L4.94947 33.2655L20.3047 23.1455L35.3518 33.1085Z" />
          </mask>
          <path fillRule="evenodd" clipRule="evenodd" d="M35.3518 33.1085L38.0171 29.083L24.6874 20.2571L38.3483 11.2537L35.6916 7.2226L20.3109 17.3593L4.66536 7L2 11.0255L15.9283 20.2477L2.29272 29.2343L4.94947 33.2655L20.3047 23.1455L35.3518 33.1085Z" fill="#E5313D" />
          <path d="M38.0171 29.083L38.8509 29.6351L39.403 28.8013L38.5692 28.2492L38.0171 29.083ZM35.3518 33.1085L34.7997 33.9423L35.6335 34.4944L36.1856 33.6606L35.3518 33.1085ZM24.6874 20.2571L24.1371 19.4221L22.8731 20.2551L24.1353 21.0909L24.6874 20.2571ZM38.3483 11.2537L38.8986 12.0887L39.7336 11.5384L39.1833 10.7035L38.3483 11.2537ZM35.6916 7.2226L36.5266 6.67231L35.9763 5.83733L35.1413 6.38763L35.6916 7.2226ZM20.3109 17.3593L19.7588 18.1931L20.3096 18.5578L20.8612 18.1943L20.3109 17.3593ZM4.66536 7L5.21743 6.16621L4.38364 5.61413L3.83156 6.44792L4.66536 7ZM2 11.0255L1.16621 10.4734L0.61413 11.3072L1.44792 11.8593L2 11.0255ZM15.9283 20.2477L16.4786 21.0827L17.7426 20.2497L16.4804 19.4139L15.9283 20.2477ZM2.29272 29.2343L1.74243 28.3994L0.907458 28.9496L1.45775 29.7846L2.29272 29.2343ZM4.94947 33.2655L4.1145 33.8158L4.6648 34.6507L5.49977 34.1004L4.94947 33.2655ZM20.3047 23.1455L20.8568 22.3117L20.306 21.947L19.7545 22.3105L20.3047 23.1455ZM37.1833 28.531L34.518 32.5564L36.1856 33.6606L38.8509 29.6351L37.1833 28.531ZM24.1353 21.0909L37.465 29.9168L38.5692 28.2492L25.2395 19.4233L24.1353 21.0909ZM37.798 10.4188L24.1371 19.4221L25.2377 21.0921L38.8986 12.0887L37.798 10.4188ZM34.8566 7.77289L37.5134 11.804L39.1833 10.7035L36.5266 6.67231L34.8566 7.77289ZM20.8612 18.1943L36.2419 8.05757L35.1413 6.38763L19.7606 16.5243L20.8612 18.1943ZM4.11328 7.83379L19.7588 18.1931L20.863 16.5255L5.21743 6.16621L4.11328 7.83379ZM2.83379 11.5775L5.49915 7.55208L3.83156 6.44792L1.16621 10.4734L2.83379 11.5775ZM16.4804 19.4139L2.55208 10.1917L1.44792 11.8593L15.3762 21.0815L16.4804 19.4139ZM2.84302 30.0693L16.4786 21.0827L15.378 19.4128L1.74243 28.3994L2.84302 30.0693ZM5.78445 32.7152L3.12769 28.684L1.45775 29.7846L4.1145 33.8158L5.78445 32.7152ZM19.7545 22.3105L4.39918 32.4305L5.49977 34.1004L20.855 23.9805L19.7545 22.3105ZM35.9038 32.2747L20.8568 22.3117L19.7527 23.9793L34.7997 33.9423L35.9038 32.2747Z" fill="white" mask="url(#path-3-outside-1)" />
          <mask id="path-5-outside-2" maskUnits="userSpaceOnUse" x="-3" y="-2" width="46" height="44" fill={fill}>
            <rect fill="white" x="-3" y="-2" width="46" height="44" />
            <path fillRule="evenodd" clipRule="evenodd" d="M22.7907 0H16.7442V16L-1 16V24H16.7442V40H22.7907V24H41V16L22.7907 16V0Z" />
          </mask>
          <path fillRule="evenodd" clipRule="evenodd" d="M22.7907 0H16.7442V16L-1 16V24H16.7442V40H22.7907V24H41V16L22.7907 16V0Z" fill="#E5313D" />
          <path d="M16.7442 0V-2H14.7442V0H16.7442ZM22.7907 0H24.7907V-2H22.7907V0ZM16.7442 16V18L18.7442 18V16H16.7442ZM-1 16L-1 14H-3V16H-1ZM-1 24H-3V26H-1V24ZM16.7442 24H18.7442V22H16.7442V24ZM16.7442 40H14.7442V42H16.7442V40ZM22.7907 40V42H24.7907V40H22.7907ZM22.7907 24V22H20.7907V24H22.7907ZM41 24V26H43V24H41ZM41 16H43V14H41V16ZM22.7907 16H20.7907V18H22.7907V16ZM16.7442 2H22.7907V-2H16.7442V2ZM18.7442 16V0H14.7442V16H18.7442ZM-1 18H16.7442V14L-1 14L-1 18ZM1 24V16H-3V24H1ZM16.7442 22H-1V26H16.7442V22ZM18.7442 40V24H14.7442V40H18.7442ZM22.7907 38H16.7442V42H22.7907V38ZM20.7907 24V40H24.7907V24H20.7907ZM41 22H22.7907V26H41V22ZM39 16V24H43V16H39ZM22.7907 18L41 18V14L22.7907 14V18ZM20.7907 0V16H24.7907V0H20.7907Z" fill="white" mask="url(#path-5-outside-2)" />
        </g>
      </svg>
    ),
    es: (
      <svg width="32" height="30" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21" cy="20" r="20" fill="#E5313D" />
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="10" width="42" height="20">
          <rect y="10" width="42" height="20" fill="#FFCE33" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="21" cy="20" r="20" fill="#FFCE33" />
        </g>
      </svg>
    ),
    Github: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_17_2)">
          <path fillRule="evenodd" clipRule="evenodd" d="M10 0C15.523 0 20 4.58993 20 10.2529C20 14.7819 17.138 18.624 13.167 19.981C12.66 20.082 12.48 19.7618 12.48 19.4888C12.48 19.1508 12.492 18.0468 12.492 16.6748C12.492 15.7188 12.172 15.0949 11.813 14.7769C14.04 14.5229 16.38 13.6558 16.38 9.71777C16.38 8.59777 15.992 7.68382 15.35 6.96582C15.454 6.70682 15.797 5.66395 15.252 4.25195C15.252 4.25195 14.414 3.97722 12.505 5.30322C11.706 5.07622 10.85 4.96201 10 4.95801C9.15 4.96201 8.295 5.07622 7.497 5.30322C5.586 3.97722 4.746 4.25195 4.746 4.25195C4.203 5.66395 4.546 6.70682 4.649 6.96582C4.01 7.68382 3.619 8.59777 3.619 9.71777C3.619 13.6458 5.954 14.5262 8.175 14.7852C7.889 15.0412 7.63 15.4928 7.54 16.1558C6.97 16.4178 5.522 16.8712 4.63 15.3042C4.63 15.3042 4.101 14.3191 3.097 14.2471C3.097 14.2471 2.122 14.2341 3.029 14.8701C3.029 14.8701 3.684 15.1851 4.139 16.3701C4.139 16.3701 4.726 18.2001 7.508 17.5801C7.513 18.4371 7.522 19.2448 7.522 19.4888C7.522 19.7598 7.338 20.0769 6.839 19.9819C2.865 18.6269 0 14.7829 0 10.2529C0 4.58993 4.478 0 10 0Z" fill={fill} />
        </g>
        <defs>
          <clipPath id="clip0_17_2">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>

    ),
    LinkedIn: (
      <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM11.5216 19.8778H16.9605V36.2196H11.5216V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM30.3131 19.4941C33.8922 19.4941 36.5754 21.8303 36.5754 26.8497L36.5752 36.2196H31.1365V27.4767C31.1365 25.2807 30.3494 23.7822 28.3805 23.7822C26.8779 23.7822 25.9829 24.7924 25.5898 25.7682C25.446 26.1178 25.4107 26.605 25.4107 27.0934V36.22H19.9711C19.9711 36.22 20.0428 21.4117 19.9711 19.8783H25.4107V22.1929C26.1325 21.0802 27.4254 19.4941 30.3131 19.4941Z" fill={fill} />
      </svg>

    ),
    Instagram: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_17_7)">
          <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_17_7">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>

    ),
    WebApp: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 11H29" stroke={fill} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 9C6.7 9 6.5 8.9 6.3 8.7C6.1 8.5 6 8.3 6 8C6 7.7 6.1 7.5 6.3 7.3L6.4 7.2C6.5 7.2 6.5 7.1 6.6 7.1C6.7 7 6.7 7 6.8 7C6.9 7 7.1 7 7.2 7C7.3 7 7.3 7 7.4 7.1C7.5 7.1 7.5 7.2 7.6 7.2L7.7 7.3C7.8 7.4 7.9 7.5 7.9 7.6C8 7.7 8 7.9 8 8C8 8.1 8 8.3 7.9 8.4C7.9 8.5 7.8 8.6 7.7 8.7C7.5 8.9 7.3 9 7 9Z" fill={fill} />
        <path d="M10 9.00002C9.7 9.00002 9.5 8.90002 9.3 8.70002C9.1 8.50002 9 8.30002 9 8.00002C9 7.90002 9 7.70002 9.1 7.60002C9.2 7.50002 9.2 7.40002 9.3 7.30002C9.4 7.20002 9.5 7.10002 9.6 7.10002C10 6.90002 10.4 7.00002 10.7 7.30002C10.8 7.40002 10.9 7.50002 10.9 7.60002C11 7.70002 11 7.90002 11 8.00002C11 8.30002 10.9 8.50002 10.7 8.70002C10.5 8.90002 10.3 9.00002 10 9.00002Z" fill={fill} />
        <path d="M13 9C12.9 9 12.7 9 12.6 8.9C12.5 8.8 12.4 8.8 12.3 8.7C12.2 8.6 12.1 8.5 12.1 8.4C12 8.3 12 8.1 12 8C12 7.9 12 7.7 12.1 7.6C12.2 7.5 12.2 7.4 12.3 7.3C12.7 6.9 13.3 6.9 13.7 7.3C13.8 7.4 13.9 7.5 13.9 7.6C14 7.7 14 7.9 14 8C14 8.1 14 8.3 13.9 8.4C13.8 8.5 13.8 8.6 13.7 8.7C13.5 8.9 13.3 9 13 9Z" fill={fill} />
        <path d="M27 5H5C3.9 5 3 5.9 3 7V25C3 26.1 3.9 27 5 27H27C28.1 27 29 26.1 29 25V7C29 5.9 28.1 5 27 5Z" stroke={fill} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 16L8 19L11 22" stroke={fill} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 16L24 19L21 22" stroke={fill} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 15L14 23" stroke={fill} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    )
  }
  if (icons[name] === undefined) {
    console.log(`SvgIcon: ${name} is not defined`);
    throw new Error(`SvgIcon: ${name} is not defined`);
  }
  return (icons[name]);
}
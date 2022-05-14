const zodiac = [
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12.41L12 9.41L9 12.41L6 9.41L3.71 11.71L2.29 10.29L6 6.59L9 9.59L12 6.59L15 9.59L18 6.59L21.71 10.29L20.29 11.71L18 9.41L15 12.41ZM18 15.41L20.29 17.71L21.71 16.29L18 12.59L15 15.59L12 12.59L9 15.59L6 12.59L2.29 16.29L3.71 17.71L6 15.41L9 18.41L12 15.41L15 18.41L18 15.41Z" fill="black"/>
        </svg>`,
        text:"aquarius"
    },
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C14.95 2 13.91 2.27 13 2.81C12.64 3 12.3 3.26 12 3.54C11.7 3.26 11.36 3 11 2.81C10.09 2.27 9.05 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14V12C6.93913 12 5.92172 11.5786 5.17157 10.8284C4.42143 10.0783 4 9.06087 4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C8.56764 4.00256 9.12833 4.12505 9.64533 4.35942C10.1623 4.59379 10.624 4.93477 11 5.36V22H13V5.36C13.08 5.27 13.16 5.18 13.25 5.1C13.6313 4.73777 14.0802 4.45428 14.5711 4.26574C15.0621 4.07721 15.5854 3.98734 16.1111 4.00127C16.6368 4.0152 17.1546 4.13267 17.6349 4.34694C18.1152 4.56121 18.5485 4.86808 18.91 5.25C19.6392 6.01918 20.0331 7.04652 20.005 8.10606C19.9768 9.16561 19.529 10.1706 18.76 10.9C18 11.61 17.03 12 16 12V14C17.5913 14 19.1174 13.3679 20.2426 12.2426C21.3679 11.1174 22 9.5913 22 8C22 6.4087 21.3679 4.88258 20.2426 3.75736C19.1174 2.63214 17.5913 2 16 2V2Z" fill="black"/>
        </svg>`,
        text:"aries"
    },
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4C6.5 4 2 7.58 2 12C2 14.12 3.65 15.87 5.76 16H6C7.06087 16 8.07828 15.5786 8.82843 14.8284C9.57857 14.0783 10 13.0609 10 12C10 10.9391 9.57857 9.92172 8.82843 9.17157C8.07828 8.42143 7.06087 8 6 8H5.76C7.44387 6.4112 9.68546 5.54905 12 5.6C13.77 5.58 15.5 6.07 17 7L18.25 5.75C16.3781 4.57826 14.2082 3.97069 12 4V4ZM6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12C8 13.11 7.08 14 6 14C5.50247 14.0025 5.02187 13.8194 4.65205 13.4866C4.28223 13.1538 4.04975 12.695 4 12.2V11.8C4.04975 11.305 4.28223 10.8462 4.65205 10.5134C5.02187 10.1806 5.50247 9.99751 6 10ZM18.24 8H18C16.9391 8 15.9217 8.42143 15.1716 9.17157C14.4214 9.92172 14 10.9391 14 12C14 13.0609 14.4214 14.0783 15.1716 14.8284C15.9217 15.5786 16.9391 16 18 16H18.24C16.5561 17.5888 14.3145 18.451 12 18.4C10.23 18.42 8.5 17.93 7 17L5.76 18.24C7.63 19.41 9.79 20 12 20C17.5 20 22 16.42 22 12C22 9.88 20.35 8.13 18.24 8ZM18 14C17.4696 14 16.9609 13.7893 16.5858 13.4142C16.2107 13.0391 16 12.5304 16 12C16 10.89 16.92 10 18 10C18.4975 9.99751 18.9781 10.1806 19.348 10.5134C19.7178 10.8462 19.9503 11.305 20 11.8V12.2C19.9503 12.695 19.7178 13.1538 19.348 13.4866C18.9781 13.8194 18.4975 14.0025 18 14V14Z" fill="black"/>
        </svg>
        `,
        text:"cancer"
    },
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 13C14.3 13 13.61 13.19 13 13.55V6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.25 3 8.55 3.29 8 3.78C7.45 3.28 6.74 3 6 3V5C6.26522 5 6.51957 5.10536 6.70711 5.29289C6.89464 5.48043 7 5.73478 7 6V16H9V6C9 5.73478 9.10536 5.48043 9.29289 5.29289C9.48043 5.10536 9.73478 5 10 5C10.2652 5 10.5196 5.10536 10.7071 5.29289C10.8946 5.48043 11 5.73478 11 6V17C11 17.5304 10.7893 18.0391 10.4142 18.4142C10.0391 18.7893 9.53043 19 9 19V21C10.15 21 11.25 20.5 12 19.62C12.3436 20.0179 12.7628 20.3437 13.2333 20.5785C13.7037 20.8133 14.2161 20.9524 14.7406 20.9877C15.2652 21.0231 15.7916 20.954 16.2893 20.7844C16.787 20.6149 17.2461 20.3483 17.64 20C19.31 18.58 19.5 16.05 18.04 14.38C17.6622 13.9451 17.195 13.5967 16.6704 13.3586C16.1459 13.1205 15.5761 12.9981 15 13V13ZM15 19C14.4696 19 13.9609 18.7893 13.5858 18.4142C13.2107 18.0391 13 17.5304 13 17C13 16.4696 13.2107 15.9609 13.5858 15.5858C13.9609 15.2107 14.4696 15 15 15C15.5304 15 16.0391 15.2107 16.4142 15.5858C16.7893 15.9609 17 16.4696 17 17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19Z" fill="black"/>
        </svg>`,
        text:"capricorn"
    },
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 5.3C19.35 4.97 20.66 4.54 21.94 4L21.18 2.14C18.2748 3.36299 15.1552 3.99549 12.003 4.00064C8.85086 4.00579 5.72921 3.38349 2.82 2.17L2.06 4C3.34 4.54 4.65 4.97 6 5.3V18.7C4.65 19.03 3.34 19.46 2.06 20L2.82 21.86C5.72977 20.6519 8.84939 20.03 12 20.03C15.1506 20.03 18.2702 20.6519 21.18 21.86L21.94 20C20.66 19.46 19.35 19.03 18 18.7V5.3ZM8 18.3V5.69C9.32 5.89 10.66 6 12 6C13.34 6 14.68 5.89 16 5.69V18.31C13.3491 17.9 10.6509 17.9 8 18.31V18.3V18.3Z" fill="black"/>
        </svg>`,
        text:"gemini"
    },
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 17C20 17.7956 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7956 20 17 20C16.2171 19.9606 15.4767 19.6319 14.9224 19.0776C14.3681 18.5233 14.0394 17.7829 14 17C14.16 15.39 14.5 13.8 15 12.26C15.54 10.55 15.87 8.79 16 7C15.9656 5.68476 15.4278 4.43288 14.4975 3.50254C13.5671 2.57221 12.3152 2.03439 11 2C9.68476 2.03439 8.43287 2.57221 7.50254 3.50254C6.57221 4.43288 6.03439 5.68476 6 7C6.15 8.53 6.5 10.03 7 11.5L7.21 12.2C5.1 11.53 2.86 12.7 2.19 14.8C1.5 16.91 2.68 19.16 4.79 19.83C6.9 20.5 9.14 19.33 9.81 17.22C9.94 16.83 10 16.41 10 16C9.84 14.27 9.5 12.56 8.91 10.92C8.46699 9.64974 8.1619 8.33552 8 7C8.0394 6.2171 8.36812 5.47672 8.92242 4.92242C9.47672 4.36813 10.2171 4.03941 11 4C12.62 4.08 13.92 5.38 14 7C13.8375 8.61126 13.5022 10.2004 13 11.74C12.46 13.45 12.13 15.21 12 17C12.0344 18.3152 12.5722 19.5671 13.5025 20.4975C14.4329 21.4278 15.6848 21.9656 17 22C18.3261 22 19.5978 21.4732 20.5355 20.5355C21.4732 19.5979 22 18.3261 22 17H20ZM6 18C5.46956 18 4.96086 17.7893 4.58578 17.4142C4.21071 17.0391 4 16.5304 4 16C4 15.4696 4.21071 14.9609 4.58578 14.5858C4.96086 14.2107 5.46956 14 6 14C6.53043 14 7.03914 14.2107 7.41421 14.5858C7.78928 14.9609 8 15.4696 8 16C8 16.5304 7.78928 17.0391 7.41421 17.4142C7.03914 17.7893 6.53043 18 6 18Z" fill="black"/>
        </svg>`,
        text:"leo"
    },
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 16V18H13V15.91C16 15.36 17.96 12.5 17.41 9.5C16.86 6.5 14 4.54 11 5.09C8 5.65 6.04 8.5 6.59 11.5C7 13.74 8.76 15.5 11 15.91V18H4V16H6.92C6.15579 15.3024 5.54576 14.4528 5.12903 13.5056C4.71229 12.5585 4.49804 11.5348 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5C19.5 12.59 18.63 14.59 17.08 16H20ZM20 19H4V21H20V19Z" fill="black"/>
        </svg>`,
        text:"libra"
    },
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 11H18C18.11 8.19 18.73 5.42 19.81 2.82L18 2.06C16.8083 4.89777 16.1311 7.92495 16 11H8C7.87 7.92 7.19 4.9 6 2.06L4.14 2.82C5.24 5.41 5.87 8.18 6 11H4V13H6C5.88594 15.8124 5.27308 18.5821 4.19 21.18L6 21.94C7.19 19.1 7.87 16.08 8 13H16C16.13 16.08 16.81 19.1 18 21.94L19.86 21.18C18.76 18.59 18.13 15.82 18 13H20V11V11Z" fill="black"/>
        </svg>
        `,
        text:"pisces"
    },
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 2V12H20V5.41L10.41 15L12.71 17.29L11.29 18.71L8.99999 16.41L3.70999 21.71L2.28999 20.29L7.58999 15L5.28999 12.71L6.70999 11.29L8.99999 13.59L18.59 4H12V2H22Z" fill="black"/>
        </svg>
        `,
        text:"sagittarius"
    },
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.71 15.29L16.29 16.71L17.59 18H16C15.4696 18 14.9609 17.7893 14.5858 17.4142C14.2107 17.0391 14 16.5304 14 16V6C14 5.20435 13.6839 4.44129 13.1213 3.87868C12.5587 3.31607 11.7956 3 11 3C10.25 3 9.55 3.29 9 3.78C8.45028 3.28743 7.73812 3.01504 7 3.01504C6.26188 3.01504 5.54972 3.28743 5 3.78C4.45 3.28 3.74 3 3 3V5C3.26522 5 3.51957 5.10536 3.70711 5.29289C3.89464 5.48043 4 5.73478 4 6V16H6V6C6 5.73478 6.10536 5.48043 6.29289 5.29289C6.48043 5.10536 6.73478 5 7 5C7.26522 5 7.51957 5.10536 7.70711 5.29289C7.89464 5.48043 8 5.73478 8 6V16H10V6C10 5.73478 10.1054 5.48043 10.2929 5.29289C10.4804 5.10536 10.7348 5 11 5C11.2652 5 11.5196 5.10536 11.7071 5.29289C11.8946 5.48043 12 5.73478 12 6V16C12 17.0609 12.4214 18.0783 13.1716 18.8284C13.9217 19.5786 14.9391 20 16 20H17.59L16.29 21.29L17.71 22.71L21.41 19L17.71 15.29Z" fill="black"/>
        </svg>
        `,
        text:"scorpion"
    },
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.59 9C16.6286 8.38001 17.4887 7.50133 18.0863 6.44974C18.684 5.39814 18.9988 4.20956 19 3H17C17 4.32608 16.4732 5.59785 15.5355 6.53553C14.5978 7.47322 13.3261 8 12 8C10.6739 8 9.40214 7.47322 8.46446 6.53553C7.52678 5.59785 6.99999 4.32608 6.99999 3H4.99999C4.99999 5.46 6.29999 7.74 8.40999 9C5.08999 11 3.99999 15.28 5.99999 18.6C7.96999 21.92 12.27 23 15.59 21C18.91 19.04 20 14.74 18 11.42C17.4123 10.424 16.5835 9.59183 15.59 9V9ZM12 20C10.6739 20 9.40214 19.4732 8.46446 18.5355C7.52678 17.5979 6.99999 16.3261 6.99999 15C6.99999 13.6739 7.52678 12.4021 8.46446 11.4645C9.40214 10.5268 10.6739 10 12 10C13.3261 10 14.5978 10.5268 15.5355 11.4645C16.4732 12.4021 17 13.6739 17 15C17 16.3261 16.4732 17.5979 15.5355 18.5355C14.5978 19.4732 13.3261 20 12 20V20Z" fill="black"/>
        </svg>`,
        text:"taurus"
    },
    
]

const hobby = [
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 11C18 10.041 17.32 9.239 16.419 9.046C16.779 8.445 17 7.75 17 7C17 4.794 15.206 3 13 3C11.483 3 10.179 3.857 9.5 5.104C8.821 3.857 7.517 3 6 3C3.794 3 2 4.794 2 7C2 7.902 2.312 8.727 2.817 9.396C2.56459 9.58057 2.35912 9.82193 2.2172 10.1006C2.07528 10.3792 2.00087 10.6873 2 11V19C2 20.103 2.897 21 4 21H16C17.103 21 18 20.103 18 19V16.362L22 18.362V11.362L18 13.362V11ZM13 5C14.103 5 15 5.897 15 7C15 8.103 14.103 9 13 9C11.897 9 11 8.103 11 7C11 5.897 11.897 5 13 5ZM6 5C7.103 5 8 5.897 8 7C8 8.103 7.103 9 6 9C4.897 9 4 8.103 4 7C4 5.897 4.897 5 6 5ZM4 19V11H16L16.002 19H4Z" fill="black"/>
        </svg>`,
        text:"movie"
    },
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.12 4.10667C19.84 1.90667 14.0533 1.44 13.4 1.38L12.6667 1.33333V14.8933C12.4953 14.7537 12.3124 14.6288 12.12 14.52C11.4504 14.183 10.7195 13.985 9.97129 13.938C9.22312 13.891 8.47318 13.996 7.76667 14.2467C5.04667 15.1333 3.28 17.6667 3.85333 19.8933C3.98111 20.3642 4.20451 20.8038 4.50961 21.1846C4.8147 21.5654 5.19495 21.8793 5.62667 22.1067C6.36677 22.5015 7.19454 22.7033 8.03333 22.6933C8.70127 22.6928 9.36496 22.5871 10 22.38C12.4467 21.5933 14.1133 19.4933 14.04 17.4733V6.22667C15.5274 6.37539 16.9926 6.69528 18.4067 7.18C18.572 7.24365 18.7558 7.23902 18.9177 7.16714C19.0796 7.09525 19.2063 6.96199 19.27 6.79667C19.3337 6.63135 19.329 6.44752 19.2571 6.28561C19.1852 6.1237 19.052 5.99699 18.8867 5.93333C17.3055 5.39038 15.6649 5.03898 14 4.88667V2.78C16.22 3.02 19.3333 3.7 19.9467 4.78C21.28 7.05333 18.3933 9.68667 18.3667 9.71333C18.2454 9.83357 18.1749 9.99575 18.1697 10.1664C18.1645 10.3371 18.225 10.5033 18.3387 10.6307C18.4524 10.7581 18.6107 10.837 18.7809 10.8511C18.951 10.8652 19.1202 10.8135 19.2533 10.7067C19.4333 10.5667 23 7.33333 21.12 4.10667V4.10667ZM9.56667 21.1133C9.0277 21.3088 8.45499 21.3942 7.88244 21.3644C7.30988 21.3347 6.74912 21.1903 6.23333 20.94C5.95994 20.8009 5.71854 20.6064 5.52455 20.3688C5.33056 20.1311 5.18823 19.8557 5.10667 19.56C4.70667 18.0067 6.07333 16.1933 8.16 15.52C8.65519 15.3586 9.17251 15.2754 9.69333 15.2733C10.3075 15.2615 10.9148 15.4036 11.46 15.6867C11.7334 15.8258 11.9748 16.0203 12.1688 16.2579C12.3628 16.4955 12.5051 16.771 12.5867 17.0667C13.0267 18.6267 11.66 20.44 9.56667 21.1133V21.1133Z" fill="black"/>
        </svg>`,
        text:"music"
    },
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.3986 7.58175L21.7845 6.945C21.7845 6.945 22.1243 6.38175 22.1243 5.62538C22.1243 3.79313 20.376 3.8415 20.376 3.8415L16.5671 2.80463L14.4893 0.75L11.7551 1.49437L10.8585 1.25025L10.1771 1.92413L6.24075 2.99587C6.24075 2.99587 4.72575 2.95425 4.72575 4.542C4.72575 5.1975 5.0205 5.68575 5.0205 5.68575L5.52713 6.522L5.082 6.9615L2.8845 7.56C2.8845 7.56 1.13625 7.51162 1.13625 9.34387C1.13975 9.77076 1.23961 10.1914 1.42838 10.5742L0.75 11.2451L1.10587 11.3861C1.11375 11.4053 1.11675 11.4266 1.13213 11.442C1.82025 12.1316 1.76362 13.0579 1.66537 13.5581L1.2495 13.9747L4.39987 15.4894L8.72662 22.6312C9.42 23.721 10.8919 23.0392 10.8919 23.0392L22.0103 17.6932L21.5944 17.2766C21.4961 16.7764 21.4395 15.8501 22.1276 15.1601C22.143 15.1447 22.146 15.1234 22.1539 15.1046L22.5098 14.9633L20.4424 12.9195L22.8161 11.7784L22.4557 11.4172C22.3706 10.9837 22.3215 10.1809 22.9181 9.58313C22.9313 9.56963 22.9335 9.55163 22.9406 9.53475L23.25 9.41213L21.3986 7.58175V7.58175ZM19.2667 4.26863L18.798 5.01038L17.5853 3.81113L19.2667 4.26863ZM14.691 2.679L16.4321 4.54013L10.1363 6.81525L8.64938 4.50675L14.691 2.679V2.679ZM5.904 7.1445L10.2004 14.2361L2.01525 10.9894L5.904 7.1445V7.1445ZM4.11337 7.91962L3.609 8.41837L3.40725 8.109L4.11337 7.91962ZM2.52075 8.30737L2.99025 9.03L1.97288 10.0357C1.89282 9.81376 1.85086 9.57985 1.84875 9.34387C1.84875 8.65912 2.1885 8.3985 2.52075 8.30737V8.30737ZM1.93275 13.8848L1.93838 13.863L11.3685 17.9906L2.01225 13.5304C2.02088 13.4798 2.02763 13.4239 2.03475 13.3676L9.35962 16.4351L2.06025 13.0166C2.06211 12.8604 2.05133 12.7043 2.028 12.5497L8.80762 15.3416L1.93687 12.15C1.89277 12.0023 1.83372 11.8594 1.76063 11.7236L11.0917 15.708L11.304 16.0582C11.7416 16.746 12.5355 16.6189 12.9356 16.4996C13.4887 16.7726 14.4803 17.4041 14.2264 18.3345C14.0925 18.8265 13.7981 19.065 13.3267 19.065C12.8494 19.065 12.3727 18.8153 12.3679 18.8119L1.93275 13.8848ZM11.325 18.8194L10.5877 19.1246L9.9615 18.1635L11.325 18.8194ZM8.46975 20.8373L5.57138 16.0526L8.45212 17.4375L9.8145 19.5345C9.26513 19.7692 8.65125 20.3051 8.46975 20.8373V20.8373ZM21.2321 16.2682C21.2088 16.4228 21.198 16.5789 21.1999 16.7351L13.9005 20.1536L21.2254 17.0861C21.2325 17.142 21.2389 17.1983 21.2479 17.2489L11.8916 21.7095L21.3218 17.5819C21.3238 17.5891 21.3257 17.5963 21.3274 17.6036L10.8922 22.53C10.8874 22.5334 10.4115 22.7831 9.93338 22.7831C9.46163 22.7831 9.16763 22.5442 9.03375 22.0526C8.6895 20.79 10.647 20.0741 10.6762 20.0632L12.3919 19.3312C12.576 19.4096 13.8896 19.9253 14.5335 18.9131L14.9396 18.2434L21.4999 15.4421C21.4268 15.578 21.3676 15.7208 21.3232 15.8685L14.4525 19.0601L21.2321 16.2682V16.2682ZM21.2449 14.7079L15.6855 17.0119L17.2283 14.4653L19.7659 13.2454L21.2449 14.7079V14.7079ZM22.1423 10.5428C22.1223 10.6767 22.1129 10.812 22.1141 10.9474L15.7886 13.9099L22.1366 11.2515C22.143 11.2999 22.1483 11.349 22.1561 11.3925L14.0471 15.258L22.2199 11.6809C22.2218 11.687 22.2235 11.6933 22.2247 11.6996L13.1809 15.9697C13.1767 15.9724 12.7639 16.1891 12.3499 16.1891C11.9407 16.1891 11.6861 15.9817 11.5703 15.5557C11.2718 14.4615 12.9683 13.8412 12.9938 13.8319L22.374 9.82687C22.3107 9.94464 22.2596 10.0685 22.2214 10.1966L16.2664 12.9626L22.1423 10.5428" fill="black"/>
        </svg>`,
        text:"books"
    },
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6C4 4.9 4.9 4 6 4C7.1 4 8 4.9 8 6C8 7.1 7.1 8 6 8C4.9 8 4 7.1 4 6ZM13 22C12.44 22 11.98 21.56 11.95 21L11.5 12L8 11H2C1.45 11 1 10.55 1 10C1 9.45 1.45 9 2 9H7L13.26 4.53C13.68 4.23 14.26 4.3 14.6 4.69C14.98 5.14 14.9 5.81 14.42 6.15L11.14 8.5H14L21.09 4.41C21.3049 4.2773 21.5627 4.23269 21.8097 4.28548C22.0567 4.33826 22.2738 4.48437 22.4157 4.69332C22.5575 4.90227 22.6133 5.15793 22.5712 5.40697C22.5292 5.65601 22.3926 5.87921 22.19 6.03L14.5 12L14.05 21C14.02 21.56 13.56 22 13 22Z" fill="black"/>
        </svg>`,
        text:"sport"
    },
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C14.4333 2 16.5623 2.76233 18.387 4.287C20.2123 5.81233 21.35 7.725 21.8 10.025H19.75C19.4333 8.80833 18.8627 7.72067 18.038 6.762C17.2127 5.804 16.2 5.08333 15 4.6V5C15 5.55 14.8043 6.02067 14.413 6.412C14.021 6.804 13.55 7 13 7H11V9C11 9.28333 10.9043 9.52067 10.713 9.712C10.521 9.904 10.2833 10 10 10H8V12H10V15H9L4.2 10.2C4.15 10.5 4.104 10.8 4.062 11.1C4.02067 11.4 4 11.7 4 12C4 14.1833 4.76667 16.0583 6.3 17.625C7.83333 19.1917 9.73333 19.9833 12 20V22ZM20.4 20.8L17.9 18.3C17.55 18.5 17.175 18.6667 16.775 18.8C16.375 18.9333 15.95 19 15.5 19C14.25 19 13.1873 18.5627 12.312 17.688C11.4373 16.8127 11 15.75 11 14.5C11 13.25 11.4373 12.1873 12.312 11.312C13.1873 10.4373 14.25 10 15.5 10C16.75 10 17.8127 10.4373 18.688 11.312C19.5627 12.1873 20 13.25 20 14.5C20 14.95 19.9333 15.375 19.8 15.775C19.6667 16.175 19.5 16.55 19.3 16.9L21.8 19.4C21.9833 19.5833 22.075 19.8167 22.075 20.1C22.075 20.3833 21.9833 20.6167 21.8 20.8C21.6167 20.9833 21.3833 21.075 21.1 21.075C20.8167 21.075 20.5833 20.9833 20.4 20.8V20.8ZM15.5 17C16.2 17 16.7917 16.7583 17.275 16.275C17.7583 15.7917 18 15.2 18 14.5C18 13.8 17.7583 13.2083 17.275 12.725C16.7917 12.2417 16.2 12 15.5 12C14.8 12 14.2083 12.2417 13.725 12.725C13.2417 13.2083 13 13.8 13 14.5C13 15.2 13.2417 15.7917 13.725 16.275C14.2083 16.7583 14.8 17 15.5 17Z" fill="black"/>
        </svg>
        `,
        text:"travel"
    },
    {
        icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4571 5.59425C14.9963 5.38987 14.1101 4.98487 13.5184 4.98487C12.9983 4.98487 12.0098 5.373 11.5481 5.58675C11.1386 5.77575 11.0779 5.94037 11.1578 6.19762C11.2399 6.462 11.5504 6.61087 11.8455 6.54412C11.8455 6.54412 13.0451 5.97712 13.4854 5.97712C13.9335 5.97562 15.159 6.55125 15.159 6.55125C15.4541 6.6195 15.7654 6.46762 15.8483 6.20475C15.9274 5.94712 15.8666 5.7765 15.4571 5.59425ZM17.664 6.54412C17.664 6.54412 18.8636 5.97787 19.3039 5.97712C19.7528 5.97712 20.9783 6.55125 20.9783 6.55125C21.2734 6.6195 21.5846 6.46762 21.666 6.20475C21.7466 5.94675 21.6851 5.77612 21.2756 5.59387C20.8163 5.3895 19.9286 4.9845 19.3384 4.98375C18.816 4.9845 17.8298 5.37262 17.3674 5.58637C16.9571 5.77612 16.8964 5.94 16.9763 6.1965C17.0588 6.46125 17.3685 6.61162 17.664 6.54412V6.54412ZM9.88913 17.3362C8.3445 17.898 6.77775 17.4855 6.9945 18.0833C7.212 18.681 9.13313 20.0636 10.677 19.5019C12.2209 18.9394 12.804 16.6455 12.5865 16.0477C12.3683 15.4504 11.433 16.7745 9.88913 17.3362V17.3362ZM7.80038 13.536C7.78725 13.2754 7.67588 13.1396 7.24313 13.1104C6.75825 13.0759 5.8185 13.0013 5.28188 13.1966C4.80863 13.3688 4.0395 14.0482 3.69038 14.3955C3.38213 14.703 3.37988 14.8721 3.53813 15.0795C3.69938 15.2925 4.03163 15.3247 4.27725 15.1665C4.27725 15.1665 5.18025 14.2552 5.57963 14.109C5.98688 13.9605 7.29 14.0782 7.29 14.0782C7.58063 14.0426 7.81425 13.8026 7.80038 13.536ZM12.5303 11.1863C12.0446 11.1518 11.1041 11.0771 10.5683 11.2725C10.0943 11.4446 9.3255 12.1241 8.97675 12.4706C8.66775 12.7789 8.667 12.948 8.82375 13.1561C8.98575 13.3684 9.31725 13.4014 9.56438 13.2424C9.56438 13.2424 10.4651 12.3311 10.866 12.1856C11.2733 12.0364 12.5771 12.1541 12.5771 12.1541C12.8678 12.1181 13.1003 11.8781 13.0868 11.6115C13.0736 11.3505 12.9623 11.2155 12.5303 11.1863" fill="black"/>
        <path d="M21.5179 18.3998C21.0191 18.5059 20.6666 18.843 20.3681 19.1565C19.7726 19.8034 19.3301 20.5129 18.7729 21.0652C18.2344 21.6285 17.607 22.0466 16.8356 22.1332C16.0995 22.2364 15.3127 21.9559 14.8699 21.2359C14.661 20.8849 14.5324 20.4611 14.5534 20.0464C14.5668 19.6374 14.7134 19.244 14.9707 18.9259C14.9775 18.918 14.9857 18.912 14.9925 18.9037C15.1977 19.1524 15.4639 19.3436 15.765 19.4587C16.143 19.6117 16.5142 19.6631 16.8784 19.7194C17.5961 19.8094 18.3409 19.8769 19.0792 19.737C19.4518 19.6679 19.807 19.5258 20.1244 19.3189C20.4391 19.1022 20.7067 18.8241 20.9111 18.5014C21.327 17.8598 21.4957 17.0798 21.4657 16.3151C21.4295 15.5378 21.2222 14.778 20.8586 14.0899C20.6756 13.7449 20.4442 13.4059 20.1664 13.1164C21.7834 10.9965 23.2511 8.25 23.2507 5.169C23.2507 3.6405 23.0846 2.17913 22.7805 0.835125C21.1275 1.92562 18.8636 2.598 16.3646 2.598C13.8011 2.598 11.4851 1.88963 9.82349 0.75C9.56924 1.8465 9.41174 3.02437 9.35737 4.25212C9.34874 4.25212 9.34012 4.2495 9.33149 4.2495C9.07799 4.2495 8.84887 4.35187 8.68237 4.51837C8.20949 4.21695 7.65704 4.06437 7.09649 4.08037C6.65062 4.098 6.13049 4.26037 5.80687 4.70587C5.64487 4.91962 5.56499 5.18625 5.54962 5.43375C5.52824 5.68425 5.57737 5.92012 5.64112 6.13687C5.71012 6.35287 5.80462 6.55275 5.91224 6.73837C6.02287 6.92062 6.11137 7.068 6.18412 7.24463C6.32512 7.57763 6.39149 7.95 6.33524 8.316C6.08968 8.24477 5.85872 8.1305 5.65312 7.9785C5.13074 7.60575 4.70699 7.0995 4.48349 6.52688C4.26149 5.95688 4.21387 5.36737 4.35149 4.81012C4.49362 4.25362 4.80712 3.74363 5.18924 3.28875C5.58083 2.82563 6.04607 2.43021 6.56624 2.11838C7.09199 1.81238 7.67662 1.5645 8.32687 1.57912L8.34374 1.506C7.70587 1.24462 6.95587 1.347 6.31574 1.59225C5.66399 1.839 5.07637 2.247 4.59449 2.76337C4.11787 3.28275 3.76012 3.94275 3.64462 4.66838C3.58369 5.02989 3.58966 5.39952 3.66224 5.75888C3.74157 6.10853 3.8854 6.44033 4.08637 6.73725C4.47749 7.31887 4.99837 7.75913 5.51474 8.16488C5.74574 8.33588 5.98049 8.51025 6.25462 8.64563C6.16211 8.91144 6.00968 9.15241 5.80912 9.34988C5.54024 9.621 5.18137 9.78638 4.82774 9.84713C4.09162 9.9615 3.46087 9.55125 3.11737 8.94338C2.74312 8.31938 2.67337 7.59787 2.75174 6.85312C2.81174 6.10162 3.04312 5.33775 3.14662 4.5C3.19049 4.086 3.22049 3.618 3.01274 3.18375C2.91199 2.97401 2.75169 2.79859 2.55187 2.67937C2.36437 2.56162 2.15924 2.49713 1.95637 2.45963L1.93199 2.5305C2.28787 2.71725 2.58449 2.98688 2.65499 3.32138C2.73487 3.65175 2.66099 4.0215 2.56574 4.392C2.36212 5.1345 2.06849 5.90963 1.95562 6.765C1.90799 7.19138 1.90012 7.641 1.99499 8.0835C2.08741 8.52588 2.2655 8.9459 2.51924 9.31988C2.76824 9.69713 3.12562 10.0354 3.56812 10.212C4.00762 10.395 4.50337 10.3849 4.92449 10.2458C5.65987 9.99975 6.20249 9.4185 6.46349 8.73675C6.77924 8.85788 7.17562 8.8875 7.52212 8.73938C7.89712 8.58713 8.17087 8.30962 8.37899 8.02387C8.58412 7.7325 8.74649 7.42912 8.87549 7.11637C9.01499 6.77587 9.12599 6.429 9.21112 6.07687C9.25049 6.08212 9.28949 6.08887 9.33037 6.08887C9.34537 6.08887 9.35962 6.08513 9.37462 6.08438C9.46012 6.97875 9.66637 7.84537 9.95587 8.67375C9.13102 9.21443 8.24639 9.65788 7.31962 9.99525C5.88262 10.518 4.44299 10.7659 3.10724 10.7659C2.27174 10.7659 1.47749 10.6691 0.749619 10.4813C0.913869 11.8309 1.25024 13.2469 1.76737 14.6677C3.95624 20.6809 12.0686 23.25 12.0686 23.25C12.0686 23.25 13.6807 20.7094 14.5286 17.3857C14.5286 17.3895 14.5275 17.3925 14.5271 17.3955C14.4986 17.7743 14.5916 18.1946 14.796 18.6011C14.8061 18.6221 14.8219 18.6394 14.8331 18.6592C14.8095 18.69 14.7821 18.7181 14.7596 18.7496C14.2425 19.4666 14.088 20.4765 14.4799 21.4136C14.6749 21.8749 15.027 22.3159 15.4927 22.5795C15.9547 22.8491 16.4857 22.9376 16.968 22.9054C17.4451 22.8811 17.912 22.7579 18.339 22.5435C18.7609 22.3331 19.1152 22.0279 19.4216 21.7028C20.0242 21.0364 20.4307 20.265 20.8762 19.5926C21.1039 19.2638 21.3457 18.9533 21.6679 18.8036C21.9874 18.6431 22.4179 18.7237 22.8266 18.912L22.8656 18.843C22.6882 18.69 22.4884 18.5539 22.257 18.4672C22.0282 18.378 21.7624 18.345 21.5179 18.3998V18.3998ZM8.34749 6.85388C8.03249 7.39313 7.67887 7.91513 7.25774 8.20013C7.06874 8.32575 6.83624 8.3865 6.57674 8.36138C6.66705 7.9534 6.6691 7.53083 6.58274 7.122C6.53887 6.91238 6.45899 6.69225 6.39224 6.51263C6.3288 6.33991 6.27952 6.16233 6.24487 5.98163C6.17737 5.63288 6.19874 5.31225 6.34874 5.088C6.49612 4.85962 6.80512 4.71225 7.15012 4.65863C7.58212 4.59713 8.04412 4.64887 8.49074 4.79887C8.44087 4.9125 8.41199 5.037 8.41199 5.169C8.41199 5.499 8.58749 5.78588 8.84812 5.94788C8.68124 6.25613 8.51924 6.56025 8.34749 6.85388ZM15.441 16.527C15.4474 16.4917 15.4556 16.4565 15.4624 16.4213C15.9667 16.8746 16.2907 17.1255 16.2907 17.1255C16.2907 17.1255 16.7775 16.7501 17.4904 16.0804C17.5837 16.317 17.622 16.551 17.5702 16.7434C17.4997 17.0231 17.259 17.2552 16.9309 17.4274C16.7681 17.5136 16.5896 17.5901 16.3991 17.6509C16.2064 17.7116 15.9727 17.7885 15.7736 17.8898C15.6274 17.9647 15.488 18.0523 15.357 18.1515C15.2797 17.6572 15.339 17.0876 15.441 16.527V16.527ZM15.6386 15.5629C15.6686 15.4226 15.6994 15.2831 15.7286 15.141C15.8269 15.1069 15.9217 15.06 16.0054 14.9906C16.1107 14.9032 16.1899 14.7949 16.2442 14.6752C16.5609 14.8816 16.845 15.134 17.0872 15.4241C16.8274 15.6728 16.5616 15.9151 16.29 16.1509C16.0691 15.9591 15.8519 15.7631 15.6386 15.5629V15.5629ZM20.2762 14.2969C20.49 14.943 20.6006 15.6101 20.5969 16.2548C20.5946 16.8979 20.4952 17.529 20.2204 18.0623C19.9406 18.594 19.4842 19.0072 18.8962 19.2694C18.3045 19.5322 17.5931 19.59 16.8945 19.4692C16.5487 19.4145 16.2045 19.2934 15.927 19.1059C15.7139 18.9659 15.5476 18.7653 15.4496 18.5299C15.6118 18.438 15.7851 18.3675 15.9652 18.3199C16.1595 18.2655 16.3417 18.2452 16.5671 18.2216C16.799 18.1937 17.0269 18.139 17.2462 18.0589C17.466 17.9711 17.6895 17.8575 17.8747 17.673C18.0615 17.4941 18.2167 17.2481 18.2711 16.9639C18.3727 16.4734 18.2096 15.996 17.9696 15.6169C18.5992 14.9925 19.1887 14.3854 19.9102 13.4482C20.0595 13.7227 20.1769 14.0096 20.2762 14.2969V14.2969ZM11.7337 22.3316C9.91162 21.6367 4.18837 19.1213 2.47424 14.4109C2.11892 13.4391 1.84474 12.4396 1.65449 11.4225C2.12437 11.4859 2.60999 11.5178 3.10762 11.5178C4.56412 11.5178 6.10949 11.2358 7.57724 10.7018C9.51974 9.99413 11.2234 8.89537 12.4762 7.55512C12.9702 8.43847 13.3916 9.36051 13.7362 10.3121C15.4477 15.0131 12.681 20.6269 11.7337 22.3316V22.3316ZM14.5117 10.2656C14.4881 10.1951 14.4682 10.1246 14.4427 10.0549C13.9357 8.66287 13.2994 7.3875 12.5771 6.26437C12.0559 6.96637 11.3835 7.62825 10.5979 8.223C10.3222 7.39584 10.1561 6.53617 10.1036 5.66588C10.2017 5.5146 10.2529 5.33771 10.2508 5.15744C10.2486 4.97716 10.1933 4.80153 10.0916 4.65262C10.1156 3.72787 10.1992 2.82075 10.3489 1.9425C12.0649 2.85412 14.1596 3.348 16.3646 3.348C18.5066 3.348 20.5541 2.87888 22.2461 2.01263C22.4145 3.03263 22.5 4.0905 22.5 5.16937C22.5007 9.34537 19.4561 13.0654 17.4817 15.0386C17.1503 14.7242 16.7585 14.4803 16.3301 14.3216C16.3405 14.0493 16.2488 13.7828 16.0729 13.5746C15.8006 13.2469 15.3881 13.1149 15.0266 13.2026C15.0144 12.8331 14.9838 12.4644 14.9351 12.0979C15.3446 12.0011 15.8029 11.9216 16.2904 11.9216C17.991 11.9216 19.368 12.8782 19.368 12.219C19.368 11.5612 17.9902 9.5385 16.2911 9.5385C15.627 9.5385 15.0146 9.85012 14.5117 10.2656" fill="black"/>
        </svg>`,
        text:"art"
    },
]


const createUser = [
    {
        id:1,
        text: "Man",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20.4844 2.8125H14.5781C14.5008 2.8125 14.4375 2.87578 14.4375 2.95312V4.26562C14.4375 4.34297 14.5008 4.40625 14.5781 4.40625H18.3375L13.6664 9.07734C12.4945 8.175 11.0648 7.6875 9.5625 7.6875C7.76016 7.6875 6.06328 8.39062 4.79062 9.66562C3.51797 10.9406 2.8125 12.6352 2.8125 14.4375C2.8125 16.2398 3.51562 17.9367 4.79062 19.2094C6.06328 20.4844 7.76016 21.1875 9.5625 21.1875C11.3648 21.1875 13.0617 20.4844 14.3344 19.2094C15.6094 17.9367 16.3125 16.2398 16.3125 14.4375C16.3125 12.9352 15.825 11.5102 14.925 10.3383L19.5938 5.66953V9.42188C19.5938 9.49922 19.657 9.5625 19.7344 9.5625H21.0469C21.1242 9.5625 21.1875 9.49922 21.1875 9.42188V3.51562C21.1875 3.12891 20.8711 2.8125 20.4844 2.8125ZM9.5625 19.4062C6.82266 19.4062 4.59375 17.1773 4.59375 14.4375C4.59375 11.6977 6.82266 9.46875 9.5625 9.46875C12.3023 9.46875 14.5312 11.6977 14.5312 14.4375C14.5312 17.1773 12.3023 19.4062 9.5625 19.4062Z" fill="black"/>
        </svg>`
    },
    {
        id:2,
        text: "Woman",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16.7062 12.8625C17.9625 11.6062 18.6562 9.93281 18.6562 8.15625C18.6562 6.37734 17.9648 4.70625 16.7062 3.45C15.45 2.19375 13.7766 1.5 12 1.5C10.2234 1.5 8.55 2.19141 7.29375 3.45C6.0375 4.70859 5.34375 6.37734 5.34375 8.15625C5.34375 9.65156 5.83359 11.0719 6.73594 12.232C6.90703 12.4523 7.09219 12.6609 7.29141 12.8625C7.49063 13.0617 7.70156 13.2469 7.91953 13.418C8.84766 14.1398 9.94219 14.5992 11.1094 14.7539V17.25H8.4375C8.33437 17.25 8.25 17.3344 8.25 17.4375V18.8438C8.25 18.9469 8.33437 19.0312 8.4375 19.0312H11.1094V22.3125C11.1094 22.4156 11.1937 22.5 11.2969 22.5H12.7031C12.8063 22.5 12.8906 22.4156 12.8906 22.3125V19.0312H15.5625C15.6656 19.0312 15.75 18.9469 15.75 18.8438V17.4375C15.75 17.3344 15.6656 17.25 15.5625 17.25H12.8906V14.7539C14.332 14.5617 15.6609 13.9078 16.7062 12.8625ZM12 13.0312C10.6969 13.0312 9.47578 12.525 8.55234 11.6039C7.63125 10.6828 7.125 9.45937 7.125 8.15625C7.125 6.85313 7.63125 5.63203 8.55234 4.70859C9.47344 3.78516 10.6969 3.28125 12 3.28125C13.3031 3.28125 14.5242 3.7875 15.4477 4.70859C16.3687 5.62969 16.875 6.85313 16.875 8.15625C16.875 9.45937 16.3687 10.6805 15.4477 11.6039C14.5242 12.525 13.3031 13.0312 12 13.0312Z" fill="black"/>
        </svg>`
    },
    {
        id:3,
        text: "Ore",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9015 0H20.88C21.3369 0 21.7108 0.253125 21.7108 0.5625V5.2875C21.7108 5.34937 21.636 5.4 21.5446 5.4H19.9938C19.9025 5.4 19.8277 5.34937 19.8277 5.2875V2.28562L14.3114 6.02062C14.7343 6.3935 15.0802 6.7984 15.3433 7.22649C15.6049 7.2089 15.8692 7.2 16.1354 7.2C18.2345 7.2 20.2117 7.755 21.696 8.76C23.1831 9.765 24 11.1019 24 12.525C24 13.9462 23.1803 15.285 21.696 16.29C20.4609 17.1262 18.8908 17.6494 17.1877 17.8031V19.8H20.3446C20.4665 19.8 20.5662 19.8675 20.5662 19.95V21.075C20.5662 21.1575 20.4665 21.225 20.3446 21.225H17.1877V23.85C17.1877 23.9325 17.088 24 16.9662 24H15.3046C15.1828 24 15.0831 23.9325 15.0831 23.85V21.225H11.9262C11.8043 21.225 11.7046 21.1575 11.7046 21.075V19.95C11.7046 19.8675 11.8043 19.8 11.9262 19.8H15.0831V17.8031C13.704 17.6794 12.4108 17.3119 11.3142 16.7344C11.0566 16.5975 10.8074 16.4494 10.572 16.29C10.3366 16.1287 10.1178 15.9619 9.91569 15.7856C9.5161 15.4378 9.18497 15.0607 8.92712 14.6621C8.61355 14.6873 8.29588 14.7 7.97538 14.7C5.84585 14.7 3.84092 14.1375 2.33723 13.1175C0.830769 12.0994 0 10.7419 0 9.3C0 7.85812 0.833538 6.5025 2.33723 5.4825C3.84092 4.4625 5.84585 3.9 7.97538 3.9C9.75046 3.9 11.4397 4.29 12.8243 5.01187L18.3434 1.275H13.9015C13.8102 1.275 13.7354 1.22437 13.7354 1.1625V0.1125C13.7354 0.050625 13.8102 0 13.9015 0ZM11.0016 14.2989C11.2728 14.6579 11.6284 14.9897 12.0618 15.2831C13.1529 16.02 14.5957 16.425 16.1354 16.425C17.6751 16.425 19.1178 16.02 20.2089 15.2831C21.2972 14.5444 21.8954 13.5675 21.8954 12.525C21.8954 11.4825 21.2972 10.5037 20.2089 9.76687C19.1178 9.03 17.6751 8.625 16.1354 8.625C16.0533 8.625 15.9715 8.62615 15.8901 8.62843C15.9303 8.84946 15.9508 9.07363 15.9508 9.3C15.9508 10.7419 15.12 12.0994 13.6135 13.1175C12.8545 13.6324 11.9677 14.0307 11.0016 14.2989ZM13.8235 8.94939C13.8385 9.06493 13.8462 9.18187 13.8462 9.3C13.8462 10.9057 12.4328 12.2921 10.4041 12.9187C10.385 12.7888 10.3754 12.6574 10.3754 12.525C10.3754 11.4825 10.9735 10.5056 12.0618 9.76687C12.5781 9.41647 13.1746 9.14157 13.8235 8.94939ZM13.2577 7.56607C12.2638 7.83021 11.3517 8.23294 10.5748 8.76C9.09046 9.76687 8.27077 11.1019 8.27077 12.525C8.27077 12.7755 8.29614 13.0233 8.34605 13.2672C8.22346 13.2724 8.09987 13.275 7.97538 13.275C4.73815 13.275 2.10462 11.4919 2.10462 9.3C2.10462 7.10812 4.73815 5.325 7.97538 5.325C10.2951 5.325 12.3048 6.24058 13.2577 7.56607Z" fill="black"/>
        </svg>`
    },

]
const user={}


const step3 = document.createElement("div")
const step3Title = document.createElement("h1")
const step3Wrap = document.createElement("div")
const step3Text = document.createElement("p")
const step3Form = document.createElement("form")
const step3Botton = document.createElement("div")
const stepBack = document.createElement("button")
const stepSend = document.createElement("button")
stepBack.textContent = "<< Back"
stepSend.textContent = "Send"

step3Botton.insertAdjacentElement("beforeend", stepBack)
step3Botton.insertAdjacentElement("beforeend", stepSend)

stepSend.setAttribute("type", "button")

//Info
const divInfo = document.createElement("div")
const divZodiac = document.createElement("div")
const divHobby = document.createElement("div")


// divInfo 

const ul = document.createElement("ul")
ul.classList.add("ste3Info")




step3.classList.add("step3")
step3Wrap.classList.add("step3__wrapp")

step3Title.textContent = "SL"
step3Text.textContent = "Hi! Tell me about yourself."

function createStep3(){
    const step3Container = document.querySelector(".container")

    step3Container.insertAdjacentElement("beforeend", step3)
    step3.insertAdjacentElement("beforeend", step3Title)
    step3.insertAdjacentElement("beforeend", step3Wrap)
    step3Wrap.insertAdjacentElement("beforeend", step3Text)
    step3Wrap.insertAdjacentElement("beforeend", step3Form)
    step3Form.insertAdjacentElement("beforeend",divInfo)
    step3Form.insertAdjacentElement("beforeend", divZodiac)
    step3Form.insertAdjacentElement("beforeend", divHobby)
    step3Form.insertAdjacentElement("beforeend", step3Botton)


    //Info
    const infoBlock = document.createElement("div")
    const inputName = document.createElement("input")
    const inputAge = document.createElement("input")

    inputName.setAttribute("type", "text")
    inputAge.setAttribute("type", "number")

    inputName.setAttribute("placeholder", "Name")
    inputAge.setAttribute("placeholder", "Age")

    divInfo.insertAdjacentElement("beforeend", infoBlock)
    infoBlock.insertAdjacentElement("beforeend", inputName)
    infoBlock.insertAdjacentElement("beforeend", inputAge)
    divInfo.insertAdjacentElement("beforeend", ul)
    
    createUser.forEach(item =>{
        const li = document.createElement("li")
        li.classList.add("item_sex")
        li.innerHTML = item.icon
        ul.insertAdjacentElement("beforeend", li)
        li.addEventListener("click", ()=>{
            li.classList.remove("item_sex")
            const itemSex = document.querySelectorAll(".item_sex")
            for(let i = 0; i < itemSex.length; i++){
                itemSex.forEach(elem=>{
                    elem.remove()
                })
            }
            li.classList.add("activeitem_sex")
            user.gender = item.text

            
        })
    })


    const h3 = document.createElement("h3")
    const ulZadiac = document.createElement("ul")

    h3.textContent = "Choose your zodiac"
    
    divZodiac.insertAdjacentElement("beforeend", h3)
    divZodiac.insertAdjacentElement("beforeend", ulZadiac)
    
    zodiac.forEach(item=>{
        const li = document.createElement("li")
        li.classList.add("item_zodiac")
        li.innerHTML = item.icon
        ulZadiac.insertAdjacentElement("beforeend", li)
        li.addEventListener("click", ()=>{
            ulZadiac.classList.add("zodiac__list")
            li.classList.remove("item_zodiac")
            const itemZodiac = document.querySelectorAll(".item_zodiac")
            for(let i = 0; i < itemZodiac.length; i++){
                itemZodiac.forEach(elem=>{
                    elem.remove()
                })
            }
            li.classList.add("activeitem_zodiac")
            user.zodiac = item.text
        })
    })

    const ulHobby = document.createElement("ul")
    const h3Hobby = document.createElement("h3")
    h3Hobby.innerHTML = "Tell me about your hobbies"
    divHobby.insertAdjacentElement("beforeend", h3Hobby)
    divHobby.insertAdjacentElement("beforeend", ulHobby)
    const hobbyArr = []
    hobby.forEach(item=>{
        const li = document.createElement("li")
        li.classList.add("item_hobby")
        li.innerHTML = item.icon
        ulHobby.insertAdjacentElement("beforeend", li)
        
        li.addEventListener("click", ()=>{
            li.classList.add("activeitem_hobby")
            hobbyArr.push(item.text)
        })
        user.hobby = hobbyArr

    })
    
    stepSend.addEventListener("click", ()=>{
        user.userName = inputName.value
        user.userAge = inputAge.value
        console.log(user)
    })
}

export default createStep3
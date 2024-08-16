import type { SVGProps } from 'react'

export const icons = {
    loading: (props: SVGProps<SVGSVGElement>) => (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M14.33 7.665C14.33 11.346 11.346 14.33 7.665 14.33C3.98402 14.33 1 11.346 1 7.665C1 3.98402 3.98402 1 7.665 1C11.346 1 14.33 3.98402 14.33 7.665ZM2.34586 7.665C2.34586 10.6027 4.72732 12.9841 7.665 12.9841C10.6027 12.9841 12.9841 10.6027 12.9841 7.665C12.9841 4.72732 10.6027 2.34586 7.665 2.34586C4.72732 2.34586 2.34586 4.72732 2.34586 7.665Z'
                fill='white'
                fillOpacity='0.4'
            />
            <path
                d='M10.1283 2.20268C10.2811 1.86388 10.1311 1.46186 9.77859 1.34401C9.12649 1.12596 8.44325 1.0097 7.75301 1.00058C6.83799 0.988497 5.93029 1.16497 5.08645 1.519C4.24261 1.87303 3.48072 2.39704 2.84823 3.05838C2.37112 3.55725 1.97536 4.12621 1.67405 4.74426C1.51118 5.07833 1.6929 5.46705 2.04168 5.59542C2.39046 5.72378 2.77356 5.54247 2.9449 5.21268C3.17687 4.76619 3.47156 4.35386 3.82088 3.98859C4.32565 3.4608 4.9337 3.04261 5.60714 2.76006C6.28058 2.47752 7.00499 2.33668 7.73524 2.34633C8.24061 2.353 8.74129 2.43165 9.22239 2.57897C9.57775 2.68778 9.97553 2.54147 10.1283 2.20268Z'
                fill='currentColor'
            />
        </svg>
    ),
    eye: (props: SVGProps<SVGSVGElement>) => (
        <svg width='16' height='17' viewBox='0 0 16 17' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M8.00171 10.9998C8.78928 10.9998 9.45807 10.7242 10.0081 10.1729C10.5581 9.62157 10.8331 8.95213 10.8331 8.16454C10.8331 7.37696 10.5574 6.70817 10.0061 6.15817C9.45481 5.60817 8.78536 5.33317 7.99777 5.33317C7.2102 5.33317 6.54141 5.60883 5.99141 6.16014C5.44141 6.71144 5.16641 7.38088 5.16641 8.16847C5.16641 8.95605 5.44206 9.62484 5.99337 10.1748C6.54467 10.7248 7.21412 10.9998 8.00171 10.9998ZM7.99582 10.0332C7.47621 10.0332 7.03585 9.85131 6.67474 9.48759C6.31363 9.12385 6.13307 8.68219 6.13307 8.16259C6.13307 7.64298 6.31493 7.20262 6.67866 6.8415C7.04239 6.48039 7.48406 6.29984 8.00366 6.29984C8.52327 6.29984 8.96363 6.4817 9.32474 6.84542C9.68585 7.20915 9.86641 7.65082 9.86641 8.17042C9.86641 8.69003 9.68455 9.13039 9.32082 9.4915C8.95709 9.85262 8.51542 10.0332 7.99582 10.0332ZM7.99974 13.1665C6.49974 13.1665 5.13585 12.7443 3.90807 11.8998C2.6803 11.0554 1.69418 9.97762 0.94974 8.6665C0.905295 8.58734 0.871962 8.50597 0.84974 8.4224C0.827517 8.33884 0.816406 8.25308 0.816406 8.16512C0.816406 8.07715 0.827517 7.9917 0.84974 7.90877C0.871962 7.82583 0.905295 7.74507 0.94974 7.6665C1.69418 6.35539 2.6803 5.27762 3.90807 4.43317C5.13585 3.58873 6.49974 3.1665 7.99974 3.1665C9.49974 3.1665 10.8636 3.58873 12.0914 4.43317C13.3192 5.27762 14.3053 6.35539 15.0497 7.6665C15.0942 7.74567 15.1275 7.82704 15.1497 7.9106C15.172 7.99417 15.1831 8.07993 15.1831 8.16789C15.1831 8.25585 15.172 8.3413 15.1497 8.42424C15.1275 8.50718 15.0942 8.58794 15.0497 8.6665C14.3053 9.97762 13.3192 11.0554 12.0914 11.8998C10.8636 12.7443 9.49974 13.1665 7.99974 13.1665ZM7.99692 12.1665C9.34325 12.1665 10.5803 11.8026 11.7081 11.0748C12.8359 10.3471 13.6942 9.37762 14.2831 8.1665C13.6942 6.95539 12.8368 5.98595 11.7109 5.25817C10.585 4.53039 9.34887 4.1665 8.00256 4.1665C6.65623 4.1665 5.41918 4.53039 4.29141 5.25817C3.16363 5.98595 2.29974 6.95539 1.69974 8.1665C2.29974 9.37762 3.16269 10.3471 4.28859 11.0748C5.4145 11.8026 6.65061 12.1665 7.99692 12.1665Z'
                fill='currentColor'
            />
        </svg>
    ),
    'eye-off': (props: SVGProps<SVGSVGElement>) => (
        <svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M10.0008 6.16647C10.323 6.48869 10.5591 6.88592 10.7091 7.35814C10.8591 7.83036 10.8841 8.29981 10.7841 8.76647C10.7841 8.91092 10.7369 9.03036 10.6424 9.1248C10.548 9.21925 10.4286 9.26647 10.2841 9.26647C10.1397 9.26647 10.0202 9.21925 9.92578 9.1248C9.83134 9.03036 9.78411 8.91092 9.78411 8.76647C9.90634 8.38869 9.92023 8.03036 9.82578 7.69147C9.73134 7.35258 9.56189 7.06647 9.31745 6.83314C9.08412 6.58869 8.79523 6.42203 8.45078 6.33314C8.10634 6.24425 7.75078 6.26092 7.38411 6.38314C7.23967 6.38314 7.12023 6.33592 7.02578 6.24147C6.93134 6.14703 6.88411 6.02758 6.88411 5.88314C6.88411 5.73869 6.93134 5.61925 7.02578 5.5248C7.12023 5.43036 7.23967 5.38314 7.38411 5.38314C7.85078 5.28314 8.323 5.30814 8.80078 5.45814C9.27856 5.60814 9.67856 5.84425 10.0008 6.16647ZM8.16745 4.16647C7.81189 4.16647 7.45634 4.18314 7.10078 4.21647C6.74523 4.2498 6.39523 4.32203 6.05078 4.43314C5.91745 4.47758 5.78411 4.47203 5.65078 4.41647C5.51745 4.36092 5.423 4.27203 5.36745 4.1498C5.31189 4.02758 5.31189 3.90258 5.36745 3.7748C5.423 3.64703 5.51189 3.56092 5.63411 3.51647C6.023 3.39425 6.423 3.30536 6.83412 3.2498C7.24523 3.19425 7.66189 3.16647 8.08412 3.16647C9.60634 3.16647 10.9924 3.58592 12.2424 4.4248C13.4924 5.26369 14.4508 6.36647 15.1174 7.73314C15.1508 7.79981 15.1786 7.86925 15.2008 7.94147C15.223 8.01369 15.2341 8.08869 15.2341 8.16647C15.2341 8.24425 15.2258 8.31925 15.2091 8.39147C15.1924 8.46369 15.1674 8.53314 15.1341 8.5998C14.8786 9.14425 14.573 9.64703 14.2174 10.1081C13.8619 10.5692 13.4508 10.9942 12.9841 11.3831C12.8841 11.472 12.773 11.5026 12.6508 11.4748C12.5286 11.447 12.4286 11.3831 12.3508 11.2831C12.273 11.1831 12.2424 11.072 12.2591 10.9498C12.2758 10.8276 12.3341 10.722 12.4341 10.6331C12.8341 10.2998 13.1952 9.93036 13.5174 9.52481C13.8397 9.11925 14.0952 8.66647 14.2841 8.16647C13.7397 6.95536 12.9174 5.98592 11.8174 5.25814C10.7174 4.53036 9.50078 4.16647 8.16745 4.16647ZM8.00078 13.1665C6.48967 13.1665 5.11467 12.7442 3.87578 11.8998C2.63689 11.0554 1.65078 9.96647 0.917448 8.63314C0.873003 8.55536 0.842448 8.48036 0.825781 8.40814C0.809115 8.33592 0.800781 8.25536 0.800781 8.16647C0.800781 8.07758 0.811892 7.99703 0.834115 7.92481C0.856337 7.85258 0.884115 7.77758 0.917448 7.6998C1.18411 7.16647 1.49245 6.66369 1.84245 6.19147C2.19245 5.71925 2.58967 5.28869 3.03411 4.8998L1.28411 3.1498C1.18411 3.0498 1.13689 2.93314 1.14245 2.7998C1.148 2.66647 1.19523 2.5498 1.28411 2.4498C1.38411 2.3498 1.50356 2.2998 1.64245 2.2998C1.78134 2.2998 1.90078 2.3498 2.00078 2.4498L13.9341 14.3831C14.023 14.472 14.0674 14.5804 14.0674 14.7081C14.0674 14.8359 14.023 14.9498 13.9341 15.0498C13.8452 15.1609 13.7313 15.2165 13.5924 15.2165C13.4536 15.2165 13.3341 15.1665 13.2341 15.0665L10.8008 12.6831C10.3452 12.8498 9.88412 12.972 9.41745 13.0498C8.95078 13.1276 8.47856 13.1665 8.00078 13.1665ZM3.71745 5.5998C3.26189 5.92203 2.86189 6.2998 2.51745 6.73314C2.173 7.16647 1.90078 7.64425 1.70078 8.16647C2.27856 9.41092 3.148 10.3887 4.30911 11.0998C5.47023 11.8109 6.74523 12.1665 8.13411 12.1665C8.45634 12.1665 8.77856 12.1581 9.10078 12.1415C9.423 12.1248 9.72856 12.0442 10.0174 11.8998L8.95078 10.8331C8.79523 10.8998 8.63689 10.9442 8.47578 10.9665C8.31467 10.9887 8.15634 10.9998 8.00078 10.9998C7.21189 10.9998 6.54245 10.7248 5.99245 10.1748C5.44245 9.6248 5.16745 8.95536 5.16745 8.16647C5.16745 8.01092 5.18134 7.85258 5.20912 7.69147C5.23689 7.53036 5.27856 7.37203 5.33412 7.21647L3.71745 5.5998Z'
                fill='currentColor'
            />
        </svg>
    ),
    success: (props: SVGProps<SVGSVGElement>) => (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M7.01683 9.51671L5.3835 7.88337C5.2835 7.78337 5.16127 7.73337 5.01683 7.73337C4.87238 7.73337 4.74461 7.78893 4.6335 7.90004C4.5335 8.00004 4.4835 8.12226 4.4835 8.26671C4.4835 8.41115 4.5335 8.53337 4.6335 8.63337L6.66683 10.6834C6.76683 10.7834 6.8835 10.8334 7.01683 10.8334C7.15016 10.8334 7.26683 10.7834 7.36683 10.6834L11.3502 6.70004C11.4613 6.58893 11.5168 6.46115 11.5168 6.31671C11.5168 6.17226 11.4613 6.04448 11.3502 5.93337C11.2391 5.83337 11.1085 5.78615 10.9585 5.79171C10.8085 5.79726 10.6835 5.85004 10.5835 5.95004L7.01683 9.51671ZM8.00016 14.6667C7.08905 14.6667 6.22794 14.4917 5.41683 14.1417C4.60572 13.7917 3.89738 13.3139 3.29183 12.7084C2.68627 12.1028 2.2085 11.3945 1.8585 10.5834C1.5085 9.77226 1.3335 8.91115 1.3335 8.00004C1.3335 7.07782 1.5085 6.21115 1.8585 5.40004C2.2085 4.58893 2.68627 3.88337 3.29183 3.28337C3.89738 2.68337 4.60572 2.20837 5.41683 1.85837C6.22794 1.50837 7.08905 1.33337 8.00016 1.33337C8.92238 1.33337 9.78905 1.50837 10.6002 1.85837C11.4113 2.20837 12.1168 2.68337 12.7168 3.28337C13.3168 3.88337 13.7918 4.58893 14.1418 5.40004C14.4918 6.21115 14.6668 7.07782 14.6668 8.00004C14.6668 8.91115 14.4918 9.77226 14.1418 10.5834C13.7918 11.3945 13.3168 12.1028 12.7168 12.7084C12.1168 13.3139 11.4113 13.7917 10.6002 14.1417C9.78905 14.4917 8.92238 14.6667 8.00016 14.6667Z'
                fill='currentColor'
            />
        </svg>
    ),
    error: (props: SVGProps<SVGSVGElement>) => (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
            <path d='M7.9498 14.6C11.6225 14.6 14.5998 11.6227 14.5998 7.95005C14.5998 4.27736 11.6225 1.30005 7.9498 1.30005C4.27711 1.30005 1.2998 4.27736 1.2998 7.95005C1.2998 11.6227 4.27711 14.6 7.9498 14.6Z' fill='currentColor' />
            <path d='M5.55566 5.55615L7.94966 7.95015L10.3437 10.3442' stroke='white' strokeWidth='2' strokeMiterlimit='10' strokeLinecap='round' />
            <path d='M5.55566 10.3442L7.94966 7.95015L10.3437 5.55615' stroke='white' strokeWidth='2' strokeMiterlimit='10' strokeLinecap='round' />
        </svg>
    ),
    close: (props: SVGProps<SVGSVGElement>) => (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.52851 3.52858C3.78886 3.26823 4.21097 3.26823 4.47132 3.52858L7.99992 7.05717L11.5285 3.52858C11.7889 3.26823 12.211 3.26823 12.4713 3.52858C12.7317 3.78892 12.7317 4.21103 12.4713 4.47138L8.94273 7.99998L12.4713 11.5286C12.7317 11.7889 12.7317 12.211 12.4713 12.4714C12.211 12.7317 11.7889 12.7317 11.5285 12.4714L7.99992 8.94279L4.47132 12.4714C4.21097 12.7317 3.78886 12.7317 3.52851 12.4714C3.26816 12.211 3.26816 11.7889 3.52851 11.5286L7.05711 7.99998L3.52851 4.47138C3.26816 4.21103 3.26816 3.78892 3.52851 3.52858Z'
                fill='currentColor'
            />
        </svg>
    ),
    message: (props: SVGProps<SVGSVGElement>) => (
        <svg width='800px' height='800px' viewBox='0 0 24 24' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M4.99951 16.55V19.9C4.99922 20.3102 5.11905 20.7114 5.34418 21.0542C5.56931 21.397 5.88994 21.6665 6.26642 21.8292C6.6429 21.9919 7.05875 22.0408 7.46271 21.9698C7.86666 21.8989 8.24103 21.7113 8.53955 21.4301L11.1495 18.9701H12.0195C17.5395 18.9701 22.0195 15.1701 22.0195 10.4701C22.0195 5.77009 17.5395 1.97009 12.0195 1.97009C6.49953 1.97009 2.01953 5.78009 2.01953 10.4701C2.042 11.6389 2.32261 12.7882 2.84125 13.8358C3.35989 14.8835 4.10373 15.8035 5.01953 16.53L4.99951 16.55Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path d='M17 9.5H7' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M13 12.5H7' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    ),
    settings: (props: SVGProps<SVGSVGElement>) => (
        <svg width='800px' height='800px' viewBox='0 0 24 24' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 8.25C9.92894 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92894 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z'
                fill='currentColor'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.9747 1.25C11.5303 1.24999 11.1592 1.24999 10.8546 1.27077C10.5375 1.29241 10.238 1.33905 9.94761 1.45933C9.27379 1.73844 8.73843 2.27379 8.45932 2.94762C8.31402 3.29842 8.27467 3.66812 8.25964 4.06996C8.24756 4.39299 8.08454 4.66251 7.84395 4.80141C7.60337 4.94031 7.28845 4.94673 7.00266 4.79568C6.64714 4.60777 6.30729 4.45699 5.93083 4.40743C5.20773 4.31223 4.47642 4.50819 3.89779 4.95219C3.64843 5.14353 3.45827 5.3796 3.28099 5.6434C3.11068 5.89681 2.92517 6.21815 2.70294 6.60307L2.67769 6.64681C2.45545 7.03172 2.26993 7.35304 2.13562 7.62723C1.99581 7.91267 1.88644 8.19539 1.84541 8.50701C1.75021 9.23012 1.94617 9.96142 2.39016 10.5401C2.62128 10.8412 2.92173 11.0602 3.26217 11.2741C3.53595 11.4461 3.68788 11.7221 3.68786 12C3.68785 12.2778 3.53592 12.5538 3.26217 12.7258C2.92169 12.9397 2.62121 13.1587 2.39007 13.4599C1.94607 14.0385 1.75012 14.7698 1.84531 15.4929C1.88634 15.8045 1.99571 16.0873 2.13552 16.3727C2.26983 16.6469 2.45535 16.9682 2.67758 17.3531L2.70284 17.3969C2.92507 17.7818 3.11058 18.1031 3.28089 18.3565C3.45817 18.6203 3.64833 18.8564 3.89769 19.0477C4.47632 19.4917 5.20763 19.6877 5.93073 19.5925C6.30717 19.5429 6.647 19.3922 7.0025 19.2043C7.28833 19.0532 7.60329 19.0596 7.8439 19.1986C8.08452 19.3375 8.24756 19.607 8.25964 19.9301C8.27467 20.3319 8.31403 20.7016 8.45932 21.0524C8.73843 21.7262 9.27379 22.2616 9.94761 22.5407C10.238 22.661 10.5375 22.7076 10.8546 22.7292C11.1592 22.75 11.5303 22.75 11.9747 22.75H12.0252C12.4697 22.75 12.8407 22.75 13.1454 22.7292C13.4625 22.7076 13.762 22.661 14.0524 22.5407C14.7262 22.2616 15.2616 21.7262 15.5407 21.0524C15.686 20.7016 15.7253 20.3319 15.7403 19.93C15.7524 19.607 15.9154 19.3375 16.156 19.1985C16.3966 19.0596 16.7116 19.0532 16.9974 19.2042C17.3529 19.3921 17.6927 19.5429 18.0692 19.5924C18.7923 19.6876 19.5236 19.4917 20.1022 19.0477C20.3516 18.8563 20.5417 18.6203 20.719 18.3565C20.8893 18.1031 21.0748 17.7818 21.297 17.3969L21.3223 17.3531C21.5445 16.9682 21.7301 16.6468 21.8644 16.3726C22.0042 16.0872 22.1135 15.8045 22.1546 15.4929C22.2498 14.7697 22.0538 14.0384 21.6098 13.4598C21.3787 13.1586 21.0782 12.9397 20.7378 12.7258C20.464 12.5538 20.3121 12.2778 20.3121 11.9999C20.3121 11.7221 20.464 11.4462 20.7377 11.2742C21.0783 11.0603 21.3788 10.8414 21.6099 10.5401C22.0539 9.96149 22.2499 9.23019 22.1547 8.50708C22.1136 8.19546 22.0043 7.91274 21.8645 7.6273C21.7302 7.35313 21.5447 7.03183 21.3224 6.64695L21.2972 6.60318C21.0749 6.21825 20.8894 5.89688 20.7191 5.64347C20.5418 5.37967 20.3517 5.1436 20.1023 4.95225C19.5237 4.50826 18.7924 4.3123 18.0692 4.4075C17.6928 4.45706 17.353 4.60782 16.9975 4.79572C16.7117 4.94679 16.3967 4.94036 16.1561 4.80144C15.9155 4.66253 15.7524 4.39297 15.7403 4.06991C15.7253 3.66808 15.686 3.2984 15.5407 2.94762C15.2616 2.27379 14.7262 1.73844 14.0524 1.45933C13.762 1.33905 13.4625 1.29241 13.1454 1.27077C12.8407 1.24999 12.4697 1.24999 12.0252 1.25H11.9747ZM10.5216 2.84515C10.5988 2.81319 10.716 2.78372 10.9567 2.76729C11.2042 2.75041 11.5238 2.75 12 2.75C12.4762 2.75 12.7958 2.75041 13.0432 2.76729C13.284 2.78372 13.4012 2.81319 13.4783 2.84515C13.7846 2.97202 14.028 3.21536 14.1548 3.52165C14.1949 3.61826 14.228 3.76887 14.2414 4.12597C14.271 4.91835 14.68 5.68129 15.4061 6.10048C16.1321 6.51968 16.9974 6.4924 17.6984 6.12188C18.0143 5.9549 18.1614 5.90832 18.265 5.89467C18.5937 5.8514 18.9261 5.94047 19.1891 6.14228C19.2554 6.19312 19.3395 6.27989 19.4741 6.48016C19.6125 6.68603 19.7726 6.9626 20.0107 7.375C20.2488 7.78741 20.4083 8.06438 20.5174 8.28713C20.6235 8.50382 20.6566 8.62007 20.6675 8.70287C20.7108 9.03155 20.6217 9.36397 20.4199 9.62698C20.3562 9.70995 20.2424 9.81399 19.9397 10.0041C19.2684 10.426 18.8122 11.1616 18.8121 11.9999C18.8121 12.8383 19.2683 13.574 19.9397 13.9959C20.2423 14.186 20.3561 14.29 20.4198 14.373C20.6216 14.636 20.7107 14.9684 20.6674 15.2971C20.6565 15.3799 20.6234 15.4961 20.5173 15.7128C20.4082 15.9355 20.2487 16.2125 20.0106 16.6249C19.7725 17.0373 19.6124 17.3139 19.474 17.5198C19.3394 17.72 19.2553 17.8068 19.189 17.8576C18.926 18.0595 18.5936 18.1485 18.2649 18.1053C18.1613 18.0916 18.0142 18.045 17.6983 17.8781C16.9973 17.5075 16.132 17.4803 15.4059 17.8995C14.68 18.3187 14.271 19.0816 14.2414 19.874C14.228 20.2311 14.1949 20.3817 14.1548 20.4784C14.028 20.7846 13.7846 21.028 13.4783 21.1549C13.4012 21.1868 13.284 21.2163 13.0432 21.2327C12.7958 21.2496 12.4762 21.25 12 21.25C11.5238 21.25 11.2042 21.2496 10.9567 21.2327C10.716 21.2163 10.5988 21.1868 10.5216 21.1549C10.2154 21.028 9.97201 20.7846 9.84514 20.4784C9.80512 20.3817 9.77195 20.2311 9.75859 19.874C9.72896 19.0817 9.31997 18.3187 8.5939 17.8995C7.86784 17.4803 7.00262 17.5076 6.30158 17.8781C5.98565 18.0451 5.83863 18.0917 5.73495 18.1053C5.40626 18.1486 5.07385 18.0595 4.81084 17.8577C4.74458 17.8069 4.66045 17.7201 4.52586 17.5198C4.38751 17.314 4.22736 17.0374 3.98926 16.625C3.75115 16.2126 3.59171 15.9356 3.4826 15.7129C3.37646 15.4962 3.34338 15.3799 3.33248 15.2971C3.28921 14.9684 3.37828 14.636 3.5801 14.373C3.64376 14.2901 3.75761 14.186 4.0602 13.9959C4.73158 13.5741 5.18782 12.8384 5.18786 12.0001C5.18791 11.1616 4.73165 10.4259 4.06021 10.004C3.75769 9.81389 3.64385 9.70987 3.58019 9.62691C3.37838 9.3639 3.28931 9.03149 3.33258 8.7028C3.34348 8.62001 3.37656 8.50375 3.4827 8.28707C3.59181 8.06431 3.75125 7.78734 3.98935 7.37493C4.22746 6.96253 4.3876 6.68596 4.52596 6.48009C4.66055 6.27983 4.74468 6.19305 4.81093 6.14222C5.07395 5.9404 5.40636 5.85133 5.73504 5.8946C5.83873 5.90825 5.98576 5.95483 6.30173 6.12184C7.00273 6.49235 7.86791 6.51962 8.59394 6.10045C9.31998 5.68128 9.72896 4.91837 9.75859 4.12602C9.77195 3.76889 9.80512 3.61827 9.84514 3.52165C9.97201 3.21536 10.2154 2.97202 10.5216 2.84515Z'
                fill='currentColor'
            />
        </svg>
    ),
    logout: (props: SVGProps<SVGSVGElement>) => (
        <svg width='800px' height='800px' viewBox='0 0 24 24' version='1.1' {...props} xmlns='http://www.w3.org/2000/svg'>
            <g id='页面-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <g id='System' transform='translate(-672.000000, -96.000000)' fillRule='nonzero'>
                    <g id='entrance_line' transform='translate(672.000000, 96.000000)'>
                        <path
                            d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z'
                            id='MingCute'
                            fillRule='nonzero'
                        ></path>
                        <path
                            d='M12,3 C12.5523,3 13,3.44772 13,4 C13,4.51283143 12.613973,4.93550653 12.1166239,4.9932722 L12,5 L7,5 C6.48716857,5 6.06449347,5.38604429 6.0067278,5.88337975 L6,6 L6,18 C6,18.51285 6.38604429,18.9355092 6.88337975,18.9932725 L7,19 L11.5,19 C12.0523,19 12.5,19.4477 12.5,20 C12.5,20.51285 12.113973,20.9355092 11.6166239,20.9932725 L11.5,21 L7,21 C5.40232321,21 4.09633941,19.7511226 4.00509271,18.1762773 L4,18 L4,6 C4,4.40232321 5.24892392,3.09633941 6.82372764,3.00509271 L7,3 L12,3 Z M17.707,8.46447 L20.5355,11.2929 C20.926,11.6834 20.926,12.3166 20.5355,12.7071 L17.707,15.5355 C17.3165,15.9261 16.6834,15.9261 16.2928,15.5355 C15.9023,15.145 15.9023,14.5118 16.2928,14.1213 L17.4142,13 L12,13 C11.4477,13 11,12.5523 11,12 C11,11.4477 11.4477,11 12,11 L17.4142,11 L16.2928,9.87868 C15.9023,9.48816 15.9023,8.85499 16.2928,8.46447 C16.6834,8.07394 17.3165,8.07394 17.707,8.46447 Z'
                            id='形状'
                            fill='currentColor'
                        ></path>
                    </g>
                </g>
            </g>
        </svg>
    ),
    search: (props: SVGProps<SVGSVGElement>) => (
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none' {...props}>
            <path
                d='M5.71027 10.4179C4.39495 10.4179 3.28108 9.96183 2.36865 9.04966C1.45622 8.13748 1 7.02391 1 5.70896C1 4.394 1.45622 3.28043 2.36865 2.36825C3.28108 1.45608 4.39495 1 5.71027 1C7.02559 1 8.13946 1.45608 9.0519 2.36825C9.96433 3.28043 10.4206 4.394 10.4206 5.70896C10.4206 6.25883 10.3282 6.78402 10.1436 7.28454C9.95889 7.78505 9.71251 8.22041 9.40442 8.59061L13.8363 13.0212C13.9429 13.1278 13.9975 13.2618 13.9999 13.4233C14.0024 13.5847 13.9478 13.7211 13.8363 13.8327C13.7247 13.9442 13.5894 14 13.4304 14C13.2714 14 13.1362 13.9442 13.0246 13.8327L8.59272 9.40208C8.2076 9.71996 7.76472 9.96873 7.26406 10.1484C6.76341 10.3281 6.24548 10.4179 5.71027 10.4179ZM5.71027 9.26292C6.70269 9.26292 7.54329 8.91863 8.23206 8.23005C8.92083 7.54147 9.26522 6.70111 9.26522 5.70896C9.26522 4.71681 8.92083 3.87645 8.23206 3.18787C7.54329 2.49929 6.70269 2.15499 5.71027 2.15499C4.71784 2.15499 3.87724 2.49929 3.18847 3.18787C2.49972 3.87645 2.15534 4.71681 2.15534 5.70896C2.15534 6.70111 2.49972 7.54147 3.18847 8.23005C3.87724 8.91863 4.71784 9.26292 5.71027 9.26292Z'
                fill='currentColor'
            />
        </svg>
    ),
    check: (props: SVGProps<SVGSVGElement>) => (
        <svg width='12' height='12' viewBox='0 0 12 12' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
            <path d='M5 7.586L9.596 2.9895L10.3035 3.6965L5 9L1.818 5.818L2.525 5.111L5 7.586Z' fill='currentColor' />
        </svg>
    ),
    doubleCheck: (props: SVGProps<SVGSVGElement>) => (
        <svg width='12' height='12' viewBox='0 0 12 12' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M5.801 6.88L6.507 7.586L10.74 3.353L11.447 4.06L6.507 9L3.325 5.818L4.032 5.111L5.0945 6.1735L5.801 6.8795V6.88ZM5.802 5.466L8.278 2.9895L8.983 3.6945L6.507 6.171L5.802 5.466ZM4.3885 8.2935L3.682 9L0.5 5.818L1.207 5.111L1.9135 5.8175L1.913 5.818L4.3885 8.2935Z'
                fill='currentColor'
            />
        </svg>
    ),
    smile: (props: SVGProps<SVGSVGElement>) => (
        <svg width='800px' height='800px' viewBox='0 0 1024 1024' fill='currentColor' {...props} xmlns='http://www.w3.org/2000/svg'>
            <path d='M249.6 367.2c0 36 29.6 65.6 65.6 65.6s65.6-29.6 65.6-65.6-29.6-65.6-65.6-65.6-65.6 29.6-65.6 65.6zM512 790.4c214.4 0 259.2-194.4 259.2-194.4H252.8S297.6 790.4 512 790.4z' fill='' />
            <path d='M512 1010.4c-274.4 0-497.6-224-497.6-498.4S237.6 14.4 512 14.4s498.4 223.2 498.4 498.4-224 497.6-498.4 497.6zM512 68C267.2 68 68 267.2 68 512s199.2 444 444 444 444-199.2 444-444S756.8 68 512 68z' fill='' />
            <path d='M643.2 367.2c0 36 29.6 65.6 65.6 65.6 36 0 65.6-29.6 65.6-65.6s-29.6-65.6-65.6-65.6c-36 0-65.6 29.6-65.6 65.6z' fill='' />
        </svg>
    ),
    attach: (props: SVGProps<SVGSVGElement>) => (
        <svg width='800px' height='800px' viewBox='0 0 15 15' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.31802 0.974872C7.94222 0.350671 8.78882 0 9.67157 0C11.5098 0 13 1.49019 13 3.32843C13 4.21118 12.6493 5.05778 12.0251 5.68198L6.26777 11.4393C5.90878 11.7983 5.42189 12 4.91421 12C3.85702 12 3 11.143 3 10.0858C3 9.5781 3.20168 9.09122 3.56066 8.73223L9.14645 3.14645L9.85355 3.85355L4.26777 9.43934C4.09632 9.61079 4 9.84332 4 10.0858C4 10.5907 4.40931 11 4.91421 11C5.15668 11 5.38921 10.9037 5.56066 10.7322L11.318 4.97487C11.7547 4.53821 12 3.94596 12 3.32843C12 2.04247 10.9575 1 9.67157 1C9.05404 1 8.46179 1.24531 8.02513 1.68198L2.09619 7.61091C1.39431 8.31279 1 9.26475 1 10.2574C1 12.3244 2.67564 14 4.74264 14C5.73525 14 6.6872 13.6057 7.38909 12.9038L13.1464 7.14645L13.8536 7.85355L8.09619 13.6109C7.20678 14.5003 6.00047 15 4.74264 15C2.12335 15 0 12.8766 0 10.2574C0 8.99953 0.49967 7.79322 1.38909 6.90381L7.31802 0.974872Z'
                fill='currentColor'
            />
        </svg>
    ),
    send: (props: SVGProps<SVGSVGElement>) => (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M14.0406 8.74009L2.54241 13.9344C2.29423 14.0407 2.05845 14.0178 1.83508 13.8656C1.61169 13.7134 1.5 13.4924 1.5 13.2027V2.79726C1.5 2.50755 1.61169 2.28659 1.83508 2.13438C2.05845 1.98218 2.29423 1.95927 2.54241 2.06564L14.0406 7.25991C14.3469 7.40476 14.5 7.65145 14.5 8C14.5 8.34855 14.3469 8.59524 14.0406 8.74009ZM2.73567 12.4135L12.4976 8L2.73567 3.58654V6.84573L7.20312 8L2.73567 9.15427V12.4135Z'
                fill='currentColor'
            />
        </svg>
    ),
    users: (props: SVGProps<SVGSVGElement>) => (
        <svg width='800px' height='800px' viewBox='0 0 24 24' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M3 19H1V18C1 16.1362 2.27477 14.5701 4 14.126M6 10.8293C4.83481 10.4175 4 9.30621 4 7.99999C4 6.69378 4.83481 5.58254 6 5.1707M21 19H23V18C23 16.1362 21.7252 14.5701 20 14.126M18 5.1707C19.1652 5.58254 20 6.69378 20 7.99999C20 9.30621 19.1652 10.4175 18 10.8293M10 14H14C16.2091 14 18 15.7909 18 18V19H6V18C6 15.7909 7.79086 14 10 14ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    ),
    'arrow-back': (props: SVGProps<SVGSVGElement>) => (
        <svg width='16' height='16' viewBox='0 0 24 24' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
            <path d='M11 6L5 12M5 12L11 18M5 12H19' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
        </svg>
    ),
    burger: (props: SVGProps<SVGSVGElement>) => (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
            <path d='M5 12H20' stroke='currentColor' stroke-width='2' stroke-linecap='round' />
            <path d='M5 17H20' stroke='currentColor' stroke-width='2' stroke-linecap='round' />
            <path d='M5 7H20' stroke='currentColor' stroke-width='2' stroke-linecap='round' />
        </svg>
    )
} as const
export type IconsType = keyof typeof icons

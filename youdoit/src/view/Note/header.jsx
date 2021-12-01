import React from "react";
import{Container,Row, Col, Badge, Image,Dropdown} from 'react-bootstrap';
// import {mainMenu} from "menu/mainMenu";
const  mainMenu=[
    {
        title: "Tasks",
        icon: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_260:238)">
        <path d="M25.6535 2.89744V29.3964C25.6535 29.7296 25.3831 30.0001 25.0499 30.0001H4.94932C4.61613 30.0001 4.3457 29.7296 4.3457 29.3964V2.89744C4.3457 2.56425 4.61613 2.29382 4.94932 2.29382H25.0499C25.3831 2.29382 25.6535 2.56425 25.6535 2.89744Z" fill="#193651"/>
        <path d="M5.31152 5.27263V28.6068C5.31152 28.8429 5.50287 29.0343 5.73895 29.0343H17.9186C18.0787 29.0343 18.2323 28.9706 18.3455 28.8575L22.9976 24.2053V4.94976H6.5143L6.41253 4.21509L5.58013 4.77054C5.41227 4.88251 5.31152 5.0709 5.31152 5.27263Z" fill="#2ED06A"/>
        <path d="M23.8424 4.70836V23.3603L20.2206 24.6882L19.0134 28.1892H6.75987C6.42649 28.1892 6.15625 27.919 6.15625 27.5856V4.70836C6.15625 4.37498 6.42649 4.10474 6.75987 4.10474H23.2387C23.5721 4.10474 23.8424 4.37498 23.8424 4.70836Z" fill="#F5F5F5"/>
        <path d="M23.8426 23.3601L19.0137 28.1891V23.9637C19.0137 23.6303 19.2839 23.3601 19.6173 23.3601H23.8426Z" fill="#E6E6E6"/>
        <path d="M21.0745 4.10474V5.27757C21.0745 6.10936 20.3972 6.78663 19.5655 6.78663H10.4339C9.60207 6.78663 8.9248 6.10936 8.9248 5.27757V4.10474H21.0745Z" fill="#E6E6E6"/>
        <path d="M8.9248 2.29382H21.0745V4.10469H8.9248V2.29382Z" fill="#FAA515"/>
        <path d="M20.1687 2.29248V5.27721C20.1687 5.61059 19.8984 5.88084 19.565 5.88084H10.4337C10.1003 5.88084 9.83008 5.61059 9.83008 5.27721V2.29248L13.1806 2.29254C13.1361 2.10114 13.1209 1.89844 13.1402 1.68947C13.2236 0.787354 13.9631 0.0669313 14.8669 0.00457722C15.9581 -0.0706944 16.8667 0.792243 16.8667 1.86735C16.8667 2.01361 16.8498 2.15601 16.818 2.29254L20.1687 2.29248Z" fill="#50758D"/>
        <path d="M10.3757 11.9575C10.2589 11.9575 10.1463 11.9123 10.0619 11.8311L8.5325 10.3606C8.35226 10.1873 8.34664 9.90066 8.51994 9.72048C8.69324 9.5403 8.9799 9.53468 9.16002 9.70792L10.3485 10.8508L12.2123 8.73501C12.3775 8.54746 12.6636 8.52923 12.8513 8.69456C13.0388 8.85984 13.057 9.14595 12.8917 9.33356L10.7153 11.8041C10.6336 11.8968 10.5177 11.9521 10.3944 11.9571C10.3882 11.9574 10.3819 11.9575 10.3757 11.9575Z" fill="#5ED297"/>
        <path d="M20.7642 10.7223H14.3658C14.1157 10.7223 13.9131 10.5197 13.9131 10.2696C13.9131 10.0195 14.1157 9.81689 14.3658 9.81689H20.7642C21.0143 9.81689 21.2169 10.0195 21.2169 10.2696C21.2169 10.5197 21.0143 10.7223 20.7642 10.7223Z" fill="#50758D"/>
        <path d="M10.3757 17.2834C10.2589 17.2834 10.1463 17.2383 10.0619 17.1571L8.5325 15.6865C8.35226 15.5132 8.34664 15.2266 8.51994 15.0464C8.69324 14.8662 8.9799 14.8606 9.16002 15.0339L10.3492 16.1773L12.2162 14.0664C12.3817 13.8791 12.6678 13.8615 12.8552 14.0272C13.0425 14.1928 13.0601 14.479 12.8944 14.6663L10.7148 17.1307C10.633 17.223 10.5172 17.2781 10.3939 17.2831C10.3879 17.2833 10.3817 17.2834 10.3757 17.2834Z" fill="#5ED297"/>
        <path d="M20.7642 16.0262H14.3658C14.1157 16.0262 13.9131 15.8235 13.9131 15.5734C13.9131 15.3234 14.1157 15.1207 14.3658 15.1207H20.7642C21.0143 15.1207 21.2169 15.3234 21.2169 15.5734C21.2169 15.8235 21.0143 16.0262 20.7642 16.0262Z" fill="#50758D"/>
        <path d="M20.7639 21.5271H19.7076C19.4575 21.5271 19.2549 21.3245 19.2549 21.0744C19.2549 20.8243 19.4575 20.6217 19.7076 20.6217H20.7639C21.014 20.6217 21.2166 20.8243 21.2166 21.0744C21.2166 21.3245 21.014 21.5271 20.7639 21.5271Z" fill="#50758D"/>
        <path d="M17.5952 21.5271H14.3658C14.1157 21.5271 13.9131 21.3245 13.9131 21.0744C13.9131 20.8243 14.1157 20.6217 14.3658 20.6217H17.5952C17.8453 20.6217 18.0479 20.8243 18.0479 21.0744C18.0479 21.3245 17.8453 21.5271 17.5952 21.5271Z" fill="#50758D"/>
        <path d="M12.0116 22.9154H9.23494C8.98486 22.9154 8.78223 22.7127 8.78223 22.4627V19.686C8.78223 19.4359 8.98486 19.2333 9.23494 19.2333H12.0116C12.2617 19.2333 12.4643 19.4359 12.4643 19.686V22.4627C12.4643 22.7127 12.2617 22.9154 12.0116 22.9154ZM9.68766 22.0099H11.5589V20.1387H9.68766V22.0099Z" fill="#FD646F"/>
        </g>
        <defs>
        <clipPath id="clip0_260:238">
        <rect width="30" height="30" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        ,
        key: 1,
        // path: menuPaths.TakeTicketPage
    },
    {
        title:"Chats",
        icon:<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.3125 1.5V10.75C17.3125 11.5625 16.625 12.25 15.8125 12.25H7.875L1.99998 15.3125V12.25H1.5C0.687481 12.25 0 11.5625 0 10.75V1.5C0 0.687481 0.687481 0 1.5 0H15.875C16.6875 0 17.3125 0.687481 17.3125 1.5Z" fill="#193651"/>
        <path d="M4.06248 7.74996C4.95993 7.74996 5.68746 7.02243 5.68746 6.12498C5.68746 5.22753 4.95993 4.5 4.06248 4.5C3.16503 4.5 2.4375 5.22753 2.4375 6.12498C2.4375 7.02243 3.16503 7.74996 4.06248 7.74996Z" fill="white"/>
        <path d="M8.68748 7.74996C9.58493 7.74996 10.3125 7.02243 10.3125 6.12498C10.3125 5.22753 9.58493 4.5 8.68748 4.5C7.79003 4.5 7.0625 5.22753 7.0625 6.12498C7.0625 7.02243 7.79003 7.74996 8.68748 7.74996Z" fill="white"/>
        <path d="M13.3125 7.74996C14.2099 7.74996 14.9375 7.02243 14.9375 6.12498C14.9375 5.22753 14.2099 4.5 13.3125 4.5C12.415 4.5 11.6875 5.22753 11.6875 6.12498C11.6875 7.02243 12.415 7.74996 13.3125 7.74996Z" fill="white"/>
        <path d="M12.6875 5.1875V14.375C12.6875 15.1875 13.375 15.875 14.1875 15.875H22.1875L28.0625 18.9375V15.875H28.5C29.3125 15.875 30 15.1875 30 14.375V5.1875C30 4.37498 29.3125 3.6875 28.5 3.6875H14.125C13.3125 3.6875 12.6875 4.37504 12.6875 5.1875Z" fill="#FBC01A"/>
        <path d="M25.9375 11.4375C26.8349 11.4375 27.5625 10.7099 27.5625 9.81248C27.5625 8.91503 26.8349 8.1875 25.9375 8.1875C25.04 8.1875 24.3125 8.91503 24.3125 9.81248C24.3125 10.7099 25.04 11.4375 25.9375 11.4375Z" fill="white"/>
        <path d="M21.3125 11.4375C22.2099 11.4375 22.9375 10.7099 22.9375 9.81248C22.9375 8.91503 22.2099 8.1875 21.3125 8.1875C20.415 8.1875 19.6875 8.91503 19.6875 9.81248C19.6875 10.7099 20.415 11.4375 21.3125 11.4375Z" fill="white"/>
        <path d="M16.6875 11.4375C17.5849 11.4375 18.3125 10.7099 18.3125 9.81248C18.3125 8.91503 17.5849 8.1875 16.6875 8.1875C15.79 8.1875 15.0625 8.91503 15.0625 9.81248C15.0625 10.7099 15.79 11.4375 16.6875 11.4375Z" fill="white"/>
        <path d="M21.75 16.25V25.5C21.75 26.3125 21.0625 27 20.25 27H15.3125L13.0625 30L10.8125 26.9375H5.9375C5.12498 26.9375 4.4375 26.25 4.4375 25.4375V16.25C4.4375 15.4375 5.12498 14.75 5.9375 14.75H20.3125C21.125 14.75 21.75 15.4375 21.75 16.25Z" fill="#2ED06A"/>
        <path d="M17.6875 22.5C18.5849 22.5 19.3125 21.7724 19.3125 20.875C19.3125 19.9775 18.5849 19.25 17.6875 19.25C16.79 19.25 16.0625 19.9775 16.0625 20.875C16.0625 21.7724 16.79 22.5 17.6875 22.5Z" fill="white"/>
        <path d="M13.125 22.5C14.0224 22.5 14.75 21.7724 14.75 20.875C14.75 19.9775 14.0224 19.25 13.125 19.25C12.2275 19.25 11.5 19.9775 11.5 20.875C11.5 21.7724 12.2275 22.5 13.125 22.5Z" fill="white"/>
        <path d="M8.49998 22.5C9.39743 22.5 10.125 21.7724 10.125 20.875C10.125 19.9775 9.39743 19.25 8.49998 19.25C7.60253 19.25 6.875 19.9775 6.875 20.875C6.875 21.7724 7.60253 22.5 8.49998 22.5Z" fill="white"/>
        </svg>,
        key:2,
        // path: menuPaths.TakeTicketPage
    },
    {
        title:"Permission",
        icon:<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.8516 6.15234V21.2109L21.9727 29.9924L10.5469 30V0H16.6992L17.5928 5.25879L22.8516 6.15234Z" fill="#E1E1E1"/>
        <path d="M22.8516 6.15234V21.2109L21.9727 29.9924L0 30V0H16.6992L17.5928 5.25879L22.8516 6.15234Z" fill="#E7E7E7"/>
        <path d="M22.8516 6.15234L16.6992 0V6.15234H22.8516Z" fill="#CDBFBA"/>
        <path d="M3.51562 10.6641H10.5469V12.4219H3.51562V10.6641Z" fill="#193651"/>
        <path d="M3.51562 14.1797H14.0625V15.9375H3.51562V14.1797Z" fill="#193651"/>
        <path d="M10.5469 14.1797H14.0625V15.9375H10.5469V14.1797Z" fill="#465A61"/>
        <path d="M6.15234 26.4844C4.69846 26.4844 3.51562 25.3015 3.51562 23.8477C3.51562 22.3938 4.69846 21.2109 6.15234 21.2109C7.60623 21.2109 8.78906 22.3938 8.78906 23.8477C8.78906 25.3015 7.60623 26.4844 6.15234 26.4844Z" fill="#FF637B"/>
        <path d="M6.15234 24.7266C6.63775 24.7266 7.03125 24.3331 7.03125 23.8477C7.03125 23.3622 6.63775 22.9688 6.15234 22.9688C5.66694 22.9688 5.27344 23.3622 5.27344 23.8477C5.27344 24.3331 5.66694 24.7266 6.15234 24.7266Z" fill="#E63950"/>
        <path d="M25.7634 19.2398C25.2489 20.5693 24.6091 22.2246 24.6091 25.6055H19.3356C19.3356 22.2334 18.6958 20.5711 18.1819 19.2352C17.7454 18.1008 17.3681 17.1211 17.712 15.7242C18.155 13.9242 19.8273 12.4219 21.9724 12.4219C24.1146 12.4219 25.7892 13.9213 26.2327 15.7242C26.579 17.1316 26.2011 18.1084 25.7634 19.2398Z" fill="#FBC01A"/>
        <path d="M25.7637 19.2398C25.2492 20.5693 24.6094 22.2246 24.6094 25.6055H21.9727V12.4219C24.1148 12.4219 25.7894 13.9213 26.233 15.7242C26.5793 17.1316 26.2014 18.1084 25.7637 19.2398Z" fill="#FDBF00"/>
        <path d="M14.0625 24.7266V28.2422C14.0625 28.7273 14.4563 29.1211 14.9414 29.1211H29.1211C29.6062 29.1211 30 28.7273 30 28.2422V24.7266H14.0625Z" fill="#193651"/>
        <path d="M30 24.7266V28.2422C30 28.7273 29.6062 29.1211 29.1211 29.1211H21.9727V24.7266H30Z" fill="#193651"/>
        <path d="M14.0625 28.2422H30V30H14.0625V28.2422Z" fill="#FF637B"/>
        <path d="M21.9727 28.2422H30V30H21.9727V28.2422Z" fill="#E63950"/>
        </svg>
        ,
        key:3
        
    },
    {
        title:"HR",
        icon:<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.479 5.3313H20.6237C19.384 5.3313 18.3789 6.3363 18.3789 7.57608V9.7413L18.9222 10.0683H22.6946V5.7261L22.479 5.3313Z" fill="#193651"/>
        <path d="M26.5636 20.4132C26.5636 19.1862 25.7549 18.106 24.5776 17.7604L21.2941 16.7964L21.2962 16.093H19.8277L16.6177 17.0351C15.4671 17.3729 14.6768 18.4285 14.6768 19.6276V24.7553H26.5639L26.5636 20.4132Z" fill="#193651"/>
        <path d="M28.0596 17.035L24.8508 16.093H21.0526L21.0498 17.0176L24.2586 17.9596C25.4091 18.2974 26.1993 19.3529 26.1993 20.552V24.7552H30.0003V19.6275C30.0003 18.4284 29.21 17.3728 28.0596 17.035Z" fill="#193651"/>
        <path d="M24.1545 24.7553L22.9755 19.4988H21.6984L20.5195 24.7553H24.1545Z" fill="#DD636E"/>
        <path d="M24.1011 16.7394V13.9056H20.5752V16.7394C20.5752 17.713 22.3381 17.7995 22.3381 17.7995C22.3381 17.7995 24.1011 17.7129 24.1011 16.7394Z" fill="#FFDDCE"/>
        <path d="M22.6177 12.7584C22.6727 12.5172 22.6946 12.2695 22.6946 12.0221V8.267C22.015 8.31264 21.3287 8.22739 20.674 8.01112L20.6727 8.01071C20.2092 7.85755 19.7315 8.20278 19.7315 8.69098V9.06259C19.7315 9.43741 19.4277 9.74128 19.0529 9.74128H18.3789V10.8511C18.3789 11.1347 18.6088 11.3646 18.8924 11.3646C18.9819 11.3646 19.0547 11.4347 19.0604 11.524C19.1523 12.983 20.1961 14.1837 21.5781 14.5112C22.0892 14.0569 22.4604 13.4486 22.6177 12.7584Z" fill="#FFDDCE"/>
        <path d="M25.3229 6.63607H25.2901C25.1081 6.63607 24.9606 6.48858 24.9606 6.30665C24.9606 5.768 24.5239 5.3313 23.9853 5.3313H22.4795V10.0683H25.755L26.2983 9.7413V7.61142C26.2983 7.07277 25.8616 6.63607 25.3229 6.63607Z" fill="#193651"/>
        <path d="M25.6242 9.74137C25.2494 9.74137 24.9455 9.4375 24.9455 9.06268V8.69125C24.9455 8.20299 24.4678 7.85776 24.0042 8.01098C23.5085 8.17481 22.9947 8.26264 22.4794 8.27623V11.9082C22.4794 12.1514 22.4579 12.3948 22.4038 12.632C22.2404 13.3489 21.8422 13.9761 21.2949 14.4296C21.6229 14.5395 21.9737 14.5997 22.3388 14.5997C24.0828 14.5997 25.5086 13.2407 25.6168 11.524C25.6224 11.4347 25.6953 11.3647 25.7847 11.3647C26.0683 11.3647 26.2982 11.1347 26.2982 10.8511V9.74131H25.6242V9.74137Z" fill="#FFCBBE"/>
        <path d="M19.8883 15.9051L19.3862 16.1305C19.0997 16.2592 19.0305 16.6349 19.2524 16.8572L20.6429 18.2499C20.8193 18.4216 21.0969 18.4322 21.2858 18.2744L22.3762 17.3636L20.5172 15.9745C20.3357 15.8388 20.095 15.8123 19.8883 15.9051Z" fill="#365E7D"/>
        <path d="M24.1586 15.983L22.376 17.3634L23.4008 18.2396C23.5885 18.4001 23.8674 18.392 24.0456 18.2209L25.4368 16.8661C25.6642 16.6447 25.5962 16.2636 25.3063 16.1344L24.7945 15.9064C24.5846 15.8129 24.3403 15.8424 24.1586 15.983Z" fill="#365E7D"/>
        <path d="M26.5639 29.3762L26.5634 23.5923H7.13281V29.9715H26.1849C26.3983 29.8575 26.5473 29.6337 26.5639 29.3762Z" fill="#DDB7A0"/>
        <path d="M26.1995 23.5923V29.3111C26.176 29.6758 25.8804 29.9715 25.5156 29.9715H28.7466C29.4387 29.9715 29.9998 29.4104 29.9998 28.7183V23.5923H26.1995Z" fill="#D6A889"/>
        <path d="M9.16426 21.8966V19.1409H5.73535V21.8966C5.73535 22.8435 7.4498 22.9277 7.4498 22.9277C7.4498 22.9277 9.16426 22.8435 9.16426 21.8966Z" fill="#FFDDCE"/>
        <path d="M7.53084 20.0852C8.36568 19.7954 8.92531 19.0085 8.92502 18.1247C8.92484 17.636 8.85348 17.15 8.7132 16.6819C8.48252 15.9123 8.36515 15.1132 8.36492 14.3097V14.3077C8.36433 12.4611 7.29717 10.8649 5.74648 10.0989C4.07076 10.7739 2.88781 12.4147 2.88723 14.332V14.3339C2.88699 15.1149 2.77297 15.8917 2.54867 16.6398C2.41227 17.0948 2.34289 17.5672 2.34277 18.0423C2.34248 18.9013 2.88641 19.6662 3.69793 19.948C4.46352 20.2137 5.25031 20.3958 6.0449 20.4942C6.54641 20.3909 7.04281 20.2547 7.53084 20.0852Z" fill="#C3885D"/>
        <path d="M12.3523 16.6397C12.1281 15.8916 12.014 15.1148 12.0137 14.3339V14.332C12.013 11.8122 9.97012 9.77002 7.45041 9.77002C6.7685 9.77002 6.12209 9.92066 5.54102 10.1888C7.10693 10.9114 8.19443 12.4942 8.19496 14.332V14.3339C8.19519 15.1149 8.30922 15.8917 8.53351 16.6397C8.66992 17.0947 8.7393 17.5671 8.73941 18.0422C8.73971 18.9012 8.19578 19.6662 7.38426 19.9479C6.78086 20.1573 6.16422 20.3147 5.54102 20.4202C7.42809 20.7396 9.37586 20.5822 11.203 19.9479C12.0146 19.6661 12.5585 18.9012 12.5582 18.0422C12.558 17.5672 12.4886 17.0948 12.3523 16.6397Z" fill="#C59471"/>
        <path d="M13.0267 6.33969V1.32857C13.0267 0.107363 11.9637 0.00113281 11.2308 0.000488281H3.40133C2.66785 0.000488281 2.07324 0.595098 2.07324 1.32857V6.33969C2.07324 7.07316 2.66785 7.66777 3.40133 7.66777H11.4403L11.7648 7.65025C12.1609 7.62887 12.5371 7.44301 12.7713 7.12279C12.9319 6.90324 13.0267 6.63254 13.0267 6.33969Z" fill="#CBE2FF"/>
        <path d="M15.0818 0.000488281H11.2314C11.9649 0.000488281 12.5595 0.595098 12.5595 1.32857V6.33969C12.5595 6.97865 12.1082 7.51209 11.507 7.63894C11.4826 7.6441 11.4605 7.6543 11.4409 7.66777H12.6829C12.7342 7.66777 12.7834 7.68816 12.8197 7.72449L14.8077 9.71246C14.9553 9.86006 15.2077 9.75553 15.2077 9.54676V7.82726C15.2077 7.73732 15.2694 7.65752 15.3574 7.63894C15.9586 7.51209 16.41 6.97871 16.41 6.33969V1.32857C16.4099 0.595098 15.8153 0.000488281 15.0818 0.000488281Z" fill="#BED8FB"/>
        <path d="M11.3651 25.4208C11.3651 24.2548 10.7093 23.6917 9.47772 23.4273L8.7818 23.2948C8.28135 23.1995 7.89568 22.8226 7.77416 22.3472C6.97576 22.4838 6.09744 22.1069 5.74002 21.2164L5.73598 21.2064L1.88754 21.9507C0.768633 22.2791 0 23.3057 0 24.4719V28.746C0 29.4391 0.562617 30.0006 1.25572 29.9992L11.0834 29.9791L11.3588 29.7679L11.3651 25.4208Z" fill="#E28086"/>
        <path d="M14.3369 29.9761C14.65 29.9737 14.9025 29.7192 14.9025 29.4061V24.4718C14.9025 23.3057 14.134 22.2791 13.0151 21.9506L9.16516 21.2175C8.85643 21.9852 8.16057 22.3704 7.46289 22.3741C7.53268 22.9216 7.94611 23.3725 8.50035 23.478L9.19627 23.6105C10.4278 23.875 11.0837 24.438 11.0837 25.604V29.9793L14.3369 29.9761Z" fill="#DD636E"/>
        <path d="M23.3999 18.2397L22.3751 17.3635L21.2848 18.2743C21.2145 18.333 21.1319 18.3683 21.0469 18.3808L21.6977 19.4986H22.9748L23.6184 18.3453C23.54 18.3298 23.4645 18.295 23.3999 18.2397Z" fill="#E28086"/>
        </svg>,
        key:4
        
    },
    {
        title:"Account",
        icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6875 4.625C18.6875 3.95844 18.8295 3.32469 19.0817 2.75H4.625V11.1875H8.375C9.6725 11.1875 10.7647 12.072 11.0877 13.2692C11.7003 13.5781 12.125 14.2063 12.125 14.9375V17.0731C12.6828 17.3984 13.0625 17.9966 13.0625 18.6875V19.0456C13.0625 19.7605 12.665 20.4031 12.0261 20.7228L11.1542 21.1588C11.0642 21.7447 10.7909 22.2852 10.3634 22.7122L9.58766 23.4889C9.50609 23.5705 9.41938 23.6445 9.32984 23.7144L11.9919 24.913C12.665 25.2486 13.0625 25.8913 13.0625 26.6061V27.125H14.9375V25.25H15.875V24.3125C15.875 23.2784 16.7159 22.4375 17.75 22.4375H19.625V21.0444C19.625 20.4739 19.4131 19.963 19.0433 19.6423C18.0111 18.7475 17.5559 17.4055 17.8255 16.0512C18.1123 14.6127 19.2683 13.445 20.7013 13.1459C20.9656 13.0906 21.2347 13.0625 21.5 13.0625C22.1834 13.0625 22.8228 13.2491 23.375 13.5697V9.3125C20.7903 9.3125 18.6875 7.20969 18.6875 4.625Z" fill="#EEEEEE"/>
        <path d="M23.375 8.375C25.4461 8.375 27.125 6.69607 27.125 4.625C27.125 2.55393 25.4461 0.875 23.375 0.875C21.3039 0.875 19.625 2.55393 19.625 4.625C19.625 6.69607 21.3039 8.375 23.375 8.375Z" fill="#2ED06A"/>
        <path d="M20.5625 4.625C20.5625 2.71297 21.9945 1.13844 23.8438 0.907344C23.69 0.888125 23.5339 0.875 23.375 0.875C21.3041 0.875 19.625 2.55406 19.625 4.625C19.625 6.69594 21.3041 8.375 23.375 8.375C23.5339 8.375 23.69 8.36188 23.8438 8.34266C21.9945 8.11156 20.5625 6.53703 20.5625 4.625Z" fill="#1EAA96"/>
        <path d="M25.7188 3.6875L22.9062 6.5L21.0312 4.625L21.9688 3.6875L22.9062 4.625L24.7812 2.75L25.7188 3.6875Z" fill="#F0F0F0"/>
        <path d="M19.625 7.42531C19.4108 7.13938 19.2266 6.83047 19.0817 6.5H8.375V7.4375H19.625V7.42531Z" fill="#D2D2D2"/>
        <path d="M8.375 8.375H19.625V9.3125H8.375V8.375Z" fill="#D2D2D2"/>
        <path d="M8.375 10.25H19.625V11.1875H8.375V10.25Z" fill="#D2D2D2"/>
        <path d="M25.25 23.375H22.4375V20.9507C22.4375 20.1491 22.82 19.4188 23.4087 18.875C23.9642 18.3622 24.3125 17.6286 24.3125 16.8125C24.3125 15.0608 22.7113 13.6836 20.893 14.0638C19.8214 14.2879 18.9594 15.1607 18.7452 16.2346C18.5309 17.3104 18.9308 18.305 19.6573 18.9346C20.2602 19.4572 20.5625 20.2471 20.5625 21.0449V23.375H17.75C17.232 23.375 16.8125 23.7946 16.8125 24.3125V26.1875H26.1875V24.3125C26.1875 23.7946 25.768 23.375 25.25 23.375Z" fill="#FBC01A"/>
        <path d="M18.6875 23.375H17.75C17.232 23.375 16.8125 23.7945 16.8125 24.3125V26.1875H17.75V24.3125C17.75 23.7945 18.1695 23.375 18.6875 23.375Z" fill="#DC9600"/>
        <path d="M19.6573 18.9341C20.2601 19.4567 20.5625 20.2466 20.5625 21.0444V23.375H21.5V21.0444C21.5 20.2466 21.1976 19.4567 20.5948 18.9341C19.8687 18.3045 19.4684 17.3103 19.6826 16.2341C19.8964 15.1601 20.7584 14.2873 21.8304 14.0633C21.8773 14.0534 21.9228 14.0497 21.9692 14.0422C21.627 13.9845 21.2651 13.9855 20.8929 14.0633C19.8214 14.2873 18.9594 15.1601 18.7451 16.2341C18.5309 17.3103 18.9312 18.3045 19.6573 18.9341Z" fill="#FBC01A"/>
        <path d="M15.875 26.1875H27.125V27.125H15.875V26.1875Z" fill="#BE7800"/>
        <path d="M22.8073 19.625H20.2109C20.3689 19.9137 20.4706 20.233 20.5222 20.5625H22.4717C22.5238 20.2302 22.6391 19.9152 22.8073 19.625Z" fill="#BE7800"/>
        <path d="M12.125 27.125V26.6061C12.125 26.2508 11.9244 25.9264 11.6066 25.7675L8.375 24.3125L6.5 26.1875L4.625 24.3125L1.39344 25.7675C1.07562 25.9264 0.875 26.2508 0.875 26.6061V27.125H12.125Z" fill="#505050"/>
        <path d="M2.75 26.6061C2.75 26.2508 2.95062 25.9264 3.26844 25.7675L5.20719 24.8947L4.625 24.3125L1.39344 25.7675C1.07562 25.9264 0.875 26.2508 0.875 26.6061V27.125H2.75V26.6061Z" fill="#3C3C3C"/>
        <path d="M4.625 24.3125V22.4375H8.375V24.3125L6.5 26.1875L4.625 24.3125Z" fill="#D2AA82"/>
        <path d="M11.1875 17.75H10.25V14.9375C10.25 14.4195 9.83047 14 9.3125 14H3.6875C3.16953 14 2.75 14.4195 2.75 14.9375V17.75H1.8125C1.29453 17.75 0.875 18.1695 0.875 18.6875V19.0456C0.875 19.4009 1.07562 19.7253 1.39344 19.8842L2.75 20.5625V20.7233C2.75 21.2206 2.94734 21.6973 3.29938 22.0489L4.07609 22.8256C4.42766 23.1772 4.90484 23.375 5.40172 23.375H7.59828C8.09563 23.375 8.57234 23.1777 8.92391 22.8256L9.70062 22.0489C10.0522 21.6973 10.25 21.2202 10.25 20.7233V20.5625L11.6066 19.8842C11.9244 19.7253 12.125 19.4005 12.125 19.0456V18.6875C12.125 18.1695 11.7055 17.75 11.1875 17.75Z" fill="#F0C8A0"/>
        <path d="M11.1875 18.6875C10.152 18.6875 9.3125 17.848 9.3125 16.8125V14H10.25C10.768 14 11.1875 14.4195 11.1875 14.9375V18.6875Z" fill="#193651"/>
        <path d="M19.625 12.125H10.4619C10.7043 12.395 10.8894 12.7138 11.0136 13.0625H19.625V12.125Z" fill="#D2D2D2"/>
        <path d="M18.2543 14.9375C18.4596 14.5841 18.7226 14.2691 19.0282 14H11.8652C12.0279 14.2756 12.1245 14.5944 12.1245 14.9375H18.2543Z" fill="#D2D2D2"/>
        <path d="M17.7575 16.8125C17.758 16.5608 17.7748 16.3067 17.8255 16.0512C17.8377 15.9908 17.8597 15.9345 17.8747 15.875H12.125V16.8125H17.7575Z" fill="#D2D2D2"/>
        <path d="M18.2591 18.6875C18.0875 18.3931 17.9586 18.0791 17.8738 17.75H12.8057C12.9683 18.0252 13.0621 18.3448 13.0621 18.6875H18.2591Z" fill="#D2D2D2"/>
        <path d="M12.2861 20.5625H19.5658C19.481 20.1927 19.3038 19.8687 19.0432 19.6423C19.0371 19.6367 19.0319 19.6306 19.0254 19.625H12.9682C12.8472 20.0005 12.611 20.3286 12.2861 20.5625Z" fill="#D2D2D2"/>
        <path d="M4.625 2.75H6.5V11.1875H4.625V2.75Z" fill="#D2D2D2"/>
        <path d="M8.375 12.125H4.625C3.07156 12.125 1.8125 13.3841 1.8125 14.9375V16.8125C1.8125 17.3305 2.23203 17.75 2.75 17.75H5.10734C6.59938 17.75 8.03 17.1575 9.08469 16.1023L9.70062 15.4864C10.0522 15.1348 10.25 14.6577 10.25 14.1608V14C10.25 12.9645 9.41047 12.125 8.375 12.125Z" fill="#193651"/>
        <path d="M5.5625 18.7911H3.6875C3.55813 18.7911 3.45312 18.6861 3.45312 18.5568C3.45312 18.4274 3.55813 18.3224 3.6875 18.3224H5.5625C5.69187 18.3224 5.79688 18.4274 5.79688 18.5568C5.79688 18.6861 5.69187 18.7911 5.5625 18.7911Z" fill="#BE7800"/>
        <path d="M5.09375 19.4943C5.35263 19.4943 5.5625 19.2844 5.5625 19.0255C5.5625 18.7666 5.35263 18.5568 5.09375 18.5568C4.83487 18.5568 4.625 18.7666 4.625 19.0255C4.625 19.2844 4.83487 19.4943 5.09375 19.4943Z" fill="#BE7800"/>
        <path d="M9.3125 18.7911H7.4375C7.30813 18.7911 7.20312 18.6861 7.20312 18.5568C7.20312 18.4274 7.30813 18.3224 7.4375 18.3224H9.3125C9.44187 18.3224 9.54688 18.4274 9.54688 18.5568C9.54688 18.6861 9.44187 18.7911 9.3125 18.7911Z" fill="#BE7800"/>
        <path d="M7.90625 19.4943C8.16513 19.4943 8.375 19.2844 8.375 19.0255C8.375 18.7666 8.16513 18.5568 7.90625 18.5568C7.64737 18.5568 7.4375 18.7666 7.4375 19.0255C7.4375 19.2844 7.64737 19.4943 7.90625 19.4943Z" fill="#BE7800"/>
        <path d="M6.50012 21.7337C6.19965 21.7337 5.90012 21.6194 5.67137 21.3911L5.39668 21.1169C5.30527 21.0255 5.30527 20.8769 5.39668 20.7855C5.48809 20.6941 5.63668 20.6941 5.72809 20.7855L6.00277 21.0597C6.27652 21.3339 6.72324 21.3339 6.99699 21.0597L7.27168 20.7855C7.36309 20.6941 7.51168 20.6941 7.60309 20.7855C7.69449 20.8769 7.69449 21.0255 7.60309 21.1169L7.3284 21.3911C7.10012 21.6194 6.80012 21.7337 6.50012 21.7337Z" fill="#BE7800"/>
        <path d="M8.375 24.3125L6.5 26.1875L4.625 24.3125V27.125H8.375V24.3125Z" fill="#F0F0F0"/>
        <path d="M6.5 26.1875L5.5625 27.125H7.4375L6.5 26.1875Z" fill="#FA6450"/>
        </svg>,
        key:5
        
    },
    {
        title:"Docs",
        icon:<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_260:174)">
        <path d="M1.875 0.9375H22.5C23.5355 0.9375 24.375 1.77704 24.375 2.8125V28.125C24.375 29.1605 23.5355 30 22.5 30H1.875C0.839539 30 0 29.1605 0 28.125V2.8125C0 1.77704 0.839539 0.9375 1.875 0.9375Z" fill="#FBC01A"/>
        <path d="M1.875 21.9507V2.8125H22.5V28.125H8.04932L1.875 21.9507Z" fill="#EFEFEF"/>
        <path d="M8.04932 21.9507V28.125L1.875 21.9507H8.04932Z" fill="#E76E54"/>
        <path d="M7.5 3.75V0H16.875V3.75C16.875 4.78546 16.0355 5.625 15 5.625H9.375C8.33954 5.625 7.5 4.78546 7.5 3.75Z" fill="#E76E54"/>
        <path opacity="0.95" d="M28.2 23.4001C28.2 27.0451 25.245 30.0001 21.6 30.0001C17.955 30.0001 15 27.0451 15 23.4001C15 19.755 17.955 16.8 21.6 16.8C25.245 16.8 28.2 19.755 28.2 23.4001Z" fill="#193651"/>
        <path d="M20.1697 25.75L18.8057 24.378C18.5309 24.1016 18.5309 23.6537 18.8057 23.3775C19.0804 23.1013 19.526 23.1013 19.8009 23.3775L20.257 23.8353L23.4446 21.1642C23.7432 20.9138 24.1874 20.9544 24.4362 21.2548C24.6854 21.555 24.645 22.0016 24.3462 22.2517L20.1697 25.75Z" fill="white"/>
        <path d="M10.3125 7.5H17.8125C18.3302 7.5 18.75 7.91977 18.75 8.4375C18.75 8.95523 18.3302 9.375 17.8125 9.375H10.3125C9.79477 9.375 9.375 8.95523 9.375 8.4375C9.375 7.91977 9.79477 7.5 10.3125 7.5Z" fill="#77959E"/>
        <path d="M5.625 7.5H7.5V9.375H5.625V7.5Z" fill="#77959E"/>
        <path d="M5.625 11.25H7.5V13.125H5.625V11.25Z" fill="#77959E"/>
        <path d="M5.625 15H7.5V16.875H5.625V15Z" fill="#77959E"/>
        <path d="M5.625 18.75H7.5V20.625H5.625V18.75Z" fill="#77959E"/>
        <path d="M10.3125 11.25H15.9375C16.4552 11.25 16.875 11.6698 16.875 12.1875C16.875 12.7052 16.4552 13.125 15.9375 13.125H10.3125C9.79477 13.125 9.375 12.7052 9.375 12.1875C9.375 11.6698 9.79477 11.25 10.3125 11.25Z" fill="#77959E"/>
        <path d="M10.3125 15H12.1875C12.7052 15 13.125 15.4198 13.125 15.9375C13.125 16.4552 12.7052 16.875 12.1875 16.875H10.3125C9.79477 16.875 9.375 16.4552 9.375 15.9375C9.375 15.4198 9.79477 15 10.3125 15Z" fill="#77959E"/>
        </g>
        <defs>
        <clipPath id="clip0_260:174">
        <rect width="30" height="30" fill="white"/>
        </clipPath>
        </defs>
        </svg>,
        key:6
        
    },
    {
        title:"Anbar WH",
        icon:<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_260:190)">
        <path d="M28.2514 11.9179L24.3467 5.66848L24.1573 5.36543L23.8182 5.25235L15.3145 2.41788L15.0002 2.31311L14.6859 2.41788L6.18223 5.25235L5.84314 5.36543L5.65377 5.66848L1.74902 11.9205V28.2789H28.2514V11.9179Z" fill="#FF6E64"/>
        <path d="M28.2518 26.2402H21.626V28.2789H28.2518V26.2402Z" fill="#193651"/>
        <path d="M8.37481 26.2402H1.74902V28.2789H8.37481V26.2402Z" fill="#193651"/>
        <path d="M21.1158 18.5955H8.88379V27.2597H21.1158V18.5955Z" fill="#193651"/>
        <path d="M20.8217 27.6754L8.58984 19.0111L9.17912 18.1794L21.411 26.8437L20.8217 27.6754Z" fill="#F5DCB4"/>
        <path d="M9.17912 27.6754L21.411 19.0111L20.8217 18.1794L8.58984 26.8437L9.17912 27.6754Z" fill="#F5DCB4"/>
        <path d="M24.1573 5.36543L23.8182 5.25235L15.3145 2.41788L15.0002 2.31311L14.6859 2.41788L6.18223 5.25235L5.84314 5.36543L5.65377 5.66848L1.74902 11.9205V15.7197L7.1666 7.04631L15.0002 4.4352L22.8339 7.04631L28.2514 15.7247V11.9179L24.3467 5.66848L24.1573 5.36543Z" fill="#193651"/>
        <path d="M24.8441 4.4931L15 1.21167L5.15596 4.4931L0.0542655 12.656C-0.0501486 12.823 0.000652168 13.0432 0.167703 13.1476L1.29124 13.8499C1.45835 13.9543 1.67843 13.9035 1.7829 13.7364L6.4963 6.19524L15 3.36077L23.5037 6.19524L28.2171 13.7364C28.3215 13.9035 28.5417 13.9543 28.7088 13.8499L29.8323 13.1476C29.9994 13.0432 30.0502 12.823 29.9457 12.656L24.8441 4.4931Z" fill="#FAEBC8"/>
        <path d="M21.6261 18.0857H8.37488C8.0934 18.0857 7.86523 17.8576 7.86523 17.5761V16.5568C7.86523 16.2753 8.0934 16.0471 8.37488 16.0471H21.6261C21.9076 16.0471 22.1357 16.2753 22.1357 16.5568V17.5761C22.1357 17.8575 21.9076 18.0857 21.6261 18.0857Z" fill="#FAEBC8"/>
        <path d="M18.5677 14.0083H11.4325C11.1508 14.0083 10.9229 13.7801 10.9229 13.4987V7.3827C10.9229 7.10121 11.1508 6.87305 11.4325 6.87305H18.5677C18.8495 6.87305 19.0774 7.10127 19.0774 7.3827V13.4987C19.0774 13.7801 18.8494 14.0083 18.5677 14.0083Z" fill="#FAEBC8"/>
        <path d="M18.0584 7.89258H11.9424V12.9892H18.0584V7.89258Z" fill="#193651"/>
        <path d="M29.2704 28.7886H0.729375C0.447656 28.7886 0.219727 28.5604 0.219727 28.2789C0.219727 27.9975 0.447656 27.7693 0.729375 27.7693H29.2704C29.5521 27.7693 29.78 27.9975 29.78 28.2789C29.78 28.5604 29.5521 28.7886 29.2704 28.7886Z" fill="#FBC01A"/>
        <path d="M24.8441 4.4931L15 1.21167L5.15596 4.4931L0.0542655 12.656C-0.0501486 12.823 0.000652168 13.0432 0.167703 13.1476L1.29124 13.8499C1.45835 13.9543 1.67843 13.9035 1.7829 13.7364L6.4963 6.19524L15 3.36077L23.5037 6.19524L28.2171 13.7364C28.3215 13.9035 28.5417 13.9543 28.7088 13.8499L29.8323 13.1476C29.9994 13.0432 30.0502 12.823 29.9457 12.656L24.8441 4.4931Z" fill="#FBC01A"/>
        <path d="M24.1563 5.36544L23.8172 5.25241L15.3135 2.41793L14.9992 2.31311L14.6849 2.41788L6.18123 5.25235L5.84215 5.36538L5.65271 5.66842L0.75293 13.5138L1.29047 13.8499C1.45758 13.9543 1.67766 13.9035 1.78213 13.7364L6.49553 6.19524L14.9992 3.36071L23.5029 6.19518L28.2163 13.7364C28.3208 13.9035 28.5409 13.9542 28.708 13.8498L29.247 13.5129L24.3457 5.66848L24.1563 5.36544Z" fill="#F5DCB4"/>
        <path d="M7.86426 17.0664V17.5761C7.86426 17.8575 8.09242 18.0857 8.37391 18.0857H21.6251C21.9066 18.0857 22.1348 17.8575 22.1348 17.5761V17.0664H7.86426Z" fill="#F5DCB4"/>
        <path d="M8.375 18.0854V27.769H21.6262V18.0854H8.375ZM20.6069 26.7497H9.39436V19.1047H20.6069V26.7497Z" fill="#FAEBC8"/>
        <path d="M15.5095 7.89258H14.4902V12.9892H15.5095V7.89258Z" fill="#F5DCB4"/>
        </g>
        <defs>
        <clipPath id="clip0_260:190">
        <rect width="30" height="30" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        ,
        key:7
    }
];
const Header=()=>{
    return(
        <div>
        <div className="header">
            <Container fluid>
                <Row>
                    <Col xs={6}>
                        <div className="flex-vertical-start">
                        <Dropdown>
                            <Dropdown.Toggle  id="dropdown-basic" >
                                 <Image src={require('../../assets/img/subMenu.svg').default} className="subMenuImg"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="subMenu">
                                {mainMenu.map(menu=>{
                                    return(
                                    <Dropdown.Item href="#">
                                        {menu.icon}
                                        {console.log(`hi ${menu.title}`)}
                                        <span>{menu.title}</span>
                                    </Dropdown.Item>
                                    )
                                })}
                                {/* <Dropdown.Item href="#/action-1">
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                            </Dropdown.Menu>
                            </Dropdown>

                            <div className="logo">
                                <Image src={require('../../assets/img/logo.svg').default}/>
                                {/* <Image src='../../assets/img/logo.svg'/> */}
                            </div>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="flex-end">
                            <div className="notification relative">
                                <Dropdown>
                                    <Dropdown.Toggle className="btn-transparent" id="dropdown-basic">
                                        <div className="badge-content">
                                            <Badge className="flex-vertical-center">2</Badge>
                                            <div className="btn-transparent">
                                                <svg width="24" height="24" viewBox="0 0 30 30" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0)">
                                                        <path
                                                            d="M16.875 5.225C16.53 5.225 16.25 4.945 16.25 4.6V2.5C16.25 1.81125 15.6887 1.25 15 1.25C14.3112 1.25 13.75 1.81125 13.75 2.5V4.6C13.75 4.945 13.47 5.225 13.125 5.225C12.78 5.225 12.5 4.94625 12.5 4.6V2.5C12.5 1.12125 13.6212 0 15 0C16.3787 0 17.5 1.12125 17.5 2.5V4.6C17.5 4.94625 17.22 5.225 16.875 5.225Z"
                                                            fill="#040647"/>
                                                        <path
                                                            d="M15 30C12.5875 30 10.625 28.0375 10.625 25.625C10.625 25.28 10.905 25 11.25 25C11.595 25 11.875 25.28 11.875 25.625C11.875 27.3475 13.2775 28.75 15 28.75C16.7225 28.75 18.125 27.3475 18.125 25.625C18.125 25.28 18.405 25 18.75 25C19.095 25 19.375 25.28 19.375 25.625C19.375 28.0375 17.4125 30 15 30Z"
                                                            fill="#040647" stroke="#040647" strokeWidth="0.2"/>
                                                        <path
                                                            d="M25.625 26.25H4.375C3.34125 26.25 2.5 25.4088 2.5 24.375C2.5 23.8263 2.73875 23.3075 3.15625 22.95C5.12625 21.285 6.25 18.8625 6.25 16.2975V12.5C6.25 7.675 10.175 3.75 15 3.75C19.825 3.75 23.75 7.675 23.75 12.5V16.2975C23.75 18.8638 24.8738 21.285 26.8338 22.9412C27.2613 23.3075 27.5 23.8263 27.5 24.375C27.5 25.4088 26.66 26.25 25.625 26.25ZM15 5C10.8638 5 7.5 8.36375 7.5 12.5V16.2975C7.5 19.2325 6.215 22.0013 3.97375 23.8963C3.83 24.0188 3.75 24.1925 3.75 24.375C3.75 24.72 4.03 25 4.375 25H25.625C25.97 25 26.25 24.72 26.25 24.375C26.25 24.1925 26.17 24.0188 26.0313 23.9C23.7863 22.0013 22.5 19.2312 22.5 16.2975V12.5C22.5 8.36375 19.1363 5 15 5Z"
                                                            fill="#040647" stroke="#040647" strokeWidth="0.3"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="30" height="30" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                            <div className="img-block">
                                                <Image src={require('../../assets/img/back-img.jpg').default}/>
                                            </div>
                                            <div className="notify-content">
                                                <p className="notify-title">Asa Butterfield</p>
                                                <p className="notify-text">Lorem ipsum dolor sitam consetetur
                                                    sadipscing elitr, sedim atysaj</p>
                                                <span className="date">Jun 02, 2020</span>
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="user-logout">
                                <Dropdown>
                                    <Dropdown.Toggle className="btn-transparent" id="dropdown-basic">
                                        <div className="img-block">
                                            <Image src={require('../../assets/img/back-img.jpg').default}/>
                                        </div>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.3391 2.24601L15.5556 2.24601C16.9179 2.24601 18.0235 3.35563 18.0235 4.71392L18.0235 17.2861C18.0235 18.6484 16.9139 19.754 15.5556 19.754L10.2543 19.754C9.88069 19.754 9.58125 20.0534 9.58125 20.427C9.58125 20.8006 9.88069 21.1 10.2543 21.1L15.5556 21.1C17.661 21.1 19.3695 19.3871 19.3695 17.2861L19.3695 4.71392C19.3695 2.60853 17.6566 0.899999 15.5556 0.899999L10.3391 0.899999C9.96558 0.899999 9.66614 1.19944 9.66614 1.573C9.66614 1.94705 9.97031 2.24601 10.3391 2.24601Z" fill="#193651" stroke="#193651" strokeWidth="0.2"/>
                                                <path d="M0.899201 11.4034L4.54097 15.0451C4.76592 15.2701 5.1267 15.2701 5.35166 15.0451C5.57662 14.8202 5.57662 14.4594 5.35166 14.2345L2.68613 11.5689L14.3118 11.5689C14.6301 11.5689 14.8848 11.3142 14.8848 10.9959C14.8848 10.6776 14.6301 10.4229 14.3118 10.4229L2.68613 10.4229L5.35166 7.75737C5.57662 7.53241 5.57662 7.17163 5.35166 6.94668C5.24131 6.83632 5.09275 6.7769 4.94844 6.7769C4.80412 6.7769 4.65557 6.83208 4.54521 6.94668L0.903445 10.5884C0.674242 10.8176 0.674243 11.1827 0.899201 11.4034Z" fill="#193651"/>
                                            </svg>

                                            Çıxış et
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    )

};
export default Header;
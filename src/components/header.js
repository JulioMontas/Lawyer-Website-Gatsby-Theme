import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <div className={headerStyles.header}>
    <div className="container">
      <div className={headerStyles.wrapper}>

        <div>
          <Link to="/" aria-label="logo">
          <svg className={headerStyles.desktopLogo} width="240" height="43" viewBox="0 0 240 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M114.149 22.7921H114.653C114.995 24.8108 116.437 26.9739 118.689 26.9739C120.041 26.9739 121.374 26.091 121.374 24.6313C121.374 20.5762 114.167 22.9732 114.167 18.1797C114.167 16.0171 116.095 14.7558 118.023 14.7558C119.663 14.7558 120.528 15.8004 120.96 15.8004C121.23 15.8004 121.464 15.1514 121.518 14.9714H122.131V19.1532H121.627C121.158 17.369 120.131 15.3692 118.041 15.3692C116.671 15.3692 115.644 16.1077 115.644 17.549C115.644 20.9907 122.852 19.1348 122.852 23.5678C122.852 26.0726 120.923 27.5862 118.528 27.5862C116.834 27.5862 116.186 26.6494 115.5 26.6494C115.032 26.6494 114.87 27.0272 114.653 27.4784H114.149V22.7921Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M62.3016 26.7577C60.7877 26.7577 60.4455 26.4516 60.4455 25.5142V21.1707H63.3099C65.0761 21.1707 65.8327 22.2881 65.8327 23.9817C65.8327 25.7659 65.0399 26.7577 62.3016 26.7577ZM60.4455 16.4855C60.4455 15.981 60.6077 15.5848 62.0855 15.5848C64.2833 15.5848 65.22 16.3055 65.22 18.1796C65.22 19.5854 64.6433 20.5584 62.2288 20.5584H60.4455V16.4855ZM63.7788 20.7934V20.7562C65.6883 20.7562 67.3099 19.621 67.3099 18.0357C67.3099 16.5577 66.1933 14.9713 62.7694 14.9713H56.95V15.5848C58.3011 15.5848 58.6077 15.9093 58.6077 16.7744L58.6072 27.3706H63.8144C66.8605 27.3706 67.9233 25.1347 67.9233 23.9817C67.9233 22.072 66.4455 20.8829 63.7788 20.7934Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M71.1833 22.4681L72.9855 17.7296L74.8955 22.4681H71.1833ZM77.7788 25.0463L73.8316 14.8997H73.1833L69.5438 24.848C69.1472 25.947 68.7688 26.7577 67.3088 26.7577V27.3706H69.4561L70.2672 25.0919C70.4472 24.5551 70.7333 23.8761 70.9316 23.226H75.1833C75.6699 24.2712 76.1922 25.712 76.1922 26.0909C76.1922 26.6127 76.1205 26.7577 74.7683 26.7577V27.3706H79.7783V26.7577C78.7327 26.7577 78.3188 26.4327 77.7788 25.0463Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M83.2917 20.7023V16.6305C83.2917 15.8909 83.7784 15.5848 85.3278 15.5848C87.4539 15.5848 88.2289 16.6838 88.2289 18.3236C88.2289 20.2161 86.9851 20.7378 85.3634 20.7378C84.5345 20.7378 83.8139 20.7206 83.2917 20.7023ZM90.4445 24.7746C90.4445 25.3697 90.2651 26.2171 89.7778 26.2171C88.2467 26.2171 89.3462 21.8197 85.8684 21.2613V21.2251C87.9762 21.2251 90.1745 20.3417 90.1745 18.0713C90.1745 16.8461 89.2556 14.9713 86.2828 14.9713H79.7778V15.5848C81.1467 15.5848 81.4539 15.9093 81.4539 16.7744V25.5681C81.4539 26.4327 81.1472 26.7577 79.7783 26.7577V27.3706L83.2917 27.3706V21.3513H83.9939C85.9039 21.3513 86.7689 21.748 86.7689 24.6313C86.7689 26.2888 87.4539 27.4784 88.805 27.4784C90.4628 27.4784 90.9489 26.2526 90.9489 24.7746H90.4445Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M100.548 14.9713L100.549 24.2523H100.513L94.0262 14.9713H90.9089V15.5848C91.8273 15.5848 92.1517 15.6565 92.7289 16.3232V25.5681C92.7289 26.4327 92.4223 26.7577 90.945 26.7577V27.3706H95.3778V26.7577C93.7923 26.7577 93.485 26.4327 93.485 25.5681V17.4584H93.5217L100.603 27.4784H101.305V16.7744C101.305 15.9093 101.611 15.5848 102.873 15.5848V14.9713H100.548Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M112.946 22.7387C112.153 26.2171 110.279 26.7577 107.864 26.7577C106.765 26.7577 106.387 26.541 106.387 25.9643V21.2068C108.279 21.2424 109.089 21.4235 109.379 23.3705H109.882V18.3964L109.379 18.4141C109.089 20.3789 108.279 20.5584 106.387 20.5945V16.7744C106.387 15.8737 107.288 15.5848 108.351 15.5848C110.748 15.5848 111.757 16.6661 112.622 19.4054H113.18L113.071 14.9713H102.873V15.5848C104.242 15.5848 104.549 15.9093 104.549 16.7744L104.549 27.3706H113.396L113.504 22.7387H112.946Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M198.482 20.7023V16.6305C198.482 15.8909 198.968 15.5848 200.518 15.5848C202.644 15.5848 203.418 16.6838 203.418 18.3236C203.418 20.2161 202.176 20.7378 200.554 20.7378C199.725 20.7378 199.004 20.7206 198.482 20.7023ZM205.635 24.7746C205.635 25.3697 205.455 26.2171 204.968 26.2171C203.437 26.2171 204.535 21.8197 201.058 21.2613V21.2251C203.167 21.2251 205.364 20.3417 205.364 18.0713C205.364 16.8461 204.446 14.9713 201.473 14.9713H194.968V15.5848C196.338 15.5848 196.644 15.9093 196.644 16.7744V25.5681C196.644 26.4327 196.338 26.7577 194.968 26.7577V27.3706H198.482V21.3513H199.184C201.095 21.3513 201.959 21.748 201.959 24.6313C201.959 26.2888 202.644 27.4784 203.995 27.4784C205.653 27.4784 206.139 26.2526 206.139 24.7746H205.635Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M208.229 21.1707C208.229 25.0819 209.418 26.9739 212.013 26.9739C214.608 26.9739 215.796 25.0819 215.796 21.1707C215.796 17.2606 214.608 15.3692 212.013 15.3692C209.418 15.3692 208.229 17.2606 208.229 21.1707ZM217.886 21.1707C217.886 24.5046 215.472 27.5862 212.013 27.5862C208.553 27.5862 206.139 24.5046 206.139 21.1707C206.139 17.8374 208.553 14.7558 212.013 14.7558C215.472 14.7558 217.886 17.8374 217.886 21.1707Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M194.328 21.5313H190.453V22.1436C192.075 22.1436 192.562 22.5398 192.562 23.9645C192.562 25.8926 191.949 26.9739 189.896 26.9739C187.949 26.9739 186.256 25.4425 186.256 21.4952C186.256 18.1969 186.905 15.3692 189.931 15.3692C192.202 15.3692 193.337 17.2962 193.662 19.3326H194.165V15.1514H193.589C193.463 15.4042 193.319 15.6565 193.03 15.6565C192.346 15.6565 191.949 14.7558 189.824 14.7558C186.76 14.7558 184.166 17.6029 184.166 21.4596C184.166 24.324 186.49 27.5862 189.841 27.5862C191.842 27.5862 192.707 26.5055 193.067 26.5055C193.283 26.5055 193.463 26.9561 193.715 27.3706H194.328V21.5313Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M227.369 14.9713V23.4061C227.369 25.4242 226.378 26.9739 223.748 26.9739C221.765 26.9739 220.811 25.9287 220.811 24V16.7744C220.811 15.9093 221.117 15.5848 222.539 15.5848V14.9713H217.243V15.5848C218.667 15.5848 218.972 15.9093 218.972 16.7744V23.9467C218.972 26.4693 220.757 27.5862 223.53 27.5862C226.125 27.5862 228.017 26.1448 228.017 23.55V17.3145C228.017 16.3416 228.198 15.5848 229.783 15.5848V14.9713H227.369Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M235.424 21.0629H233.243V16.8822C233.243 15.9454 233.729 15.5848 235.243 15.5848C237.08 15.5848 237.909 16.6305 237.909 18.4141C237.909 20.3417 237.08 21.0629 235.424 21.0629ZM235.783 14.9713H229.783V15.5848C231.099 15.5848 231.404 15.9093 231.404 16.7744V27.3706H234.972V26.7577C233.549 26.7577 233.243 26.4327 233.243 25.5681V21.6758H235.964C238.432 21.6758 240 20.3417 240 18.2513C240 16.8461 238.973 14.9713 235.783 14.9713Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M177.192 22.7387C176.4 26.2171 174.525 26.7577 172.975 26.7577C172.056 26.7577 171.66 26.4327 171.66 25.5681V16.7744C171.66 15.9093 171.966 15.5848 173.39 15.5848V14.9713H168.236V15.5848C169.516 15.5848 169.822 15.9093 169.822 16.7744V27.3706H177.642L177.75 22.7387H177.192Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M143.759 20.7023V16.6305C143.759 15.8909 144.246 15.5848 145.795 15.5848C147.921 15.5848 148.696 16.6838 148.696 18.3236C148.696 20.2161 147.453 20.7378 145.831 20.7378C145.003 20.7378 144.282 20.7206 143.759 20.7023ZM150.914 24.7746C150.914 25.3697 150.731 26.2171 150.245 26.2171C148.714 26.2171 149.813 21.8197 146.336 21.2613V21.2251C148.443 21.2251 150.642 20.3417 150.642 18.0713C150.642 16.8461 149.724 14.9713 146.75 14.9713H140.246V15.5848C141.614 15.5848 141.921 15.9093 141.921 16.7744V25.5681C141.921 26.4327 141.614 26.7577 140.246 26.7577V27.3706H143.759V21.3513H144.462C146.372 21.3513 147.236 21.748 147.236 24.6313C147.236 26.2888 147.921 27.4784 149.273 27.4784C150.93 27.4784 151.417 26.2526 151.417 24.7746H150.914Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M139.046 19.2248C138.668 16.9539 137.839 15.5848 135.298 15.5848V25.5681C135.298 26.4327 135.604 26.7577 137.028 26.7577V27.3706H131.73V26.7577C133.154 26.7577 133.46 26.4327 133.46 25.5681V15.5848C130.919 15.5848 130.09 16.9539 129.713 19.2248H129.154L129.263 14.9713H139.497L139.604 19.2248H139.046Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M154.984 25.5681V16.7744C154.984 16.7727 154.984 16.7722 154.984 16.7705V14.9713H151.416V15.5848C152.84 15.5848 153.147 15.9093 153.147 16.7744V27.3706H156.715V26.7577C155.29 26.7577 154.984 26.4327 154.984 25.5681Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M160.587 22.4681L162.39 17.7296L164.299 22.4681H160.587ZM167.183 25.0463L163.236 14.8997H162.588L158.948 24.848C158.551 25.947 158.174 26.7577 156.715 26.7577V27.3706L158.86 27.3706L159.67 25.0919C159.85 24.5551 160.138 23.8761 160.335 23.226H164.587C165.074 24.2712 165.597 25.712 165.597 26.0909C165.597 26.6127 165.524 26.7577 164.173 26.7577V27.3706H169.183V26.7577C168.137 26.7577 167.723 26.4327 167.183 25.0463Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M49.613 42.3086H50.5041V0H49.613V42.3086Z" fill="#D4C38D"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.245 15.2603C6.05389 15.2603 4.72778 17.8552 4.72778 21.4885V22.8149C4.72778 26.1021 5.67944 27.5429 8.01444 27.5429C10.7244 27.5429 11.7622 24.8624 11.7622 21.4885C11.7622 17.8552 10.7244 15.2603 8.245 15.2603ZM7.89889 28.5241C5.535 28.5241 4.35278 26.9667 3.66111 26.9667C3.05611 26.9667 2.825 27.8312 2.62333 28.2358H1.64333C1.845 27.3128 2.01778 26.2171 2.01778 25.1214V10.7045C2.01778 9.78162 1.49889 9.49379 0 9.49379V8.51363L4.72778 8.34027V16.7016H4.78555C5.65 15.1453 6.86111 14.2801 8.47555 14.2801C12.1367 14.2801 14.7028 17.3362 14.7028 21.2285C14.7028 25.238 11.4733 28.5241 7.89889 28.5241Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5973 10.1278V14.6263H23.6046V15.607H19.5973V26.0443C19.5973 27.255 20.3473 27.5429 21.1834 27.5429C22.3079 27.5429 23.2879 26.7366 23.2879 24.4301V23.8239H24.0946V24.314C24.0946 26.91 23.3168 28.5241 20.4623 28.5241C18.4446 28.5241 16.8879 27.8601 16.8879 25.0069V15.607H14.7834V14.6263C17.4646 14.3951 17.8107 13.645 18.5596 10.1278H19.5973Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5488 18.7492C28.5488 21.114 29.5871 22.2381 31.1438 22.2381C32.6999 22.2381 33.7382 21.114 33.7382 18.7492C33.7382 16.3843 32.6999 15.2603 31.1438 15.2603C29.5871 15.2603 28.5488 16.3843 28.5488 18.7492ZM30.9705 33.0226C34.1416 33.0226 35.9293 31.6096 35.9293 30.0521C35.9293 28.6391 34.2571 27.7168 30.6538 27.7168C27.9727 27.7168 26.8188 28.8703 26.8188 29.9938C26.8188 31.6096 28.7221 33.0226 30.9705 33.0226ZM28.6066 27.1683C27.3666 27.1405 25.781 26.7077 25.781 25.178C25.781 23.9106 28.001 23.0454 29.0393 22.8426V22.7859C27.1938 22.152 25.6082 20.7673 25.6082 18.663C25.6082 16.5283 27.6843 14.2801 30.8843 14.2801C32.5277 14.2801 33.3343 14.5107 34.0843 14.9141C34.0843 13.53 34.8916 12.7226 36.2749 12.7226C37.1399 12.7226 38.0338 13.011 38.0338 14.3379C38.0338 14.9713 37.5438 15.4909 36.8805 15.4909C36.2171 15.4909 35.7277 15.1152 35.7277 14.539C35.7277 14.2507 35.7849 13.9912 35.8138 13.8473C35.7277 13.8184 35.641 13.8184 35.5832 13.8184C35.2949 13.8184 34.8332 14.194 34.8332 14.9141V15.2892C35.4393 15.7215 35.871 16.2121 36.1888 16.7311C36.506 17.2495 36.6788 17.8551 36.6788 18.6053C36.6788 20.4506 35.0349 22.8426 32.1816 23.0454C28.8949 23.276 27.9143 23.5927 27.9143 24.3718C27.9143 26.3321 38.0043 23.7944 38.0043 29.1003C38.0043 32.5325 33.9688 34.0017 30.9705 34.0017C27.511 34.0017 24.7427 32.3881 24.7427 30.3127C24.7427 28.5536 26.9343 27.3422 28.6066 27.2272V27.1683Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4999 27.1017C41.4999 27.9846 40.8633 28.5224 40.0794 28.5224C39.2949 28.5224 38.6577 27.9846 38.6577 27.1017C38.6577 26.2187 39.2949 25.6814 40.0794 25.6814C40.8633 25.6814 41.4999 26.2187 41.4999 27.1017Z" fill="white"/>
          </svg>
          <svg className={headerStyles.mobileLogo} width="42" height="27" viewBox="0 0 42 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.245 7.2603C6.05389 7.2603 4.72778 9.85517 4.72778 13.4885V14.8149C4.72778 18.1021 5.67944 19.5429 8.01444 19.5429C10.7244 19.5429 11.7622 16.8624 11.7622 13.4885C11.7622 9.85517 10.7244 7.2603 8.245 7.2603ZM7.89889 20.5241C5.535 20.5241 4.35278 18.9667 3.66111 18.9667C3.05611 18.9667 2.825 19.8312 2.62333 20.2358H1.64333C1.845 19.3128 2.01778 18.2171 2.01778 17.1214V2.70455C2.01778 1.78162 1.49889 1.49379 0 1.49379V0.513632L4.72778 0.340271V8.70164H4.78555C5.65 7.14528 6.86111 6.28013 8.47555 6.28013C12.1367 6.28013 14.7028 9.33619 14.7028 13.2285C14.7028 17.238 11.4733 20.5241 7.89889 20.5241Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5973 2.12778V6.62629H23.6046V7.60701H19.5973V18.0443C19.5973 19.255 20.3473 19.5429 21.1834 19.5429C22.3079 19.5429 23.2879 18.7366 23.2879 16.4301V15.8239H24.0946V16.314C24.0946 18.91 23.3168 20.5241 20.4623 20.5241C18.4446 20.5241 16.8879 19.8601 16.8879 17.0069V7.60701H14.7834V6.62629C17.4646 6.39515 17.8107 5.64502 18.5596 2.12778H19.5973Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5488 10.7492C28.5488 13.114 29.5871 14.2381 31.1438 14.2381C32.6999 14.2381 33.7382 13.114 33.7382 10.7492C33.7382 8.38434 32.6999 7.26027 31.1438 7.26027C29.5871 7.26027 28.5488 8.38434 28.5488 10.7492ZM30.9705 25.0226C34.1416 25.0226 35.9293 23.6096 35.9293 22.0521C35.9293 20.6391 34.2571 19.7168 30.6538 19.7168C27.9727 19.7168 26.8188 20.8703 26.8188 21.9938C26.8188 23.6096 28.7221 25.0226 30.9705 25.0226ZM28.6066 19.1683C27.3666 19.1405 25.781 18.7077 25.781 17.178C25.781 15.9106 28.001 15.0454 29.0393 14.8426V14.7859C27.1938 14.152 25.6082 12.7673 25.6082 10.663C25.6082 8.52825 27.6843 6.2801 30.8843 6.2801C32.5277 6.2801 33.3343 6.5107 34.0843 6.9141C34.0843 5.52998 34.8916 4.72263 36.2749 4.72263C37.1399 4.72263 38.0338 5.01101 38.0338 6.33789C38.0338 6.97133 37.5438 7.49086 36.8805 7.49086C36.2171 7.49086 35.7277 7.11524 35.7277 6.53904C35.7277 6.25066 35.7849 5.99117 35.8138 5.84725C35.7277 5.81836 35.641 5.81836 35.5832 5.81836C35.2949 5.81836 34.8332 6.19398 34.8332 6.9141V7.28916C35.4393 7.72145 35.871 8.21209 36.1888 8.73106C36.506 9.24948 36.6788 9.85514 36.6788 10.6053C36.6788 12.4506 35.0349 14.8426 32.1816 15.0454C28.8949 15.276 27.9143 15.5927 27.9143 16.3718C27.9143 18.3321 38.0043 15.7944 38.0043 21.1003C38.0043 24.5325 33.9688 26.0017 30.9705 26.0017C27.511 26.0017 24.7427 24.3881 24.7427 22.3127C24.7427 20.5536 26.9343 19.3422 28.6066 19.2272V19.1683Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4999 19.1017C41.4999 19.9846 40.8633 20.5224 40.0794 20.5224C39.2949 20.5224 38.6577 19.9846 38.6577 19.1017C38.6577 18.2187 39.2949 17.6814 40.0794 17.6814C40.8633 17.6814 41.4999 18.2187 41.4999 19.1017Z" fill="white"/>
          </svg>
          </Link>
        </div>

        <button type="button" className={headerStyles.cta}>
          <svg width="40" height="19" viewBox="0 0 40 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="4" fill="white"/>
            <rect y="11" x="20" width="20" height="4" fill="white"/>
          </svg>
        </button>

        <ul className="hidden lg:block">
          <li><Link to="/about">The Firm</Link></li>
          <li><Link to="/case-results">Case Results</Link></li>
          <li><Link to="/practice-areas">Practice Areas</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </div>
    </div>

    <div className={headerStyles.customWaveBottom}>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
      </svg>
    </div>

  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

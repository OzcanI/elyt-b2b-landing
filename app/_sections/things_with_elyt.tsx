const icons = {
    artwork: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18.78 2.25H17.28C16.035 2.25 15.03 3.255 15.03 4.5V6C15.03 7.245 16.035 8.25 17.28 8.25H18.78C20.025 8.25 21.03 7.245 21.03 6V4.5C21.03 3.255 20.025 2.25 18.78 2.25Z" fill="#3A2969"/>
    <path d="M6.40503 16.005H4.90503C3.66003 16.005 2.65503 17.01 2.65503 18.255V19.755C2.65503 21 3.66003 22.005 4.90503 22.005H6.40503C7.65003 22.005 8.65503 21 8.65503 19.755V18.255C8.65503 17.01 7.63503 16.005 6.40503 16.005Z" fill="#3A2969"/>
    <path d="M31.095 16.005H29.595C28.35 16.005 27.345 17.01 27.345 18.255V19.755C27.345 21 28.35 22.005 29.595 22.005H31.095C32.34 22.005 33.345 21 33.345 19.755V18.255C33.345 17.01 32.34 16.005 31.095 16.005Z" fill="#3A2969"/>
    <path d="M5.625 17.88C5.01 17.88 4.5 17.37 4.5 16.755C4.5 10.35 9.3 4.965 15.66 4.215C16.26 4.155 16.83 4.58996 16.905 5.20496C16.98 5.81996 16.53 6.37499 15.915 6.44999C10.695 7.06499 6.75 11.49 6.75 16.755C6.75 17.37 6.24 17.88 5.625 17.88Z" fill="#3A2969"/>
    <path d="M30.375 17.8799C29.76 17.8799 29.25 17.3699 29.25 16.7549C29.25 11.5199 25.335 7.09495 20.145 6.46495C19.53 6.38995 19.095 5.83493 19.17 5.21993C19.245 4.60493 19.815 4.16998 20.43 4.24498C26.745 5.00998 31.515 10.3949 31.515 16.7699C31.5 17.3699 31.005 17.8799 30.375 17.8799Z" fill="#3A2969"/>
    <path d="M19.935 33.0151H16.08C14.7 33.0151 13.68 31.905 13.935 30.705L14.5651 27.9301H21.45L22.08 30.705C22.365 31.98 21.405 33.0151 19.935 33.0151Z" fill="#3A2969"/>
    <path opacity="0.4" d="M24.105 25.575L21.45 27.93H14.565L11.91 25.575C10.365 24.315 10.365 23.3401 11.535 21.8551L16.215 15.9451C16.545 15.5401 16.92 15.2551 17.325 15.1201C17.76 14.9701 18.24 14.9701 18.675 15.1201C19.08 15.2701 19.455 15.5401 19.785 15.9451L24.465 21.8551C25.635 23.3401 25.59 24.27 24.105 25.575Z" fill="#7800FF"/>
  </svg>,
    upload: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path opacity="0.4" d="M33 16.14C33 15.435 32.43 14.85 31.71 14.85H4.29C3.57 14.85 3 15.42 3 16.14C3 24.975 9.165 31.14 18 31.14C26.835 31.14 33 24.96 33 16.14Z" fill="#7800FF"/>
    <path d="M18.795 5.19L23.07 9.45C23.505 9.885 23.505 10.605 23.07 11.04C22.635 11.475 21.915 11.475 21.48 11.04L19.125 8.7V23.055C19.125 23.67 18.615 24.18 18 24.18C17.385 24.18 16.875 23.67 16.875 23.055V8.7L14.535 11.055C14.1 11.49 13.38 11.49 12.945 11.055C12.72 10.83 12.6 10.545 12.6 10.26C12.6 9.975 12.705 9.69 12.93 9.465L17.205 5.205C17.64 4.755 18.36 4.755 18.795 5.19Z" fill="#3A2969"/>
  </svg>,
    sale: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path opacity="0.4" d="M5.98499 21.99L3.70501 19.71C2.77501 18.78 2.77501 17.25 3.70501 16.32L5.98499 14.04C6.37499 13.65 6.68999 12.885 6.68999 12.345V9.12002C6.68999 7.80002 7.77 6.71996 9.09 6.71996H12.315C12.855 6.71996 13.62 6.405 14.01 6.015L16.29 3.73498C17.22 2.80498 18.75 2.80498 19.68 3.73498L21.96 6.015C22.35 6.405 23.115 6.71996 23.655 6.71996H26.88C28.2 6.71996 29.28 7.80002 29.28 9.12002V12.345C29.28 12.885 29.595 13.65 29.985 14.04L32.265 16.32C33.195 17.25 33.195 18.78 32.265 19.71L29.985 21.99C29.595 22.3799 29.28 23.145 29.28 23.685V26.91C29.28 28.23 28.2 29.31 26.88 29.31H23.655C23.115 29.31 22.35 29.625 21.96 30.015L19.68 32.295C18.75 33.225 17.22 33.225 16.29 32.295L14.01 30.015C13.62 29.625 12.855 29.31 12.315 29.31H9.09C7.77 29.31 6.68999 28.23 6.68999 26.91V23.685C6.68999 23.13 6.37499 22.365 5.98499 21.99Z" fill="#7800FF"/>
    <path d="M22.5 24C21.66 24 20.985 23.325 20.985 22.5C20.985 21.675 21.66 21 22.485 21C23.31 21 23.985 21.675 23.985 22.5C23.985 23.325 23.325 24 22.5 24Z" fill="#3A2969"/>
    <path d="M13.515 15C12.675 15 12 14.325 12 13.5C12 12.675 12.675 12 13.5 12C14.325 12 15 12.675 15 13.5C15 14.325 14.34 15 13.515 15Z" fill="#3A2969"/>
    <path d="M13.5 23.625C13.215 23.625 12.93 23.52 12.705 23.295C12.27 22.86 12.27 22.1399 12.705 21.7049L21.705 12.7049C22.14 12.2699 22.86 12.2699 23.295 12.7049C23.73 13.1399 23.73 13.86 23.295 14.295L14.295 23.295C14.07 23.52 13.785 23.625 13.5 23.625Z" fill="#3A2969"/>
  </svg>,
  rules: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
  <path d="M26.8023 19.7497C27.0007 20.0934 27.0547 20.5018 26.9525 20.8854C26.8504 21.2689 26.6004 21.5963 26.2573 21.7959L14.2573 28.7959C14.0278 28.9299 13.7668 29.0005 13.501 29.0005C13.2353 29.0005 12.9743 28.9299 12.7448 28.7959L0.74479 21.7959C0.401003 21.5955 0.150907 21.2667 0.0495203 20.8819C-0.0518666 20.4971 0.00376078 20.0878 0.204165 19.744C0.404569 19.4003 0.733334 19.1502 1.11814 19.0488C1.50294 18.9474 1.91225 19.003 2.25604 19.2034L13.506 25.7634L24.7573 19.2034C25.1011 19.0055 25.5093 18.9519 25.8926 19.0543C26.2758 19.1567 26.6029 19.4067 26.8023 19.7497ZM24.7573 13.2034L13.5073 19.7634L2.26354 13.2034C1.92073 13.0194 1.5198 12.9757 1.14542 13.0817C0.771026 13.1877 0.45247 13.435 0.256999 13.7714C0.0615276 14.1079 0.00443907 14.5071 0.0977855 14.8848C0.191132 15.2626 0.427608 15.5893 0.75729 15.7959L12.7573 22.7959C12.9868 22.9299 13.2478 23.0005 13.5135 23.0005C13.7793 23.0005 14.0403 22.9299 14.2698 22.7959L26.2698 15.7959C26.6136 15.5953 26.8636 15.2664 26.9649 14.8815C27.0661 14.4966 27.0104 14.0872 26.8098 13.7434C26.6092 13.3996 26.2803 13.1496 25.8954 13.0483C25.5105 12.9471 25.1011 13.0028 24.7573 13.2034ZM0.0072899 8.49966C0.0077787 8.23683 0.0773198 7.97874 0.208948 7.75124C0.340576 7.52375 0.52967 7.33483 0.75729 7.20341L12.7573 0.203413C12.9871 0.0701723 13.2479 0 13.5135 0C13.7791 0 14.04 0.0701723 14.2698 0.203413L26.2698 7.20341C26.4965 7.33544 26.6846 7.52462 26.8154 7.75207C26.9462 7.97953 27.015 8.2373 27.015 8.49966C27.015 8.76203 26.9462 9.0198 26.8154 9.24726C26.6846 9.47471 26.4965 9.66389 26.2698 9.79591L14.2698 16.7959C14.0403 16.9299 13.7793 17.0005 13.5135 17.0005C13.2478 17.0005 12.9868 16.9299 12.7573 16.7959L0.75729 9.79591C0.52967 9.6645 0.340576 9.47558 0.208948 9.24808C0.0773198 9.02059 0.0077787 8.7625 0.0072899 8.49966ZM4.48479 8.49966L13.5073 13.7634L22.5298 8.49966L13.5073 3.23591L4.48479 8.49966Z" fill="#3A2969"/>
  <path d="M24.7573 13.2034L13.5073 19.7634L2.26355 13.2034C1.92074 13.0193 1.51981 12.9757 1.14542 13.0817C0.771035 13.1876 0.452479 13.435 0.257008 13.7714C0.0615363 14.1078 0.0044478 14.5071 0.0977942 14.8848C0.191141 15.2625 0.427617 15.5892 0.757299 15.7959L12.7573 22.7959C12.9868 22.9299 13.2478 23.0005 13.5135 23.0005C13.7793 23.0005 14.0403 22.9299 14.2698 22.7959L26.2698 15.7959C26.6136 15.5953 26.8636 15.2664 26.9649 14.8815C27.0662 14.4966 27.0104 14.0872 26.8098 13.7434C26.6092 13.3996 26.2803 13.1496 25.8954 13.0483C25.5105 12.947 25.1011 13.0028 24.7573 13.2034Z" fill="#C999FF"/>
</svg>,
    memory: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="36" viewBox="0 0 41 36" fill="none">
    <path d="M36.2411 22.7137C35.703 22.3015 35.0772 22.0186 34.4122 21.8868C33.7473 21.7551 33.0609 21.778 32.4062 21.9539L26.7807 23.24C26.7807 23.1746 26.7807 23.1092 26.7807 23.0438C26.7807 21.7224 26.2558 20.4551 25.3214 19.5207C24.387 18.5863 23.1197 18.0614 21.7982 18.0614H14.0038C13.2676 18.0594 12.5383 18.2034 11.8582 18.4851C11.178 18.7668 10.5604 19.1805 10.0412 19.7025L6.69517 23.0438H3.11403C2.28814 23.0438 1.49607 23.3719 0.91208 23.9559C0.328085 24.5399 0 25.332 0 26.1579L0 32.3859C0 33.2118 0.328085 34.0039 0.91208 34.5879C1.49607 35.1719 2.28814 35.5 3.11403 35.5H18.6842C18.837 35.5001 18.9892 35.4812 19.1373 35.4439L29.1022 32.9527C29.1975 32.9293 29.2908 32.8981 29.3809 32.8593L35.4253 30.284C35.4611 30.27 35.4953 30.2544 35.5296 30.2373C36.2056 29.8991 36.7844 29.3945 37.2116 28.7709C37.6387 28.1473 37.9002 27.4253 37.9714 26.6728C38.0425 25.9203 37.9211 25.1621 37.6184 24.4695C37.3157 23.7769 36.8417 23.1727 36.2411 22.7137ZM3.73684 26.7807H5.60526V31.7631H3.73684V26.7807ZM33.8932 26.8757L28.0528 29.3669L18.4538 31.7631H9.3421V25.6908L12.6835 22.3494C12.8562 22.1748 13.0618 22.0362 13.2884 21.9416C13.5151 21.847 13.7582 21.7982 14.0038 21.7982H21.7982C22.1286 21.7982 22.4454 21.9295 22.679 22.163C22.9126 22.3966 23.0439 22.7135 23.0439 23.0438C23.0439 23.3742 22.9126 23.691 22.679 23.9246C22.4454 24.1582 22.1286 24.2894 21.7982 24.2894H17.4386C16.9431 24.2894 16.4678 24.4863 16.1174 24.8367C15.767 25.1871 15.5702 25.6623 15.5702 26.1579C15.5702 26.6534 15.767 27.1286 16.1174 27.479C16.4678 27.8294 16.9431 28.0263 17.4386 28.0263H22.4211C22.562 28.0263 22.7024 28.0106 22.8399 27.9796L33.2719 25.5802L33.3451 25.5615C33.4514 25.5326 33.563 25.5286 33.6712 25.5497C33.7794 25.5708 33.8812 25.6166 33.9688 25.6835C34.0565 25.7503 34.1275 25.8365 34.1765 25.9352C34.2255 26.0339 34.2511 26.1426 34.2513 26.2528C34.252 26.3791 34.2193 26.5032 34.1564 26.6126C34.0935 26.7221 34.0026 26.8128 33.8932 26.8757ZM25.5351 16.8158C25.7064 16.8158 25.8776 16.8064 26.0458 16.7924C26.4912 17.8244 27.2075 18.7166 28.1189 19.3744C29.0302 20.0323 30.1026 20.4312 31.2223 20.529C32.342 20.6268 33.4673 20.4197 34.4789 19.9297C35.4905 19.4398 36.3506 18.6852 36.9681 17.7461C37.5856 16.8069 37.9374 15.7181 37.9862 14.5952C38.0351 13.4723 37.7791 12.3571 37.2455 11.3678C36.712 10.3786 35.9206 9.5522 34.9554 8.97625C33.9902 8.40031 32.8871 8.0963 31.7632 8.09646C31.5919 8.09646 31.4237 8.10581 31.2556 8.11826C30.81 7.08663 30.0936 6.19476 29.1824 5.5372C28.2711 4.87964 27.1989 4.48088 26.0794 4.3832C24.9599 4.28551 23.8348 4.49253 22.8234 4.98232C21.8121 5.47211 20.952 6.22642 20.3345 7.16529C19.717 8.10416 19.365 9.19262 19.3159 10.3153C19.2667 11.438 19.5222 12.553 20.0553 13.5423C20.5884 14.5315 21.3792 15.3581 22.344 15.9344C23.3087 16.5107 24.4113 16.8152 25.5351 16.8158ZM34.2544 14.3245C34.2544 14.8173 34.1083 15.2989 33.8345 15.7086C33.5608 16.1183 33.1717 16.4376 32.7165 16.6261C32.2613 16.8147 31.7604 16.864 31.2771 16.7679C30.7939 16.6718 30.35 16.4345 30.0016 16.0861C29.6532 15.7377 29.4159 15.2938 29.3198 14.8105C29.2237 14.3273 29.273 13.8264 29.4616 13.3712C29.6501 12.916 29.9694 12.5269 30.3791 12.2532C30.7888 11.9794 31.2704 11.8333 31.7632 11.8333C32.4239 11.8333 33.0575 12.0958 33.5247 12.563C33.9919 13.0302 34.2544 13.6638 34.2544 14.3245ZM25.5351 8.09646C26.0088 8.0961 26.4728 8.23081 26.8727 8.4848C27.2726 8.73879 27.5917 9.10153 27.7928 9.53048C26.6985 10.4357 25.9464 11.6877 25.6612 13.0789C25.6192 13.0789 25.5771 13.0789 25.5351 13.0789C24.8744 13.0789 24.2407 12.8165 23.7735 12.3493C23.3063 11.8821 23.0439 11.2484 23.0439 10.5877C23.0439 9.92698 23.3063 9.29332 23.7735 8.82613C24.2407 8.35893 24.8744 8.09646 25.5351 8.09646Z" fill="#3A2969"/>
    <circle cx="25.5351" cy="10.5877" r="6.85088" fill="white"/>
    <circle cx="31.7632" cy="14.3245" r="6.85088" fill="white"/>
    <path d="M28.166 10.4558L25.7137 7.65318C25.6646 7.59696 25.604 7.55187 25.536 7.52091C25.4681 7.48996 25.3943 7.47384 25.3196 7.47363H20.415C20.3403 7.47384 20.2665 7.48996 20.1986 7.52091C20.1306 7.55187 20.0701 7.59696 20.0209 7.65318L17.5686 10.4558C17.4829 10.5538 17.4366 10.6801 17.4387 10.8103C17.4408 10.9405 17.4911 11.0652 17.58 11.1604L22.4846 16.4153C22.5337 16.468 22.5932 16.51 22.6593 16.5387C22.7253 16.5673 22.7966 16.5822 22.8686 16.5822C22.9407 16.5822 23.0119 16.5673 23.078 16.5387C23.144 16.51 23.2035 16.468 23.2527 16.4153L28.1573 11.1604C28.2458 11.0649 28.2956 10.94 28.2973 10.8098C28.2989 10.6796 28.2521 10.5535 28.166 10.4558ZM26.6136 10.2763H25.232L23.9183 8.52462H25.081L26.6136 10.2763ZM20.4098 11.3273L21.3377 13.6482L19.1718 11.3273H20.4098ZM24.1933 11.3273L22.8673 14.6418L21.5413 11.3273H24.1933ZM21.8163 10.2763L22.8673 8.87495L23.9183 10.2763H21.8163ZM25.3249 11.3273H26.5628L24.3969 13.6482L25.3249 11.3273ZM20.6537 8.52462H21.8163L20.5026 10.2763H19.121L20.6537 8.52462Z" fill="#C999FF"/>
    <path d="M34.3941 2.98217L31.9418 0.179544C31.8926 0.12333 31.8321 0.0782414 31.7641 0.047282C31.6961 0.0163227 31.6224 0.000203858 31.5477 0H26.6431C26.5684 0.000203858 26.4946 0.0163227 26.4267 0.047282C26.3587 0.0782414 26.2981 0.12333 26.249 0.179544L23.7966 2.98217C23.7109 3.08016 23.6646 3.20649 23.6667 3.33667C23.6688 3.46684 23.7192 3.59161 23.808 3.68677L28.7126 8.94171C28.7618 8.99435 28.8213 9.03632 28.8873 9.06502C28.9534 9.09371 29.0247 9.10852 29.0967 9.10852C29.1687 9.10852 29.24 9.09371 29.306 9.06502C29.3721 9.03632 29.4316 8.99435 29.4807 8.94171L34.3853 3.68677C34.4738 3.59128 34.5237 3.46634 34.5253 3.33616C34.5269 3.20598 34.4802 3.07984 34.3941 2.98217ZM32.8417 2.80263H31.4601L30.1464 1.05099H31.309L32.8417 2.80263ZM26.6378 3.85362L27.5658 6.17455L25.3998 3.85362H26.6378ZM30.4214 3.85362L29.0954 7.16817L27.7694 3.85362H30.4214ZM28.0444 2.80263L29.0954 1.40132L30.1464 2.80263H28.0444ZM31.5529 3.85362H32.7909L30.625 6.17455L31.5529 3.85362ZM26.8817 1.05099H28.0444L26.7307 2.80263H25.349L26.8817 1.05099Z" fill="#C999FF"/>
    <path d="M40.6222 10.4558L38.1699 7.65318C38.1207 7.59696 38.0601 7.55187 37.9922 7.52091C37.9242 7.48996 37.8504 7.47384 37.7758 7.47363H32.8711C32.7965 7.47384 32.7227 7.48996 32.6547 7.52091C32.5868 7.55187 32.5262 7.59696 32.477 7.65318L30.0247 10.4558C29.939 10.5538 29.8927 10.6801 29.8948 10.8103C29.8969 10.9405 29.9473 11.0652 30.0361 11.1604L34.9407 16.4153C34.9899 16.468 35.0493 16.51 35.1154 16.5387C35.1815 16.5673 35.2527 16.5822 35.3248 16.5822C35.3968 16.5822 35.4681 16.5673 35.5341 16.5387C35.6002 16.51 35.6596 16.468 35.7088 16.4153L40.6134 11.1604C40.7019 11.0649 40.7518 10.94 40.7534 10.8098C40.755 10.6796 40.7083 10.5535 40.6222 10.4558ZM39.0698 10.2763H37.6882L36.3744 8.52462H37.5371L39.0698 10.2763ZM32.8659 11.3273L33.7938 13.6482L31.6279 11.3273H32.8659ZM36.6494 11.3273L35.3234 14.6418L33.9975 11.3273H36.6494ZM34.2725 10.2763L35.3234 8.87495L36.3744 10.2763H34.2725ZM37.781 11.3273H39.019L36.8531 13.6482L37.781 11.3273ZM33.1098 8.52462H34.2725L32.9587 10.2763H31.5771L33.1098 8.52462Z" fill="#C999FF"/>
  </svg>,
  save: <svg width="32" height="41" viewBox="0 0 32 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M28.2791 0H10.4186C9.43177 0 8.48533 0.392025 7.78753 1.08984C7.08972 1.78764 6.69769 2.73408 6.69769 3.72093V7.44186H4.46513C3.47828 7.44186 2.53185 7.83389 1.83404 8.5317C1.13623 9.2295 0.744202 10.1759 0.744202 11.1628V37.9535C0.744161 38.3705 0.860916 38.7792 1.08124 39.1332C1.30156 39.4873 1.61665 39.7726 1.99079 39.9567C2.36493 40.1409 2.78318 40.2166 3.19814 40.1753C3.6131 40.1339 4.00818 39.9772 4.33862 39.7228L12.6512 33.3284L20.9656 39.7228C21.2961 39.9766 21.691 40.1329 22.1056 40.174C22.5203 40.215 22.9382 40.1392 23.312 39.9551C23.6858 39.771 24.0006 39.486 24.2209 39.1322C24.4411 38.7785 24.5579 38.3702 24.5582 37.9535V29.3209L28.4056 32.2809C28.736 32.5353 29.1311 32.6921 29.5461 32.7334C29.961 32.7748 30.3793 32.6991 30.7534 32.5149C31.1276 32.3307 31.4427 32.0454 31.663 31.6914C31.8833 31.3373 32.0001 30.9286 32 30.5116V3.72093C32 2.73408 31.608 1.78764 30.9102 1.08984C30.2124 0.392025 29.2659 0 28.2791 0ZM20.093 33.4195L14.0112 28.7423C13.621 28.4423 13.1425 28.2796 12.6502 28.2796C12.158 28.2796 11.6795 28.4423 11.2893 28.7423L5.20932 33.4195V11.907H20.093V33.4195ZM27.5349 25.9777L24.5582 23.6893V11.1628C24.5582 10.1759 24.1661 9.2295 23.4683 8.5317C22.7705 7.83389 21.8241 7.44186 20.8372 7.44186H11.1628V4.46512H27.5349V25.9777Z" fill="#3A2969"/>
  <g clipPath="url(#clip0_798_858)">
  <path d="M28.2791 0H10.4186C9.43177 0 8.48533 0.392025 7.78753 1.08984C7.08972 1.78764 6.69769 2.73408 6.69769 3.72093V7.44186H4.46513C3.47828 7.44186 2.53185 7.83389 1.83404 8.5317C1.13623 9.22951 0.744202 10.1759 0.744202 11.1628V37.9535C0.744161 38.3705 0.860916 38.7792 1.08124 39.1332C1.30156 39.4873 1.61665 39.7726 1.99079 39.9567C2.36493 40.1409 2.78318 40.2166 3.19814 40.1753C3.6131 40.1339 4.00818 39.9772 4.33862 39.7228L12.6512 33.3284L20.9656 39.7228C21.2961 39.9766 21.691 40.1329 22.1056 40.174C22.5203 40.215 22.9382 40.1392 23.312 39.9551C23.6858 39.771 24.0006 39.486 24.2209 39.1322C24.4411 38.7785 24.5579 38.3702 24.5582 37.9535V29.3209L28.4056 32.2809C28.736 32.5353 29.1311 32.6921 29.5461 32.7334C29.961 32.7748 30.3793 32.6991 30.7534 32.5149C31.1276 32.3307 31.4427 32.0454 31.663 31.6914C31.8833 31.3373 32.0001 30.9286 32 30.5116V3.72093C32 2.73408 31.608 1.78764 30.9102 1.08984C30.2124 0.392025 29.2659 0 28.2791 0ZM20.093 33.4195L14.0112 28.7423C13.621 28.4423 13.1425 28.2796 12.6502 28.2796C12.158 28.2796 11.6795 28.4423 11.2893 28.7423L5.20932 33.4195V11.907H20.093V33.4195ZM27.5349 25.9777L26.0465 24.8335L24.5582 23.6893V11.1628C24.5582 10.1759 24.1661 9.22951 23.4683 8.5317C22.7705 7.83389 21.8241 7.44186 20.8372 7.44186H11.1628V4.46512H27.5349V25.9777Z" fill="#C999FF"/>
  </g>
  <defs>
  <clipPath id="clip0_798_858">
  <rect width="25" height="34" fill="white" transform="translate(0 7)"/>
  </clipPath>
  </defs>
  </svg>,
    arrows: <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" fill="none">
    <path d="M13.9292 3.18363L4.55761 11.5052L13.9292 19.8268C14.2904 20.1478 14.5092 20.5991 14.5376 21.0815C14.566 21.5639 14.4015 22.0378 14.0805 22.3989C13.7595 22.76 13.3082 22.9789 12.8258 23.0073C12.3434 23.0356 11.8695 22.8712 11.5084 22.5502L0.614699 12.8669C0.421505 12.6965 0.266778 12.487 0.160795 12.2522C0.054812 12.0174 0 11.7628 0 11.5052C0 11.2476 0.054812 10.993 0.160795 10.7582C0.266778 10.5234 0.421505 10.3139 0.614699 10.1435L11.5084 0.460201C11.8695 0.13918 12.3434 -0.0252277 12.8258 0.00314679C13.3082 0.0315213 13.7595 0.250353 14.0805 0.611502C14.4015 0.972651 14.566 1.44653 14.5376 1.9289C14.5092 2.41127 14.2904 2.8626 13.9292 3.18363ZM36.927 10.1435L26.0333 0.460201C25.8545 0.301247 25.6461 0.179072 25.4201 0.10065C25.1941 0.0222289 24.9548 -0.0109028 24.7159 0.00314679C24.4771 0.0171964 24.2434 0.0781526 24.0281 0.182534C23.8128 0.286916 23.6202 0.432679 23.4612 0.611502C23.3023 0.790325 23.1801 0.998704 23.1017 1.22474C23.0232 1.45078 22.9901 1.69006 23.0042 1.9289C23.0182 2.16774 23.0792 2.40148 23.1835 2.61677C23.2879 2.83205 23.4337 3.02467 23.6125 3.18363L32.9796 11.5052L23.6125 19.8268C23.4337 19.9857 23.2879 20.1783 23.1835 20.3936C23.0792 20.6089 23.0182 20.8427 23.0042 21.0815C22.9901 21.3203 23.0232 21.5596 23.1017 21.7857C23.1801 22.0117 23.3023 22.2201 23.4612 22.3989C23.6202 22.5777 23.8128 22.7235 24.0281 22.8279C24.2434 22.9323 24.4771 22.9932 24.7159 23.0073C24.9548 23.0213 25.1941 22.9882 25.4201 22.9098C25.6461 22.8313 25.8545 22.7092 26.0333 22.5502L36.927 12.8669C37.1202 12.6965 37.275 12.487 37.3809 12.2522C37.4869 12.0174 37.5417 11.7628 37.5417 11.5052C37.5417 11.2476 37.4869 10.993 37.3809 10.7582C37.275 10.5234 37.1202 10.3139 36.927 10.1435Z" fill="#C999FF"/>
  </svg>,
  creditcard: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26" fill="none">
  <path d="M32.8095 0H3.09524C2.27433 0 1.48704 0.326104 0.906574 0.906574C0.326104 1.48704 0 2.27433 0 3.09524V22.9048C0 23.7257 0.326104 24.513 0.906574 25.0934C1.48704 25.6739 2.27433 26 3.09524 26H32.8095C33.6304 26 34.4177 25.6739 34.9982 25.0934C35.5787 24.513 35.9048 23.7257 35.9048 22.9048V3.09524C35.9048 2.27433 35.5787 1.48704 34.9982 0.906574C34.4177 0.326104 33.6304 0 32.8095 0ZM32.1905 3.71429V6.80952H3.71429V3.71429H32.1905ZM3.71429 22.2857V10.5238H32.1905V22.2857H3.71429ZM30.3333 18.5714C30.3333 19.064 30.1377 19.5363 29.7894 19.8846C29.4411 20.2329 28.9687 20.4286 28.4762 20.4286H23.5238C23.0313 20.4286 22.5589 20.2329 22.2106 19.8846C21.8623 19.5363 21.6667 19.064 21.6667 18.5714C21.6667 18.0789 21.8623 17.6065 22.2106 17.2582C22.5589 16.91 23.0313 16.7143 23.5238 16.7143H28.4762C28.9687 16.7143 29.4411 16.91 29.7894 17.2582C30.1377 17.6065 30.3333 18.0789 30.3333 18.5714ZM19.8095 18.5714C19.8095 19.064 19.6139 19.5363 19.2656 19.8846C18.9173 20.2329 18.4449 20.4286 17.9524 20.4286H16.0952C15.6027 20.4286 15.1303 20.2329 14.782 19.8846C14.4338 19.5363 14.2381 19.064 14.2381 18.5714C14.2381 18.0789 14.4338 17.6065 14.782 17.2582C15.1303 16.91 15.6027 16.7143 16.0952 16.7143H17.9524C18.4449 16.7143 18.9173 16.91 19.2656 17.2582C19.6139 17.6065 19.8095 18.0789 19.8095 18.5714Z" fill="#C999FF"/>
</svg>
}

const Thing = ({icon, title, description}: {icon: string, title: any, description: string}) => {
    return <div className="bg-[#E6E8FA] lg:bg-[#ECF1F9] px-8 py-10 rounded-[30px]">
        <div className="flex items-center">
            <div className="bg-white p-4 rounded-full w-[70px] h-[70px] flex justify-center items-center">
                {/* @ts-ignore */}
                {icons[icon]}
            </div>
        </div>
        <div className="text-[#262626] text-[24px] font-[300] italic mt-10">{title}</div>
        <div className="text-[#828282] text-[18px] font-[400] mt-5">
            {description}
        </div>
    </div>
}

export const ThingsWithElty = () => {
    return <div className="w-full py-[5%] px-[5%] md:px-[10%] relative overflow-hidden z-10">
        <div className="max-w-container mx-auto">
            <div className="text-[35px] md:text-[68px] font-[300] text-left"><span className="font-[600]">ELYT</span> ile yapabilecekleriniz</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md5:grid-cols-3 gap-x-[40px] gap-y-[67px] mt-[30px] md:mt-[67px]">
                <Thing 
                    icon="artwork"
                    title={<>Hedef Kitlenize Yönelik  <span className="font-[600]">Sanatsal Tasarım</span></>}
                    description="Kullanmış olduğumuz yapay zeka teknolojileri ile hedef kitlenize uygun güçlü görsellere sahip kart tasarımları."
                />
                <Thing 
                    icon="rules"
                    title={<><span className="font-[600]">Kural Setleri </span> Sayesinde Yüksek Etkileşim</>}
                    description="ELYT üzerinde ya da Youtube, X, Discord gibi medyalarda etkileşimi en üst seviyeye çıkaracak fonksiyon ve akışlar."
                />
                <Thing 
                    icon="memory"
                    title={<>Her Hatıralığa Özel Ayrı <span className="font-[600]">Değer Önerileri</span></>}
                    description="Modüler kurgu ve özel tasarımlar ile her etkinliğine ya da kampanyaya özel değer önerileri ve sonuçlara yönelik veri analizleri."
                />
                <Thing 
                    icon="save"
                    title={<>Uzun Soluklu İlişkiler İçin <span className="font-[600]">Koleksiyon Yapısı</span></>}
                    description="Mevcuttaki hatıralıklara yönelik koleksiyon kurguları ile daha büyük değer önerileri ve oyunlaştırmaya dayalı uzun soluklu ilişki yönetimi."
                />
                <Thing 
                    icon="arrows"
                    title={<><span className="font-[600]">Esnek API’ler </span> İle Kolay Entegrasyon</>}
                    description="ELYT üzerindeki fonkisyonların APIler ile mevcut sistemler kolayca entegrasyonu."
                />
                <Thing 
                    icon="creditcard"
                    title={<>Ek Gelirler İçin <span className="font-[600]">Kredi Kartı & Avax İle Satış</span></>}
                    description="Arz edilen hatıralıkların kredi kartı ya da web3 üzerinden Avax token ile satışı."
                />
            </div>
        </div>
        
    </div>
};
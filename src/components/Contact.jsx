import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='map'>
      <aside className='d-flex ruta__map'>
        <Link className='ruta__link' to={`/`}>Inicio</Link>
        <p className='ms-1'>/ Contacto</p>
      </aside>
      <main className='map__main'>
        <iframe className="map__main__mapa"
        title="Google Maps"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778314.2605562959!2d-3.8203916540763343!3d40.35809189335503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228820a70d501%3A0x6c386bc12103969c!2sC.%20de%20las%20Huertas%2C%2052%2C%2028014%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sar!4v1688774549587!5m2!1ses-419!2sar"
        allowFullScreen
        >
        </iframe>
        <section className='map__main__section'>
          <h1 className='map__main__section__h1'>Contacto</h1>
          <div className='map__main__section__div'>
            <Link className='map__main__section__div__link' to={`https://api.whatsapp.com/send?phone=34667873835&text=Hola.`} target='blank'>
              <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              < g id="Atomo" clip-path="url(#clip0_552_19798)">
                  <path id="Vector" d="M0.59274 14.3327C0.592089 16.6852 1.20679 18.9823 2.37562 21.007L0.480957 27.9247L7.5604 26.0685C9.51848 27.1344 11.7124 27.693 13.9418 27.6931H13.9477C21.3074 27.6931 27.2984 21.7043 27.3016 14.3432C27.303 10.7762 25.9152 7.4221 23.3936 4.89862C20.8726 2.37537 17.5196 0.985026 13.9471 0.983398C6.58648 0.983398 0.595887 6.97193 0.592849 14.3327" fill="url(#paint0_linear_552_19798)"/>
                  <path id="Vector_2" d="M0.116124 14.3281C0.115364 16.7653 0.752093 19.1445 1.9626 21.2417L0 28.4074L7.33329 26.4847C9.35385 27.5863 11.6288 28.1671 13.9437 28.168H13.9496C21.5735 28.168 27.7797 21.9637 27.7829 14.3392C27.7842 10.644 26.3465 7.16932 23.7349 4.55544C21.123 1.94189 17.6501 0.501519 13.9496 0.5C6.32453 0.5 0.119163 6.70341 0.116124 14.3281ZM4.48326 20.8805L4.20944 20.4459C3.0584 18.6157 2.45087 16.5007 2.45174 14.329C2.45423 7.99152 7.61188 2.8355 13.954 2.8355C17.0253 2.83681 19.9117 4.03408 22.0827 6.20636C24.2535 8.37885 25.4481 11.2668 25.4473 14.3383C25.4445 20.6757 20.2868 25.8324 13.9496 25.8324H13.9451C11.8817 25.8313 9.85795 25.2772 8.09309 24.23L7.67309 23.9809L3.32136 25.1219L4.48326 20.8804V20.8805Z" fill="url(#paint1_linear_552_19798)"/>
                  <path id="Vector_3" d="M10.492 8.54716C10.2331 7.97164 9.96058 7.96003 9.71433 7.94994C9.51269 7.94125 9.28218 7.94191 9.05188 7.94191C8.82137 7.94191 8.44684 8.02862 8.13027 8.37428C7.81337 8.72026 6.92041 9.55636 6.92041 11.2569C6.92041 12.9575 8.15903 14.6009 8.3317 14.8318C8.50458 15.0622 10.7229 18.6635 14.2361 20.049C17.1559 21.2003 17.7501 20.9713 18.3838 20.9136C19.0176 20.8561 20.4289 20.0777 20.7168 19.2706C21.005 18.4636 21.005 17.7719 20.9186 17.6273C20.8322 17.4833 20.6017 17.3968 20.256 17.224C19.9102 17.0511 18.2109 16.2149 17.8941 16.0996C17.5772 15.9843 17.3468 15.9268 17.1163 16.2729C16.8858 16.6184 16.2239 17.3968 16.0221 17.6273C15.8206 17.8584 15.6189 17.8871 15.2733 17.7142C14.9274 17.5408 13.8143 17.1763 12.4936 15.9989C11.4661 15.0827 10.7724 13.9513 10.5707 13.6052C10.3691 13.2596 10.5491 13.0723 10.7224 12.9001C10.8777 12.7452 11.0682 12.4965 11.2412 12.2947C11.4135 12.0929 11.4711 11.9488 11.5863 11.7183C11.7017 11.4876 11.6439 11.2857 11.5577 11.1129C11.4711 10.94 10.7994 9.23056 10.492 8.54716Z" fill="white"/>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_552_19798" x1="1341.51" y1="2695.12" x2="1341.51" y2="0.983398" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#1FAF38"/>
                    <stop offset="1" stop-color="#60D669"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_552_19798" x1="1389.15" y1="2791.24" x2="1389.15" y2="0.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F9F9F9"/>
                    <stop offset="1" stop-color="white"/>
                  </linearGradient>
                  <clipPath id="clip0_552_19798">
                    <rect width="27.7829" height="28" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                </defs>
              </svg>
              <p className='map__main__section__div__p'>+34 667 87 38 35</p>
            </Link>
          </div>
          <div className='map__main__section__div'>
            <Link className='map__main__section__div__link'  to={`mailto:consultas@cook4souls.com`} target='blank'>
              <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Atomo/mail" clip-path="url(#clip0_404_12027)">
                  <g id="Group">
                    <path id="Vector" d="M1.97656 22.8904C4.61893 19.8462 7.19804 16.8751 9.79375 13.8848C10.4867 14.4564 11.1657 15.0094 11.837 15.5718C13.2074 16.72 14.7824 16.7213 16.1637 15.5725C16.837 15.0125 17.515 14.4577 18.2085 13.8858C20.8032 16.8748 23.382 19.8459 26.0275 22.8932C25.6454 22.9347 25.3389 22.9967 25.0325 22.997C20.2245 23.0032 15.4166 23.0014 10.6086 23.0014C8.05153 23.0014 5.49445 23.0047 2.93764 22.997C2.64078 22.9959 2.34393 22.9329 1.97708 22.8907L1.97656 22.8904Z" fill="#CB55E9"/>
                    <path id="Vector_2" d="M26.0418 6.2319C25.5648 6.62675 25.088 7.02212 24.6105 7.41646C21.5665 9.92998 18.5246 12.4461 15.477 14.9552C14.5564 15.7133 13.4405 15.7216 12.5251 14.9679C9.05802 12.1137 5.5982 9.25072 2.13631 6.39057C2.07642 6.34105 2.02198 6.28505 1.95068 6.21842C2.24546 6.01153 2.57005 6.00194 2.89179 6.0009C4.25446 5.99701 5.61713 5.99909 6.97954 5.99909C12.9928 5.99909 19.0061 5.99727 25.0193 6.00401C25.3556 6.00427 25.6921 6.07427 26.0284 6.11161C26.0328 6.15179 26.0374 6.19172 26.0418 6.2319Z" fill="#CB55E9"/>
                    <path id="Vector_3" d="M1.26577 6.82715C3.87677 8.98315 6.47611 11.1298 9.10473 13.3003C6.5124 16.2904 3.9294 19.27 1.27614 22.3303C1.15922 21.9974 1.05136 21.7244 0.970217 21.4442C0.935735 21.3247 0.953106 21.1891 0.953106 21.061C0.952587 16.6977 0.953106 12.3346 0.95155 7.97126C0.95155 7.57226 0.992254 7.18882 1.26603 6.82715H1.26577Z" fill="#CB55E9"/>
                    <path id="Vector_4" d="M26.6814 22.2786C24.0785 19.2764 21.4949 16.2968 18.8979 13.3013C21.5198 11.1383 24.1212 8.99213 26.7895 6.79102C26.8816 7.08139 26.9723 7.32198 27.0307 7.57009C27.0638 7.71113 27.0475 7.86487 27.0475 8.0129C27.048 12.3469 27.0465 16.6807 27.0504 21.0148C27.0509 21.4596 26.991 21.8784 26.6812 22.2789L26.6814 22.2786Z" fill="#CB55E9"/>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_404_12027">
                    <rect width="28" height="28" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                </defs>
              </svg>  
              <p className='map__main__section__div__p'>consultas@cook4souls.com</p>   
            </Link> 
          </div>
          <div className='map__main__section__div'>
            <svg className='contactDirect' width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Atomo/ubicacion" clip-path="url(#clip0_404_12034)">
                <g id="Group">
                  <path id="Vector" d="M11.5565 30.1081C11.0365 29.9584 10.5938 29.7113 10.3328 29.2035C9.75618 28.082 10.544 26.7489 11.8063 26.7454C14.6187 26.7377 17.4311 26.7427 20.2436 26.7442C20.3387 26.7442 20.4356 26.7581 20.5292 26.7768C21.3473 26.9421 21.904 27.5937 21.915 28.3952C21.926 29.1981 21.3873 29.8743 20.5879 30.0636C20.5556 30.0713 20.5266 30.0929 20.4957 30.1078H11.5565V30.1081Z" fill="#CB55E9"/>
                  <path id="Vector_2" d="M7.44044 11.7865C7.44281 7.60542 10.4404 4.0309 14.5545 3.30497C19.1415 2.49549 23.5637 5.54497 24.4455 10.1296C24.9121 12.5559 24.4114 14.7749 22.9652 16.771C21.1311 19.3029 19.2807 21.8229 17.4339 24.3459C16.6778 25.3788 15.396 25.3989 14.6446 24.3755C12.7474 21.7921 10.8505 19.2084 8.97644 16.6084C7.94414 15.1758 7.43807 13.5574 7.44044 11.7865ZM16.0191 14.9642C17.4028 14.9672 18.5465 13.8297 18.5495 12.4475C18.5524 11.0632 17.4155 9.92038 16.033 9.91742C14.6484 9.91445 13.5056 11.051 13.5027 12.4339C13.4997 13.8173 14.6375 14.9616 16.0191 14.9645V14.9642Z" fill="#CB55E9"/>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_404_12034">
                  <rect width="30" height="32" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
              </defs>
            </svg>
            <p className='map__main__section__div__p calle'>Calle de Las Huertas n°52 - Madrid, España</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Contact
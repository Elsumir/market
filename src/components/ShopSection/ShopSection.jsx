import Image from 'next/image';
import style from '../ProductSection/ProductSection.module.scss';
import cl from 'classnames';

import ImgDisk from './img/product9.webp';

export const ShopSection = () => (
  <section className='product__section section--padding  pt-0'>
    <div className='container'>
      <div
        className={cl(
          style.section__heading,
          style.section__heading__flex,
          'border-bottom d-flex justify-content-between mb-30'
        )}
      >
        <h2 className={'section__heading--maintitle'}>Новинки</h2>
      </div>
      <div className={cl(style.product__section__inner)}>
        <div className={cl(style.tab_content)} id='nav-tabContent'>
          <div
            id='recent'
            className={cl(style.tab_pane, 'fade show active')}
            role='tabpanel'
          >
            <div className={cl(style.product__wrapper)}>
              <div className='row mb--n30'>
                <div className='col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30'>
                  <article className={cl(style.product__card)}>
                    <div className={cl(style.product__card__thumbnail)}>
                      <a
                        className={cl(
                          style.product__card__thumbnail__link,
                          'display-block'
                        )}
                        href='product-details.html'
                      >
                        <Image
                          className={cl(style.product__card__thumbnail__img)}
                          src={ImgDisk}
                          alt='product-img'
                        />
                      </a>
                      <span className={cl(style.product__badge)}>-14%</span>
                    </div>
                    <div className={cl(style.product__card__content)}>
                      <h3 className={cl(style.product__card__title)}>
                        <a href='product-details.html'>Диски</a>
                      </h3>
                      <div
                        className={cl(
                          style.product__card__price,
                          'd-flex align-items-center'
                        )}
                      >
                        <span className={cl(style.current__price)}>
                          239.52 &#8381;
                        </span>
                        {/* <span className={cl(style.btn_buy, 'primary__btn')}>
                          купить
                        </span> */}
                      </div>
                      <div className={cl(style.product__card__footer)}>
                        <a
                          className={cl(
                            style.product__card__btn,
                            'primary__btn'
                          )}
                          href='cart.html'
                        >
                          <svg
                            width='14'
                            height='11'
                            viewBox='0 0 14 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z'
                              fill='currentColor'
                            />
                          </svg>
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30'>
                  <article className={cl(style.product__card)}>
                    <div className={cl(style.product__card__thumbnail)}>
                      <a
                        className={cl(
                          style.product__card__thumbnail__link,
                          'display-block'
                        )}
                        href='product-details.html'
                      >
                        <Image
                          className={cl(style.product__card__thumbnail__img)}
                          src={ImgDisk}
                          alt='product-img'
                        />
                      </a>
                      <span className={cl(style.product__badge)}>-14%</span>
                    </div>
                    <div className={cl(style.product__card__content)}>
                      <h3 className={cl(style.product__card__title)}>
                        <a href='product-details.html'>Диски</a>
                      </h3>
                      <div
                        className={cl(
                          style.product__card__price,
                          'd-flex align-items-center'
                        )}
                      >
                        <span className={cl(style.current__price)}>
                          239.52 &#8381;
                        </span>
                        {/* <span className={cl(style.btn_buy, 'primary__btn')}>
                          купить
                        </span> */}
                      </div>
                      <div className={cl(style.product__card__footer)}>
                        <a
                          className={cl(
                            style.product__card__btn,
                            'primary__btn'
                          )}
                          href='cart.html'
                        >
                          <svg
                            width='14'
                            height='11'
                            viewBox='0 0 14 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z'
                              fill='currentColor'
                            />
                          </svg>
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30'>
                  <article className={cl(style.product__card)}>
                    <div className={cl(style.product__card__thumbnail)}>
                      <a
                        className={cl(
                          style.product__card__thumbnail__link,
                          'display-block'
                        )}
                        href='product-details.html'
                      >
                        <Image
                          className={cl(style.product__card__thumbnail__img)}
                          src={ImgDisk}
                          alt='product-img'
                        />
                      </a>
                      <span className={cl(style.product__badge)}>-14%</span>
                    </div>
                    <div className={cl(style.product__card__content)}>
                      <h3 className={cl(style.product__card__title)}>
                        <a href='product-details.html'>Диски</a>
                      </h3>
                      <div
                        className={cl(
                          style.product__card__price,
                          'd-flex align-items-center'
                        )}
                      >
                        <span className={cl(style.current__price)}>
                          239.52 &#8381;
                        </span>
                        {/* <span className={cl(style.btn_buy, 'primary__btn')}>
                          купить
                        </span> */}
                      </div>
                      <div className={cl(style.product__card__footer)}>
                        <a
                          className={cl(
                            style.product__card__btn,
                            'primary__btn'
                          )}
                          href='cart.html'
                        >
                          <svg
                            width='14'
                            height='11'
                            viewBox='0 0 14 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z'
                              fill='currentColor'
                            />
                          </svg>
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30'>
                  <article className={cl(style.product__card)}>
                    <div className={cl(style.product__card__thumbnail)}>
                      <a
                        className={cl(
                          style.product__card__thumbnail__link,
                          'display-block'
                        )}
                        href='product-details.html'
                      >
                        <Image
                          className={cl(style.product__card__thumbnail__img)}
                          src={ImgDisk}
                          alt='product-img'
                        />
                      </a>
                      <span className={cl(style.product__badge)}>-14%</span>
                    </div>
                    <div className={cl(style.product__card__content)}>
                      <h3 className={cl(style.product__card__title)}>
                        <a href='product-details.html'>Диски</a>
                      </h3>
                      <div
                        className={cl(
                          style.product__card__price,
                          'd-flex align-items-center'
                        )}
                      >
                        <span className={cl(style.current__price)}>
                          239.52 &#8381;
                        </span>
                        {/* <span className={cl(style.btn_buy, 'primary__btn')}>
                          купить
                        </span> */}
                      </div>
                      <div className={cl(style.product__card__footer)}>
                        <a
                          className={cl(
                            style.product__card__btn,
                            'primary__btn'
                          )}
                          href='cart.html'
                        >
                          <svg
                            width='14'
                            height='11'
                            viewBox='0 0 14 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z'
                              fill='currentColor'
                            />
                          </svg>
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30'>
                  <article className={cl(style.product__card)}>
                    <div className={cl(style.product__card__thumbnail)}>
                      <a
                        className={cl(
                          style.product__card__thumbnail__link,
                          'display-block'
                        )}
                        href='product-details.html'
                      >
                        <Image
                          className={cl(style.product__card__thumbnail__img)}
                          src={ImgDisk}
                          alt='product-img'
                        />
                      </a>
                      <span className={cl(style.product__badge)}>-14%</span>
                    </div>
                    <div className={cl(style.product__card__content)}>
                      <h3 className={cl(style.product__card__title)}>
                        <a href='product-details.html'>Диски</a>
                      </h3>
                      <div
                        className={cl(
                          style.product__card__price,
                          'd-flex align-items-center'
                        )}
                      >
                        <span className={cl(style.current__price)}>
                          239.52 &#8381;
                        </span>
                        {/* <span className={cl(style.btn_buy, 'primary__btn')}>
                          купить
                        </span> */}
                      </div>
                      <div className={cl(style.product__card__footer)}>
                        <a
                          className={cl(
                            style.product__card__btn,
                            'primary__btn'
                          )}
                          href='cart.html'
                        >
                          <svg
                            width='14'
                            height='11'
                            viewBox='0 0 14 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z'
                              fill='currentColor'
                            />
                          </svg>
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30'>
                  <article className={cl(style.product__card)}>
                    <div className={cl(style.product__card__thumbnail)}>
                      <a
                        className={cl(
                          style.product__card__thumbnail__link,
                          'display-block'
                        )}
                        href='product-details.html'
                      >
                        <Image
                          className={cl(style.product__card__thumbnail__img)}
                          src={ImgDisk}
                          alt='product-img'
                        />
                      </a>
                      <span className={cl(style.product__badge)}>-14%</span>
                    </div>
                    <div className={cl(style.product__card__content)}>
                      <h3 className={cl(style.product__card__title)}>
                        <a href='product-details.html'>Диски</a>
                      </h3>
                      <div
                        className={cl(
                          style.product__card__price,
                          'd-flex align-items-center'
                        )}
                      >
                        <span className={cl(style.current__price)}>
                          239.52 &#8381;
                        </span>
                        {/* <span className={cl(style.btn_buy, 'primary__btn')}>
                          купить
                        </span> */}
                      </div>
                      <div className={cl(style.product__card__footer)}>
                        <a
                          className={cl(
                            style.product__card__btn,
                            'primary__btn'
                          )}
                          href='cart.html'
                        >
                          <svg
                            width='14'
                            height='11'
                            viewBox='0 0 14 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z'
                              fill='currentColor'
                            />
                          </svg>
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30'>
                  <article className={cl(style.product__card)}>
                    <div className={cl(style.product__card__thumbnail)}>
                      <a
                        className={cl(
                          style.product__card__thumbnail__link,
                          'display-block'
                        )}
                        href='product-details.html'
                      >
                        <Image
                          className={cl(style.product__card__thumbnail__img)}
                          src={ImgDisk}
                          alt='product-img'
                        />
                      </a>
                      <span className={cl(style.product__badge)}>-14%</span>
                    </div>
                    <div className={cl(style.product__card__content)}>
                      <h3 className={cl(style.product__card__title)}>
                        <a href='product-details.html'>Диски</a>
                      </h3>
                      <div
                        className={cl(
                          style.product__card__price,
                          'd-flex align-items-center'
                        )}
                      >
                        <span className={cl(style.current__price)}>
                          239.52 &#8381;
                        </span>
                        {/* <span className={cl(style.btn_buy, 'primary__btn')}>
                          купить
                        </span> */}
                      </div>
                      <div className={cl(style.product__card__footer)}>
                        <a
                          className={cl(
                            style.product__card__btn,
                            'primary__btn'
                          )}
                          href='cart.html'
                        >
                          <svg
                            width='14'
                            height='11'
                            viewBox='0 0 14 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z'
                              fill='currentColor'
                            />
                          </svg>
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30'>
                  <article className={cl(style.product__card)}>
                    <div className={cl(style.product__card__thumbnail)}>
                      <a
                        className={cl(
                          style.product__card__thumbnail__link,
                          'display-block'
                        )}
                        href='product-details.html'
                      >
                        <Image
                          className={cl(style.product__card__thumbnail__img)}
                          src={ImgDisk}
                          alt='product-img'
                        />
                      </a>
                      <span className={cl(style.product__badge)}>-14%</span>
                    </div>
                    <div className={cl(style.product__card__content)}>
                      <h3 className={cl(style.product__card__title)}>
                        <a href='product-details.html'>Диски</a>
                      </h3>
                      <div
                        className={cl(
                          style.product__card__price,
                          'd-flex align-items-center'
                        )}
                      >
                        <span className={cl(style.current__price)}>
                          239.52 &#8381;
                        </span>
                        {/* <span className={cl(style.btn_buy, 'primary__btn')}>
                          купить
                        </span> */}
                      </div>
                      <div className={cl(style.product__card__footer)}>
                        <a
                          className={cl(
                            style.product__card__btn,
                            'primary__btn'
                          )}
                          href='cart.html'
                        >
                          <svg
                            width='14'
                            height='11'
                            viewBox='0 0 14 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z'
                              fill='currentColor'
                            />
                          </svg>
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cl(style.btn_shop, 'primary__btn')} href='#'>
        Перейти в магазин
      </div>
    </div>
  </section>
);

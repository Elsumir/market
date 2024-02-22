'use client';
import style from './MainBlock.module.scss';
import cl from 'classnames';
import { Swiper, SwiperSlide } from '../Slider/Slider';
import Image from 'next/image';
import ImageSlide1 from './img/layer.webp';

export const MainBlock = () => {
  return (
    <section
      className={cl(style.hero__slider__section, style.slider__section__bg2)}
    >
      <div className='container'>
        <div className='row row-md-reverse'>
          <div className={cl(style.jcc, 'col-lg-4 d-flex align-items-center ')}>
            <div className={cl(style.search__filter__area)}>
              <div className={cl(style.search__filter__header, 'd-flex')}>
                <div className={cl(style.search__filter__header__text)}>
                  <h2 className={cl(style.search__filter__title)}>
                    Часто берут
                  </h2>
                  <p className={cl(style.search__filter__desc)}>
                    Комплекты и детали которые берут чаще.
                  </p>
                </div>
              </div>
              <form className={cl(style.search__filter__form)} action='#'>
                <div
                  className={cl(style.search__filter__select, 'select d-flex')}
                >
                  <span className={cl(style.search__filter__select__field)}>
                    Комплекты для ТО
                    <svg
                      className={cl(style.categories__arrowdown__icon)}
                      xmlns='http://www.w3.org/2000/svg'
                      width='12.355'
                      height='8.394'
                      viewBox='0 0 10.355 6.394'
                    >
                      <path
                        d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z'
                        transform='translate(-6 -8.59)'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className={cl(style.search__filter__select, 'select d-flex')}
                >
                  <span className={cl(style.search__filter__select__field)}>
                    Масло и техюжидкость
                    <svg
                      className={cl(style.categories__arrowdown__icon)}
                      xmlns='http://www.w3.org/2000/svg'
                      width='12.355'
                      height='8.394'
                      viewBox='0 0 10.355 6.394'
                    >
                      <path
                        d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z'
                        transform='translate(-6 -8.59)'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className={cl(style.search__filter__select, 'select d-flex')}
                >
                  <span className={cl(style.search__filter__select__field)}>
                    Аккамуляторы
                    <svg
                      className={cl(style.categories__arrowdown__icon)}
                      xmlns='http://www.w3.org/2000/svg'
                      width='12.355'
                      height='8.394'
                      viewBox='0 0 10.355 6.394'
                    >
                      <path
                        d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z'
                        transform='translate(-6 -8.59)'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className={cl(style.search__filter__select, 'select d-flex')}
                >
                  <span className={cl(style.search__filter__select__field)}>
                    Автохимия
                    <svg
                      className={cl(style.categories__arrowdown__icon)}
                      xmlns='http://www.w3.org/2000/svg'
                      width='12.355'
                      height='8.394'
                      viewBox='0 0 10.355 6.394'
                    >
                      <path
                        d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z'
                        transform='translate(-6 -8.59)'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className={cl(style.search__filter__select, 'select d-flex')}
                >
                  <span className={cl(style.search__filter__select__field)}>
                    Щетки\стеклоочистители
                    <svg
                      className={cl(style.categories__arrowdown__icon)}
                      xmlns='http://www.w3.org/2000/svg'
                      width='12.355'
                      height='8.394'
                      viewBox='0 0 10.355 6.394'
                    >
                      <path
                        d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z'
                        transform='translate(-6 -8.59)'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className={cl(style.hero__slider__wrapper)}>
              <Swiper
                loop='true'
                slidesPerView={1}
                navigation='true'
                autoplay-delay='3000'
                autoplay-pause-on-mouse-enter='true'
                className={cl(
                  'swiper',
                  style.hero__slider__inner,
                  style.hero__slider__activation
                )}
              >
                <SwiperSlide>
                  <div
                    className={cl(
                      style.hero__slider__items__style2,
                      style.home2_slider1_bg
                    )}
                  >
                    <div className={cl(style.slider__content, style.style2)}>
                      <span
                        className={cl(
                          style.slider__subtitle,
                          'text__secondary animed'
                        )}
                      >
                        ВСЕ ЧТО НАДО В ОДНОМ МЕСТЕ
                      </span>
                      <h2
                        className={cl(
                          style.slider__maintitle__style2,
                          'h1 animed'
                        )}
                      >
                        КОМПЛЕКТ ДЛЯ
                        <br />
                        ЗАМЕНЫ МАСЛА
                      </h2>
                      <p
                        className={cl(
                          style.slider__desc,
                          'text__secondary animed'
                        )}
                      >
                        Весь товар лучшего качества
                      </p>
                      <a
                        className={cl('primary__btn animed', style.slider__btn)}
                        href='shop.html'
                      >
                        Купить сейчас
                        <svg
                          width='12'
                          height='8'
                          viewBox='0 0 12 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M11.8335 3.6178L8.26381 0.157332C8.21395 0.107774 8.1532 0.0681771 8.08544 0.0410843C8.01768 0.0139915 7.94441 0 7.87032 0C7.79624 0 7.72297 0.0139915 7.65521 0.0410843C7.58745 0.0681771 7.5267 0.107774 7.47684 0.157332C7.37199 0.262044 7.31393 0.39827 7.31393 0.539537C7.31393 0.680805 7.37199 0.817024 7.47684 0.921736L10.0943 3.45837H0.55625C0.405122 3.46829 0.26375 3.52959 0.160556 3.62994C0.057363 3.73029 0 3.86225 0 3.99929C0 4.13633 0.057363 4.26829 0.160556 4.36864C0.26375 4.46899 0.405122 4.53029 0.55625 4.54021H10.0927L7.47527 7.07826C7.37042 7.18298 7.31235 7.3192 7.31235 7.46047C7.31235 7.60174 7.37042 7.73796 7.47527 7.84267C7.52513 7.89223 7.58588 7.93182 7.65364 7.95892C7.7214 7.98601 7.79467 8 7.86875 8C7.94284 8 8.0161 7.98601 8.08386 7.95892C8.15162 7.93182 8.21238 7.89223 8.26223 7.84267L11.8335 4.38932C11.9406 4.28419 12 4.14649 12 4.00356C12 3.86063 11.9406 3.72293 11.8335 3.6178V3.6178Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                    </div>
                    <div className={cl(style.hero__slider__layer__style2)}>
                      <Image
                        className={cl(style.slider__layer__img)}
                        src={ImageSlide1}
                        alt='slider-img'
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={cl(
                      style.hero__slider__items__style2,
                      style.home2_slider1_bg
                    )}
                  >
                    <div className={cl(style.slider__content, style.style2)}>
                      <span
                        className={cl(
                          style.slider__subtitle,
                          'text__secondary animed'
                        )}
                      >
                        ВСЕ ЧТО НАДО В ОДНОМ МЕСТЕ
                      </span>
                      <h2
                        className={cl(
                          style.slider__maintitle__style2,
                          'h1 animed'
                        )}
                      >
                        КОМПЛЕКТ ДЛЯ
                        <br />
                        ЗАМЕНЫ МАСЛА
                      </h2>
                      <p
                        className={cl(
                          style.slider__desc,
                          'text__secondary animed'
                        )}
                      >
                        Весь товар лучшего качества
                      </p>
                      <a
                        className={cl('primary__btn animed', style.slider__btn)}
                        href='shop.html'
                      >
                        Купить сейчас
                        <svg
                          width='12'
                          height='8'
                          viewBox='0 0 12 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M11.8335 3.6178L8.26381 0.157332C8.21395 0.107774 8.1532 0.0681771 8.08544 0.0410843C8.01768 0.0139915 7.94441 0 7.87032 0C7.79624 0 7.72297 0.0139915 7.65521 0.0410843C7.58745 0.0681771 7.5267 0.107774 7.47684 0.157332C7.37199 0.262044 7.31393 0.39827 7.31393 0.539537C7.31393 0.680805 7.37199 0.817024 7.47684 0.921736L10.0943 3.45837H0.55625C0.405122 3.46829 0.26375 3.52959 0.160556 3.62994C0.057363 3.73029 0 3.86225 0 3.99929C0 4.13633 0.057363 4.26829 0.160556 4.36864C0.26375 4.46899 0.405122 4.53029 0.55625 4.54021H10.0927L7.47527 7.07826C7.37042 7.18298 7.31235 7.3192 7.31235 7.46047C7.31235 7.60174 7.37042 7.73796 7.47527 7.84267C7.52513 7.89223 7.58588 7.93182 7.65364 7.95892C7.7214 7.98601 7.79467 8 7.86875 8C7.94284 8 8.0161 7.98601 8.08386 7.95892C8.15162 7.93182 8.21238 7.89223 8.26223 7.84267L11.8335 4.38932C11.9406 4.28419 12 4.14649 12 4.00356C12 3.86063 11.9406 3.72293 11.8335 3.6178V3.6178Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                    </div>
                    <div className={cl(style.hero__slider__layer__style2)}>
                      <Image
                        className={cl(style.slider__layer__img)}
                        src={ImageSlide1}
                        alt='slider-img'
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={cl(
                      style.hero__slider__items__style2,
                      style.home2_slider1_bg
                    )}
                  >
                    <div className={cl(style.slider__content, style.style2)}>
                      <span
                        className={cl(
                          style.slider__subtitle,
                          'text__secondary animed'
                        )}
                      >
                        ВСЕ ЧТО НАДО В ОДНОМ МЕСТЕ
                      </span>
                      <h2
                        className={cl(
                          style.slider__maintitle__style2,
                          'h1 animed'
                        )}
                      >
                        КОМПЛЕКТ ДЛЯ
                        <br />
                        ЗАМЕНЫ МАСЛА
                      </h2>
                      <p
                        className={cl(
                          style.slider__desc,
                          'text__secondary animed'
                        )}
                      >
                        Весь товар лучшего качества
                      </p>
                      <a
                        className={cl('primary__btn animed', style.slider__btn)}
                        href='shop.html'
                      >
                        Купить сейчас
                        <svg
                          width='12'
                          height='8'
                          viewBox='0 0 12 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M11.8335 3.6178L8.26381 0.157332C8.21395 0.107774 8.1532 0.0681771 8.08544 0.0410843C8.01768 0.0139915 7.94441 0 7.87032 0C7.79624 0 7.72297 0.0139915 7.65521 0.0410843C7.58745 0.0681771 7.5267 0.107774 7.47684 0.157332C7.37199 0.262044 7.31393 0.39827 7.31393 0.539537C7.31393 0.680805 7.37199 0.817024 7.47684 0.921736L10.0943 3.45837H0.55625C0.405122 3.46829 0.26375 3.52959 0.160556 3.62994C0.057363 3.73029 0 3.86225 0 3.99929C0 4.13633 0.057363 4.26829 0.160556 4.36864C0.26375 4.46899 0.405122 4.53029 0.55625 4.54021H10.0927L7.47527 7.07826C7.37042 7.18298 7.31235 7.3192 7.31235 7.46047C7.31235 7.60174 7.37042 7.73796 7.47527 7.84267C7.52513 7.89223 7.58588 7.93182 7.65364 7.95892C7.7214 7.98601 7.79467 8 7.86875 8C7.94284 8 8.0161 7.98601 8.08386 7.95892C8.15162 7.93182 8.21238 7.89223 8.26223 7.84267L11.8335 4.38932C11.9406 4.28419 12 4.14649 12 4.00356C12 3.86063 11.9406 3.72293 11.8335 3.6178V3.6178Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                    </div>
                    <div className={cl(style.hero__slider__layer__style2)}>
                      <Image
                        className={cl(style.slider__layer__img)}
                        src={ImageSlide1}
                        alt='slider-img'
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

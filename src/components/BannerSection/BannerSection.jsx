import Image from 'next/image';
import style from './BannerSection.module.scss';
import cl from 'classnames';

import Diagnostic from './img/banner7.webp';
import Oil from './img/banner8.webp';

export const BannerSection = () => (
  <section className='banner__section section--padding pt-0'>
    <div className='container'>
      <div className='row  mb--n30'>
        <div className='col-lg-6 col-md-6 mb-30'>
          <div className={cl(style.banner__items, 'position__relative')}>
            <a
              className={cl(style.banner__thumbnail, 'display-block')}
              href='shop.html'
            >
              <Image
                className={cl(
                  style.banner__thumbnail__img,
                  style.banner__max__height
                )}
                src={Diagnostic}
                alt='banner-img'
              />
              <div
                className={cl(
                  style.banner__content,
                  style.banner__content__style
                )}
              >
                <span
                  className={cl(style.banner__content__subtitle, 'text-white')}
                >
                  Большие скидки <span className='text__secondary'>40%</span>
                </span>
                <h2 className={cl(style.banner__content__title)}>
                  НА{' '}
                  <span className={cl(style.banner__content__title__inner)}>
                    ДИАГНОСТИКУ
                  </span>
                </h2>
                <span
                  className={cl(
                    style.banner__content__subtitle,
                    'text-white display-block'
                  )}
                >
                  только инжекторные авто
                </span>
                <span className={cl(style.banner__content__btn)}>
                  Записаться
                  <svg
                    width='12'
                    height='8'
                    viewBox='0 0 12 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.8335 3.6178L8.26381 0.157332C8.21395 0.107774 8.1532 0.0681771 8.08544 0.0410843C8.01768 0.0139915 7.94441 0 7.87032 0C7.79624 0 7.72297 0.0139915 7.65521 0.0410843C7.58746 0.0681771 7.5267 0.107774 7.47684 0.157332C7.37199 0.262044 7.31393 0.39827 7.31393 0.539537C7.31393 0.680805 7.37199 0.817024 7.47684 0.921736L10.0943 3.45837H0.55625C0.405122 3.46829 0.26375 3.52959 0.160556 3.62994C0.057363 3.73029 0 3.86225 0 3.99929C0 4.13633 0.057363 4.26829 0.160556 4.36864C0.26375 4.46899 0.405122 4.53029 0.55625 4.54021H10.0927L7.47527 7.07826C7.37042 7.18298 7.31235 7.3192 7.31235 7.46047C7.31235 7.60174 7.37042 7.73796 7.47527 7.84267C7.52513 7.89223 7.58588 7.93182 7.65364 7.95892C7.7214 7.98601 7.79467 8 7.86875 8C7.94284 8 8.0161 7.98601 8.08386 7.95892C8.15162 7.93182 8.21238 7.89223 8.26223 7.84267L11.8335 4.38932C11.9406 4.28419 12 4.14649 12 4.00356C12 3.86063 11.9406 3.72293 11.8335 3.6178Z'
                      fill='currentColor'
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 mb-30'>
          <div className={cl(style.banner__items, 'position__relative')}>
            <a
              className={cl(style.banner__thumbnail, 'display-block')}
              href='shop.html'
            >
              <Image
                className={cl(
                  style.banner__thumbnail__img,
                  'banner__max--height'
                )}
                src={Oil}
                alt='banner-img'
              />
              <div
                className={cl(
                  style.banner__content,
                  style.banner__content__style
                )}
              >
                <span
                  className={cl(style.banner__content__subtitle, 'text-white')}
                >
                  В НАЛИЧИИ
                </span>
                <h2 className={cl(style.banner__content__title)}>
                  <span className={cl(style.banner__content__title__inner)}>
                    ОРИГИНАЛЬНЫЕ
                  </span>
                </h2>
                <span
                  className={cl(
                    style.banner__content__subtitle,
                    'text-white display-block'
                  )}
                >
                  ЗАПЧАСТИ
                </span>
                <span className={cl(style.banner__content__btn)}>
                  Заказать
                  <svg
                    width='12'
                    height='8'
                    viewBox='0 0 12 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.8335 3.6178L8.26381 0.157332C8.21395 0.107774 8.1532 0.0681771 8.08544 0.0410843C8.01768 0.0139915 7.94441 0 7.87032 0C7.79624 0 7.72297 0.0139915 7.65521 0.0410843C7.58746 0.0681771 7.5267 0.107774 7.47684 0.157332C7.37199 0.262044 7.31393 0.39827 7.31393 0.539537C7.31393 0.680805 7.37199 0.817024 7.47684 0.921736L10.0943 3.45837H0.55625C0.405122 3.46829 0.26375 3.52959 0.160556 3.62994C0.057363 3.73029 0 3.86225 0 3.99929C0 4.13633 0.057363 4.26829 0.160556 4.36864C0.26375 4.46899 0.405122 4.53029 0.55625 4.54021H10.0927L7.47527 7.07826C7.37042 7.18298 7.31235 7.3192 7.31235 7.46047C7.31235 7.60174 7.37042 7.73796 7.47527 7.84267C7.52513 7.89223 7.58588 7.93182 7.65364 7.95892C7.7214 7.98601 7.79467 8 7.86875 8C7.94284 8 8.0161 7.98601 8.08386 7.95892C8.15162 7.93182 8.21238 7.89223 8.26223 7.84267L11.8335 4.38932C11.9406 4.28419 12 4.14649 12 4.00356C12 3.86063 11.9406 3.72293 11.8335 3.6178Z'
                      fill='currentColor'
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

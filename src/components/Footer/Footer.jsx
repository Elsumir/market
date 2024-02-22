import style from './Footer.module.scss';
import cl from 'classnames';

export const Footer = () => (
  <footer className={cl(style.footer__section, style.footer__bg)}>
    <div className={cl(style.footer__color__style, 'container')}>
      <div className={cl(style.newsletter__area)}>
        <div
          className={cl(
            style.newsletter__inner,
            'd-flex justify-content-between align-items-center'
          )}
        >
          <div className={cl(style.newsletter__content)}>
            <h2 className={cl(style.newsletter__title)}>
              <span className='text__secondary'>Бестплатная</span> Консультация
            </h2>
            <p className={cl(style.newsletter__desc)}>
              Оставте свой номер и мы свяжемся с вами
            </p>
          </div>
          <div className={cl(style.newsletter__subscribe)}>
            <form className={cl(style.newsletter__subscribe__form)} action='#'>
              <label>
                <input
                  className={cl(style.newsletter__subscribe__input)}
                  placeholder=' Введите номер'
                  type='text'
                />
              </label>
              <button
                className={cl(style.newsletter__subscribe__button)}
                type='submit'
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className={cl(style.footer__bottom)}>
      <div className='container'>
        <div
          className={cl(
            style.footer__bottom__inenr,
            'd-flex justify-content-between align-items-center flex-wrap'
          )}
        >
          <div className={cl(style.footer__logo)}>
            <h2>
              <a className={cl(style.footer__logo__link)} href='index.html'>
                АвтоКомплекс
              </a>
            </h2>
          </div>
          <p className={cl(style.copyright__content)}>
            <span className='text__secondary'>оплата</span> товара в пункте
            выдачи
          </p>
          <div className={cl(style.footer__payment)}>
            <ul
              className={cl(
                style.social__share,
                'd-flex justify-content-between'
              )}
            >
              <li className={cl(style.social__share__list)}>
                <a
                  className={cl(style.social__share__icon)}
                  target='_blank'
                  href='https://www.facebook.com'
                >
                  <svg
                    width='9'
                    height='15'
                    viewBox='0 0 9 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.62891 8.625L8.01172 6.10938H5.57812V4.46875C5.57812 3.75781 5.90625 3.10156 7 3.10156H8.12109V0.941406C8.12109 0.941406 7.10938 0.75 6.15234 0.75C4.15625 0.75 2.84375 1.98047 2.84375 4.16797V6.10938H0.601562V8.625H2.84375V14.75H5.57812V8.625H7.62891Z'
                      fill='currentColor'
                    />
                  </svg>
                  <span className='visually-hidden'>Facebook</span>
                </a>
              </li>
              <li className={cl(style.social__share__list)}>
                <a
                  className={cl(style.social__share__icon)}
                  target='_blank'
                  href='https://www.facebook.com'
                >
                  <svg
                    width='9'
                    height='15'
                    viewBox='0 0 9 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.62891 8.625L8.01172 6.10938H5.57812V4.46875C5.57812 3.75781 5.90625 3.10156 7 3.10156H8.12109V0.941406C8.12109 0.941406 7.10938 0.75 6.15234 0.75C4.15625 0.75 2.84375 1.98047 2.84375 4.16797V6.10938H0.601562V8.625H2.84375V14.75H5.57812V8.625H7.62891Z'
                      fill='currentColor'
                    />
                  </svg>
                  <span className='visually-hidden'>Facebook</span>
                </a>
              </li>
              <li className={cl(style.social__share__list)}>
                <a
                  className={cl(style.social__share__icon)}
                  target='_blank'
                  href='https://www.facebook.com'
                >
                  <svg
                    width='9'
                    height='15'
                    viewBox='0 0 9 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.62891 8.625L8.01172 6.10938H5.57812V4.46875C5.57812 3.75781 5.90625 3.10156 7 3.10156H8.12109V0.941406C8.12109 0.941406 7.10938 0.75 6.15234 0.75C4.15625 0.75 2.84375 1.98047 2.84375 4.16797V6.10938H0.601562V8.625H2.84375V14.75H5.57812V8.625H7.62891Z'
                      fill='currentColor'
                    />
                  </svg>
                  <span className='visually-hidden'>Facebook</span>
                </a>
              </li>
              <li className={cl(style.social__share__list)}>
                <a
                  className={cl(style.social__share__icon)}
                  target='_blank'
                  href='https://www.facebook.com'
                >
                  <svg
                    width='9'
                    height='15'
                    viewBox='0 0 9 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.62891 8.625L8.01172 6.10938H5.57812V4.46875C5.57812 3.75781 5.90625 3.10156 7 3.10156H8.12109V0.941406C8.12109 0.941406 7.10938 0.75 6.15234 0.75C4.15625 0.75 2.84375 1.98047 2.84375 4.16797V6.10938H0.601562V8.625H2.84375V14.75H5.57812V8.625H7.62891Z'
                      fill='currentColor'
                    />
                  </svg>
                  <span className='visually-hidden'>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

'use client';

import { useEffect, useState } from 'react';
import style from './MainHeader.module.scss';
import cl from 'classnames';

export const MainHeader = () => {
  const [active, setActive] = useState(false);
  const [windows, setWindow] = useState(false);

  const activeClassAction = () => setActive(!active);

  useEffect(() => {
    window.matchMedia('(max-width: 768px)').matches && setWindow(true);
  }, []);
  return (
    <div className={cl(style.main__header)}>
      <div className='container'>
        <div
          className={cl(
            style.main__header__inner,
            'position__relative d-flex justify-content-between align-items-center '
          )}
        >
          <div
            onClick={activeClassAction}
            className={cl(style.categories__menu)}
          >
            <div
              className={cl(
                style.categories__menu__header,
                'bg__secondary text-white d-flex align-items-center border-radius-5'
              )}
              data-bs-toggle='collapse'
              data-bs-target='#categoriesAccordion'
            >
              <svg
                className={cl(style.categories__list__icon)}
                width='18'
                height='15'
                viewBox='0 0 18 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='13' height='1.5' fill='currentColor' />
                <rect y='4.44434' width='18' height='1.5' fill='currentColor' />
                <rect y='8.88892' width='15' height='1.5' fill='currentColor' />
                <rect y='13.3333' width='17' height='1.5' fill='currentColor' />
              </svg>

              <span className={cl(style.categories__menu__title)}>
                Открыть каталог
              </span>
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
            </div>
            <div
              className={cl(
                style.dropdown__categories__menu,
                { show: active },
                'border-radius-5 active collapse'
              )}
              id='categoriesAccordion'
            >
              <ul className='d-lg-block'>
                <li className={cl(style.categories__menu__items)}>
                  <a className={cl(style.categories__menu__link)} href='#'>
                    Ходовая часть
                    <svg
                      className={cl(style.categories__menu__right__arrow__icon)}
                      xmlns='http://www.w3.org/2000/svg'
                      width='17.007'
                      height='16.831'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='48'
                        d='M184 112l144 144-144 144'
                      />
                    </svg>
                  </a>
                  <ul
                    className={cl(
                      style.categories__submenu,
                      'border-radius-10 d-flex justify-content-between'
                    )}
                  >
                    <li className={cl(style.categories__submenu__items)}>
                      <ul className={cl(style.categories__submenu__child)}>
                        <li
                          className={cl(
                            style.categories__submenu__child__items
                          )}
                        >
                          <a
                            className='categories__submenu__child__items__link'
                            href='#'
                          >
                            Амортизаторы
                          </a>
                        </li>
                        <li
                          className={cl(
                            style.categories__submenu__child__items
                          )}
                        >
                          <a
                            className='categories__submenu__child__items__link'
                            href='#'
                          >
                            Пружины
                          </a>
                        </li>
                        <li
                          className={cl(
                            style.categories__submenu__child__items
                          )}
                        >
                          <a
                            className='categories__submenu__child__items__link'
                            href='#'
                          >
                            Ступицы
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={cl(style.categories__menu__items)}>
                  <a
                    className={cl(style.categories__menu__link)}
                    href='shop.html'
                  >
                    Управление
                    <svg
                      className={cl(style.categories__menu__right__arrow__icon)}
                      xmlns='http://www.w3.org/2000/svg'
                      width='17.007'
                      height='16.831'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='48'
                        d='M184 112l144 144-144 144'
                      />
                    </svg>
                  </a>
                  <ul
                    className={cl(
                      style.categories__submenu,
                      'border-radius-10 d-flex justify-content-between'
                    )}
                  >
                    <li className={cl(style.categories__submenu__items)}>
                      <ul className={cl(style.categories__submenu__child)}>
                        <li
                          className={cl(
                            style.categories__submenu__child__items
                          )}
                        >
                          <a
                            className='categories__submenu__child__items__link'
                            href='shop.html'
                          >
                            Шарниры (гранаты)
                          </a>
                        </li>
                        <li
                          className={cl(
                            style.categories__submenu__child__items
                          )}
                        >
                          <a
                            className='categories__submenu__child__items__link'
                            href='shop.html'
                          >
                            Рулевые наконечники
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={cl(style.categories__menu__items)}>
                  <a
                    className={cl(style.categories__menu__link)}
                    href='shop.html'
                  >
                    Тормазная система
                    <svg
                      className={cl(style.categories__menu__right__arrow__icon)}
                      xmlns='http://www.w3.org/2000/svg'
                      width='17.007'
                      height='16.831'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='48'
                        d='M184 112l144 144-144 144'
                      />
                    </svg>
                  </a>
                  <ul
                    className={cl(
                      style.categories__submenu,
                      'border-radius-10 d-flex justify-content-between'
                    )}
                  >
                    <li className={cl(style.categories__submenu__items)}>
                      <ul className={cl(style.categories__submenu__child)}>
                        <li
                          className={cl(
                            style.categories__submenu__child__items
                          )}
                        >
                          <a
                            className='categories__submenu__child__items__link'
                            href='shop.html'
                          >
                            Тормазные колодки
                          </a>
                        </li>
                        <li
                          className={cl(
                            style.categories__submenu__child__items
                          )}
                        >
                          <a
                            className='categories__submenu__child__items__link'
                            href='shop.html'
                          >
                            Датчики скорости
                          </a>
                        </li>
                        <li
                          className={cl(
                            style.categories__submenu__child__items
                          )}
                        >
                          <a
                            className='categories__submenu__child__items__link'
                            href='shop.html'
                          >
                            Тормозные цилиндры
                          </a>
                        </li>
                        <li
                          className={cl(
                            style.categories__submenu__child__items
                          )}
                        >
                          <a
                            className='categories__submenu__child__items__link'
                            href='shop.html'
                          >
                            Комплекты пружинок
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={cl(style.categories__menu__items)}>
                  <a
                    className={cl(style.categories__menu__link)}
                    href='shop.html'
                  >
                    Комплектующее
                  </a>
                </li>
                <li className={cl(style.categories__menu__items)}>
                  <a
                    className={cl(style.categories__menu__link)}
                    href='shop.html'
                  >
                    Сцепление
                    <svg
                      className={cl(style.categories__menu__right__arrow__icon)}
                      xmlns='http://www.w3.org/2000/svg'
                      width='17.007'
                      height='16.831'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='48'
                        d='M184 112l144 144-144 144'
                      />
                    </svg>
                  </a>
                  <ul
                    className={cl(
                      style.categories__submenu,
                      'border-radius-10 d-flex justify-content-between'
                    )}
                  >
                    <li className={cl(style.categories__submenu__items)}>
                      <ul className={cl(style.categories__submenu__child)}>
                        <li
                          className={cl(
                            style.categories__submenu__child__items
                          )}
                        >
                          <a
                            className='categories__submenu__child__items__link'
                            href='shop.html'
                          >
                            Диск сцепления (в сборе)
                          </a>
                        </li>
                        <li
                          className={cl(
                            style.categories__submenu__child__items
                          )}
                        >
                          <a
                            className='categories__submenu__child__items__link'
                            href='shop.html'
                          >
                            Ведомая дека
                          </a>
                        </li>
                        <li
                          className={cl(
                            style.categories__submenu__child__items
                          )}
                        >
                          <a
                            className='categories__submenu__child__items__link'
                            href='shop.html'
                          >
                            Муфта выжемная с подшибником
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className={cl(style.header__search__widget)}>
            <form
              className={cl(
                style.header__search__form,
                'd-flex border-radius-5'
              )}
              action='#'
            >
              <div className={cl(style.header__search__box, 'd-flex ')}>
                <label>
                  <input
                    className={cl(style.header__search__input)}
                    placeholder='Поиск товара...'
                    type='text'
                  />
                </label>
                <button
                  className={cl(
                    style.header__search__button,
                    ' bg__primary text-white'
                  )}
                  aria-label='search button'
                  type='submit'
                >
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z'
                      fill='currentColor'
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className={cl(style.header__account)}>
            <ul
              className={cl(
                style.header__account__wrapper,
                ' d-flex align-items-center'
              )}
            >
              <li
                className={cl(
                  style.header__account__items,
                  style.header__minicart__items
                )}
              >
                <a
                  className={cl(
                    style.header__account__btn,
                    style.minicart__open__btn
                  )}
                  href='javascript:void(0)'
                  data-offcanvas
                >
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22.706'
                      height='22.534'
                      viewBox='0 0 14.706 13.534'
                    >
                      <g transform='translate(0 0)'>
                        <g>
                          <path
                            data-name='Path 16787'
                            d='M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z'
                            transform='translate(0 -463.248)'
                            fill='currentColor'
                          />
                          <path
                            data-name='Path 16788'
                            d='M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z'
                            transform='translate(-1.191 -466.622)'
                            fill='currentColor'
                          />
                          <path
                            data-name='Path 16789'
                            d='M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z'
                            transform='translate(-2.875 -466.622)'
                            fill='currentColor'
                          />
                        </g>
                      </g>
                    </svg>
                    <span className={cl(style.items__count)}>2</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

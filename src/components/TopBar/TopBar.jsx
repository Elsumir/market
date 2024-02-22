import style from './TopBar.module.scss';
import cl from 'classnames';

export const TopBar = () => (
  <>
    <div className={cl(style.header__topbar, 'border-bottom')}>
      <div className='container'>
        <div className={cl(style.header__topbar__inner)}>
          <div className='main__logo'>
            <h1 className='main__logo__title'>
              <a className='main__logo__link' href='index.html'>
                АвтоКомплекс
              </a>
            </h1>
          </div>

          <ul className={cl(style.header__topbar__info)}>
            <li className={cl(style.header__info__list)}>
              <a className={cl(style.header__info__link)} href='#'>
                МАГАЗИН
              </a>
            </li>
            <li className={cl(style.header__info__list)}>
              <a className={cl(style.header__info__link)} href='#'>
                ДОСТАВКА
              </a>
            </li>
            <li className={cl(style.header__info__list)}>
              <a className={cl(style.header__info__link)} href='#'>
                УСЛУГИ АВТОСЕРВИСА
              </a>
            </li>
          </ul>

          <div className={cl(style.header__top__right)}>
            <a className='primary__btn minicart__button--link' href='cart.html'>
              ЗАПИСАТЬСЯ НА УСЛУГИ
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

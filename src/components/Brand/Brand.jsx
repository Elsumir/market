import Image from 'next/image';
import style from './Brand.module.scss';
import cl from 'classnames';

import LogoBrand from './img/brand-logo1.webp';
import LogoBrand2 from './img/brand-logo3.webp';

export const Brand = () => (
  <div className={cl(style.brand__section, 'section--padding pt-0')}>
    <div className='container'>
      <div
        className={cl(
          style.brand__section__inner,
          'd-flex justify-content-between align-items-center'
        )}
      >
        <div className={cl(style.brang__logo__items)}>
          <Image
            className={cl(style.brang__logo__img)}
            src={LogoBrand}
            alt='brand-logo'
          />
        </div>
        <div className={cl(style.brang__logo__items)}>
          <Image
            className={cl(style.brang__logo__img)}
            src={LogoBrand2}
            alt='brand-logo'
          />
        </div>
        <div className={cl(style.brang__logo__items)}>
          <Image
            className={cl(style.brang__logo__img)}
            src={LogoBrand}
            alt='brand-logo'
          />
        </div>
        <div className={cl(style.brang__logo__items)}>
          <Image
            className={cl(style.brang__logo__img)}
            src={LogoBrand2}
            alt='brand-logo'
          />
        </div>
      </div>
    </div>
  </div>
);

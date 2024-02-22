import style from './Shipping.module.scss';
import cl from 'classnames';

import Image from 'next/image';
import ShippingIcon from './img/shipping.webp';
import Support from './img/shipping2.webp';
import Sertoficate from './img/certificate_diploma_icon_151747.svg';
import Diplomat from './img/chat_dialogue_email_mail_message_chatting_icon_154004.svg';

export const Shipping = () => (
  <section className={cl('shipping__section')}>
    <div className='container'>
      <div className={cl(style.shipping__inner, style.style2, 'd-flex')}>
        <div
          className={cl(
            style.shipping__items,
            style.style2,
            'd-flex align-items-center'
          )}
        >
          <div className={cl(style.shipping__icon)}>
            <Image src={ShippingIcon} alt='icon-img' />
          </div>
          <div className={cl(style.shipping__content)}>
            <h2 className={cl(style.shipping__content__title, 'h3')}>
              Быстрая доставка
            </h2>
            <p className={cl(style.shipping__content__desc)}>
              Бесплатная от 5000р
            </p>
          </div>
        </div>

        <div
          className={cl(
            style.shipping__items,
            style.style2,
            'd-flex align-items-center'
          )}
        >
          <div className={cl(style.shipping__icon)}>
            <Image src={Support} alt='icon-img' />
          </div>
          <div className={cl(style.shipping__content)}>
            <h2 className={cl(style.shipping__content__title, 'h3')}>
              Всегда на связи
            </h2>
            <p className={cl(style.shipping__content__desc)}>
              Ответим за 15 минут
            </p>
          </div>
        </div>

        <div
          className={cl(
            style.shipping__items,
            style.style2,
            'd-flex align-items-center'
          )}
        >
          <div className={cl(style.shipping__icon)}>
            <Image width={45} src={Sertoficate} alt='icon-img' />
          </div>
          <div className={cl(style.shipping__content)}>
            <h2 className={cl(style.shipping__content__title, 'h3')}>
              Высокое качество
            </h2>
            <p className={cl(style.shipping__content__desc)}>
              Сертифицированный товар
            </p>
          </div>
        </div>

        <div
          className={cl(
            style.shipping__items,
            style.style2,
            'd-flex align-items-center'
          )}
        >
          <div className={cl(style.shipping__icon)}>
            <Image width={45} src={Diplomat} alt='icon-img' />
          </div>
          <div className={cl(style.shipping__content)}>
            <h2 className={cl(style.shipping__content__title, 'h3')}>
              Консульация
            </h2>
            <p className={cl(style.shipping__content__desc)}>Бесплатная</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

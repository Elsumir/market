'use client';
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

export function Swiper(props) {
  const swiperRef = useRef(null);
  const { children, ...rest } = props;

  useEffect(() => {
    // Register Swiper web component
    register();

    // pass component props to parameters
    const params = {
      ...rest,
      injectStyles: [
        `
        .swiper:hover .swiper-button-prev{
          opacity: 1;
          visibility: visible;
        }
        .swiper:hover .swiper-button-next{
          opacity: 1;
          visibility: visible;
        }
        .swiper:hover .swiper-button-disabled{
          opacity: 0.2;
          visibility: visible;
        }

        .swiper-button-prev, .swiper-button-next, .swiper-button-disabled{
          width: 3.5rem;
          height: 3.5rem;
          background: inherit
          padding: 15px;
          border: 1px solid var(--secondary-color);
          background: var(--body-background-color);
          color: var(--secondary-color);
          border-radius: 50%;
          opacity: 0;
          visibility: hidden;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          z-index: 9;
        }

        .swiper-button-prev svg, .swiper-button-next svg{
          width: 50%;
          height: 50%;
        }

        @keyframes fadeInUpSD {
          0% {
              opacity: 0;
              transform: translate3d(0,15%,0)
          }
          100% {
              opacity: 1;
              transform: translate3d(0,0,0)
          }
      }

        .swiper-slide-active .animed {
          animation: fadeInUpSD 1s both 1.5s
        }
        `,
      ],
    };

    // Assign it to swiper element
    // opacity: 0;
    // visibility: hidden;
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container {...rest} init='false' ref={swiperRef}>
      {children}
    </swiper-container>
  );
}
export function SwiperSlide(props) {
  const { children, ...rest } = props;

  return <swiper-slide {...rest}>{children}</swiper-slide>;
}

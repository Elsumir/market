import styles from './page.module.css';
import { MainBlock } from '@/components/MainBlock/MainBlock';
import { Header } from '@/components/Header/Header';
import { Shipping } from '@/components/Shipping/Shipping';
// import { ProductSection } from '@/components/ProductSection/ProductSection';
import { BannerSection } from '@/components/BannerSection/BannerSection';
import { Brand } from '@/components/Brand/Brand';
import { ShopSection } from '@/components/ShopSection/ShopSection';
import { MobileMenu } from '@/components/MobileMenu/MobileMenu';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <ProductSection /> */}
      <MainBlock />
      <Shipping />
      <BannerSection />
      <Brand />
      <ShopSection />
      <MobileMenu />
    </main>
  );
}

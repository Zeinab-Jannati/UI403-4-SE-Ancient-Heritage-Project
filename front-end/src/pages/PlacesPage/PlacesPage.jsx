// pages/PlacesPage.jsx
import React, { useState } from 'react';
import PlaceSection from '../../components/Card/Placescard/PlaceSection';
import PlaceModal from '../../components/Card/Placescard/PlaceModal';
import "../../components/Card/Placescard/Places.css";
import styles from "./PlacesPage.module.css"
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import SearchBox from '../../components/SearchBox/SearchBox';

const popularPlaces = [
  {
    title: 'تخت جمشید',
    description: 'شکوه معماری ایران باستان',
    image: '/takht.jpg',
    details: 'تخت جمشید، پایتخت باشکوه امپراتوری هخامنشیان، در استان فارس واقع شده و یکی از برجسته‌ترین نمادهای معماری و هنر باستانی ایران است. این مجموعه عظیم در دوره داریوش بزرگ بنیان گذاشته شد و پس از آن توسط خشایارشا و اردشیر یکم گسترش یافت. ستون‌های عظیم، پلکان‌های منقوش، و نقش برجسته‌های خیره‌کننده، شکوه تمدنی کهن را به تصویر می‌کشند. تخت جمشید نه تنها یک مرکز سیاسی، بلکه مکانی برای جشن‌ها و آیین‌های رسمی بوده و امروزه از ارزشمندترین میراث‌های فرهنگی ایران به شمار می‌آید'
  },
  {
    title: 'آرامگاه کوروش',
    description: 'محل دفن پادشاه بزرگ',
    image: '/kor.jpg',
    details: 'آرامگاه کوروش بزرگ در پاسارگاد، مکانی مقدس و تاریخی است که به بنیان‌گذار امپراتوری هخامنشی اختصاص دارد. این آرامگاه ساده اما با ابهت، نمادی از احترام مردم ایران به شخصیتی است که با منشور حقوق بشر خود در تاریخ جهان ماندگار شد. ساختار سنگی آرامگاه با معماری منحصر‌به‌فردش از دوره‌های مختلف تاریخی جان سالم به‌در برده و همچنان به‌عنوان نماد خردمندی و عدالت‌طلبی کوروش، الهام‌بخش بسیاری است.'
  },
  {
    title: 'بیستون',
    description: 'کتیبه‌ای با داستانی تاریخی',
    image: '/bist.jpg',
    details: 'کتیبه بیستون، اثری بی‌نظیر از دوران داریوش بزرگ، بر دامنه کوه بیستون در استان کرمانشاه حک شده است. این اثر شامل متنی به سه زبان باستانی است که پیروزی داریوش بر مدعیان سلطنت را روایت می‌کند. بیستون نه تنها از لحاظ تاریخی و زبانی اهمیت دارد، بلکه نمادی از قدرت، سیاست و هنر دوران باستان است. این مجموعه در فهرست میراث جهانی یونسکو قرار دارد و یکی از بزرگ‌ترین و پیچیده‌ترین کتیبه‌های سنگ‌نوشته در جهان محسوب می‌شود.'
  }
];

const hiddenGems = [
  {
    title: 'قلعه رودخان',
    description: 'در دل جنگل گیلان',
    image: '/qale.jpg',
    details: 'قلعه رودخان، دژی نظامی و تاریخی در دل جنگل‌های سرسبز گیلان است که بر فراز ارتفاعات کوهستانی ساخته شده. این قلعه با بیش از هزار پله، معماری مستحکم و چشم‌اندازهای بی‌نظیر، یکی از اسرارآمیزترین و جذاب‌ترین مکان‌های ایران به شمار می‌رود. قدمت قلعه به دوره ساسانیان بازمی‌گردد و در دوره سلجوقیان بازسازی شده است. موقعیت استراتژیک آن باعث شده تا نقش مهمی در دفاع منطقه‌ای داشته باشد.'
  },
  {
    title: 'آتشکده یزد',
    description: 'محل عبادت زرتشتیان',
    image: '/yazd.jpg',
    details: 'آتشکده یزد یکی از مهم‌ترین مکان‌های مذهبی زرتشتیان در ایران است که آتش مقدس آن بیش از ۱۵۰۰ سال بدون وقفه روشن مانده است. این بنای تاریخی در دل شهر یزد واقع شده و با معماری خاص، سکوت معنوی و اهمیت فرهنگی‌اش، گردشگران زیادی را به خود جذب می‌کند. آتشکده نمادی از ماندگاری دین زرتشتی و باورهای کهن ایرانی است و محلی برای نیایش، مراسم دینی و حفظ میراث معنوی نیاکان محسوب می‌شود.'
  },
  {
    title: 'قلعه بابک',
    description: 'دژ تاریخی بر بلندای کوه',
    image: '/babak.jpg',
    details: 'قلعه بابک، دژی پرشکوه و مقاوم بر بلندای کوه‌های آذربایجان شرقی است که در گذشته مقر فرماندهی بابک خرمدین، قهرمان ملی ایران، بوده است. این قلعه در ارتفاعی بیش از ۲۳۰۰ متر قرار دارد و مسیر دسترسی به آن از دل کوه و جنگل می‌گذرد. قلعه بابک نماد مقاومت و شجاعت در برابر خلفای عباسی است و با چشم‌اندازی بی‌نظیر از طبیعت اطراف، مقصدی محبوب برای علاقه‌مندان به تاریخ و کوهنوردی است.'
  }
];

const PlacesPage = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div>
      <Navbar />
      <img src="/axxx.png" className={styles.headerImg} alt="بنر صفحه" />

      <div className={styles.editSearch}>
      <SearchBox />
      </div>

      <div className={styles.compJazebe}>
      <PlaceSection
        title="پربازدیدترین مکان‌های تاریخی"
        places={popularPlaces}
        onMoreInfo={setSelectedPlace}
      />
      <PlaceSection
        title="کمتر شناخته‌شده اما جذاب"
        places={hiddenGems}
        onMoreInfo={setSelectedPlace}
      />
      <PlaceModal
        show={!!selectedPlace}
        place={selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
      </div>
      <Footer />
    </div>
  );
};

export default PlacesPage;

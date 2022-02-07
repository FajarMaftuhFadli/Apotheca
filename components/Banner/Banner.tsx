import Section from "../Section/Section";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import BtnArrow from "./BtnArrow/BtnArrow";

import ImagePlaceholder from "../../images/5291450.jpg";

import Image from "next/image";

export default function Banner() {
  const btnNextId = "banner-next";
  const btnPrevId = "banner-prev";

  const swiperConf = {
    modules: [Navigation, Pagination, Scrollbar, A11y],
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: { nextEl: `#${btnNextId}`, prevEl: `#${btnPrevId}` },
    pagination: { clickable: true, dynamicBullets: true },
    className: "rounded-md",
  };

  return (
    <Section>
      <div className="relative z-0">
        <Swiper {...swiperConf}>
          {[...Array(3)].map((v, i) => (
            <SwiperSlide key={i}>
              <div className="bg-primary-1 relative h-64 w-full rounded-md">
                <Image src={ImagePlaceholder} layout="fill" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <BtnArrow
          id={btnPrevId}
          className="absolute top-1/2 left-4 z-10 -translate-y-1/2 "
          direction="left"
        />
        <BtnArrow
          id={btnNextId}
          className="absolute top-1/2 right-4 z-10 -translate-y-1/2 "
          direction="right"
        />
      </div>
    </Section>
  );
}

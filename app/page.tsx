import OfficeSceneClient from './components/OfficeSceneClient';
import CharacterGalleryClient from './components/CharacterGalleryClient';
import LoadingScreen from './components/LoadingScreen';
import IconInsta from './components/IconInsta';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full">
      <LoadingScreen />

      {/* Hero Section with 3D Scene */}
      <div className="h-[60vh] md:h-[clamp(500px,26.875vw,900px)] relative max-w-[1920px] mx-auto">
        <p className="top-6 left-6 md:top-[clamp(2.5rem,4.167vw,5rem)] md:left-[clamp(2.5rem,4.167vw,5rem)] font-compacta font-normal text-[2rem] md:text-[clamp(1.75rem,2.5vw,3rem)] leading-[1.08] tracking-normal text-center align-middle uppercase absolute z-10">
          панч
        </p>
        <p className="top-6 right-6 md:top-[clamp(2.5rem,4.167vw,5rem)] md:right-[clamp(2.5rem,4.167vw,5rem)] font-compacta font-normal text-[2rem] md:text-[clamp(1.75rem,2.5vw,3rem)] leading-[1.08] tracking-normal text-center align-middle uppercase absolute z-10">
          кластер
        </p>

        <div className="absolute h-[400px] md:h-[150%] w-full top-2/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <OfficeSceneClient />
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-[1920px] mx-auto px-5 md:px-[clamp(1.25rem,4.167vw,5rem)] z-10">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-y-10 md:gap-y-[clamp(2.5rem,4.167vw,5rem)] gap-x-4 md:gap-x-[clamp(0.625rem,1.042vw,1.25rem)] pt-12 md:pt-[clamp(3.75rem,6.25vw,7.5rem)]">
          {/* Main Description */}
          <div className="md:col-span-5 font-compacta order-1">
            <p className="font-normal text-[1.5rem] md:text-[clamp(1.75rem,2.5vw,3rem)] leading-[1.08] tracking-normal text-left md:text-right align-middle uppercase">
              Пространство, где работают и пересекаются три независимые команды
            </p>
          </div>

          {/* Secondary Description */}
          <div className="md:col-span-5 font-kinetika font-medium text-[1rem] md:text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal flex flex-col gap-2 md:gap-[clamp(0.25rem,0.417vw,0.5rem)] order-2">
            <p>
              Мы сняли большой офис и превратили его в место, где можно не
              только работать над проектами, но и развивать креативную среду
              города
            </p>
            <p>
              Здесь проходят мастер-классы, встречи, обучающие программы и
              открытые события
            </p>
          </div>

          {/* Team Cards */}
          <div className="md:col-span-3 flex flex-col gap-3 md:gap-[clamp(0.25rem,0.417vw,0.5rem)] items-start md:items-end order-4 md:order-3">
            <div className="p-4 md:p-[clamp(0.75rem,1.25vw,1.5rem)] border-2 border-dashed border-[#E4E4EC] w-full md:w-1/2 flex flex-col gap-1 md:gap-[clamp(0.25rem,0.417vw,0.5rem)] rounded-sm">
              <p className="font-bold text-[1.25rem] md:text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] text-left md:text-right uppercase">
                Польза
              </p>
              <p className="font-medium text-[0.875rem] md:text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal text-left md:text-right text-[#757382]">
                Креативное агентство
              </p>
            </div>
            <div className="p-4 md:p-[clamp(0.75rem,1.25vw,1.5rem)] border-2 border-dashed border-[#E4E4EC] w-full md:w-3/4 flex flex-col gap-1 md:gap-[clamp(0.25rem,0.417vw,0.5rem)] rounded-sm">
              <p className="font-bold text-[1.25rem] md:text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] text-left md:text-right uppercase">
                Анимарома
              </p>
              <p className="font-medium text-[0.875rem] md:text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal text-left md:text-right text-[#757382]">
                Дизайн-проект
              </p>
            </div>
            <div className="p-4 md:p-[clamp(0.75rem,1.25vw,1.5rem)] border-2 border-dashed border-[#E4E4EC] w-full flex flex-col gap-1 md:gap-[clamp(0.25rem,0.417vw,0.5rem)] rounded-sm">
              <p className="font-bold text-[1.25rem] md:text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] text-left md:text-right uppercase">
                Чудеса
              </p>
              <p className="font-medium text-[0.875rem] md:text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal text-left md:text-right text-[#757382]">
                Студия цифровых продуктов
              </p>
            </div>
          </div>

          {/* ПАНЧ Logo */}
          <div className="md:col-span-4 flex justify-center items-center order-3 md:order-4 py-8 md:py-0">
            <p className="font-compacta font-normal text-[4rem] md:text-[clamp(6rem,16.042vw,19.25rem)] leading-[0.91] tracking-normal text-center align-middle">
              ПАНЧ
            </p>
          </div>

          {/* Specialties Tags */}
          <div className="md:col-span-5 md:col-start-6 flex gap-2 md:gap-[clamp(0.25rem,0.417vw,0.5rem)] flex-wrap relative order-5">
            <div className="bg-[#282635] p-3 md:p-[clamp(0.625rem,1.042vw,1.25rem)] static md:absolute rounded-sm md:right-1/10 md:-top-3/5 md:rotate-12 md:-z-10 w-full md:w-auto mb-4 md:mb-0">
              <p className="font-medium text-[0.875rem] md:text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal text-white">
                Cобираем людей из разных сфер
              </p>
            </div>
            <div className="p-3 md:p-[clamp(0.5rem,0.833vw,1rem)] border-2 border-dashed border-[#E4E4EC] w-fit rounded-sm">
              <p className="font-bold text-[1.125rem] md:text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] uppercase">
                Дизайнеров
              </p>
            </div>

            <div className="p-3 md:p-[clamp(0.5rem,0.833vw,1rem)] border-2 border-dashed border-[#E4E4EC] w-fit rounded-sm">
              <p className="font-bold text-[1.125rem] md:text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] uppercase">
                Разработчиков
              </p>
            </div>

            <div className="p-3 md:p-[clamp(0.5rem,0.833vw,1rem)] border-2 border-dashed border-[#E4E4EC] w-fit rounded-sm">
              <p className="font-bold text-[1.125rem] md:text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] uppercase">
                Маркетологов
              </p>
            </div>

            <div className="p-3 md:p-[clamp(0.5rem,0.833vw,1rem)] border-2 border-dashed border-[#E4E4EC] w-fit rounded-sm">
              <p className="font-bold text-[1.125rem] md:text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] uppercase">
                Предпринимателей
              </p>
            </div>

            <div className="w-full md:w-fit">
              <p className="font-medium text-[0.875rem] md:text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal items-center text-start flex justify-center h-full">
                Чтобы делиться опытом, запускать проекты и создавать новые идеи
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Character Gallery */}
      <div className="max-w-[1920px] mx-auto px-5 md:px-[clamp(1.25rem,4.167vw,5rem)] py-12 md:py-[clamp(3.75rem,6.25vw,7.5rem)]">
        <h2 className="font-compacta font-normal text-[1.5rem] md:text-[clamp(1.75rem,2.5vw,3rem)] leading-[1.08] tracking-normal align-middle uppercase pb-8 md:pb-[clamp(2.5rem,4.167vw,5rem)]">
          Команда нашего пространства
        </h2>
        <CharacterGalleryClient />
      </div>

      {/* Contact Section with Map */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_min(1920px,100%)_1fr] overflow-hidden">
        <div className="md:col-start-2 px-5 md:px-[clamp(1.25rem,4.167vw,5rem)] grid grid-cols-1 md:grid-cols-10 gap-y-8 md:gap-y-0 md:gap-x-[clamp(0.625rem,1.042vw,1.25rem)]">
          <div className="md:col-span-4 flex flex-1 flex-col justify-between gap-8 md:gap-0">
            <h2 className="font-compacta font-normal text-[1.5rem] md:text-[clamp(1.75rem,2.5vw,3rem)] leading-[1.08] tracking-normal align-middle uppercase">
              Где нас найти?
            </h2>
            <div className="flex flex-col gap-6 md:gap-[clamp(1rem,1.667vw,2rem)]">
              <div className="flex items-center gap-4 md:gap-[clamp(0.625rem,1.042vw,1.25rem)]">
                <Link
                  href="https://www.instagram.com/panch.claster/"
                  target="_blank"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <IconInsta />
                </Link>

                <Link
                  className="font-bold text-[1.125rem] md:text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] align-middle uppercase"
                  href="tel:89960569519"
                >
                  +7 996 056-95-19
                </Link>
              </div>

              <div className="flex flex-col gap-1 md:gap-[clamp(0.25rem,0.417vw,0.5rem)] font-bold text-[1.125rem] md:text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] align-middle uppercase pb-8 md:pb-[clamp(3.75rem,6.25vw,7.5rem)]">
                <p>Красноярский рабочий 150 / строение 46</p>
                <p>{'[этаж 4]'}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-5 overflow-hidden h-[300px] md:h-[clamp(500px,46.875vw,900px)] rounded-sm md:mr-[-30vw]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A62a7e1b1eec43b453cbc05109555ddee78bac96d3db77e4395f32fb9004e8513&scroll=true"
              width="100%"
              height="100%"
              className="top-0 left-0 w-full h-full min-h-100 border-0 md:grayscale-100 md:hover:scale-125 md:hover:grayscale-0 transition-all duration-300"
              allowFullScreen
              title="Yandex Map"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-center text-[#757382] py-6 md:py-[clamp(1rem,1.667vw,2rem)] px-5">
        <p className="font-medium text-[0.75rem] md:text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal align-middle text-center">
          © 2026 Панч_кластер. Все скриншоты принадлежат их соответствующим
          владельцам
        </p>
      </footer>
    </main>
  );
}

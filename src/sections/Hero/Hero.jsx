import { Container } from '@/components/Container';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative h-auto pt-[74px] md:pt-[120px] overflow-hidden">
      <Container>
        <div className="relative h-[270px] md:h-[450px]">
          <div className="flex justify-between tracking-[-0.04em] mb-[26px] md:mb-[62px]">
            <p className="text-xs md:text-[28px] text-accent leading-[15px] max-w-[94px] md:max-w-[218px] md:leading-[28px]">
              Не чекай успіху - створи його разом з нами
            </p>
            <div className="text-right">
              <h1 className="text-[8px] leading-[8px] md:text-[28px] md:leading-[28px]">
                Ілля <span className="font-bold">Мушковський</span>
              </h1>
              <h2 className="text-font24 md:text-[66px] leading-6 md:leading-[66px] -tracking-[0.15em]">
                CONSULTING
              </h2>
              <p className="text-[8px] md:text-[20px]">
                Місія – допомагати розвиватись.
                <br />
                Людям. Компаніям. Країні.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-bgColor text-[8px] md:text-base leading-[17px] md:leading-[40px] -tracking-[0.01em]">
              Учасників тренінгів
              <br />
              <span className="text-xs md:text-[28px] md:leading-7 font-medium tracking-[0.1em]">
                10 000+
              </span>
            </p>
            <p className="flex flex-col text-[8px] md:text-base md:leading-4 -tracking-[0.01em] text-right">
              Загальний <br className="xl:hidden" />
              надприбуток клієнтів
              <span className="text-[12px] md:text-[28px] font-normal leading-[13px] md:leading-[28px]  tracking-[0.1em]">
                $10&nbsp;000&nbsp;000+
              </span>
              <p className="flex flex-col text-[8px] md:text-base md:leading-4 -tracking-[0.01em] text-right">
                <span className="text-[12px] md:text-[28px] font-medium leading-[13px] md:leading-[28px]  tracking-[0.1em]">
                  $10 000 000+
                </span>
              </p>
            </p>
          </div>
          <div className="w-[223px] md:w-[381px] absolute bottom-[-7px] md:bottom-[-12px] left-1/2 md:left-[43%] transform translate-x-[-50%] z-10 object-cover">
            <Image
              src={`/images/hero-1250.png`}
              alt="Ілля Мушковський"
              width={625}
              height={659}
              priority
            />
          </div>
        </div>
      </Container>
      <div className="absolute -z-10 flex top-0 h-full w-full ">
        <div className="w-[49%] bg-black overflow-hidden relative">
          <p class="absolute -left-7 md:left-[-200px] -top-4 md:top-0 opacity-5 text-[482px] md:text-[798px] leading-[482px] -tracking-[0.12em] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#d9d9d900] to-white">
            IM
          </p>
        </div>
        <div className="bg-accent  w-[51%]"></div>
      </div>
    </section>
  );
};

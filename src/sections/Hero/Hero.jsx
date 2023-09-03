import { Container } from '@/components/Container';
import Image from 'next/image';
import HeroImg from '../../../public/images/hero-1250.png';

export const Hero = () => {
  return (
    <section className="relative h-auto pt-[74px] md:pt-[120px] xl:pt-[168px] overflow-hidden">
      <Container>
        <div className="relative h-[270px] md:h-[450px] xl:h-[539px]">
          <div className="flex justify-between tracking-[-0.04em] mb-[26px] md:mb-[62px] xl:mb-[232px]">
            <p className="text-xs md:text-[28px] xl:text-[24px] text-accent max-w-[94px] md:max-w-[224px] xl:max-w-[270px] xl:ml-[204px] leading-[15px] md:leading-[28px] xl:leading-[24px]">
              Не чекай успіху - створи його разом з нами
            </p>
            <div className="text-right">
              <h1 className="text-[8px] md:text-[28px] xl:text-[32px] leading-[8px] md:leading-[28px] xl:leading-[32px]">
                Ілля <span className="font-bold">Мушковський</span>
              </h1>
              <h2 className="text-font24 md:text-[66px] xl:text-[97px] leading-6 md:leading-[66px] xl:leading-[97px] -tracking-[0.15em]">
                CONSULTING
              </h2>
              <p className="text-[8px] md:text-[20px] xl:text-[24px] ">
                Місія – допомагати розвиватись.
                <br />
                Людям. Компаніям. Країні.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div className="flex flex-col text-bgColor text-[8px] md:text-base leading-[17px] md:leading-[40px] xl:leading-[24px] -tracking-[0.01em]">
              <p>Учасників тренінгів</p>
              <span className="text-xs md:text-[28px] xl:text-[32px] md:leading-7 xl:leading-[32px] font-medium tracking-[0.1em]">
                10 000+
              </span>
            </div>

            <p className="flex flex-col text-[8px] md:text-base md:leading-[16px] xl:leading-[24px] -tracking-[0.01em] text-right">
              Загальний <br className="xl:hidden" />
              надприбуток клієнтів
              <span className="text-[12px] md:text-[28px] xl:text-[32px] font-medium leading-[13px] md:leading-[28px]  xl:leading-[32px] tracking-[0.1em]">
                $10 000 000+
              </span>
            </p>
          </div>
          <div className="h-[235px] md:h-[403px] xl:h-[659px] w-[223px] md:w-[381px] xl:w-[625px] absolute bottom-[-7px] md:bottom-[-12px] xl:bottom-[-17px] left-1/2 md:left-[43%] xl:left-[52%] transform translate-x-[-50%] z-10 object-cover">
            <Image
              src={HeroImg}
              alt="Ілля Мушковський"
              priority
              width={625}
              height={659}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </Container>
      <div className="absolute -z-10 flex top-0 h-full w-full ">
        <div className="w-[49%] xl:w-[55%] bg-black overflow-hidden relative">
          <p className="absolute right-[-113px] md:right-[-136px] xl:right-[-40px] top-[-76px] md:top-[-214px] xl:top-[-153px] opacity-5 text-[482px] md:text-[798px] xl:text-[980px] leading-[482px] md:leading-[976px] -tracking-[0.12em] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#d9d9d900] from-30% to-white">
            IM
          </p>
        </div>
        <div className="bg-accent  w-[51%] xl:w-[45%]"></div>
      </div>
    </section>
  );
};

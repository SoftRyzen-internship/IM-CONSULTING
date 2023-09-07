const currentPage =
  typeof window !== 'undefined' ? window.location.pathname : '';
console.log(currentPage);

// Создайте объект, который будет содержать контент для разных страниц
// const pageContent = {
//   '/trainings': {
//     title: 'Тренінги',
//     subtitle: 'Шукаймо рішення усюди',
//     description: 'Відкритість - наш ключ до успіху',
//     text: 'Створіть свій шлях до досягнення цілей у житті, карєрі та бізнесі',
//   },
//   '/couching': {
//     title: 'Коучинг"',
//     subtitle: 'Подолай власні виклики',
//     description: 'Вирішимо найскладніші завдання разом',
//     textt:
//       'Персоналізовані підходи для розвитку вашого життя, кар`єри та бізнесу',
//   },
//   '/consulting': {
//     title: 'Консалтинг"',
//     subtitle: 'Змінюймо світ крок за кроком',
//     description: 'Збудуємо майбутнє разом',
//     textt:
//       'Отримайте індивідуальні рекомендації від експерта для свого успіху.',
//   },
//   // Добавьте другие страницы и их контент по аналогии
// };

// Выберите контент для текущей страницы
// const currentPageContent = pageContent[currentPage];
export const HeroForPagesContent = () => {
  return (
    <>
      <div className="flex justify-end mb-[26px] md:mb-[62px] xl:mb-[232px]">
        <h1 className="text-xs md:text-[28px] xl:text-[72px] text-accent leading-[15px] md:leading-[28px] xl:leading-[88px] tracking-[0.1em] absolute xl:left-[111px]">
          Консалтинг
        </h1>
        <div className="flex flex-col items-end">
          <p className="text-[8px] md:text-[28px] xl:text-[32px] leading-[8px] md:leading-[28px] xl:leading-[32px]">
            Змінюймо світ крок за кроком
          </p>
        </div>
      </div>
      <div className="flex justify-between xl:justify-end items-end">
        <div className="xl:absolute xl:left-[32px] xl:bottom-[65px] flex flex-col text-bgColor text-[8px] md:text-base leading-[17px] md:leading-[40px] xl:leading-[24px]">
          <p>Збудуємо майбутнє разом</p>
        </div>

        <div className="flex flex-col items-end text-[8px] md:text-base md:leading-[16px] xl:leading-[24px] -tracking-[0.01em] text-right ">
          <p className="max-w-[92px] md:max-w-[186px] xl:max-w-[260px] ">
            Отримайте індивідуальні рекомендації від експерта для свого успіху.
          </p>
        </div>
      </div>
    </>
  );
};

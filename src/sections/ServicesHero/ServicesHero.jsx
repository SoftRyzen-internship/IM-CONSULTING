'use client';
import { Container } from '@/components/Container';
import { HeroForPagesContent } from '@/components/HeroForPagesContent/HeroForPagesContent';
import { labelToLink } from '@/helpers';

export const ServicesHero = () => {
  function getCurrentPage() {
    if (typeof window !== 'undefined') {
      // Получаем полный путь текущего URL
      const currentPath = window.location.pathname;

      // Далее, вы можете провести проверки на основе этого пути,
      // чтобы определить, какая страница сейчас открыта.
      // Например, проверьте, содержит ли путь определенные ключевые слова.

      if (currentPath.includes('/trainings')) {
        return 'Trainings';
      } else if (currentPath.includes('/couching')) {
        return 'Головна';
      } else if (currentPath.includes('/consalting')) {
        return 'Головна';
      } else if (currentPath.includes('/')) {
        return 'Головна';
      } else {
        // Если не удалось определить страницу, верните значение по умолчанию или обработайте по-другому.
        return 'Неизвестная страница';
      }
    }
  }

  // Пример использования getCurrentPage
  const currentPage = getCurrentPage();
  console.log(`Текущая страница: ${currentPage}`);
  const id = labelToLink('Головна');

  return (
    <section id={id} className="services-hero-bg relative h-auto ">
      <Container className="relative pt-[104px] md:pt-[120px] xl:pt-[141px] pb-[56px] md:pb-[126px] xl:pb-[200px] overflow-hidden">
        <HeroForPagesContent />
      </Container>
    </section>
  );
};

const dictionaries = {
  trainings: () => import('@/data/form.json').then(r => r.default),
  coaching: () => import('@/data/footer.json').then(r => r.default),
  consulting: () => import('@/data/socials.json').then(r => r.default),
};

export const getDictionary = async locale => {
  return await dictionaries[locale]();
};

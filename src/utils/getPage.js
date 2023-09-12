const pages = {
  trainings: () =>
    import('@/data/services/trainings.json').then(r => r.default),
  coaching: () => import('@/data/services/coaching.json').then(r => r.default),
  consulting: () =>
    import('@/data/services/consulting.json').then(r => r.default),
};

export const getPage = async services => {
  return await pages[services]();
};

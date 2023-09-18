export const getSeoPage = async services => {
  return await import(`@/data/services/seo.${services}.json`).then(
    r => r.default,
  );
};

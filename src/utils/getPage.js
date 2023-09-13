export const getPage = async services => {
  return await import(`@/data/services/${services}.json`).then(r => r.default);
};

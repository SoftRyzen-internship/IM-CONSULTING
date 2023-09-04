export const getDefaultFormValues = () => {
  if (typeof window !== 'undefined') {
    const storedForm = localStorage.getItem('form');
    if (storedForm) {
      const [name, email, message] = Object.values(JSON.parse(storedForm));
      return { name, email, message };
    }
  }
  return { name: '', email: '', message: '' };
};

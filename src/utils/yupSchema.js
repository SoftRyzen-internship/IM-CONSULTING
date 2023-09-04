import * as Yup from 'yup';

import data from '@/data/data.json';

export const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, data.form.nameInvalid)
    .max(70, data.form.nameInvalid)
    .matches(
      /^(?!.*(\s-|-\s)|.*--|.*——|.*––|.*–\s|.*\s–|.*—\s|.*\s—)[а-яА-Яa-zA-Z\s'’\-–—ЇїІіЄєҐґ]*$/,
      data.form.nameInvalid,
    )
    .required(data.form.nameInvalid),
  email: Yup.string()
    .min(6, data.form.emailInvalid)
    .max(63, data.form.emailInvalid)
    .matches(
      /^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/,
      data.form.emailInvalid,
    )
    .required(data.form.emailInvalid),
  message: Yup.string()
    .required(data.form.msgInvalid)
    .max(300, data.form.msgInvalid),
});

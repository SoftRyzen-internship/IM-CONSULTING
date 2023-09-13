import * as Yup from 'yup';

import form from '@/data/form.json';

export const formSchema = Yup.object().shape({
  message: Yup.string()
    .trim()
    .required(form.msgInvalid)
    .min(3, form.msgInvalid)
    .max(500, form.msgInvalid),
  email: Yup.string()
    .trim()
    .required(form.emailInvalid)
    .min(6, form.emailInvalid)
    .max(63, form.emailInvalid)
    .matches(
      /^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/,
      form.emailInvalid,
    ),
  name: Yup.string()
    .trim()
    .required(form.nameInvalid)
    .min(3, form.nameInvalid)
    .max(70, form.nameInvalid)
    .matches(
      /^(?!.*(\s-|-\s)|.*--|.*——|.*––|.*–\s|.*\s–|.*—\s|.*\s—)[а-яА-Яa-zA-Z\s'’\-–—ЇїІіЄєҐґ]*$/,
      form.nameInvalid,
    ),
});

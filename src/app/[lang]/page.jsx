import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params }) {
  const lang = await getDictionary(params.lang);

  return (
    <>
      {lang && (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <form>
            <div>
              <label>{lang.form.name}</label>
              <input type="text" />
            </div>
            <div>
              <label>{lang.form.email}</label>
              <input type="email" />
            </div>
            <div>
              <label>{lang.form.city}</label>
              <input type="text" />
            </div>
          </form>
        </main>
      )}
    </>
  );
}

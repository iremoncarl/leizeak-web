//import {getTranslations} from 'next-intl/server';

export default async function Home() {
  //const t = await getTranslations('PagInicio');

  return (
    <main className="p-10">
      <h1 className="font-serif text-4xl font-semibold">
        {/*t('titulo')*/}
        Inicio
      </h1>
      <br/>
    </main>
  );
}

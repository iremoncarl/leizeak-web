import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function getPrueba() {
  const { data, error } = await supabase.from('prueba2').select('*').limit(1);
  if (error) {
    console.error('Error fetching data:', error);
    return null;
  }
  else {
    console.log(data)
  }
  return data[0];
}
export default async function Home() {
  const prueba = await getPrueba();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Esto es una prueba
          </h1>
          
          <div>
            { JSON.stringify(prueba) }
          </div>
       
      </main>
    </div>
  );
}

/*
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
*/
/*
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
  */
export default async function Home() {
  //const prueba = await getPrueba();

  return (
    <div>
      <main>
      
          <h1 className="text-3xl font-semibold">
            Esto es una prueba
          </h1>
          
          <div>
            { /*JSON.stringify(prueba)*/ }
            Hola
          </div>
       
      </main>
    </div>
  );
}

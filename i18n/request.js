import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';

export default getRequestConfig(async () => {
 
  const store = await cookies();

  //Se obtiene el idioma almacenado en la cookie "locale"
  //Si no existe, se establece el idioma por defecto como español ('es')
  const locale = store.get('locale')?.value || 'es';

  return {
    //Idioma activo que utilizará la aplicación
    locale, 
    //Carga dinámica del archivo de traducciones
    messages: (await import(`../messages/${locale}.json`)).default 
  };
});
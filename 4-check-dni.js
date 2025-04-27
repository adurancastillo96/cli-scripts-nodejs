// ¡Buen prompt!
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Esto es para poder usar __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Obtener el DNI desde la línea de comandos
const dniBuscado = process.argv[2];

if (!dniBuscado) {
  console.error(
    'Por favor, proporciona un DNI. Ejemplo: node 4-check-dni.js 10000086P'
  );
  process.exit(1);
}

async function buscarDNI() {
  try {
    const rutaArchivo = path.join(__dirname, 'dnis_con_deuda.txt');
    const contenido = await readFile(rutaArchivo, 'utf-8');

    // Cada línea corresponde a un registro
    const lineas = contenido.split('\n').filter(Boolean);

    // Buscar el DNI
    const registro = lineas.find((linea) => linea.startsWith(dniBuscado + ','));

    if (registro) {
      const [, deuda] = registro.split(',');
      console.log(
        `El contribuyente ${dniBuscado} le toca pagar ${deuda.trim()}`
      );
    } else {
      console.log(`El contribuyente ${dniBuscado} no le toca pagar`);
    }
  } catch (error) {
    console.error('Error al leer el archivo:', error.message);
    process.exit(1);
  }
}

buscarDNI();

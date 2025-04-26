// URL problema: https://www.codewars.com/kata/593b1909e68ff627c9000186

function nicknameGenerator(name) {
  /** Por favor, no uses estructuras o herramientas que no hemos visto en clase  */

  /** Comprobar si el nickname tiene menos de 4 letras */

  if (name.length < 4) {
    return 'Error: Name too short';
  }

  //* obtener la tercera letra del nombre*//

  const terceraletra = name[2];

  //*cuales son vocales*//

  const vocales = ['a', 'e', 'i', 'o', 'u'];

  //* si la tercera letra es vocal, devover las primeras 4 letras*//

  if (vocales.includes(terceraletra.toLowerCase())) {
    return name.slide(0, 4);
  }

  //* si la tercera letra no es vocal, devolver las 3 primeras letras*//

  return name.slice(0, 3);
}

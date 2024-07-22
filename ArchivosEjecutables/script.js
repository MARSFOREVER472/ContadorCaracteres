// SE AGREGA UN MENSAJE INICIAL A LA PÁGINA WEB MDIANTE FORMATO EN HTML:

let user_in = prompt("INTRODUCE UN TEXTO: ");

// SE PUEDE DEFINIR TU TEXTO YA INGRESADO!!!
// user_in = 'My original texxxxxt is juxt here! Take a lxxk atx thatx!';

let myChar = 'x'; // UTILIZAREMOS UNA X PARA CONTABILIZAR ESTE CARACTER DENTRO DE UNA SENTENCIA.
contadorLetra = 0; // INICIAREMOS A 0 EL CONTADOR DE UNA LETRA ELEGIDA ANTERIORMENTE.

// MEDIANTE UN CICLO "for", CONTABILIZAREMOS LA LETRA X DENTRO DE UN TEXTO INGRESADO...

for (let i = 0; i < user_in.length; i++)
{
    if (user_in.charAt(i) === myChar)
    {
        contadorLetra++;
    }
}

console.log(`HAS ENCONTRADO ${contadorLetra} LETRAS '${myChar}' DENTRO DE ESTE TEXTO!!!!!`);
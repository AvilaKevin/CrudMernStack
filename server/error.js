export const createError = (status, message) => {
    // Dentro de la funcion creamos nuestro error con los parametros recibidos
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
};
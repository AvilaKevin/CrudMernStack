// En las funciones de los controladores tenemos los siguiente parametros:
// req: representa lo que estamos objetiendo del usuario.
// res: lo que estamos enviandole al usuario
export const test = (req, res) => {
    res.json("Its successfull");
    console.log("test is working");
};
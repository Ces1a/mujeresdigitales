import { useState } from "react";

export const useForms = (ValorDefecto,validaciones) => {
    const [form, setForm] = useState(ValorDefecto);
    const [errores, serErrores] = useState({});
    const [cargado, setCargando] = useState(false);
    const [bd, setBd] = useState();
    const [respuesta, setRespuesta] = useState(false);



    const manejadorCambios = (element) => {
        const { name, value } = element.target;
        setForm({
            ...form,
            [name]: value
        })

        // console.log(form)
    };

    const maejadorSalidaInput = (element) => {
        manejadorCambios(element)
        serErrores(validaciones(form));
    };

    const enviarFormulario = (element) => {
        element.preventDefault();
        serErrores(validaciones(form));

        if (Object.keys(errores).length === 0) {
            setCargando(true)
            try {
                // const status = axios.post('/api/falsa/usuario',{
                //     body: form
                // })
                // if (status === 201) {
                //     console.log('se ha guardado exitosamente')
                //     setCargando(false)
                // }else{
                //     return
                // }


                setTimeout(() => {
                    setBd(form)
                    setCargando(false)
                    setRespuesta(true)
                }, 2000);

            } catch (error) {
                setRespuesta(false);
                console.log('ocurrio un error al guardar');
            }
        } else {
            return;
        }
    };

    return {
        form,
        errores,
        cargado,
        bd,
        respuesta,
        manejadorCambios,
        maejadorSalidaInput,
        enviarFormulario
    };
};
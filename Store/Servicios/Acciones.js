import CONSTANTES from '../Sagas/Constantes'


export default actionRegistro = (values) => (
    { type:CONSTANTES.REGISTRO, datos: values }
)

export const actionEstablecerSesion = (values) =>(
    {type: CONSTANTES.ESTABLECER_SESION, datos: values}
)

export const actionCerrarSesion = () =>(
    {type: CONSTANTES.CERRAR_SESION }
)

export const actionFacebookLogin = (values) =>(
    {type: CONSTANTES.LOGIN_FACEBOOK, datos:values }
)

export const actionImagenSeleccionada = (values) =>{
    return {type:'ooo' , datos:values}
}




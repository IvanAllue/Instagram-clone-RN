import CONSTANTES from '../Sagas/Constantes'


export const actionLogin = (values) =>(
    {type: CONSTANTES.LOGIN, datos: values}
)

export default actionRegistro = (values) => (
    { type:CONSTANTES.REGISTRO, datos: values }
)

export const actionEstablecerSesion = (values) =>(
    {type: CONSTANTES.ESTABLECER_SESION, datos: values}
)

export const actionCerrarSesion = () =>(
    {type: CONSTANTES.CERRAR_SESION }
)

export const loginFacebook = (values) =>(
    {type: CONSTANTES.LOGIN_FACEBOOK, datos:values }
)
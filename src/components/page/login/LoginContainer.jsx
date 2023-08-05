import { useFormik } from "formik"
import * as Yup from "yup"
import Login from "./Login";
import Swal from "sweetalert2"



const LoginContainer = () => {

    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
        },
        onSubmit: (data)=>{
      Swal.fire({
       position: 'top-center',
       icon: 'success',
       title: 'Usuario creado',
       showConfirmButton: true,
       timer: 1500
     })
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Este campo es obligatorio"),
            email: Yup.string()
                .email("No es un formato de email válido")
                .required("Este campo es obligatorio"),
            password: Yup.string()
                .required("Este campo es obligatorio").matches(/^(?=.*\d)(?=.*[!@#$%^&*.])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
                    message: "La contraseña debe tener entre 6 y 15 caracteres, un número, un símbolo, una minúscula y una mayúscula.",
                }),
            repeatPassword: Yup.string()
                .required()
                .oneOf([Yup.ref("password")], "La contraseña no coincide")
        }),
        validateOnChange: false,
    })


    return <Login handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />;

    }

export default LoginContainer
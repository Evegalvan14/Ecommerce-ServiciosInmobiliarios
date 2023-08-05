import { Button, TextField } from "@mui/material"
import "./Login.css"

const Login = ({ handleSubmit, handleChange, errors }) => {
    return (
        <div className="login-container">
            <h1>Inicia sesión o Crea una cuenta</h1>
            <form onSubmit={(handleSubmit)} className="login-form">
                <TextField 
                    type="text" 
                    label="Nombre" 
                    name="name" 
                    className="login-input"
                    variant="outlined" 
                    error={errors.name ? true : false} 
                    helperText={errors.name} 
                    onChange={handleChange} />
                <TextField 
                    type="text" 
                    label="Email" 
                    name="email" 
                    className="login-input"
                    variant="outlined" 
                    error={errors.email ? true : false} 
                    helperText={errors.email} 
                    onChange={handleChange} />
                <TextField 
                    type="password" 
                    label="Contraseña" 
                    name="password" 
                    className="login-input"
                    variant="outlined" 
                    error={errors.password ? true : false} 
                    helperText={errors.password} 
                    onChange={handleChange} />
                <TextField 
                    type="password" 
                    label="Repite la contraseña" 
                    name="repeatPassword" 
                    className="login-input"
                    variant="outlined" 
                    error={errors.repeatPassword ? true : false} 
                    helperText={errors.repeatPassword} 
                    onChange={handleChange} />
                <Button variant="contained" type="submit">Enviar</Button>
            </form>
        </div>
    )
}

export default Login
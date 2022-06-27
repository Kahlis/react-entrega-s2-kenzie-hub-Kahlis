import React from "react";
import { CenteredContent } from "./style";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email("Email inválido")
            .required("O campo de email é obrigatório!"),
        password: yup.string().required("O campo de senha é obrigatório!"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const submitLogin = (data) => {
        console.log(data);
    };

    const reportErrors = () => {
        Object.keys(errors).forEach((error) => {
            toast(errors[error].message, {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
                type: "error",
            });
        });
    };

    return (
        <>
            <CenteredContent>
                <main>
                    <h1>Kenzie Hub</h1>
                    <div className="form">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit(submitLogin)}>
                            <label>Email</label>
                            <input type="text" {...register("email")} />
                            <label>Senha</label>
                            <input type="password" {...register("password")} />
                            <button onClick={reportErrors}>Entrar</button>
                        </form>
                        <label className="no-account">
                            Ainda não possui uma conta?
                        </label>
                        <Link to="/register">
                            <button className="register-btn" type="button">
                                Cadastre-se
                            </button>
                        </Link>
                    </div>
                </main>
            </CenteredContent>
            <ToastContainer />
        </>
    );
}

export default Login;

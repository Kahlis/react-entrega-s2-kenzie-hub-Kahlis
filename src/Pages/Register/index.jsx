import React from "react";
import { CenteredContent } from "./style";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
    const schema = yup.object().shape({
        name: yup
            .string()
            .required("O campo nome é obrigatório")
            .min(3, "Insira ao menos 3 characteres"),
        email: yup
            .string()
            .required("O campo email é obrigatório")
            .email("Email inválido"),
        password: yup
            .string()
            .required("O campo senha é obrigatório")
            .matches(
                /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,}$/,
                "A senha deve conter ao menos uma letra minúscula, maiúscula, um número e ao mínimo 8 characteres"
            ),
        rePassword: yup
            .string()
            .oneOf(
                [yup.ref("password")],
                "As senhas devem ser iguais no campo senha e confirmação de senha"
            ),
        bio: yup
            .string()
            .max(255, "Sua bio deve ter no máximo 255 characteres."),
        contact: yup
            .string()
            .max(15)
            .required("O campo de contato é obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const submitLogin = (data) => {
        toast("Usuário cadastrado com sucesso", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            type: "success",
        });
    };

    const reportErrors = () => {
        Object.keys(errors).forEach((error) => {
            toast(errors[error].message, {
                position: "bottom-right",
                autoClose: 5000,
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
                    <div className="header">
                        <h1>Kenzie Hub</h1>
                        <Link to={"/login"}>
                            <button className="back-btn">Voltar</button>
                        </Link>
                    </div>

                    <div className="form">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit(submitLogin)}>
                            <label>Nome</label>
                            <input
                                type="text"
                                placeholder="Digite aqui seu nome"
                                {...register("name")}
                            />
                            <label>Email</label>
                            <input
                                type="text"
                                placeholder="Digite aqui seu email"
                                {...register("email")}
                            />
                            <label>Senha</label>
                            <input
                                type="password"
                                placeholder="Digite aqui sua senha"
                                {...register("password")}
                            />
                            <label>Confirmar senha</label>
                            <input
                                type="password"
                                placeholder="Digite novamente sua senha"
                                {...register("rePassword")}
                            />
                            <label>Bio</label>
                            <textarea
                                type="text"
                                placeholder="Fale um pouco sobre você"
                                {...register("bio")}
                            />
                            <label>Contato</label>
                            <input
                                type="text"
                                placeholder="Opções de contato"
                                {...register("contact")}
                            />
                            <label>Selecionar módulo</label>
                            <select
                                type="text"
                                placeholder="Selecione seu módulo atual"
                                onChange={(e) =>
                                    setValue("select", e.target.value, {
                                        shouldValidate: true,
                                    })
                                }
                                {...register("module")}
                            >
                                <option value={"M1"}>M1</option>
                                <option value={"M2"}>M2</option>
                                <option value={"M3"}>M3</option>
                                <option value={"M4"}>M4</option>
                                <option value={"M5"}>M5</option>
                                <option value={"M6"}>M6</option>
                                <option value={"Q3"}>Q3</option>
                                <option value={"Q4"}>Q4</option>
                            </select>
                            <button onClick={reportErrors}>Entrar</button>
                        </form>
                    </div>
                </main>
            </CenteredContent>
            <ToastContainer />
        </>
    );
}

export default Register;

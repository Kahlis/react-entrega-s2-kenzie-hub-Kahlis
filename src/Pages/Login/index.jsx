import React from "react";
import { CenteredContent } from "./style";

function Login() {
    return (
        <CenteredContent>
            <main>
                <h1>Kenzie Hub</h1>
                <div className="form">
                    <h2>Login</h2>
                    <form>
                        <label>Email</label>
                        <input type="text" />
                        <label>Senha</label>
                        <input type="password" />
                        <button>Entrar</button>
                        <label className="no-account">
                            Ainda não possui uma conta?
                        </label>
                        <button className="register-btn">Cadastre-se</button>
                    </form>
                </div>
            </main>
        </CenteredContent>
    );
}

export default Login;

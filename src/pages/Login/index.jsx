import styles from "./Login.module.css";

import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentications";

const Login = () => {
    // inputs state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const auth = useAuthentication();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setError("");
  
      const user = {
        email,
        password,
      };
  
      const res = await auth.login(user);
  
      console.log(res);
    };
  
    useEffect(() => {
      if (auth.error) {
        setError(auth.error);
      }
    }, [auth.error]);

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail de usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p className="error">{error}</p>}
        {auth.loading ? (
          <button style={{ margin: "1.6rem auto" }} disabled className="btn">
            Carregando...
          </button>
        ) : (
          <button style={{ margin: "1.6rem auto" }} className="btn">
            Entrar
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;

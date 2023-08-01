import { useEffect, useState } from "react";
import styles from "./Register.module.css";
import { useAuthentication } from './../../hooks/useAuthentications'

const Register = () => {
  // inputs state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const auth = useAuthentication();



  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }

    const res = await auth.createUser(user);

    console.log(res);
  };

  useEffect(() => {
    if (auth.error) {
      setError(auth.error)
    }
  }, [auth.error])

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome de usuário"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
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
        <label>
          <span>Confirmar:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {error && <p className="error">{error}</p>}
        {auth.loading ? (<button style={{ margin: "1.6rem auto" }} disabled className="btn">Carregando...</button>) : (<button style={{ margin: "1.6rem auto" }} className="btn">Cadastrar</button>)}
      </form>
    </div>
  );
};

export default Register;

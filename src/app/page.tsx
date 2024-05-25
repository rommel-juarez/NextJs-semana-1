import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {

  let ClaveValor={
    hola:"saludos",
    suma: 2+2
  }
  return (
    <div className={styles.container}>
    <div className={styles.login}>
      <h2>Iniciar Sesión</h2>
      <form>
        <input 
          type="text" 
          name="username" 
          placeholder="Nombre de usuario" 
          required 
          className={styles.input} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Contraseña" 
          required 
          className={styles.input} 
        />
        <input
          type="submit"
          value="Iniciar Sesión" 
          className={styles.button} 
        />
      </form>
    </div>
  </div>
  );
}
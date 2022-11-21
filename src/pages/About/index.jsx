import styles from "./About.module.css";
import euwal from "../../assets/euwal.png";

export default function About() {
  return (
    <div className={styles.aboutcontainer}>
      <img className={styles.photo} src={euwal} alt="Walisson" />

      <p className={styles.aboutcontent}>
        <p>
          Ei, eu sou Walisson, um desenvolvedor frontEnd atualmente morando em
          Paulista, PE.
        </p>
        <p>
          No momento, estou trabalhando na KorpViaSoft, projetando e construindo
          sistemas ERP. Antes disso, trabalhei na{" "}
          <a href="#">Marinha do Brasil</a>, concurso realizado em 2017.
        </p>

        <p>
          {" "}
          Eu cresci em Pernambuco nos arredores de Paulista (a distância
          perfeita da cidade enquanto me divertia pelos rios, parques com
          amigos. Venho de uma formação de estudo de Análise e Desenvolvimento
          de Sistemas. Adoro trabalhar na área de códigos. Algumas coisas que me
          animam são CSS, React e interfaces.
        </p>

        <p>
          Nas horas vagas adoro estar ao ar livre, ler livros, treinar 🏋🏽,
          surfar 🏄 e viajar ✈️.
        </p>
      </p>
      <div className={styles.buttonemail}>
        <a className={styles.myemail} href="mailto:walissonsouza96@hotmail.com">
          <button className={styles.buttons}>Contate me</button>
        </a>
      </div>
    </div>
  );
}

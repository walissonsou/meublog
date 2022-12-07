import styles from "./About.module.css";
import euwal from "../../assets/euwal.png";

import emailjs from '@emailjs/browser'
import { useState } from 'react'

export default function About() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  function sendEmail(e){
    e.preventDefault()
    if(name === '' || email === '' || text === ''){
      alert('Preencha todos os campos')
      return
    }
    const templateParams = {
      from_name: name,
      message: text,
      email: email
    }

   emailjs.send('service_jrte1ll', 'template_73hsets', templateParams, 'JToFexn9HGHuckn0s')
   .then((res) => {
    console.log('Enviei', res.status, res.text)
    setName('')
    setEmail('')
    setText('')
   }, (err) => {
    console.log('ERRO:',err)
   }) 
  }

  return (
    <div className={styles.aboutcontainer}>
      <img className={styles.photo} src={euwal} alt="Walisson" />

      <p className={styles.aboutcontent}>
        <p>
          Ei, eu sou Walisson, um Desenvolvedor FullStack atualmente morando em
          Paulista, PE.
        </p>
        <p>
          No momento, estou trabalhando na KorpViaSoft, projetando e construindo
          sistemas ERP.
        </p>

        <p>
          {" "}
          Eu cresci em Pernambuco nos arredores de Paulista (a distância
          perfeita da cidade enquanto me divertia pelos rios e parques com
          amigos). Venho de uma formação de estudo de Análise e Desenvolvimento
          de Sistemas. Adoro trabalhar na área de códigos. Algumas coisas que me
          animam são Banco de dados, Python, CSS, React e inovação.
        </p>

        <p>
          Nas horas vagas adoro estar ao ar livre, ler livros, treinar 🏋🏽,
           e viajar ✈️.
        </p>
      </p>          
      <h1 className="h1Form">
            Contate - me
      </h1>
      <div className={styles.containerForm}>
        
        <form className="form" onSubmit={() => {}} >
       
          <input 
            className="input"
            type="text"
            placeHolder="Digite seu nome"
            required
            onChange={ e => setName(e.target.value)}
            value={name}
          />
            <input 
            className="input"
            type="email"
            pattern=".+@globex\.com" 
            required
            placeHolder="Digite seu email"
            onChange={ e => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            className="textarea"            
            placeHolder="Digite seu nome"
            onChange={ e => setText(e.target.value)}
            value={text}         
          
           />
          <button className='sendForm' id="sendForm" type="submit" value='Enviar' onClick={sendEmail}> Enviar </button>
        </form>
      </div>




      {/* <div className={styles.buttonemail}>
        <a className={styles.myemail} href="mailto:walissonsouza96@hotmail.com">
          <button className={styles.buttons}>Contate-me</button>
        </a>
      </div> */}
    </div>
  );
}

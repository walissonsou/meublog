import styles from "./About.module.css";
import euwal from "../../assets/euwal.png";

import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { useForm, formState } from 'react-hook-form'

export default function About() {


  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      email: '',
      name: '',
      text: ''
    }
  })
  const { errors } = formState

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  function sendEmail(data){     

    const templateParams = {
      from_name: data.name,
      message: data.text,
      email: data.email
    }

   emailjs.send('service_jrte1ll', 'template_73hsets', templateParams, 'JToFexn9HGHuckn0s')
   .then(() => {   
    reset()
   }, (err) => {
    console.log(err)
   }) 
  }

  return (
    <div className={styles.aboutcontainer}>
      <img className={styles.photo} src={euwal} alt="Walisson" />

      <div className={styles.aboutcontent}>
        <p>
          Ei, eu sou Walisson, um Desenvolvedor Front-End atualmente morando em
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
      </div>          
      <h1 className="h1Form">
            Contate - me
      </h1>
      <div className={styles.containerForm}>
        
        <form className="form" onSubmit={handleSubmit(sendEmail)} >
       
          <input 
            className="input"
            type="text"
            placeholder="Digite seu nome"
            required
            onChange={ e => setName(e.target.value)}
            {...register('name', {required: 'oi oi'})} 
                    
            />
            <input 
            className="input"
            type="email"          
            required
            placeholder="Digite seu email"
            onChange={ e => setEmail(e.target.value)}
            {...register('email')}
            
       
          />
          <textarea
            className="textarea"            
            placeholder="Digite seu nome"
            onChange={ e => setText(e.target.value)}
            {...register('text')} 
          
           />
          <button className='sendForm' id="sendForm" type="submit" value='Enviar' onClick={() => sendEmail()}> Enviar </button>
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

// // import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';


//n.1 creo un oggetto di base
const initialFormdata = {
  author: "",
  title: "",
  body: ""

};



function App() {
  //n.5 creo un variabile di stato che abbia al suo interno il valore iniziale dell'oggetto
  const [formData, setFormData] = useState(initialFormdata)
  //n.10 aggiungo variabile di stato della card che genero dell'articolo
  const [cardArticolo, setCardArticolo] = useState([]);

  // n.2 crepo delle variabili di stato legate agli input da inserire
  // const [author, setAuthor] = useState("");
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");

  //n.6 creo una funzione che mi aggiorni i dati di ogni variabile di stato con all'interno un oggetto che racchiuda le variabili di stato
  function updateAuthor(event) {
    const newOggetto = {
      author: event.target.value,
      title: formData.title,
      body: formData.body

    }
    setFormData(newOggetto);
  }

  function updateTitle(event) {
    const newOggetto = {
      author: formData.author,
      title: event.target.value,
      body: formData.body

    }
    setFormData(newOggetto);
  }

  function updateBody(event) {
    const newOggetto = {
      author: formData.author,
      title: formData.title,
      body: event.target.value

    }
    setFormData(newOggetto);
  }

  // n.9 creo la funzione aggiungi Card Articolo
  function aggiungiArticolo(event) {
    event.preventDefault();
    setCardArticolo((current) => [...current, formData])
      setFormData(initialFormdata);
  }




  return (
    <>
      <header className='bg-warning py-3'><h1 className='container'>Il mio Blog </h1></header>

      <section className='container py-5'>
        <div className='row'>


          {/* n.4 inserisco il form per gestire il submit dei dati senza onSubmit */}
          {/* n.8 aggiungo funzione aggiungi articolo */}
          <form onSubmit={aggiungiArticolo}>

            {/* n.3 creo l'input */}
            <div className='col-6 border'>
              <label htmlFor="author">Autore</label>
              <input id="author"
                type="text"
                value={formData.author}
                className='form-control'
                onChange={updateAuthor} />
            </div>

            <div className='col-6 border'>
              <label htmlFor="title">Titolo</label>
              <input id="title"
                type="text"
                value={formData.title}
                className='form-control'
                onChange={updateTitle} />
            </div>

            <div className='col-6 border'>
              <label htmlFor="body">Articolo</label>
              <input id="author"
                type="text"
                value={formData.body}
                className='form-control'
                onChange={updateBody} />
            </div>

            {/* n.8 aggiungo bottone per submit form */}
            <button className='btn btn-primary' type='submit'>Aggiungi</button>

          </form>
        </div>
      </section >


      {/* n.7 creo la sezione articolo */}
      <section className='container'>
        {cardArticolo.map((articolo, index)=>
        <div key ={index} className='container border'>
          <h2>{articolo.title}</h2>
          <h4>{articolo.author}</h4>
          <p>{articolo.body}</p>

        </div>
        
        )}
        
      </section>

    </>
  )
}

export default App

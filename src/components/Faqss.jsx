import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Faqss = () => {
    const [faaqs, setFaaqs] = useState([]);
    const [clases, setClases] = useState("");
   

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('/faqs.json');
            const data = await response.json();
            // Agregar la propiedad "view" a cada elemento del array
            const productsWithView = data.map((f) => ({
              ...f,
              view: false
            }));
            setFaaqs(productsWithView);
          } catch (error) {
            console.error('Error al buscar los productos', error);
          }
        };
        fetchProducts();
      }, []);

    if(faaqs.id == 1){
        setClases("visible")
        if(faaqs.id == 2){
            setClases("visible2")
        }
        if (faaqs.id == 3){
            setClases("visible3")
        }
    }

    const handleClick = (index) => {
        setFaaqs((fqs) => {
          return fqs.map((f, i) => {
            if (i === index) {
              return {
                ...f,
                view: !f.view
              };
            }
            return f;
          });
        });
    }
    
  return (
    <main className='faqs'>
      <Helmet>
        <title> Preguntas Frecuentes - Cook4Soul</title>
      <meta name='keywords' content='alfajores veganos, alfajores veganos en España, España, alfajores argentinos, alfajores sanos en Madrid, alfajores, saludable, veggie, Madrid, alfajores sin TACC, SIN TACC'/>
      <meta name='description' content='pastelería vegana, Elaboramos productos 100% 
      artesanales y naturales, libres de lactosa y azúcares añadidos. utilizamos ingredientes veganos y orgánicos de gran calidad' />
        </Helmet>
      <aside className='d-flex ruta'>
        <Link className='ruta__link' to={`/`}>Inicio</Link>
        <p className='ms-1'>/ FAQs</p>
      </aside>
      <h1 className='preguntasfrec'>Preguntas frecuentes</h1>
      {faaqs.map((f, index) => {
        return(
            <div key={f.id}>
                <section className='faqs__section' onClick={() => handleClick(index)}>
                    <h3 className='faqs__section__div__h3' >{f.question}</h3>
                    {f.view ? 
                    <div className='faqs__section__section__div'>
                        <svg className='faqs__section__section__div__svg2' width="16" height="16" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector" d="M15.0001 7.66667L8.33341 1L1.66675 7.66667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> : 
                    <div className='faqs__section__section__div'>
                        <svg className='faqs__section__section__div__svg' width="32" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="vector" d="M8.66667 12.3962L15.3333 19.0629L22 12.3962" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> 
                    </div>
                    }
                </section>
                <div className={`${f.id != 1 ? (f.view ? "visible" : "noVisible") : (f.view ? "visible1" : "noVisible")}`}>
                  {f.id == 1 ? <p className='faqs__div__p'><b>{f.answerbold}</b>{f.answer}</p> : (f.id == 4 ? <p className='faqs__div__p'>{f.answer} <Link to={'/contacto'}><u>{f.answercontact}</u></Link> </p> : <p className='faqs__div__p'>{f.answer}</p> )}
                </div>
            </div>
        )
        
    })}
    
    </main>
  )
}

export default Faqss
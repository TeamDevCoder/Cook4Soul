import React, { useState, useEffect } from 'react';

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
    {faaqs.map((f, index) => {
        return(
            <div key={f.id}>
                <section className='faqs__section'>
                    <h3 className='faqs__section__div__h3' onClick={() => handleClick(index)}>{f.question}</h3>
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
                    <p className='faqs__div__p'>{f.answer}</p>
                </div>
            </div>
        )
        
    })}
    
    </main>
  )
}

export default Faqss
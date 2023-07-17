
import React, { useEffect, useState } from 'react'

const GaleryPrdDetails = ({data}) => {

        const [imgPrinc, setimgPrinc] = useState(data.image_1);
        const [imgSecond, setimgSecond] = useState("");
        const [imgTerc, setimgTerc] = useState("");
        const [imgCuart, setimgCuart] = useState("");
        const [transition, setTransition] = useState("")

                    const changingPrincipalImg = async(e)=>{
                        let src = await e.target.attributes.src.nodeValue;
                        
                        setimgPrinc(src)
                }

  return (
    <div className='GaleryPrdDetails'>
            < div className={transition =="checked" ?"test":"test"}>
                        
                        <img className="principalImg"src={imgPrinc !==data.image_1 ?imgPrinc:data.image_1} alt="" />
                        {/* <img className="principalImg" src={imgSecond} alt="" />
                        <img className="principalImg" src={imgTerc} alt="" />
                        <img className="principalImg" src={imgCuart} alt="" /> */}
                        
            </div>
                <div className='galeryCont'>
    
                    
                    <button onClick={changingPrincipalImg}> <img className='minImg' src=
                            {imgPrinc !==data.image_1 && 
                            imgPrinc == data.image_2 ?
                            (data.image_1):data.image_2}
                            {...imgPrinc !==data.image_1 &&
                             imgPrinc !==data.image_2 ? imgPrinc :null }
                                 alt="" />
                    </button>
                    

                    <button onClick={changingPrincipalImg}> <img className='minImg' src=
                            {imgPrinc !==data.image_1 && 
                            imgPrinc == data.image_3 ?
                            (data.image_1):data.image_3}
                            {...imgPrinc !==data.image_1 &&
                             imgPrinc !==data.image_3 ? imgPrinc : "#" }
                                 alt="" />
                    
                    </button>
                    <button onClick={changingPrincipalImg}> <img className='minImg' src=
                            {imgPrinc !==data.image_1 && 
                            imgPrinc == data.image_4 ?
                            (data.image_1):data.image_4}
                            {...imgPrinc !==data.image_1 &&
                             imgPrinc !==data.image_4 ? imgPrinc : "#" }
                                 alt="" />
                    
                    </button>
                </div>
    </div>
  )
}

export default GaleryPrdDetails

import React, { useState } from 'react'

const GaleryPrdDetails = ({data}) => {

        const [imgPrinc, setimgPrinc] = useState(data.image_1);
        const [transition, setTransition] = useState("")

                    const changingPrincipalImg = async(e)=>{
                        let src = await e.target.src;
                        setimgPrinc(src)
                        setTransition("checked")
                }

        
                
  return (
    <div className='GaleryPrdDetails'>
            < div className={transition =="checked" ?"test":"test"} >
                        <div className='principalImgContent'>
                        <img className="principalImg"src={imgPrinc !==data.image_1 ?imgPrinc:data.image_1} alt="" />
                        {/* <img className="principalImg" src={imgPrinc !=="/img/ManjarMajesty/img1.png" ?imgPrinc:imgPrinc}
                            {...imgPrinc !=="/img/ManjarMajesty/img2.png" ?imgPrinc :null}
                            {...imgPrinc !=="/img/ManjarMajesty/img3.png" ?imgPrinc: null}
                            {...imgPrinc !=="/img/ManjarMajesty/img4.png" ?imgPrinc: null} alt="" /> */}
                        </div>
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
                            {imgPrinc !=="/img/ManjarMajesty/img1.png" && 
                            imgPrinc == "http://127.0.0.1:5173/img/ManjarMajesty/img3.png" ?
                            ("/img/ManjarMajesty/img1.png"):"/img/ManjarMajesty/img3.png"}
                            {...imgPrinc !=="/img/ManjarMajesty/img1.png" &&
                             imgPrinc !=="/img/ManjarMajesty/img3.png" ? imgPrinc : "#" }
                                 alt="" />
                    
                    </button>
                    <button onClick={changingPrincipalImg}> <img className='minImg' src=
                            {imgPrinc !=="/img/ManjarMajesty/img1.png" && 
                            imgPrinc == "http://127.0.0.1:5173/img/ManjarMajesty/img4.png" ?
                            ("/img/ManjarMajesty/img1.png"):"/img/ManjarMajesty/img4.png"}
                            {...imgPrinc !=="/img/ManjarMajesty/img1.png" &&
                             imgPrinc !=="/img/ManjarMajesty/img4.png" ? imgPrinc : "#" }
                                 alt="" />
                    
                    </button>
                </div>
    </div>
  )
}

export default GaleryPrdDetails

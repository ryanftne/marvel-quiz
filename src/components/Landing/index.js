import React, { useRef, useEffect, useState, Fragment } from 'react';

const Landing = () => {

    const [btn, setBtn] = useState(false);
    console.log(btn);

    const refWolverine = useRef(null);
    /* console.log(refWolverine); */

    useEffect(() => {
      /*  console.log('je suis dans use effect'); */
      refWolverine.current.classList.add("startingImg");
      setTimeout(() => {
        refWolverine.current.classList.remove("startingImg");
        setBtn(true)
      }, 1000);
    }, [])

    const setleftImg = () => {
        refWolverine.current.classList.add("leftImg");
    }

    const setrightImg = () => {
        refWolverine.current.classList.add("rightImg");
    }

    const clearImg = () => {
        if(refWolverine.current.classList.contains("leftImg")) {
            refWolverine.current.classList.remove("leftImg");
        } else if(refWolverine.current.classList.contains("rightImg")) {
            refWolverine.current.classList.remove("rightImg");
        }
    }


    const displayBtn = btn && (
        <Fragment>
        <div onMouseOver={setleftImg} onMouseOut={clearImg} className='leftBox'>
        <button className='btn-welcome'>
            Inscription
        </button>
    </div>
    <div onMouseOver={setrightImg} onMouseOut={clearImg} className='rightBox'>
        <button className='btn-welcome'>
            Connexion
        </button>
    </div>
    </Fragment>
    )

    return(
       <main ref={refWolverine} className='welcomePage'>
        { displayBtn }
       </main>
    )
}

export default Landing;
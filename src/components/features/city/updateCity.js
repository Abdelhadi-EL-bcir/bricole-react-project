import React, { useEffect, useState } from 'react'

function createCity() {
    const [city , setCity ] = useState({
        name : ''
    })

    useEffect(()=>{
        axios.get(``).then((res)=>{
            console.log(res.data);
            setCity(res.data);
        }).catch((err)=>{
           console.log(err);
        })
    } , [])
    
    const hundleSumit = (e) => {
        e.preventDefault();
        axios.post("", city).then((res) => {
            console.log(res.data);

        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <form onSubmit={hundleSumit}>
                <input type='text' name='name' className='form-control' onChange={(e) => setCity({...city , name : e.target.name})} />
                <input type='submit' value='envoyer' />
                <input type='reset' value='annuler' />
            </form>
        </div>
    )
}

export default createCity
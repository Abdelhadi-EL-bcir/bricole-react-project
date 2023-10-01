import React, { useEffect, useState } from 'react'

function updateType() {
    const [type , setType ] = useState({
        name : ''
    })

    useEffect(()=>{
        axios.get(``).then((res)=>{
            console.log(res.data);
            setType(res.data);
        }).catch((err)=>{
           console.log(err);
        })
    } , [])
    
    const hundleSumit = (e) => {
        e.preventDefault();
        axios.post("", type).then((res) => {
            console.log(res.data);
createType
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <form onSubmit={hundleSumit}>
                <input type='text' name='name' className='form-control' onChange={(e) => setType({...type , name : e.target.name})} />
                <input type='submit' value='envoyer' />
                <input type='reset' value='annuler' />
            </form>
        </div>
    )
}

export default updateType;
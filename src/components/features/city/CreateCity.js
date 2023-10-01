import React, { useState } from 'react'

function CreateCity() {
    const [city , setCity ] = useState({
        name : ''
    })

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

export default CreateCity;
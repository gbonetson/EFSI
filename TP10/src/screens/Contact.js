import React from 'react'




export default function Contact(){


    return(
        <>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Apellido:
                <input type="text" name="name" />
            </label>
            <label>
                Email:
                <input type="text" name="name" />
            </label>
            <label>
                Num. de Telefono:
                <input type="text" name="name" />
            </label>
        <input type="submit" value="Submit" />
        </form>
        </>
    )
}
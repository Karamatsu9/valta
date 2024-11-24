import React, { useState } from 'react'
import './contact.css'
const Contact = () => {

    const[user, setUser] = useState(
        {
            Name:'', email:'', subject: '', Message: ''
        }
    )
    let values, names
    const data = (e) => 
    {
        values = e.target.value
        names = e.target.name
        setUser({...user, [names]: values})
    }

    const send = async (e) => 
    {
        const {Name, email, subject, Message} = user
        e.preventDefault()
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({
                Name, email, subject, Message
            })
        }

        const send = await fetch(
            'https://react-ecommerce-contact-default-rtdb.firebaseio.com/Message.json', option
            )

        if (send) {
            alert("Pesan Terkirim silahkan tunggu balasan dari kami!")
        }
        else
        {
            alert("Maaf nampaknya ada kesalahan :(")
        }

    }

  return (
    <>
    <div className='contact'>
        <div className='container'>
            <div className='form'>
                <h2>#kontak kami</h2>
                <form method='POST'>
                    <div className='box'>
                        <div className='lable'>
                            <h4>Nama</h4>
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='nama' value={user.Name} name='nama' onChange={data}></input>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='lable'>
                            <h4>E-mail</h4>
                        </div>
                        <div className='input'>
                            <input type='email' placeholder='E-mail' value={user.email} name='email' onChange={data}></input>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='lable'>
                            <h4>Subject</h4>
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Subject' value={user.subject} name='subject' onChange={data}></input>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='lable'>
                            <h4>Pesan</h4>
                        </div>
                        <div className='input'>
                            <textarea placeholder='Pesan yang ingin ada sampaikan !' value={user.Message} name='Pesan yang ingin ada sampaikan !' onChange={data}></textarea>
                        </div>
                    </div>
                    <button type='sublit' onClick={send}>Kirim</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
import React, {useState} from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const sendEmail = (e)=>{
        e.preventDefault()

        emailjs.sendForm('service_30g5mrj','template_hw89tqm',e.target,"user_uRXbMIOhJ9DtWHfc9Ukss")
        .then(res=>{
            console.log(res);
        }).catch(err=>console.log(err))
        setName("")
        setEmail("")
        setMessage("")

    }
    const nameHandler= (e) => {
        setName(e.target.value)
    }
    const emailHandler= (e) => {
        setEmail(e.target.value)
    }
    const messageHandler= (e) => {
        setMessage(e.target.value)
    }
    return (
        <div className=" header-wraper" >
            <div style={{ width:"50%", margin:"auto"}}>
            <h1 style={{ textAlign:"center", color:"#fff"}}>Contact Form</h1>
            <form 
            className="row" 
            style={{margin:"60px 85px 75px 100px", }}
            onSubmit={sendEmail}
            >
                
                <input value={name} onChange={nameHandler} type="text" name="name" className="form-control mt-1" placeholder="name..."/>
                
                <input value={email} onChange={emailHandler} type="email" name="user_email" placeholder="email..." className="form-control mt-1"/>

                
                <textarea value={message} onChange={messageHandler} placeholder="your message..." className="form-control mt-1" name="message" rows="4"></textarea>
                <input type="submit" value="send" className="form-control btn btn-primary mt-1"/>

            </form>
            </div>
        </div>
    )
}

export default Contact

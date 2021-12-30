import './Contact.css'

const Contact = () => {
    return ( 
        <div className="contenedorContact">
            <form className='formContact' action="">
                <div className="my-1">
                    <label htmlFor="email" className='d-block my-2'>Email</label>
                    <input type="email" className='mb-2 mt-1 w-100' id="email" placeholder='nombre@email.com'/>
                </div>
                <div className="my-1">
                    <label htmlFor="msg" className='d-block my-1'>Mensaje</label>
                    <textarea id="msg" cols="30" rows="3" className='w-100 mb-2 mt-1'></textarea>
                </div>
                <div className="mt-4">
                    <button className="btn btn-outline-danger">Enviar</button>
                </div>
            </form>
        </div>
    );
}
 
export default Contact;
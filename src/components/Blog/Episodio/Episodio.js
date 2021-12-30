import './Episodio.css'

const Episodio = (props) => {
    const {titulo, img, descipcion} = props
    return ( 
        <div className="contenedorEpisodio">
            <h2>{titulo}</h2>
            <img className='imgEpisodio' src={img} alt={titulo} />
            <p>{descipcion}</p>
            <hr />
        </div>
    );
}
 
export default Episodio;
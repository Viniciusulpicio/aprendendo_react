import Menu from "./Menu";
function Sobre(){
    return(
        <div id="sobre">
            <h1>Sobre</h1>
            <Menu />
            <img className="games" src='/img/sobre.png' alt="oi" style={{ width: '70%', height: 'auto', margin: 0, padding: 0 }} /> 

        </div>
    )

}
export default Sobre
import Menu from "./Menu";
function Game(){
    return(
        <div className="game">
            <h1>Game</h1>
            <Menu />
            <img className="games" src='/img/jogos.jpg' alt="oi" style={{ width: '100%', height: 'auto', margin: 0, padding: 0 }} /> 
        </div>
    )

}
export default Game
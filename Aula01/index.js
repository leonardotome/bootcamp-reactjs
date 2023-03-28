var container = document.getElementById("root");//Pegando o id da div.
//var titulo = document.createElement("h1"); //criando uma tag HTML através do javascript. O h1 é criado na variável titulo.
//titulo.innerHTML = "Titulo inserido pelo Javascript";
//container.appendChild(titulo);
//Criamos um html pelo javascript.

// function Titulo(props){
//     return (
//         //renderizando o texto que está vindo de props
//         <React.Fragment>
//             <h1>{props.texto} {props.subtitulo}</h1>
//         </React.Fragment>
//     );
// }

// function Titulos(){
//     //defindo texto igual a uma string.
//     return (
//         <>
//             <Titulo texto="Minha primeira props" />;
//             <Titulo texto="Minha segunda props" />;
//             <Titulo texto="Minha terceira props" />;
//         </>
//     );
// }

function Particpante(props){

    const [numero, setNumero] = React.useState(0);

    function votar(){
        setNumero(numero+1);
    }

    return (
        <>
            <h1>{props.nome}</h1>
            <h2>{numero}</h2>
            <button onClick={votar}>votar</button>
        </>
    )
}

function Votacao(){
    return(
        <>
            <Particpante nome="Mequi"/>
            <Particpante nome="Bks"/>
            <Particpante nome="Papais"/>
        </>
    );
}

// ReactDOM.createRoot(container).render(<Titulos />);
ReactDOM.createRoot(container).render(<Votacao />);
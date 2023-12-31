import Titulo from "./Titulo";

interface CabecalhoProps {
    titulo: string;
    subtitulo: string;
}
export default function Cabecalho(props: CabecalhoProps) {
    return (
        <header>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
        </header>
    );
}
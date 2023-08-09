interface TituloProps {
    titulo: string;
    subtitulo: string;
}

export default function Titulo(props: TituloProps) {
    return (
        <>
            <h1 className={``}>{props.titulo}</h1>
            <h2 className={``}>{props.subtitulo}</h2>
        </>
    );
}
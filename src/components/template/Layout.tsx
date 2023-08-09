import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <main className={`
     flex h-screen w-screen 
    `}>
      <MenuLateral />
      <div className={`flex flex-col
      w-full
      p-7
      bg-gray-300 dark:bg-gray-800
      `}>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo children={props.children} />
      </div>
    </main>
  );
}
import { IconeAjustes, IconeHome, IconeSino } from "@/icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside className={`
        bg-gray-100 dark:bg-gray-800
        `} >
            <ul>
                <MenuItem texto="Início" icone={IconeHome} link="/" />
                <MenuItem texto="Ajustes" icone={IconeAjustes} link="/ajustes" />
                <MenuItem texto="Novidades" icone={IconeSino} link="/novidades" />
            </ul>
        </aside>
    );
}
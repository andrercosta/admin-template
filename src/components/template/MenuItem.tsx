import Link from "next/link";

interface MenuItemProps {
    texto: string;
    icone: any;
    link: string;
}
export default function MenuItem(props: MenuItemProps) {
    return (
        <li className={`
        hover:bg-gray-100 dark:hover:bg-gray-900
        `}>
            <Link href={props.link}>
                <div className={`
                flex
                    flex-col
                    justify-center
                    items-center
                    w-20
                    h-20
                `}>
                    {props.icone}
                    <span className={`
                        text-xs
                        font-light
                        text-gray-600
                    `}>{props.texto}</span>
                </div>
            </Link>
        </li>
    );
}
import { FaPlusCircle, FaSearch, FaList } from "react-icons/fa";
import Link from 'next/link'

import './style.css';

export default function Sidebar({ path1, path2, path3 }: {path1: string; path2: string; path3: string}) {
    return (
        <div className="sidebar">
            <Link href={path1}>
                <FaPlusCircle color="white" size={24} />
                Ativos
            </Link>
            <Link href={path2}>
                <FaList color="white" size={24} />
                Atvidades
            </Link>
            <Link href={path3}>
                <FaSearch color="white" size={24} />
                Unidades
            </Link>
        </div>
    )
}
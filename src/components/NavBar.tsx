import Link from 'next/link';

export default function NavBar() {

    return (
        <div className="navBar sticky">
        <ul>
            <li> <Link href="/">Entry view</Link></li>
            <li> <a>Calendar view</a> </li>
            <li><a>Insights (Beta) </a></li>
        </ul>
        </div>
    );
}
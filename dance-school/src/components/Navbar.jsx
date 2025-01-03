import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-xl font-bold">Dance School</h1>
                <ul className="flex space-x-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sectors">Sectors</Link></li>
                    <li><Link to="/schedule">Schedule</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

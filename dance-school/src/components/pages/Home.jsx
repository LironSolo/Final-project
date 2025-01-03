const Home = () => {
    return (
        <div className="hero bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/path-to-image.jpg)' }}>
            <div className="text-white text-center p-20">
                <h1 className="text-5xl font-bold">Welcome to Dance School</h1>
                <p className="text-xl mt-4">Discover the joy of dance with us!</p>
                <button className="mt-8 px-6 py-3 bg-red-500 hover:bg-red-600 rounded">Get Started</button>
            </div>
        </div>
    );
};

export default Home;

const sectors = [
    { name: 'Wedding Dance', description: 'Perfect your first dance', image: '/wedding.jpg' },
    { name: 'Bar/Bat Mitzvah', description: 'Special dances for your event', image: '/mitzvah.jpg' },
];

const Sectors = () => {
    return (
        <div className="container mx-auto p-10">
            <h2 className="text-3xl font-bold mb-6">Dance Sectors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectors.map((sector, index) => (
                    <div key={index} className="card bg-white shadow-lg rounded overflow-hidden">
                        <img src={sector.image} alt={sector.name} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{sector.name}</h3>
                            <p className="text-gray-600 mt-2">{sector.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sectors;

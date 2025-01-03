const Schedule = () => {
    return (
        <div className="container mx-auto p-10">
            <h2 className="text-3xl font-bold mb-6">Studio Schedule</h2>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-4">Day</th>
                        <th className="border border-gray-300 p-4">Time</th>
                        <th className="border border-gray-300 p-4">Class</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-4">Monday</td>
                        <td className="border border-gray-300 p-4">6:00 PM</td>
                        <td className="border border-gray-300 p-4">Wedding Dance</td>
                    </tr>
                    {/* Add more rows */}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;

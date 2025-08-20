import { memo, useState } from 'react';

const DashboardQueue = () => {
  const [patients, setPatients] = useState([
    'John Doe',
    'Jane Smith',
    'Michael Johnson',
    'Emily Davis',
    'William Brown',
    'Sophia Lee',
  ]);

  const nextPatient = () => {
    setPatients((prev) => prev.slice(1));
  };

  return (
    <div className="DashboardQueue p-4 max-w-full overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Patient Queue</h2>

      <div className="flex gap-4">
        {patients.length > 0 ? (
          patients.map((patient, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-40 p-4 rounded shadow text-center ${
                index === 0 ? 'bg-green-300 font-bold' : 'bg-blue-100'
              }`}
            >
              {index === 0 ? 'Now Serving: ' : ''}
              {patient}
            </div>
          ))
        ) : (
          <div className="p-4 bg-gray-200 rounded text-center">
            No more patients in the queue
          </div>
        )}
      </div>

      {patients.length > 0 && (
        <button
          onClick={nextPatient}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Next Patient
        </button>
      )}
    </div>
  );
};

export default memo(DashboardQueue);

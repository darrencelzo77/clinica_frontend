// import React from "react";

// Q1 Senior Queue
export const Queueing1 = () => {
    const queueData = [
        { ticket: "S-0001", name: "Mr. Santos" },
        { ticket: "S-0002", name: "Mrs. Reyes" },
        { ticket: "S-0003", name: "Mr. Cruz" },
    ];

    return (
        <div style={{ padding: 20 }}>
            <h2>Q1 Senior Queue</h2>
            <div style={{ marginTop: 20 }}>
                {queueData.map((item, index) => (
                    <div
                        key={item.ticket}
                        style={{
                            padding: 10,
                            marginBottom: 10,
                            border: "1px solid #ddd",
                            borderRadius: 6,
                            backgroundColor: index === 0 ? "#d1e7dd" : "#f8f9fa",
                        }}
                    >
                        <strong>{item.ticket}</strong> - {item.name}
                        {index === 0 && <span style={{ marginLeft: 10, color: "#0f5132" }}>Current</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Q2 Corporate Queue
export const Queueing2 = () => {
    const queueData = [
        { ticket: "C-0001", name: "Company A" },
        { ticket: "C-0002", name: "Company B" },
        { ticket: "C-0003", name: "Company C" },
    ];

    return (
        <div style={{ padding: 20 }}>
            <h2>Q2 Corporate Queue</h2>
            <div style={{ marginTop: 20 }}>
                {queueData.map((item, index) => (
                    <div
                        key={item.ticket}
                        style={{
                            padding: 10,
                            marginBottom: 10,
                            border: "1px solid #ddd",
                            borderRadius: 6,
                            backgroundColor: index === 0 ? "#cff4fc" : "#f8f9fa",
                        }}
                    >
                        <strong>{item.ticket}</strong> - {item.name}
                        {index === 0 && <span style={{ marginLeft: 10, color: "#055160" }}>Current</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Q3 Patient Queue
export const Queueing3 = () => {
    const queueData = [
        { ticket: "P-0001", name: "Gwen Aris" },
        { ticket: "P-0002", name: "Maria Santos" },
        { ticket: "P-0003", name: "Jose Reyes" },
    ];

    return (
        <div style={{ padding: 20 }}>
            <h2>Q3 Patient Queue</h2>
            <div style={{ marginTop: 20 }}>
                {queueData.map((item, index) => (
                    <div
                        key={item.ticket}
                        style={{
                            padding: 10,
                            marginBottom: 10,
                            border: "1px solid #ddd",
                            borderRadius: 6,
                            backgroundColor: index === 0 ? "#fff3cd" : "#f8f9fa",
                        }}
                    >
                        <strong>{item.ticket}</strong> - {item.name}
                        {index === 0 && <span style={{ marginLeft: 10, color: "#664d03" }}>Current</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

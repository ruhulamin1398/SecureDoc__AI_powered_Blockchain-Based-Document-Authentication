import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Certificate = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // Fetch data when the 'id' parameter changes
        fetch(`http://localhost:5000/Upload/ReportImg?id=${id}`)
            .then((res) => res.json())
            .then((res) => setData(res));
    }, [id]);
    function arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }


    return (
        <div className="container h-5/6 w-5/6 mt-10">
            <div className="img-container overflow-hidden h-4/5 w-full">
                {data.length > 0 && data[0].img && (
                    <Link to={`/fullimage/${id}`} target="_blank">
                        <img
                            src={`data:image/png;base64,${arrayBufferToBase64(data[0].img.data)}`}
                            alt="Certificate"
                            className="w-full transform transition-transform hover:scale-105"
                        />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Certificate;

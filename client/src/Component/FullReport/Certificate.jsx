import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Certificate = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/Upload/ReportImg?id=${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);

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
                {data[0] && data[0].img.data && (
                    <Link to={`/fullimage/${id}`} target="_blank">
                        <object
                            data={`data:application/pdf;base64,${arrayBufferToBase64(data[0].img.data)}`}
                            type="application/pdf"
                            className="w-full h-full absolute top-0 left-0"
                        >
                            Your browser does not support PDFs.
                        </object>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Certificate;

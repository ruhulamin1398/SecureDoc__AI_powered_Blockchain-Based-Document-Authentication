import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Load = () => {
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
        <div className="h-screen p-4 mt-20">
            {data[0] && (
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="img-container overflow-hidden h-4/5 w-full">
                                {data[0].img.data && (
                                    <Link
                                        to={`/fullimage/${id}`}

                                    >
                                        <img
                                            src={`data:image/png;base64,${arrayBufferToBase64(data[0].img.data)}`}
                                            alt="Certificate"
                                            className="w-full transform transition-transform hover:scale-105"
                                        />
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="text-center md:text-left">
                                <h1 className="text-3xl font-bold mb-4">{data[0].name && data[0].name}</h1>
                                <h3 className="text-xl mb-4">{data[0].date && data[0].date}</h3>
                                <div className="button">
                                    {data[0].img.data && (
                                        <a
                                            href={`data:image/png;base64,${arrayBufferToBase64(data[0].img.data)}`}
                                            download
                                        >
                                            <button className="bg-theam-color text-white rounded-full py-2 px-4 hover:bg-theam-color">
                                                Download Certificate
                                            </button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Load;

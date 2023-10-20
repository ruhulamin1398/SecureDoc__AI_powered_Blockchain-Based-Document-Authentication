import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import dp from '../../asset/Image/DP.jpg';

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
                            <div className="relative overflow-hidden pb-[60%]">
                                {data[0].img.data && (
                                    <a href={`data:application/pdf;base64,${arrayBufferToBase64(data[0].img.data)}`} download="certificate.pdf">
                                        <object
                                            data={`data:application/pdf;base64,${arrayBufferToBase64(data[0].img.data)}`}
                                            type="application/pdf"
                                            className="w-full h-full absolute top-0 left-0"
                                        >
                                            Your browser does not support PDFs.
                                        </object>
                                        <Link to={`/fullimage/${id}`} target='_blank'> <div className="absolute bottom-0 right-0 w-16 h-16 border-8 border-dotted border-gray-950 cursor-pointer">
                                            &nbsp;
                                        </div></Link>
                                    </a>
                                )}
                            </div>

                        </div>

                        <div className="col-md-5">
                            <div className="flex flex-col justify-between h-full">
                                <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
                                    <div className="rounded-full overflow-hidden h-16 w-16">
                                        <img src={dp} alt="Avatar" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex items-center">
                                        <div className="ml-4">
                                            <h1 className="text-2xl font-bold text-gray-800 mb-2"> Completed by {data[0].username && data[0].username}</h1>
                                            <h1 className="text-lg font-bold text-gray-800 mb-1">Document Uploaded {data[0].date && data[0].date}</h1>
                                            <h3 className="text-lh text-gray-800">
                                                {data[0].username && data[0].username} is <a href="#" className="theam-color font-bold">Verified</a>. He successfully completed {data[0].CourseName && data[0].CourseName} from {data[0].name && data[0].name}.
                                                He started the course on {data[0].CourseStart && data[0].CourseStart} and completed on {data[0].CourseEnd && data[0].CourseEnd}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="text-lg font-bold text-gray-800 mb-1">Course Name: {data[0].CourseName && data[0].CourseName}<br />Completed From {data[0].name && data[0].name}</h1>
                                <div className="button">
                                    {data[0].img.data && (
                                        <a href={`data:application/pdf;base64,${arrayBufferToBase64(data[0].img.data)}`} download="certificate.pdf">
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

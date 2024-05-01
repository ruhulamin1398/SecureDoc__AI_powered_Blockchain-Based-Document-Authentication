import { Upload } from "antd";
import { useState } from "react";

const JsonFile = () => {
    const [fileList, setFileList] = useState([]);

    const handleChange = (info) => {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-1); // Limit to one file
        setFileList(fileList);
      };
    return (
        <div>
            <Upload
              fileList={fileList}
              onChange={handleChange}
              maxCount={1}
              showUploadList={false}
            >
              <p className="pdf-text">Choose JSON File</p>
            </Upload>
          </div>
    );
};

export default JsonFile;
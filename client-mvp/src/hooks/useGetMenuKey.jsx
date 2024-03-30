import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { cloneDeep } from "lodash";

const useGetMenuKey = () => {
  const [getKeys, setKeys] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;

    const generateKey = () => {
      const cloneName = cloneDeep(pathName);
      const keyNames = cloneName.split("/");
      const keys = keyNames[1];
      setKeys([keys]);
    };

    generateKey();
  }, [location.pathname]);

  return getKeys;
};

export default useGetMenuKey;
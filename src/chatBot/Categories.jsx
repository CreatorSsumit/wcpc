import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";

function Categories({ state, actionProvider, actions, ...rest }) {
  const [categoriesList, setcategoriesList] = useState([]);

  useEffect(() => {
    setcategoriesList(state?.categories);
  }, [state]);

  return (
    <div>
      {categoriesList?.map((e, i) => {
        return (
          <div key={i}>
            <Button
              type="dashed"
              size="middle"
              style={{ marginTop: 10 }}
              onClick={() => actionProvider?.categoriesSelection(e)}
            >
              {e?.name}
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;

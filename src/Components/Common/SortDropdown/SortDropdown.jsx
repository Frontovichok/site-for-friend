import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Dropdown } from "semantic-ui-react";
import styles from "./SortDropdown.module.css";

const options = [
  { key: "default", value: "default", text: "По умолчанию" },
  { key: "price_up", value: "price_up", text: "Цена по возрастанию" },
  { key: "price_down", value: "price_down", text: "Цена по убыванию" },
  { key: "name_up", value: "name_up", text: "Алфавит А-Я" },
  { key: "name_down", value: "name_down", text: "Алфавит Я-А" },
];

const SortDropdown = () => {
  let history = useHistory();
  let location = useLocation();
  let currentUrlParams = new URLSearchParams(location.search);
  let [sortBy, setSortBy] = useState(currentUrlParams.get("sort") || "default");
  let placeHolder = options.map((option) =>
    currentUrlParams.get("sort") === option.value ? option.text : ""
  )[0];

  useEffect(() => {
    if (
      currentUrlParams.get("sort") === null ||
      sortBy !== currentUrlParams.get("sort")
    ) {
      currentUrlParams.set("sort", sortBy);
      history.push(location.pathname + "?" + currentUrlParams.toString());
    }
  }, [sortBy, location]);

  return (
    <div className={styles.sortDropdown}>
      <div className={styles.label}>Сотировка:</div>
      <Dropdown
        placeholder={placeHolder}
        openOnFocus
        selection
        options={options}
        className={styles.dropdown}
        onChange={(e, { value }) => {
          setSortBy(value);
          currentUrlParams.set("page", 1);
          history.push(location.pathname + "?" + currentUrlParams.toString());
        }}
        defaultValue={currentUrlParams.get("sort")}
      />
    </div>
  );
};

export default SortDropdown;

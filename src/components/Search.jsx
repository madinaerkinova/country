import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({ data = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return;
};

export default Search;

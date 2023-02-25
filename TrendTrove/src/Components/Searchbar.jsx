import React from "react";
import { Search2Icon } from "@chakra-ui/icons";
import "./Searchbar.css"
export const Searchbar = () => {
  return (
    <div className="searchbar" >
    <input placeholder="Search TRENDTROVE" variant='unstyled' />
    <button type="submit"><Search2Icon size="1.5rem"/></button>
    </div>
  );
};

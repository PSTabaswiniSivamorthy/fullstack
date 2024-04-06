import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import {
  getAll,
  getAllByTag,
  getAllTags,
  search,
} from "../../services/cakeService";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import Search from "../../components/Search/Search";
import Tags from "../../components/Tags/Tags";
import NotFound from "../../components/NotFound/NotFound";
const initialState = { cakes: [], tags: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "CAKES_LOADED":
      return { ...state, cakes: action.payload };
    case "TAGS_LOADED":
      return { ...state, tags: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cakes, tags } = state;
  const { searchTerm, tag } = useParams();

  useEffect(() => {
    getAllTags().then((tags) =>
      dispatch({ type: "TAGS_LOADED", payload: tags })
    );
    const loadCakes = tag
      ? getAllByTag(tag)
      : searchTerm
      ? search(searchTerm)
      : getAll();
    loadCakes.then((cakes) =>
      dispatch({ type: "CAKES_LOADED", payload: cakes })
    );
  }, [searchTerm, tag]);

  return (
    <>
      <Search />
      <Tags tags={tags} />
      {cakes.length === 0 && <NotFound linkText="Reset Search" />}
      <Thumbnails cakes={cakes} />
    </>
  );
}

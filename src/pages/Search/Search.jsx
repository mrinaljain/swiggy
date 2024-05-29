import react, { useEffect, useState } from "react";
import SuggestionCard from "../../components/SuggestionCard";
import { SEARCH, PRE_SEARCH } from "../../utils/constants";
import Carousel from "../../components/Carousal/Carousal";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [popularCuisines, setPopularCuisines] = useState(null);
  useEffect(getPopularCuisines, []);
  useEffect(getSearchData, [searchText]);

  function getPopularCuisines() {
    (async () => {
      const res = await fetch(PRE_SEARCH)
      const data = await res.json();
      console.log("Popularcards", data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info);
      setPopularCuisines(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info);
    })();
  }
  function getSearchData() {
    if (searchText.length > 2) {
      (async () => {
        const res = await fetch(SEARCH + searchText)
        const data = await res.json();
        // console.log(data);
        setSuggestions(data?.data?.suggestions);
      })();
    }

  }
  function handleSearch(e) {
    setSearchText(e.target.value);
  }
  return (
    <div className="mx-auto w-4/6">
      <input
        type="search"
        placeholder="Search for restaurants and food"
        className="w-full border py-2 px-2"
        onChange={handleSearch}
        value={searchText}
        autoFocus>
      </input>
      {/* Popular Cusine */}
      {popularCuisines != null && <Carousel restaurantList={popularCuisines} />}
      {/* // Result Section */}
      {suggestions === null ? <h3>Nothing Here</h3> : <div className="searscResults">
        {suggestions.map((suggestedItem) => <SuggestionCard item={suggestedItem} />)}
      </div>}
    </div>
  );
}

export default Search;
// add popular cusines section
// add click event on cross
// add click event on card
// event on enter event
// add debounce in search
// creadt search card design
// category detail page
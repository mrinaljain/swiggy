import react, { useCallback, useEffect, useState } from "react";
import SuggestionCard from "../../components/SuggestionCard";
import { SEARCH, PRE_SEARCH, SUGGESTIONS } from "../../utils/constants";
import Carousel from "../../components/Carousal/Carousal";
import DishCard from "../../components/DishCard";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [popularCuisines, setPopularCuisines] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      const context = this;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };
  useEffect(getPopularCuisines, []);
  //we used useCallback to memoize the debounced function
  const getSearchData = useCallback(
    debounce(async (querry) => {
      try {
        const res = await fetch(SUGGESTIONS + querry)
        const data = await res.json();
        setSuggestions(data?.data?.suggestions);
      } catch (error) {

      } finally { }

    }, 500), []
    //     if (querry.length > 2) {
    // else {
    //       setSuggestions([]);
    //       setSearchResult([])
    //     }
  );
  useEffect(() => { getSearchData(searchText); }, [searchText, getSearchData]);



  function getSearchResult() {
    (async () => {
      const res = await fetch(SEARCH + searchText);
      const data = await res.json()
      // data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards[0 - 99] card.card.info
      setSuggestions([]);
      setSearchResult(data.data.cards[1].groupedCard.cardGroupMap.DISH.cards);
    })();
  }
  function getPopularCuisines() {
    (async () => {
      const res = await fetch(PRE_SEARCH)
      const data = await res.json();

      setPopularCuisines(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info);
    })();
  }


  function handleSearch(e) {
    setSearchText(e.target.value);
  }
  function handelEnter(e) {
    if (e.key === "Enter") {
      //actual search API call
      getSearchResult();

    }
  }
  return (
    <div className="mx-auto w-4/6 my-10">
      <input
        type="search"
        placeholder="Search for restaurants and food"
        className="w-full border rounded py-2 px-2"
        onChange={handleSearch}
        onKeyDown={handelEnter}
        value={searchText}
        autoFocus>
      </input>
      {/* //! Popular Cusine */}
      {popularCuisines != null && searchText.length <= 2 && <Carousel restaurantList={popularCuisines} />}
      {/* //! Result Section */}
      {suggestions == null ?
        <></> : <div
          className="searscResults">
          {suggestions.map((suggestedItem, index) => <SuggestionCard
            key={index}
            enter={getSearchResult}
            item={suggestedItem}
          />)}
        </div>}

      {searchResult.length > 1 && <div className="flex flex-wrap gap-3">
        {searchResult.map((item, index) => {
          if (index > 0) return <DishCard key={item?.card?.card?.info?.id} dish={item} />
        })}
      </div>}
    </div>
  );
}

export default Search;
// add popular cusines section
// add click event on cross
// event on enter event
// add click event on card
// add debounce in search

//TODO

// creadt search card design
// category detail page
// Use redux store to save something
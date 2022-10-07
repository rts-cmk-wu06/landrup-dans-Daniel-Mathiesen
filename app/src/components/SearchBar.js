// Icons
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ activities, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(activities);

    const resultsArray = activities.filter(
      (activity) =>
        activity.name.includes(e.target.value) ||
        activity.weekday.includes(e.target.value) ||
        activity.description.includes(e.target.value)
    ); // gets activity titles and bodies

    setSearchResults(resultsArray);
  };

  return (
    <div className="px-8 bg-landrupPurple fixed w-[26rem] z-50">
      <form onSubmit={handleSubmit}>
        <input
          className="bg-slate-400 p-2 pr-10 w-full opacity-60 outline-none"
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
      </form>
      <FiSearch className="text-white w-6 h-6 relative left-80 -translate-y-8" />
    </div>
  );
};

export default SearchBar;

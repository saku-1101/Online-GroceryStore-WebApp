import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { search } from '../../core/infrastructures/AppApi';
import { appActions, selectSearchResult } from '../../slices/counter/appSlice';
export default function SearchBox() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const result = useAppSelector(selectSearchResult);
  async function handleSubmit(e: any) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Read the form data
    const formJson = Object.fromEntries(formData.entries());

    // send the search api
    const res = await search(formJson.searchText);

    // register to the global variable
    dispatch(appActions.setSearchResult(res.products));
    console.log(result);
    navigate('/search/result');
  }
  return (
    <form method="post" onSubmit={(e: any) => handleSubmit(e)} className="flex-1 gap-2 flex">
      <input name="searchText" type="text" placeholder="Search by product name" className="input input-bordered grow" />
      <button type="submit" className="flex-none">
        🔎
      </button>
    </form>
  );
}

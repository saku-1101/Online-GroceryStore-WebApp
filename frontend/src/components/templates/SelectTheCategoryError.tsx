import { Link } from 'react-router-dom';
export default function SelectTheCategoryError() {
  return (
    <h1 className="md:my-10 lg:my-20 text-2xl text-center">
      {' '}
      Select the category in <Link to="/category">Category</Link>, then come back!
    </h1>
  );
}

import { func } from 'prop-types';
import { useState } from 'react';
export default function SearchBox() {
  const [text, setText] = useState('');
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    // fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  return (
    <form method="post" onSubmit={handleSubmit} className="flex-1 gap-2 flex">
      <input name="searchText" type="text" placeholder="Search" className="input input-bordered grow" />
      <button type="submit" className="flex-none">
        🔎
      </button>
      <p>{text}</p>
    </form>
  );
}

import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      // ...
    } else if (error.status === 404) {
      // ...
    }

    return (
      <div id="error-page" className="w-screen">
        <h1 className="text-center">Oops! {error.status}</h1>
        <p className="text-center">{error.statusText}</p>
        {error.data?.message && (
          <p className="text-center">
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page" className="w-screen flex flex-col">
        <h1 className="text-center">Oops! Unexpected Error</h1>
        <p className="text-center">Something went wrong.</p>
        <p className="text-center">
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}

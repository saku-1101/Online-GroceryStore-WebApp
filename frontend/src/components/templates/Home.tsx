import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <img src="./src/assets/StoreLogo-removebg.png" alt="" className="max-w-sm" />
        <div className="ml-2.5">
          <h1 className="text-5xl font-bold">Welcome to SAKU STORE!</h1>
          <p className="py-6">
            🌸 We're happy to be here to help you with an extraordinary online-shopping experience! <br></br>
            Start your shopping from the entrance below!
          </p>
          <Link to="/category">
            <button className="btn btn-primary">Start Shopping</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

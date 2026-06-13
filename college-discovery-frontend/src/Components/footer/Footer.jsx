import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-bold mb-3">
              CollegeDiscover
            </h3>

            <p className="text-slate-400">
              Find, compare and explore colleges across India.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">
              Quick Links
            </h4>

            <div className="flex flex-col gap-2">
              <Link to="/">Home</Link>
              <Link to="/colleges">Colleges</Link>
              <Link to="/compare">Compare</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">
              Contact
            </h4>

            <p className="text-slate-400">
              support@collegediscover.com
            </p>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
          © 2026 CollegeDiscover. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;
export default function Single_Price_Grid_Component() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 p-4">
      <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="p-6">
          <h2 className="mb-2 text-2xl font-bold text-teal-500">
            Join our community
          </h2>
          <h3 className="mb-4 text-lg font-medium text-yellow-400">
            30-day, hassle-free money back guarantee
          </h3>
          <p className="mb-1 text-gray-500">
            Gain access to our full library of tutorials along with expert code
            reviews.
          </p>
          <p className="mb-6 text-gray-500">
            Perfect for any developers who are serious about honing their
            skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-teal-500 p-6 text-white">
            <h3 className="mb-4 text-xl font-bold">Monthly Subscription</h3>
            <div className="mb-1 flex items-center">
              <span className="text-3xl font-bold">$29</span>
              <span className="ml-2 opacity-80">/per month</span>
            </div>
            <p className="mb-6 opacity-90">
              Full access for less than $1 a day
            </p>
            <button className="w-full rounded-md bg-yellow-400 py-3 font-bold text-gray-800 hover:bg-yellow-300 transition-colors">
              Sign Up
            </button>
          </div>

          <div className="bg-teal-500 p-6 text-white">
            <h3 className="mb-4 text-xl font-bold">Why Us</h3>
            <ul className="space-y-1 opacity-90">
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

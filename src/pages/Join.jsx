export default function Join() {
    return (
      <section className="py-32 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
            Join PhDians
          </h1>
          <p className="text-center text-gray-400 mb-12 text-lg">Merit-based. No paid promotion.</p>
  
          <form className="space-y-8 bg-gray-800/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
              />
              <input
                type="text"
                placeholder="Preferred Title"
                className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
              />
            </div>
  
            <textarea
              placeholder="Statement of Purpose (max 250 words)"
              rows="6"
              className="w-full bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition resize-none"
            ></textarea>
  
            <div className="flex flex-wrap gap-8 text-gray-300">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="type" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500" />
                <span>Senior Member</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="type" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500" />
                <span>Fellow Member</span>
              </label>
            </div>
  
            <button
              type="submit"
              className="w-full py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-0.5"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    );
  }
const legends = [
    "Dr. A.P.J. Abdul Kalam – Missile Man of India",
    "Dr. C.V. Raman – Nobel Laureate in Physics (1930)",
    "Albert Einstein – Father of relativity",
    "Marie Curie – Pioneer in radioactivity",
    "Elon Musk – Innovator in space & energy",
  ];
  
  const members = [
    "Dr. Sonam Wangchuk",
    "Dr. Gagandeep Kang",
    "Dr. Sara Hooker",
    "Dr. Kanishka Biswas",
    "Dr. Vikas Dhamu",
  ];
  
  export default function HallOfHonour() {
    return (
      <section className="py-32 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
            Hall of Honour
          </h1>
          <p className="text-center text-gray-400 mb-16 text-lg">Who Changed the World</p>
  
          {/* Legends */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {legends.map((name) => {
              const [person, title] = name.split(' – ');
              return (
                <div
                  key={name}
                  className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl text-center border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-32 h-32 mx-auto mb-5 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full border-4 border-dashed border-gray-600 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">{person}</h4>
                  <p className="text-sm text-gray-400 mt-1">{title}</p>
                </div>
              );
            })}
          </div>
  
          {/* Members */}
          <h2 className="text-3xl font-bold text-white mb-8">Senior & Fellow Members</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {members.map((name) => (
              <div
                key={name}
                className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-700 hover:border-cyan-500/40 transition-all duration-300 text-sm font-medium text-gray-300 hover:text-cyan-300"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
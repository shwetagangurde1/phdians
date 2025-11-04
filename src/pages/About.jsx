export default function About() {
    return (
      <section className="py-32 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto space-y-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
            About PhDians
          </h1>
  
          <div className="prose prose-lg prose-invert max-w-none text-gray-300">
            <p className="leading-relaxed">
              PhDians is a global platform dedicated to celebrating the scientific community and promoting research excellence across all disciplines. Our mission is to recognize outstanding contributions, provide a platform for publishing scholarly work, and foster collaboration among researchers worldwide.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition">
                Mission
              </h3>
              <p className="text-gray-300">
                PhDians is committed to honouring scientific excellence, empowering researchers, and fostering a global community of scholars dedicated to advancing knowledge.
              </p>
            </div>
  
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition">
                Vision
              </h3>
              <p className="text-gray-300">
                To create a world where scientific discovery knows no boundaries, where collaboration drives innovation and every researcher has a voice.
              </p>
            </div>
          </div>
  
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">The PhDians Initiative</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              PhDians was founded to address the growing need for a global platform that celebrates research and connects scientists from diverse disciplines. We aim to bridge gaps, amplify impact, and inspire the next generation of innovators.
            </p>
          </div>
        </div>
      </section>
    );
  }
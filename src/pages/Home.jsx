import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-300 to-white leading-tight">
            PhDians – Celebrating the Spirit of Research & Discovery
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            A global platform honoring research excellence, publishing groundbreaking work, and connecting scientists worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/join"
              className="px-8 py-3.5 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5"
            >
              Submit Your Work
            </Link>
            <Link
              to="/join"
              className="px-8 py-3.5 border-2 border-cyan-500 text-cyan-400 font-bold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
            About PhDians
          </h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              PhDians is a global platform dedicated to celebrating the scientific community and promoting research excellence across all disciplines. Our mission is to recognize outstanding contributions, provide a platform for publishing scholarly work, and foster collaboration among researchers worldwide.
            </p>
            <p>
              Through journals, books, mentorship programs, and international collaborations, PhDians connects scientists, academicians, and innovators, enabling them to share knowledge, exchange ideas, and drive meaningful impact in their fields.
            </p>
            <p>
              We believe that every discovery — whether by a student, early-career researcher, or seasoned scientist — contributes to building a sustainable and innovative scientific future. PhDians is committed to supporting, honouring, and empowering researchers as they advance knowledge for the betterment of society.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">Key Highlights</h3>
            <ul className="space-y-3 text-lg text-gray-300">
              {[
                'A platform for global recognition of research contributions.',
                'Publication opportunities in journals, books, and special reports.',
                'A network of mentors and collaborators across disciplines and countries.',
                'Promoting future-ready science, guiding innovation and research roadmaps worldwide.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1.5">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '1200+', label: 'Researchers' },
              { value: '80+', label: 'Countries' },
              { value: '1300+', label: 'Published Articles' },
              { value: '100+', label: 'Global Partners' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl text-center border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="text-4xl font-extrabold text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Carousel Placeholder */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Featured Scientists & Publications
            </h3>
            <div className="bg-gray-800/40 backdrop-blur border border-gray-700 rounded-2xl p-8 md:p-16 flex flex-col items-center justify-center text-center min-h-80">
              <div className="bg-gray-700 border-2 border-dashed border-gray-600 rounded-xl w-24 h-24 mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-400 text-lg">Carousel of featured researchers & publications coming soon...</p>
              <p className="text-sm text-gray-500 mt-2">(Images & content to be integrated)</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />
    </>
  );
}
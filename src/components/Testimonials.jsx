const testimonials = [
    { name: "Dr. Ananya Mehta", role: "Molecular Biologist", text: "PhDians’ mentorship has been transformative. Their guidance in experimental design and data interpretation significantly accelerated our research projects." },
    { name: "Dr. Rohan Verma", role: "AI & Robotics Researcher", text: "The workshops and resources provided by PhDians helped me refine my AI algorithms and optimise computational experiments efficiently." },
    { name: "Prof. Leela Krishnan", role: "Environmental Scientist", text: "PhDians is a one-stop solution for early-career scientists. From manuscript preparation to grant applications, their support is impeccable." },
    { name: "Dr. Sameer Kapoor", role: "Biochemist", text: "The collaborative network of experts at PhDians enabled my team to troubleshoot complex biochemical assays we struggled with for months." },
    { name: "Dr. Priya Iyer", role: "Nanotechnology Researcher", text: "PhDians’ career mentoring and skill development programs are unmatched. They’ve helped me transition from a junior researcher to leading my own lab." },
    { name: "Dr. Arvind Menon", role: "Astrophysicist", text: "Thanks to PhDians, our astrophysics simulations are now more accurate and reproducible. Their technical support is outstanding." },
    { name: "Dr. Meera Joshi", role: "Public Health Scientist", text: "PhDians provided critical guidance in designing my epidemiology study, ensuring statistical rigor and ethical compliance." },
    { name: "Dr. Kiran Reddy", role: "Interdisciplinary Researcher", text: "The literature review and manuscript editing support from PhDians allowed our interdisciplinary research team to submit high-impact papers with confidence." },
    { name: "Dr. Tanvi Deshmukh", role: "Chemical Engineer", text: "PhDians’ mentoring helped me navigate complex experimental protocols and improved the reproducibility of our lab work significantly." },
    { name: "Dr. Vikram Choudhary", role: "Climate Scientist", text: "PhDians’ workshops on grant writing and research methodology provided me with practical skills that immediately benefited my independent research projects." },
  ]
  
  export default function Testimonials() {
    return (
      <section className="py-32 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
            Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700 flex flex-col h-full">
                <p className="italic mb-4 flex-1">"{t.text}"</p>
                <p className="font-semibold text-cyan-500">{t.name}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
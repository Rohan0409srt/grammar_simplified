function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mt-4 leading-tight text-slate-900">
  About GrammarSimplified Sonali
</h2>

          <span className="text-1xl md:text-2xl font-bold mt-4">
            Transforming English Learning Into A Simple & Enjoyable Journey
          </span>

          <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto">
            GrammarSimplified Sonali is an educational platform dedicated to
            helping students, professionals, job seekers and competitive exam
            aspirants master English Grammar with confidence. Our mission is to
            break down complex grammar concepts into simple, practical and
            easy-to-understand lessons that anyone can learn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-3xl font-bold mb-6">
              Why Thousands of Learners Choose Us?
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>✅ Easy explanations with real-life examples</li>
              <li>✅ Beginner-friendly learning approach</li>
              <li>✅ Spoken English confidence building</li>
              <li>✅ Vocabulary enhancement techniques</li>
              <li>✅ Competitive exam grammar preparation</li>
              <li>✅ Practical exercises and quizzes</li>
              <li>✅ Regular educational content on YouTube</li>
              <li>✅ Supportive learning community on Telegram & WhatsApp</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-10 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Our Mission
            </h3>

            <p className="text-lg leading-relaxed">
              We believe that learning English should not be complicated.
              Our goal is to empower learners by making grammar easy,
              practical and applicable in everyday communication, academics,
              interviews and professional growth.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>
                <h4 className="text-3xl font-bold">100+</h4>
                <p>Grammar Lessons</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold">24/7</h4>
                <p>Learning Access</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold">Free</h4>
                <p>Educational Content</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold">Growing</h4>
                <p>Learning Community</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
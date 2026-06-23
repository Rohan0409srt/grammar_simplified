import heroImg from "../assets/hero_img.png";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-900 text-white min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold mb-6">
            🎓 Learn English with Confidence
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Master English Grammar
            <span className="block text-yellow-300">
              The Simple Way
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Learn Grammar, Spoken English, Vocabulary,
            Writing Skills and Exam Preparation with
            Sonali Bhanwar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://www.youtube.com/@grammarsimplified?sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-center transition"
            >
              Subscribe Channel
            </a>

            <a
              href="https://t.me/grammarsimplifiedsonalibhanwar"
              target="_blank"
              rel="noreferrer"
              className="border border-white px-8 py-4 rounded-full font-bold text-center hover:bg-white hover:text-indigo-700 transition"
            >
              Join Telegram
            </a>
          </div>

          <div className="flex gap-8 mt-10">
            <div>
              <h3 className="text-3xl font-bold">1000+</h3>
              <p className="text-gray-300">Students</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100+</h3>
              <p className="text-gray-300">Lessons</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Free</h3>
              <p className="text-gray-300">Learning Resources</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Grammar Simplified Sonali"
            className="
              w-full
              max-w-lg
              rounded-3xl
              shadow-[0_20px_60px_rgba(0,0,0,0.4)]
              hover:scale-105
              transition
              duration-500
            "
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
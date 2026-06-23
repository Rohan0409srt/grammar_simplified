import {
  BookOpen,
  GraduationCap,
  Mic,
  Brain,
  PenTool,
  FileText,
} from "lucide-react";

const courses = [
  {
    title: "Basic Grammar",
    icon: <BookOpen size={40} />,
    desc: "Master tenses, parts of speech, articles and sentence structure.",
    link: "https://youtu.be/fY8R_rDfe1A?si=RHZpNTXOcBuCoS1U",
  },
  {
    title: "Advanced Grammar",
    icon: <GraduationCap size={40} />,
    desc: "Learn advanced concepts with practical examples and exercises.",
    link: "https://youtu.be/fY8R_rDfe1A?si=RHZpNTXOcBuCoS1U",
  },
  {
    title: "Spoken English",
    icon: <Mic size={40} />,
    desc: "Build fluency, pronunciation and communication confidence.",
    link: "https://youtube.com/@grammarsimplified?si=UH3-QqDD_WHk3l-S",
  },
  {
    title: "Vocabulary Building",
    icon: <Brain size={40} />,
    desc: "Expand your vocabulary with smart learning techniques.",
    link: "https://youtube.com/@grammarsimplified?si=UH3-QqDD_WHk3l-S",
  },
  {
    title: "Competitive Exams",
    icon: <FileText size={40} />,
    desc: "Prepare grammar topics for SSC, Banking, Railway and more.",
    link: "https://youtube.com/@grammarsimplified?si=UH3-QqDD_WHk3l-S",

  },
  {
    title: "Writing Skills",
    icon: <PenTool size={40} />,
    desc: "Improve formal writing, essays, emails and communication.",
    link: "https://youtube.com/@grammarsimplified?si=UH3-QqDD_WHk3l-S",

  },
];

function Courses() {
  return (
    <section
      id="courses"
      className="relative py-24 bg-gradient-to-b from-slate-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-widest uppercase">
            Our Learning Programs
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-extrabold">
            What You'll Learn
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive English learning programs designed to
            improve grammar, communication, writing and exam performance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                p-8
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-500
                border border-gray-100
              "
            >
              <div
                className="
                  w-16 h-16
                  rounded-2xl
                  bg-indigo-100
                  text-indigo-600
                  flex items-center justify-center
                  mb-6
                  group-hover:bg-indigo-600
                  group-hover:text-white
                  transition
                "
              >
                {course.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {course.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {course.desc}
              </p>

             <a
  href={course.link}
  target="_blank"
  rel="noreferrer"
  className="
    inline-block
    mt-6
    text-indigo-600
    font-semibold
    hover:text-purple-600
  "
>
  Watch Lesson →
</a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Courses;
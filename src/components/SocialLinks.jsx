const links = [
  {
    name: "YouTube",
    icon: "fa-brands fa-youtube",
    url: "https://youtube.com/@grammarsimplified",
    desc: "Free Grammar Lessons & Tutorials",
    color: "bg-red-500",
  },
  {
    name: "Telegram",
    icon: "fa-brands fa-telegram",
    url: "https://t.me/grammarsimplifiedsonalibhanwar",
    desc: "Daily Notes & Learning Updates",
    color: "bg-sky-500",
  },
  {
    name: "WhatsApp",
    icon: "fa-brands fa-square-whatsapp",
    url: "https://whatsapp.com/channel/0029VbBvwElG8l5IY7zXCS3e",
    desc: "Join Our Learning Community",
    color: "bg-green-500",
  },
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    url: "https://instagram.com/grammarsimplified_sonali",
    desc: "Grammar Tips, Reels & Updates",
    color: "bg-pink-500",
  },
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook",
    url: "https://www.facebook.com/share/1HB5xbmAK2/",
    desc: "Community & Educational Updates",
    color: "bg-blue-600",
  },
];

function SocialLinks() {
  return (
    <section
      id="community"
      className="py-24 bg-gradient-to-b from-white via-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 uppercase tracking-[4px] font-semibold">
            Join Our Community
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-extrabold">
            Connect With Us
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Follow GrammarSimplified Sonali on your favorite platform
            and get grammar lessons, notes, quizzes and learning updates.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="
                group
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-500
                border border-gray-100
              "
            >
              <div
                className={`
                  ${link.color}
                  w-20
                  h-20
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-white
                  text-4xl
                  mb-6
                  group-hover:scale-110
                  transition
                `}
              >
                <i className={link.icon}></i>
              </div>

              <h3 className="text-2xl font-bold">
                {link.name}
              </h3>

              <p className="text-gray-600 mt-3">
                {link.desc}
              </p>

              <div className="mt-6 text-indigo-600 font-semibold">
                Join Now →
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="https://www.youtube.com/@grammarsimplified?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              bg-red-600
              hover:bg-red-700
              text-white
              px-10
              py-4
              rounded-full
              font-bold
              shadow-lg
              transition
            "
          >
            <i className="fa-brands fa-youtube mr-2"></i>
            Subscribe & Start Learning
          </a>
        </div>

      </div>
    </section>
  );
}

export default SocialLinks;
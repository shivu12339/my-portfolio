import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 p-6">
      <header className="text-center py-10">
        <motion.h1
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Shivaraju M
        </motion.h1>
        <p className="text-lg text-gray-700 mt-2">
          Java Full-Stack Developer | Spring Boot | React | MySQL
        </p>
      </header>

      <main className="max-w-5xl mx-auto space-y-12">
        {/* About Me */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
          <div className="p-6 bg-white shadow-xl rounded-2xl">
            <p>
              Passionate Java Full-Stack Developer with experience building web
              apps using Java, Spring Boot, React, and MySQL. Certified in Core
              Java, SQL, Agile, and Web Technologies.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-5 bg-white shadow-lg rounded-2xl">
              <h3 className="text-xl font-bold">🧾 Personal Finance System</h3>
              <p className="my-2">
                A full-stack app to manage expenses, income, and financial goals.
              </p>
              <a
                href="https://github.com/shivu12339/PersonalFinanceApp"
                target="_blank"
                className="text-blue-600"
              >
                GitHub →
              </a>
            </div>

            <div className="p-5 bg-white shadow-lg rounded-2xl">
              <h3 className="text-xl font-bold">🎓 Exam Seating System</h3>
              <p className="my-2">
                Automates exam invigilation duties and student seating with Excel.
              </p>
              <a
                href="https://github.com/Sudhi27Krishna/Exam-Seat-Arrangement-System"
                target="_blank"
                className="text-blue-600"
              >
                GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* Resume */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resume</h2>
          <div className="p-6 bg-white shadow-xl rounded-2xl text-center">
            <a href="/resume.pdf" download className="text-blue-600 font-semibold">
              📄 Download My Resume
            </a>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
          <div className="p-6 bg-white shadow-xl rounded-2xl space-y-4 text-center">
            <p>Email: shivarajushivu230@gmail.com</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/shivu12339"
                target="_blank"
                className="hover:text-blue-600"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shivarajum"
                target="_blank"
                className="hover:text-blue-600"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:shivarajushivu230@gmail.com"
                className="hover:text-blue-600"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center text-gray-600 mt-12">
        © 2025 Shivaraju M. All rights reserved.
      </footer>
    </div>
  );
}

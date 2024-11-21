
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function AboutDev() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-base-100 shadow-md rounded-lg p-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">About the Developer</h2>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold">Personal Information</h3>
                    <p className="mt-2">
                        <strong>Name:</strong> Darun Karas Abir
                    </p>
                    <p>
                        <strong>Email:</strong>
                        <a href="mailto:darun15-14188@diu.edu.bd" className="text-[#19BC9B] hover:underline ml-1">
                            darun15-14188@diu.edu.bd
                        </a>
                    </p>
                    <p>
                        <strong>Phone:</strong>
                        <a href="tel:+8801994494143" className="text-[#19BC9B] hover:underline ml-1">
                            +8801994494143
                        </a>
                    </p>
                    <p>
                        <strong>Location:</strong> Dhaka, Bangladesh
                    </p>
                    <p>
                        <strong>Portfolio:</strong>
                        <a
                            href="https://visionary-zuccutto-f34f8c.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#19BC9B] hover:underline ml-1"
                        >
                            Portfolio Website
                        </a>
                    </p>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold">Social Links</h3>
                    <div className="flex gap-4 mt-2">
                        <a href="https://linkedin.com/in/darun-karas-abir-48ba14212" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-[#0A66C2] text-2xl hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://github.com/DKAbir111" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-black text-2xl hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold">Skills</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>MERN (ReactJS, NodeJS, ExpressJS, MongoDB, TypeScript)</li>
                        <li>Web Development (HTML5, CSS, JavaScript, PHP, WordPress, MySQL)</li>
                        <li>Frameworks: TailwindCSS, DaisyUI, Bootstrap, Material UI</li>
                        <li>Other Tools: Firebase, Git/GitHub, Docker, Pixso, Figma</li>
                        <li>SQA: Manual, Automation, API Testing (Postman, Selenium, JMeter)</li>
                        <li>Operating Systems: Windows, Ubuntu, MacOS, RedHat</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold">Education</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>
                            <strong>BSc in Computer Science and Engineering</strong>,
                            Daffodil International University (CGPA: 3.90)
                        </li>
                        <li>
                            <strong>HSC in Science</strong>, Rashed Khan Menon Model School and College (GPA: 5.00)
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold">Professional Experience</h3>
                    <p className="mt-2">
                        <strong>Software Engineer Intern</strong>, Business Automation Limited (02/2024 - Present)
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Developing front-end and back-end features</li>
                        <li>Debugging and troubleshooting issues</li>
                        <li>Version control using GitHub</li>
                        <li>Deploying applications with Docker</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold">Projects</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>
                            <strong>Panda Shopping:</strong> E-commerce platform using HTML, CSS, JavaScript, and React
                        </li>
                        <li>
                            <strong>Peddy:</strong> Pet adoption platform with dynamic categories (Tailwind, React)
                        </li>
                        <li>
                            <strong>GadgetHeaven:</strong> MERN stack app for gadget lovers
                        </li>
                        <li>
                            <strong>Smart Ticketing:</strong> Full responsive ticket booking system
                        </li>
                        <li>Other projects include Fitness Tracking App, BDStore, and more</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold">Certifications</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>Web Development (Programming Hero)</li>
                        <li>Digital Product Management (Ostad)</li>
                        <li>SQA: Manual and Automated Testing (Ostad)</li>
                        <li>Red Hat Certified System Administrator (Udemy)</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

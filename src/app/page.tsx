import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-white font-sans">
      <nav className="w-full px-8 py-6 flex items-center justify-between bg-[#0A192F]/80 fixed top-0 left-0 z-50 shadow-lg">
        <div className="font-bold text-xl tracking-tight">Vaijinath Mane, PhD</div>
        <div className="flex space-x-6 text-base">
          <a href="#about" className="hover:text-[#64FFDA] transition">About</a>
          <a href="#resume" className="hover:text-[#64FFDA] transition">Resume</a>
          <a href="#skills" className="hover:text-[#64FFDA] transition">Skills</a>
          <a href="#projects" className="hover:text-[#64FFDA] transition">Projects</a>
          <a href="#contact" className="hover:text-[#64FFDA] transition">Contact</a>
          <a href="#blog" className="hover:text-[#64FFDA] transition">Blog</a>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="/Vaijinath_Mane_Resume.pdf"
            download
            className="bg-[#64FFDA] text-[#0A192F] px-4 py-2 rounded font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            Download Resume
          </a>
          <a href="https://www.linkedin.com/in/vaijinath-mane-ph-d-02719b77/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
            <svg height="24" width="24" fill="#64FFDA" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-3v-9h3v9zm-1.5-10.27c-.96 0-1.25-.68-1.25-1.23 0-.56.3-1.22 1.28-1.22.97 0 1.25.66 1.25 1.22 0 .55-.28 1.23-1.28 1.23zm14.25 10.27h-3v-4.99c0-1.19-.43-2-1.52-2-.83 0-1.33.56-1.54 1.1-.08.19-.1.45-.1.71v5.18h-3s.04-8.41 0-9h3v1.27c.39-.6 1.1-1.46 2.7-1.46 1.97 0 3.45 1.29 3.45 4.06v5.13z"/></svg>
          </a>
        </div>
      </nav>
      <div className="pt-32 pb-12 px-4 max-w-3xl mx-auto" id="home">
        <h1 className="text-4xl md:text-5xl font-bold text-[#64FFDA] mb-4">Vaijinath Mane, PhD</h1>
        <h2 className="text-xl md:text-2xl mb-2 text-slate-200">Senior Research Scientist | Medicinal Chemistry | Process Development</h2>
        <p className="text-lg text-slate-400">"Innovating at the intersection of synthetic organic chemistry and drug development."</p>
        <div className="mt-6 flex flex-wrap gap-6">
          <a href="#about" className="text-[#64FFDA] underline hover:text-white">Learn more about me</a>
          <a href="mailto:maneiitbombay@gmail.com" className="text-slate-300 underline hover:text-[#64FFDA]">Email</a>
        </div>
      </div>
      {/* About Section */}
      <section id="about" className="py-12 px-4 max-w-3xl mx-auto">
        <h3 className="text-2xl text-[#64FFDA] font-semibold mb-4">About Me</h3>
        <div className="bg-[#112240] rounded-lg p-6 shadow mb-4">
          <p className="text-lg mb-2">Senior Research Scientist I (Process Development) at Eurofins CDMO Alphora Inc., Mississauga, Canada. Experienced in the development of advanced chemical processes for the manufacturing of drug substances, with deep expertise in synthetic organic and medicinal chemistry. Proven record of impactful research, publications, and project leadership across Canada, France, and India.</p>
          <div className="grid md:grid-cols-2 gap-4 text-slate-300 mt-3">
            <div>
              <div><b>Status:</b> Citizen</div>
              <div><b>Location:</b> Windjammer Road, Mississauga, ON, Canada</div>
              <div><b>Email:</b> <a href="mailto:maneiitbombay@gmail.com" className="underline text-[#64FFDA]">maneiitbombay@gmail.com</a></div>
              <div><b>Phone:</b> <a href="tel:+14372488276" className="underline text-[#64FFDA]">(+1) 437 248 8276</a></div>
            </div>
            <div>
              <div><b>LinkedIn:</b> <a className="underline text-[#64FFDA]" href="https://www.linkedin.com/in/vaijinath-mane-ph-d-02719b77/" target="_blank" rel="noreferrer noopener">vaijinath-mane-ph-d</a></div>
            </div>
          </div>
        </div>
      </section>
      {/* Resume Section */}
      <section id="resume" className="py-12 px-4 max-w-3xl mx-auto">
        <h3 className="text-2xl text-[#64FFDA] font-semibold mb-4">Resume</h3>
        <div className="mb-8">
          <h4 className="text-lg text-[#64FFDA] font-semibold mb-1">Research Experience</h4>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <b>Senior Research Scientist I (Process Development)</b><br />
              Eurofins CDMO Alphora Inc., Mississauga, Canada<br />
              <span className="italic text-slate-400">June 2022 - Present</span><br />
              Development of chemical processes for manufacturing drug substances
            </li>
            <li>
              <b>Postdoctoral Fellow (Medicinal Chemistry)</b><br />
              University of Toronto, Canada<br />
              <span className="italic text-slate-400">2019 - 2022 | Advisor: Dr. Mark A. Reed</span><br />
              Design/Synthesis of Ligands to Treat Radiation-Induced Fibrosis and Rett Syndrome (Ligand-Based Drug Design)
            </li>
            <li>
              <b>Postdoctoral Research Associate (Medicinal Chemistry)</b><br />
              CEA Saclay, France<br />
              <span className="italic text-slate-400">2017 - 2019 | Advisor: Dr. Jean-Christophe Cintrat</span><br />
              Synthesis of Shiga toxin and Ricin inhibitors (Ligand-Based Drug Design)
            </li>
            <li>
              <b>Research Associate (Synthetic Methodology)</b><br />
              IIT Bombay, Mumbai, India<br />
              <span className="italic text-slate-400">2017</span><br />
              New Synthetic Methodologies using Morita-Baylis-Hillman and Rauhut-Currier adducts
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h4 className="text-lg text-[#64FFDA] font-semibold mb-1">Education</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><b>Ph.D. in Synthetic Organic Chemistry</b>, Indian Institute of Technology Bombay, Mumbai, India (2017)<br /><span className="text-slate-400">Supervisor: Prof. Irishi N. N. Namboothiri<br />Dissertation: [3+2] Annulation of α-Substituted Nitroalkenes with 1,3-Binucleophiles</span></li>
            <li><b>Master of Science in Organic Chemistry</b> (with Distinction, University 3rd rank), Dr. Babasaheb Ambedkar Marathwada University, Aurangabad, India (2010)</li>
            <li><b>Bachelor of Science (First Division)</b>, Dr. Babasaheb Ambedkar Marathwada University, Aurangabad, India (2008)</li>
          </ul>
        </div>
        <div className="mb-8">
          <h4 className="text-lg text-[#64FFDA] font-semibold mb-1">Fellowships and Awards</h4>
          <ul className="list-disc pl-6">
            <li>Shyama Prasad Mukherjee Senior Research Fellowship (2015–2016), CSIR, India</li>
            <li>Shyama Prasad Mukherjee Junior Research Fellowship (2012–2014), CSIR, India</li>
            <li>Qualified CSIR-NET (All-India Rank - 03)</li>
            <li>Qualified GATE (All-India Rank - 279)</li>
            <li>Qualified State Eligibility Test (SET)</li>
          </ul>
        </div>
        <div className="mb-8">
          <h4 className="text-lg text-[#64FFDA] font-semibold mb-1">Teaching & Co-guidance</h4>
          <ul className="list-disc pl-6">
            <li>Trained over 200+ undergraduates in core chemistry concepts/lab techniques, Department of Chemistry, IIT Bombay, India</li>
            <li>Co-guided Ph.D. and undergraduate interns on synthetic techniques</li>
          </ul>
        </div>
        <div className="mb-8">
          <h4 className="text-lg text-[#64FFDA] font-semibold mb-1">Conferences & Symposiums</h4>
          <b>Oral presentations:</b>
          <ul className="list-disc pl-8 mb-2">
            <li>In-house Symposium, 2017, IIT Bombay, Mumbai</li>
            <li>12th National Organic Symposium Trust, 2016, CDRI, Lucknow</li>
            <li>28th Research Scholar Meet, 2016, Thakur College, Mumbai</li>
            <li>New Horizons in Synthetic and Materials Chemistry, 2015, Mumbai</li>
          </ul>
          <b>Poster presentations:</b>
          <ul className="list-disc pl-8 mb-2">
            <li>ICOS 21, 2016, IIT Bombay, Mumbai</li>
            <li>16th Tetrahedron Symposium, 2015, Berlin</li>
            <li>10th National Organic Symposium Trust, 2014, IIT Madras</li>
            <li>International Symposium, 2014, NIPER, Mohali</li>
            <li>In-house Symposium, 2013, IIT Bombay, Mumbai</li>
          </ul>
          <b>Attended:</b>
          <ul className="list-disc pl-8">
            <li>International Symposium "Drug Discovery and New Therapeutics", 2018, Paris, France</li>
            <li>7th Annual LabEx LERMIT Symposium, 2017, Paris, France</li>
            <li>ACS on the Campus, 2016, IIT Bombay, Mumbai</li>
            <li>16th CRSI National Symposium in Chemistry, 2014, IIT Bombay, Mumbai</li>
            <li>ACS Symposium, 2012, IIT Bombay, Mumbai</li>
          </ul>
        </div>
        <div className="mb-8">
          <h4 className="text-lg text-[#64FFDA] font-semibold mb-1">References</h4>
          <ul className="pl-6 text-sm text-slate-200">
            <li><b>Dr. Dhruval Joshi</b> — Senior Scientist, Eurofins CDMO Alphora Inc. <br/>E-mail: dhruval.Joshi@bpt.eurofinsca.com, Office: +1 (905) 324 1606</li>
            <li><b>Prof. Mark A. Reed</b> — University of Toronto, Canada <br/>E-mail: mark.Reed@uhnresearch.ca, Cell: +1 (647) 924 9736</li>
            <li><b>Dr. Jean-Christophe Cintrat</b> — CEA-Saclay, France <br/>E-mail: jean-christophe.cintrat@cea.fr, Office: +33 1 69 08 21 07</li>
            <li><b>Prof. Irishi N. N. Namboothiri</b> — IIT Bombay, India <br/>E-mail: irishi@chem.iitb.ac.in, Office: +91 22 25 76 71 96</li>
          </ul>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-12 px-4 max-w-3xl mx-auto">
        <h3 className="text-2xl text-[#64FFDA] font-semibold mb-4">Skills</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-[#112240] rounded-lg p-4"><b>Process Development</b><ul className="list-disc pl-5 text-slate-300 text-sm"><li>Multistep organic synthesis, isolation & purification of drug substances (including Gilead’s impurity synthesis)</li><li>Process route selection & optimization, safe manufacturing adhering to SOP</li><li>Executed batch processes from gram-to-kg scale</li></ul></div>
          <div className="bg-[#112240] rounded-lg p-4"><b>Ligand-based Drug Design</b><ul className="list-disc pl-5 text-slate-300 text-sm"><li>Design/synthesis of small ligands guided by biological response</li></ul></div>
          <div className="bg-[#112240] rounded-lg p-4"><b>Instrumentation</b><ul className="list-disc pl-5 text-slate-300 text-sm"><li>Expert in NMR (1H, 13C, 1D/2D), UPLC, HPLC, IR, UV, LC-MS, KF, PLM</li></ul></div>
          <div className="bg-[#112240] rounded-lg p-4"><b>Purification</b><ul className="list-disc pl-5 text-slate-300 text-sm"><li>Chromatography: Thin-layer, Glass Column, Combi-Flash, Biotage; Crystallization</li></ul></div>
          <div className="bg-[#112240] rounded-lg p-4"><b>Software</b><ul className="list-disc pl-5 text-slate-300 text-sm"><li>Chem Draw, DOE (Stat-Ease), SciFinder, Office 365, CDD vault, etc.</li></ul></div>
          <div className="bg-[#112240] rounded-lg p-4"><b>Communication</b><ul className="list-disc pl-5 text-slate-300 text-sm"><li>Excellent verbal & written communication, multicultural mindset</li></ul></div>
          <div className="bg-[#112240] rounded-lg p-4"><b>Problem Solving</b><ul className="list-disc pl-5 text-slate-300 text-sm"><li>Investigative leader and solution-focused</li></ul></div>
          <div className="bg-[#112240] rounded-lg p-4"><b>Time Management</b><ul className="list-disc pl-5 text-slate-300 text-sm"><li>Efficient planner, adheres to timelines</li></ul></div>
          <div className="bg-[#112240] rounded-lg p-4"><b>Leadership</b><ul className="list-disc pl-5 text-slate-300 text-sm"><li>Mentor, peer development, and driving departmental initiatives</li></ul></div>
          <div className="bg-[#112240] rounded-lg p-4"><b>Teamwork</b><ul className="list-disc pl-5 text-slate-300 text-sm"><li>Collaborative and independent worker</li></ul></div>
          <div className="bg-[#112240] rounded-lg p-4"><b>Learning</b><ul className="list-disc pl-5 text-slate-300 text-sm"><li>Quick to adapt and master new technologies</li></ul></div>
          <div className="bg-[#112240] rounded-lg p-4"><b>Academic writing</b><ul className="list-disc pl-5 text-slate-300 text-sm"><li>Authored manuscripts, grant proposals, research reports</li></ul></div>
        </div>
      </section>
      {/* Projects/Publications Section */}
      <section id="projects" className="py-12 px-4 max-w-3xl mx-auto">
        <h3 className="text-2xl text-[#64FFDA] font-semibold mb-4">Projects & Publications</h3>
        <div className="mb-8">
          <h4 className="text-lg text-[#64FFDA] font-semibold mb-1">Selected Publications</h4>
          <ol className="list-decimal pl-8 space-y-1 text-slate-300 text-sm">
            <li>Design and Synthesis of Novel Polypharmacological Molecules to Treat Radiation-Induced Fibrosis – <b>Mane, V.; Yip, K.; Bissey, P. A.; Fei-Fei, L.; Reed, M. A. </b>(Patent, and publication)</li>
            <li>Design, Synthesis, and Evaluation of Small Molecule TRPM2 Inhibitors for Rett Syndrome – <b>Mane, V.; James, E.; Reed, M. A. </b>(Patent, and publication)</li>
            <li>Synthesis of endosome-to-Golgi retrograde transport inhibitors for neutralizing ricin and Shiga toxins – <b>Mane, V.; Vink, R.; Cintrat, J.-C. </b>(Manuscript under preparation)</li>
            <li>Metal-Free Reduction of Aromatic Nitro Compounds – <b>Reed, M. A.; Mane, V.</b> (Synfacts 2022, 18, 0355)</li>
            <li>Metal-Free Synthesis of 4-Aryl-1,2,3-triazoles by Iodine-Promoted Cyclization – <b>Reed, M. A.; Mane, V. </b> (Synfacts 2021,17, 1328)</li>
            <li>One-Pot Construction of 2,3-Dialkyl-Substituted Quinazolinones from Secondary Amides and Isocyanate – <b>Reed, M. A.; Mane, V. </b> (Synfacts 2021, 17, 0750)</li>
            <li>Rhodium-Catalyzed Synthesis of 1H-Indole-2,3-dicarboxylates from Arylhydrazines and Maleates – <b>Snieckus, V.; Mane, V.; Reed, M. A. </b> (Synfacts 2021, 17, 0256)</li>
            <li>Bismuth (III)-Catalyzed Synthesis of 2-(Fluoroalkyl) imidazole-5-carbaldehydes – <b>Snieckus, V.; Mane, V.; Reed, M. A.</b> (Synfacts 2020, 16, 1154)</li>
            <li>Synthesis of Densely Substituted Sulfonylfurans and Dihydrofurans via Cascade Reactions of α-Functionalized Nitroalkenes with β-Ketosulfones – <b>Mane, V.; Sivanandan, S. T.; Santana, R. G.; Beatriz, A.; da Silva Junior, E. N.; Namboothiri, I. N.N. </b> (J. Org. Chem. 2020, 85, 8825)</li>
            <li>Direct C-2 Carboxylation of Electron-Deficient Indoles – <b>Snieckus, V.; Mane, V.; Reed, M. A.</b> (Synfacts 2020, 16, 0638)</li>
            <li>Metal-Free Synthesis of Aza-Fused Heteroaromatics – <b>Snieckus, V.; Mane, V.; Reed, M. A. </b> (Synfacts 2020, 16, 0146)</li>
            <li>Synthesis of Functionalized Thieno[2,3-b]indoles via One-pot Reaction of Indoline-2-thiones with Morita-Baylis-Hillman and Rauhut–Currier Adducts of Nitroalkenes – <b>Mane, V.; Baiju, A. K.; Namboothiri, I. N. N.</b> (ACS Omega 2018, 3, 17617)</li>
            <li>Synthesis of Aminophenanthrenes and Benzoquinolines via Hauser-Kraus Annulation of Sulfonyl Phthalide with Rauhut-Currier Adducts of Nitroalkenes – <b>Kumar, T.; Mane, V.; Namboothiri, I. N. N. </b> (Org. Lett. 2017, 19, 4283)</li>
            <li>Application of a Nanosensor...Hydrazinonitroalkene in Human Blood Serum – <b>D'Souza, O. J.; Mascarenhas, R.; Satpati, A.; Mane, V.; Mekhalif, Z.</b> (Electroanalysis 2017, 29, 1794)</li>
            <li>Synthesis of Hydrazinoheterocycles from Morita-Baylis-Hillman Adducts... – <b>Mane, V.; Pandey, J.; Ayagari, N.; Dey, C.; Kale, R.; Namboothiri, I. N. N.</b> (Org. Biomol. Chem. 2016, 14, 2427)</li>
            <li>One-pot Regioselective Synthesis of Functionalized and Fused Furans... – <b>Mane, V.; Kumar, T.; Pradhan, S.; Katiyar, S.; Namboothiri, I. N. N. </b> (RSC Adv. 2015, 5, 69990)</li>
            <li>Diastereoselective Synthesis of Substituted Decalins from Rauhut-Currier Adducts... – <b>Shanbhag, P.; Mane, V.; Hazra, C.; Namboothiri, I. N. N.</b> (J. Ind. Chem. Soc. 2013, 90, 1713)</li>
          </ol>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 max-w-3xl mx-auto">
        <h3 className="text-2xl text-[#64FFDA] font-semibold mb-4">Contact</h3>
        <div className="bg-[#112240] rounded-lg p-6">
          <p className="text-lg mb-2">Have a question or want to connect? Feel free to reach out:</p>
          <ul className="text-slate-300">
            <li><b>Email:</b> <a href="mailto:maneiitbombay@gmail.com" className="underline text-[#64FFDA]">maneiitbombay@gmail.com</a></li>
            <li><b>Phone:</b> <a href="tel:+14372488276" className="underline text-[#64FFDA]">(+1) 437 248 8276</a></li>
            <li><b>LinkedIn:</b> <a className="underline text-[#64FFDA]" href="https://www.linkedin.com/in/vaijinath-mane-ph-d-02719b77/" target="_blank" rel="noreferrer noopener">vaijinath-mane-ph-d</a></li>
          </ul>
        </div>
      </section>
      {/* Blog Section (future) */}
      <section id="blog" className="py-12 px-4 max-w-3xl mx-auto">
        <h3 className="text-2xl text-[#64FFDA] font-semibold mb-4">Blog</h3>
        <p>Coming soon.</p>
      </section>
    </main>
  );
}

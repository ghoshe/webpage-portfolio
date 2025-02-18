
"use client";

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { Send } from 'lucide-react';

// TypeScript Interfaces
interface NavItem {
  href: string;
  label: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
}

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems: NavItem[] = [
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#publications", label: "Publications" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 w-full p-4 bg-black/80 backdrop-blur-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl font-semibold hover:opacity-80 transition-opacity">
          Eshaan Ghosh
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-white/80 hover:text-white transition-opacity">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute top-full left-0 right-0 flex flex-col w-full bg-black/95 py-4 md:hidden">
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className="block py-2 px-4 text-white/80 hover:text-white transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  const stats = [
    { number: "12+", label: "Years Experience" },
    { number: "3", label: "Patents" },
    { number: "30+", label: "Research Papers" }
  ];

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center p-4 md:p-8 gap-6 md:gap-8">
      <h1 className="text-5xl md:text-9xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Eshaan Ghosh
      </h1>
      <div className="flex flex-col gap-4 md:gap-6">
        <p className="text-xl md:text-2xl text-white/80">AI Product Leader & Innovation Strategist</p>
        <p className="text-xl md:text-2xl text-white/80 max-w-6xl">
          Transforming industries through AI-driven solutions and strategic product development
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 my-4 md:my-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
            <div className="text-sm text-white/60">{stat.label}</div>
          </div>
        ))}
      </div>

      <a href="#contact" className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:scale-105 transition-transform">
        Get in Touch
      </a>
    </section>
  );
};
// Experience Card Component
const ExperienceCard: React.FC<ExperienceItem> = ({ role, company, duration, achievements }) => (
  <div className="bg-white/5 rounded-2xl p-4 md:p-8 hover:-translate-y-1 transition-transform">
    <div className="flex flex-col md:flex-row justify-between items-start mb-4">
      <div>
        <div className="text-xl md:text-2xl font-semibold text-white">{role}</div>
        <div className="text-base md:text-lg text-gray-400">{company}</div>
      </div>
      <div className="text-sm text-gray-500 mt-2 md:mt-0">{duration}</div>
    </div>
    <ul className="space-y-4">
      {achievements.map((achievement, index) => (
        <li key={index} className="pl-6 relative text-gray-300 before:content-[&apos;•&apos;] before:absolute before:left-0 before:text-gray-500">
          {achievement}
        </li>
      ))}
    </ul>
  </div>
);

// Experience Component
const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      role: "Product Manager, Data Science",
      company: "Veeva Systems",
      duration: "January 2022 - Present",
      achievements: [
        "Spearheaded development of Veeva Compass National and Veeva Compass Prescriber, significantly advancing predictive analytics for U.S pharmaceutical markets.",
        "Secured first paid client within 6 months of launch, with projected 50% revenue growth.",
        "Successfully navigated complex stakeholder landscapes, influencing decision-makers at all organizational levels.",
        "Improved feature usage by 25% through continuous feedback loop implementation."
      ]
    },
    {
      role: "Senior Data Analyst / Manager",
      company: "Xe Corporation",
      duration: "January 2020 - December 2021",
      achievements: [
        "Led 0-to-1 product development for Loyalty Programs, achieving 45% increase in customer engagement.",
        "Directed development of ML production pipelines for Customer Care app.",
        "Reduced cloud infrastructure costs by 20% through optimization.",
        "Primary data solutions architect for multiple transactional and analytics projects."
      ]
    },
    {
      role: "Research and Development Engineering Manager",
      company: "Centre for Hybrid Automotive Research and Green Energy (CHARGE)",
      duration: "2018 - 2019",
      achievements: [
        "Managed and led a team of 30 Ph.D. researchers and engineers in developing a Machine Learning-based model for electric vehicles, enhancing predictive safety capabilities and vehicular optimization.",
        "Developed research and development projects focusing on electric vehicle motor and control systems for major automotive companies.",
        "Directed the formulation and approval of research project specifications, ensuring compatibility with required engineering standards and codes for new product designs.",
        "Spearheaded collaborative projects with industry partners, government research labs, and universities, securing multi-million dollar funding for advanced research initiatives.",
      ]
    },
    {
      role: "Founder",
      company: "Hybridize Your Car",
      duration: "2017 - 2018",
      achievements: [
        "Founded and led an innovative startup focused on developing electric vehicle (EV) conversion kits for traditional gas vehicles.",
        "Secured funding through the RBC EPIC Founders Program, demonstrating strong business potential to investors.",
        "Led a specialized team of researchers and engineers in the design and testing of EV conversion kits.",
        "Managed all aspects of business operations including product development, marketing strategy, and revenue generation."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-8 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Professional Experience
      </h2>
      <div className="max-w-6xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

// Education Types
interface EducationItem {
  school: string;
  degree: string;
  field: string;
  duration: string;
  logo: string;
  website?: string;
}

// Education Card Component
const EducationCard: React.FC<EducationItem> = ({ school, degree, field, duration, logo, website }) => (
  <div className="bg-white/5 rounded-2xl p-8 hover:-translate-y-1 transition-transform">
    <div className="flex items-start gap-6">
      <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center p-2">
        <Image 
          src={logo} 
          alt={`${school} logo`}
          width={64}
          height={64}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-semibold text-white">{degree}</h3>
            {website ? (
              <a 
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-400 hover:text-white transition-colors"
              >
                {school}
              </a>
            ) : (
              <div className="text-lg text-gray-400">{school}</div>
            )}
            <div className="text-md text-gray-500 mt-1">{field}</div>
          </div>
          <div className="text-sm text-gray-500">{duration}</div>
        </div>
      </div>
    </div>
  </div>
);

// Education Section Component
const Education = () => {
  const education: EducationItem[] = [
    {
      school: "University of Windsor",
      degree: "Doctor of Philosophy (Ph.D.)",
      field: "Electrical and Computer Engineering",
      duration: "2013 - 2018",
      logo: "/logos/uwindsor.png",
      website: "https://www.uwindsor.ca"
    },
    {
      school: "Harvard Business School",
      degree: "Executive Education",
      field: "Specialization in Entrepreneurship and Innovation",
      duration: "Online",
      logo: "/logos/harvard.png",
      website: "https://www.hbs.edu"
    },
    {
      school: "Stanford Continuing Studies",
      degree: "Professional Certificate",
      field: "Product Management",
      duration: "Online",
      logo: "/logos/stanford.png",
      website: "https://continuingstudies.stanford.edu"
    },
    {
      school: "Haldia Institute of Technology",
      degree: "Bachelor of Technology",
      field: "Instrumentation and Control Engineering",
      duration: "2008 - 2012",
      logo: "/logos/hit.png",
      website: "https://www.hithaldia.ac.in"
    }
  ];

  return (
    <section id="education" className="py-24 px-8 bg-gradient-to-b from-black to-gray-900">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Education
      </h2>
      <div className="max-w-6xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard: React.FC<ProjectItem> = ({ title, description, image, tags, link }) => (
  <div className="bg-white/5 rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform">
    <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center text-2xl font-semibold">
      {image}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-400">
            {tag}
          </span>
        ))}
      </div>
      <a href={link} className="inline-block mt-4 text-white/80 hover:text-white transition-opacity">
        Learn More →
      </a>
    </div>
  </div>
);

// Projects Component
const Projects = () => {
  const projects: ProjectItem[] = [
    {
      title: "Veeva Compass National & Prescriber",
      description: "Advanced predictive analytics platform for U.S. pharmaceutical markets, featuring sophisticated data projection and visualization capabilities.",
      image: "Veeva Compass",
      tags: ["AI/ML", "AWS", "Predictive Analytics"],
      link: "#"
    },
    {
      title: "Xe Customer Care ML Pipeline",
      description: "Real-time machine learning system for fraud detection and entity resolution, enhancing customer service efficiency.",
      image: "Customer Care",
      tags: ["Machine Learning", "Sagemaker", "EMR Spark"],
      link: "#"
    },
    {
      title: "Electric Vehicle Conversion Kit",
      description: "Innovative solution for converting traditional gas vehicles to electric, featuring advanced motor control systems and optimization algorithms.",
      image: "EV Kit",
      tags: ["Hardware", "Motor Control", "Optimization"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 bg-black">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

// TypeScript Interfaces
interface PublicationItem {
  title: string;
  authors: string;
  venue: string;
  year: string;
}

interface CategoryProps {
  title: string;
  children: React.ReactNode;
}

interface PublicationData {
  conferences: PublicationItem[];
  journals: PublicationItem[];
  patents: PublicationItem[];
}

// Publications Helper Components
const PublicationCategory: React.FC<CategoryProps> = ({ title, children }) => (
  <div className="mb-8 md:mb-12">
    <h3 className="text-xl font-semibold mb-4 md:mb-6 text-white/90 px-4 md:px-0">{title}</h3>
    <div className="space-y-4 md:space-y-6">
      {children}
    </div>
  </div>
);

const PublicationItem: React.FC<PublicationItem> = ({ title, authors, venue, year }) => (
  <div className="bg-white/10 p-4 md:p-6 rounded-xl hover:bg-white/15 transition-colors backdrop-blur-sm mx-4 md:mx-0">
    <h4 className="text-lg md:text-xl font-medium mb-2">{title}</h4>
    <p className="text-sm md:text-base text-white/80 mb-2">{authors}</p>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1">
      <span className="text-sm text-white/60 italic">{venue}</span>
      <span className="text-sm font-medium text-white/80">{year}</span>
    </div>
  </div>
);

// Main Publications Component
const Publications = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'journal', label: 'Journals' },
    { id: 'conference', label: 'Conferences' },
    { id: 'patent', label: 'Patents' }
  ] as const;

  const publications: PublicationData = {
    conferences: [
      {
        title: "Non-Dominated Sorting Genetic Algorithm Based Investigation of Optimal Odd Slot Numbers for Stator Shifted Fractional-Slot Wound PMSMs",
        authors: "S. Mukundan, H. Dhulipati, E. Ghosh, G. Feng, J. Tjong and N. C. Kar",
        venue: "IEEE Energy Conversion Congress and Exposition (ECCE)",
        year: "2019"
      },
      {
        title: "DNN predictive magnetic flux control for harmonics compensation in a magnetically unbalanced induction motor",
        authors: "E. Ghosh, A. Mollaeian, S. Kim and N. C. Kar",
        venue: "IEEE International Magnetics Conference",
        year: "2017"
      }
    ],
    journals: [
      {
        title: "Advanced Design Optimization Technique for Torque Profile Improvement in Six-Phase PMSM Using Supervised Machine Learning for Direct-Drive EV",
        authors: "H. Dhulipati, E. Ghosh, S. Mukundan, P. Korta, J. Tjong and N. C. Kar",
        venue: "IEEE Transactions on Energy Conversion",
        year: "2019"
      }
    ],
    patents: [
      {
        title: "Systems and Methods for Generating and Displaying a Graphical User Interface Including an Animated Graph",
        authors: "Eshaan Ghosh et al.",
        venue: "United States Patent, filed awaiting approval",
        year: "2024"
      },
      {
        title: "Systems and Methods for Generating Data Records and Displaying the Data Records on a Graphical User Interfac",
        authors: "Eshaan Ghosh et al.",
        venue: "United States Patent, filed awaiting approval",
        year: "2024"
      },
      {
        title: "Scalable Multilevel Power Converter",
        authors: "Eshaan Ghosh et al.",
        venue: "United States Patent, WO2019236861A8",
        year: "2010"
      }
    ]
  };

  const stats = [
    { number: "30+", label: "Research Papers" },
    { number: "3", label: "Patents" },
    { number: "12+", label: "Technical Reports" }
  ];

  return (
    <section id="publications" className="py-24 px-8 bg-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent px-4 md:px-0">
        Publications & Patents
      </h2>
      
      <div className="max-w-4xl mx-auto mb-8 md:mb-16 grid grid-cols-3 gap-3 md:gap-8 px-4 md:px-0">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/10 p-4 md:p-8 rounded-xl text-center backdrop-blur-lg">
            <div className="text-3xl md:text-5xl font-bold mb-2 md:mb-3 text-white">{stat.number}</div>
            <div className="text-sm md:text-lg text-white/80">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <div className="flex justify-start md:justify-center gap-2 md:gap-4 flex-wrap px-4 md:px-0 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 md:px-6 py-2 rounded-full transition-colors whitespace-nowrap ${
                  filter === category.id 
                    ? 'bg-white text-black font-medium' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                aria-label={`Filter by ${category.label}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

      <div className="max-w-4xl mx-auto">
        {(filter === 'all' || filter === 'conference') && (
          <PublicationCategory title="Conference Publications">
            {publications.conferences.map((pub, index) => (
              <PublicationItem key={index} {...pub} />
            ))}
          </PublicationCategory>
        )}
        
        {(filter === 'all' || filter === 'journal') && (
          <PublicationCategory title="Journal Publications">
            {publications.journals.map((pub, index) => (
              <PublicationItem key={index} {...pub} />
            ))}
          </PublicationCategory>
        )}
        
        {(filter === 'all' || filter === 'patent') && (
          <PublicationCategory title="Patents">
            {publications.patents.map((pub, index) => (
              <PublicationItem key={index} {...pub} />
            ))}
          </PublicationCategory>
        )}
      </div>
    </section>
  );
};

// TypeScript Interfaces
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactLinkProps {
  href: string;
  children: React.ReactNode;
}

// Contact Component
const Contact = () => {
  useEffect(() => {
    emailjs.init("l2ufVddnvAzItnByX");
  }, []);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await emailjs.send(
        'service_eg_website', // Get this from EmailJS dashboard
        'template_fhspkk9', // Get this from EmailJS dashboard
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'eshaanghosh@outlook.com', // Your email
        },
        'l2ufVddnvAzItnByX' // Get this from EmailJS dashboard
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (e) {
      setStatus('error');
      console.error('Error sending message:', e);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const ContactLink: React.FC<ContactLinkProps> = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-white/80 transition-colors"
    >
      {children}
    </a>
  );

  return (
    <section id="contact" className="py-24 px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Let&apos;s Connect
        </h2>
        
        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          I&apos;m available for consulting, speaking engagements, and research collaborations. 
          Whether you have a specific project in mind or just want to discuss potential opportunities, 
          I&apos;d love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                           text-white placeholder-white/40 focus:outline-none focus:ring-2 
                           focus:ring-white/20 transition-all"
                  placeholder="John Doe"
                  aria-label="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                           text-white placeholder-white/40 focus:outline-none focus:ring-2 
                           focus:ring-white/20 transition-all"
                  placeholder="john@example.com"
                  aria-label="Your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Your Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                           text-white placeholder-white/40 focus:outline-none focus:ring-2 
                           focus:ring-white/20 transition-all"
                  placeholder="+1 (234) 567-8900"
                  aria-label="Your phone number (optional)"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                           text-white placeholder-white/40 focus:outline-none focus:ring-2 
                           focus:ring-white/20 transition-all"
                  placeholder="Let&apos;s collaborate"
                  aria-label="Message subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                           text-white placeholder-white/40 focus:outline-none focus:ring-2 
                           focus:ring-white/20 transition-all resize-none"
                  placeholder="Your message here..."
                  aria-label="Your message"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-white text-black py-3 rounded-lg font-medium 
                         hover:bg-white/90 transition-colors flex items-center justify-center gap-2
                         disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={status === 'sending' ? 'Sending message...' : 'Send message'}
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" aria-hidden="true" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center" role="alert">
                  Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center" role="alert">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-medium mb-1">Email</p>
                  <ContactLink href="mailto:eshaanghosh@gmail.com">
                    eshaanghosh@gmail.com
                  </ContactLink>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">LinkedIn</p>
                  <ContactLink href="https://linkedin.com/in/eshaanghosh">
                    linkedin.com/in/eshaanghosh
                  </ContactLink>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Open to Opportunities
              </h3>
              <p className="text-white/80">
                I&apos;m interested in challenging projects and collaborative opportunities in AI, 
                machine learning, and product development. Feel free to reach out for:
              </p>
              <ul className="mt-4 space-y-2 text-white/70" role="list">
                <li>• Technical consulting</li>
                <li>• Speaking engagements</li>
                <li>• Research collaboration</li>
                <li>• Product strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const credits = [
    { name: 'React', icon: '/icons/react.png' },
    //{ name: 'Next.js', icon: '/icons/nextjs.png' },
    { name: 'TypeScript', icon: '/icons/typescript.png' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.png' },
    { name: 'Claude', icon: '/icons/claude.png' }
  ];
 
  return (
    <footer className="py-8 px-4 bg-black/50 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-white/60 text-xl">
            Designed & Built by Eshaan Ghosh
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {credits.map((tech) => (
              <div key={tech.name} className="flex items-center gap-2">
                <Image 
                  src={tech.icon} 
                  alt={tech.name} 
                  width={20} 
                  height={20} 
                  className="opacity-100 hover:opacity-100 transition-opacity"
                />
                <span className="text-white/60 text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
 };


// Main App Component
const App = () => {
  useEffect(() => {
    emailjs.init("l2ufVddnvAzItnByX");
  }, []);
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Experience />
      <Education /> 
      <Projects />
      <Publications />
      <Contact />
      <Footer /> 
    </div>
  );
};

export default App;

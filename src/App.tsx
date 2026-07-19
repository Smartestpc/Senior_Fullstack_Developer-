import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeModal from "./components/WelcomeModal";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowRight, 
  Briefcase, 
  Terminal, 
  ExternalLink, 
  BookOpen, 
  Mail, 
  Check, 
  Send,
  X,
  Menu
} from "lucide-react";

type TabType = "overview" | "projects" | "experience" | "writing";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  useEffect(() => {
    if (selectedArticle !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedArticle]);

  const projects = [
    {
      id: "insights",
      title: "Smartelyte Insights",
      tag: "BLOG",
      description: "My personal tech blog where I share web development tips, performance optimization guides, and product-building insights.",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://smartelyte-app.onrender.com",
    },
    {
      id: "solo-gadget",
      title: "Solo Gadget Hub",
      tag: "LANDING PAGE",
      description: "A modern e-commerce landing page for gadgets, featuring clean UI, responsive design, and strong call-to-actions.",
      stack: ["React", "Tailwind", "TypeScript"],
      link: "https://sologadgetshub.netlify.app",
    },
    {
      id: "fawzzy",
      title: "Fawzzy Mobile Tech",
      tag: "LANDING PAGE",
      description: "A professional service landing page for a phone repair business, designed to build credibility and drive inquiries.",
      stack: ["React", "Tailwind", "TypeScript"],
      link: "https://fawzzymobiletech.netlify.app",
    }
  ];

  const experience = [
    {
      role: "Founder & Developer",
      company: "Smartelyte",
      period: "2024 - Present",
      description: "Leading the design and development of modern web experiences, content platforms, and business-focused digital solutions. Responsible for product strategy, frontend architecture, SEO implementation, and user experience optimization."
    },
    {
      role: "Lead Web Developer",
      company: "PureGold Prints",
      period: "2025",
      description: "Designed and developed a modern printing business platform focused on showcasing services, improving brand credibility, and creating a streamlined customer inquiry experience."
    },
    {
      role: "Web Developer",
      company: "Sir Bethel Bags & Boxes",
      period: "2024",
      description: "Built a responsive ecommerce-focused website for a luggage and travel products brand, creating a structured digital storefront that improves product discovery and strengthens online presence."
    }
  ];

const writing = [
  {
    title: "Why Most Business Websites Fail Before They Launch",
    excerpt: "After reviewing dozens of websites, I noticed the same mistakes repeatedly: weak positioning, confusing messaging, and poor user journeys. Here's what separates websites that convert from those that get ignored.",
    date: "July 2026",
    readTime: "6 min read",
    content: `<p class="text-base text-zinc-300 leading-relaxed mb-4">Every single day, thousands of stunningly beautiful business websites launch with a whimper. They boast pixel-perfect layouts, high-end CSS gradients, and seamless animations. Yet weeks and months later, the business owners are left wondering why their inbox remains empty and their analytics show a flatline in user engagement.</p>
<p class="text-base text-zinc-300 leading-relaxed mb-4">The truth is painful: most websites fail long before they are coded. They fail in the planning phase because they mistake technical and visual elegance for business strategy. To build a digital product that actually converts, we must dismantle the core failure modes of typical business sites.</p>
<h2 class="text-lg font-semibold text-white mt-6 mb-2">1. The Curse of "Me-Too" Positioning</h2>
<p class="text-base text-zinc-300 leading-relaxed mb-4">The single biggest threat to a new website is copycat positioning. When a business copies their competitors’ structure, copy, and layout, they become invisible. If a customer visits five phone repair services, print shops, or development agencies and sees the exact same generic phrases—such as "We offer premier quality" or "Customer satisfaction is our priority"—the consumer's brain filters them out as white noise.</p>
<p class="text-base text-zinc-300 leading-relaxed mb-4"><strong>The Fix:</strong> Lead with your unique advantage. If your repair shop is the only one in town that offers a lifetime guarantee on screens, put that in the headline. If your portfolio specializes in ultra-fast Next.js sites that solve concrete SEO problems, say it explicitly.</p>
<h2 class="text-lg font-semibold text-white mt-6 mb-2">2. The 5-Second Attention Test</h2>
<p class="text-base text-zinc-300 leading-relaxed mb-4">Attention is the rarest currency on the web. When a visitor lands on your page, a silent clock starts ticking. Within exactly five seconds, they must find clear answers to three fundamental questions:</p>
<ul class="list-disc pl-5 text-zinc-300 mb-4 space-y-2">
  <li><strong>What do you do?</strong> (Is it immediately clear what product or service is offered?)</li>
  <li><strong>How does it benefit me?</strong> (Will this solve my immediate pain point?)</li>
  <li><strong>What do I do next?</strong> (What is the clear, single call to action?)</li>
</ul>
<p class="text-base text-zinc-300 leading-relaxed mb-4">If the visitor has to scroll past three sections of mysterious stock images or generic text blocks to understand what you actually do, they will click the back button. Simplicity and clarity always beat cleverness.</p>
<h2 class="text-lg font-semibold text-white mt-6 mb-2">3. Over-Engineered User Journeys</h2>
<p class="text-base text-zinc-300 leading-relaxed mb-4">A common mistake made by developers and designers is creating complex user paths. Forcing users to fill out long forms with unnecessary inputs, navigate three-level nested dropdowns, or read five pages of introductory text before seeing pricing or booking is a conversion killer.</p>
<p class="text-base text-zinc-300 leading-relaxed mb-4">Your job is to build a high-frictionless slide directly to the call to action. Reduce inputs, make navigation obvious, and ensure buttons are highly visible and responsive.</p>
<h2 class="text-lg font-semibold text-white mt-6 mb-2">The Launch Strategy Blueprint</h2>
<p class="text-base text-zinc-300 leading-relaxed mb-4">To ensure your next web project succeeds, follow this simple checklist:</p>
<ul class="list-disc pl-5 text-zinc-300 mb-4 space-y-2">
  <li><strong>Validate the messaging:</strong> Test your hero section on a real user who knows nothing about your business. Ask them to explain what you do.</li>
  <li><strong>Focus on a single CTA:</strong> Do not distract users with three distinct buttons in the header. Have one primary path (e.g., "Book a Consultation") and stick to it.</li>
  <li><strong>Establish trust immediately:</strong> Use real reviews, photos of actual work, and concrete metrics to back up your claims instead of stock illustrations.</li>
</ul>
<p class="text-base text-zinc-300 leading-relaxed mb-4">By shifting your mindset from purely aesthetic representation to a strategic business channel, your website will stand out in an ocean of templates and successfully attract the customers you deserve.</p>`
  },
  {
    title: "Building a Premium Developer Portfolio That Doesn't Feel Like a Template",
    excerpt: "A breakdown of the design decisions, content strategy, and product-thinking principles behind creating a portfolio inspired by companies like Vercel, GitHub, and Linear.",
    date: "June 2026",
    readTime: "8 min read",
    content: `<p class="text-base text-zinc-300 leading-relaxed mb-4">The modern developer portfolio landscape has become highly standardized. Thanks to the accessibility of UI libraries, Tailwind UI templates, and bento-grid generators, almost every engineering portfolio looks like a clone. They feature the same neon-purple gradients, the same glowing cards, and the exact same list of skills presented in identical grids.</p>
<p class="text-base text-zinc-300 leading-relaxed mb-4">If you want to land premium clients, win high-level roles, or build a reputation as a leading technical strategist, your portfolio cannot look like a template. It must tell a story of high-value execution, technical mastery, and product-focused thinking.</p>
<h2 class="text-lg font-semibold text-white mt-6 mb-2">1. Stop Listing Skills, Start Showing Solutions</h2>
<p class="text-base text-zinc-300 leading-relaxed mb-4">Listing forty icons of frameworks, tools, and databases does not demonstrate competency. Anyone can copy a list of keywords from a job description. Premium clients and managers do not hire because of a list of keywords; they hire because they have a specific problem they need solved.</p>
<p class="text-base text-zinc-300 leading-relaxed mb-4">Instead of a generic "My Skills" grid, organize your projects as concrete case studies. Highlight the architectural decisions you made, why you chose specific tools over others, and how your changes impacted the project's bottom line.</p>
<h2 class="text-lg font-semibold text-white mt-6 mb-2">2. The Anatomy of a High-Converting Case Study</h2>
<p class="text-base text-zinc-300 leading-relaxed mb-4">A great case study tells a compelling narrative. Use the following structured outline for your major projects:</p>
<ul class="list-disc pl-5 text-zinc-300 mb-4 space-y-2">
  <li><strong>The Objective:</strong> What was the business goal? (e.g., "Improve page performance to increase e-commerce conversion rate.")</li>
  <li><strong>The Technical Challenge:</strong> What made this difficult? (e.g., "Nesting dynamic product listings resulted in layout shifts and long response times.")</li>
  <li><strong>The Execution:</strong> Your exact contribution. Mention specific optimizations like image loading strategies, server-side caching, or state optimization.</li>
  <li><strong>The Business Outcome:</strong> The measurable impact. Always back this with numbers when possible (e.g., "Reduced page weight by 45%, leading to a 12% boost in sales.")</li>
</ul>
<h2 class="text-lg font-semibold text-white mt-6 mb-2">3. Typographic and Layout Restraint</h2>
<p class="text-base text-zinc-300 leading-relaxed mb-4">Template-based sites often attempt to make up for lack of content with visual noise—excessive particle effects, heavy hover scale shifts, and neon glowing borders everywhere. Premium portfolios display typographic restraint and visual balance.</p>
<p class="text-base text-zinc-300 leading-relaxed mb-4">Focus on generous negative space (letting your sections breathe) and clear typographic hierarchy. Pairing a structured font like "Space Grotesk" for display headings with a highly legible sans-serif like "Inter" for body copy establishes an immediate sense of elegance and credibility.</p>
<h2 class="text-lg font-semibold text-white mt-6 mb-2">Conclusion: Shifting to a Strategic Technical Partner</h2>
<p class="text-base text-zinc-300 leading-relaxed mb-4">When a developer treats their own portfolio as a premium product, it shows that they understand the intersection of design, engineering, and business. It positions you not as a commoditized coder who follows tickets, but as a strategic technical partner who builds digital solutions that drive real-world success.</p>`
  },
  {
    title: "What Makes a Website Feel Expensive?",
    excerpt: "Premium websites aren't defined by animations or gradients. They're defined by clarity, typography, spacing, and trust. Here's what I've learned from studying world-class product companies.",
    date: "May 2026",
    readTime: "5 min read",
    content: `<p class="text-base text-zinc-300 leading-relaxed mb-4">We have all landed on websites that instantly feel high-end, authoritative, and "expensive." Think of companies like Apple, Vercel, Linear, or Stripe. Before you even read their copy or look at their pricing, your brain has already made a qualitative judgment: <em>this is a world-class product.</em></p>
<p class="text-base text-zinc-300 leading-relaxed mb-4">But what actually creates this premium perception? It is not about using complex 3D rendering or flashing animations. In fact, high-end design is defined by restraint, extreme attention to detail, and a set of core layout principles.</p>
<h2 class="text-lg font-semibold text-white mt-6 mb-2">1. The Power of Generous Negative Space</h2>
<p class="text-base text-zinc-300 leading-relaxed mb-4">Cheap websites are afraid of empty space. They crowd every corner with text boxes, badges, illustrations, and flashing offers, fearing that if a user doesn't see everything immediately, they will leave. Premium websites let their content breathe.</p>
<p class="text-base text-zinc-300 leading-relaxed mb-4">By surrounding headings and images with generous margins and padding, you tell the visitor: <em>"Our work is so valuable that we don't need to crowd you. Focus on this single, beautiful idea."</em> Space creates breathing room, elegance, and focus.</p>
<h2 class="text-lg font-semibold text-white mt-6 mb-2">2. Perfect Typographic Rhythm</h2>
<p class="text-base text-zinc-300 leading-relaxed mb-4">Typography is the foundation of digital design. An expensive-feeling website exhibits a rigorous, mathematical typographic rhythm. This means:</p>
<ul class="list-disc pl-5 text-zinc-300 mb-4 space-y-2">
  <li><strong>Precise Hierarchy:</strong> Headings should be large, tight, and high-contrast, while body copy is smaller, softer (e.g., zinc or slate), and spaced appropriately for perfect legibility.</li>
  <li><strong>Subtle Letter Spacing:</strong> Display headings often benefit from negative tracking (e.g., \`tracking-tight\`), which pulls letters together for a unified, modern look.</li>
  <li><strong>No Font Overload:</strong> Limit your design to two distinct font families. One high-quality font for headings and one robust font for body text.</li>
</ul>
<h2 class="text-lg font-semibold text-white mt-6 mb-2">3. Restrained Micro-Interactions</h2>
<p class="text-base text-zinc-300 leading-relaxed mb-4">Animations should never scream for attention. They should whisper. If a hover effect shifts the layout, scales a card by 120%, or causes a rapid background color change, it feels cheap and jarring.</p>
<p class="text-base text-zinc-300 leading-relaxed mb-4">Instead, use subtle transitions. A button's background fading smoothly over 300ms, a link's arrow icon translating by exactly 4 pixels on hover, or a soft fade-in on page entrance—these subtle details create a high-fidelity interactive experience.</p>
<h2 class="text-lg font-semibold text-white mt-6 mb-2">4. Monochromatic Harmony & Slate Accents</h2>
<p class="text-base text-zinc-300 leading-relaxed mb-4">Cheap sites use a broad palette of bright primary colors. Premium sites use high-contrast neutrals (deep charcoals, soft off-whites, elegant slate borders) with a single, highly deliberate accent color (like a royal purple or indigo).</p>
<p class="text-base text-zinc-300 leading-relaxed mb-4">This monochromatic restraint keeps the visual focus exactly where it belongs: on the typography and the content itself.</p>
<h2 class="text-lg font-semibold text-white mt-6 mb-2">Summary: The Craft of Detail</h2>
<p class="text-base text-zinc-300 leading-relaxed mb-4">Ultimately, what makes a website feel expensive is not a single magical trick. It is the cumulative effect of a hundred minor, deliberate layout decisions—from the alignment of custom icons to the border colors of cards. When every element aligns with mathematical precision, the user immediately feels the sense of care, trust, and quality.</p>`
  }
];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsContactOpen(false);
      setContactForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-white font-sans relative overflow-x-hidden flex flex-col selection:bg-[#8B5CF6]/30 selection:text-white">
      {/* Welcome Modal overlay */}
      <WelcomeModal />

      {/* Background Mesh Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#8B5CF6] opacity-[0.15] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[#4C1D95] opacity-[0.1] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#6366F1] opacity-[0.08] blur-[100px] rounded-full pointer-events-none" />

      {/* Main Content Area */}
      <div className="w-full max-w-6xl mx-auto flex-grow flex flex-col p-4 md:p-8 z-10">
        
        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-8">
          <div 
            onClick={() => setActiveTab("overview")}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8B5CF6] to-[#6366F1] flex items-center justify-center font-bold text-sm text-white group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all">
              SN
            </div>
            <span className="font-medium tracking-tight group-hover:text-[#A78BFA] transition-colors">Smart Nwaiche</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-sm text-zinc-400 font-medium">
            {(["overview", "projects", "experience", "writing"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize transition-colors relative py-1 ${activeTab === tab ? "text-white" : "hover:text-white"}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#8B5CF6]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Contact Button & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsContactOpen(true)}
              className="hidden sm:block px-4 py-2 bg-white/10 hover:bg-[#8B5CF6]/20 border border-white/10 hover:border-[#8B5CF6]/30 rounded-xl text-sm transition-all shadow-sm hover:shadow-[#8B5CF6]/20"
            >
              Contact Me
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden relative z-20 w-full mb-6 p-4 rounded-2xl bg-zinc-900/90 border border-white/10 backdrop-blur-xl flex flex-col space-y-3"
            >
              {(["overview", "projects", "experience", "writing"] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-2 px-3 rounded-lg capitalize transition-colors ${activeTab === tab ? "bg-[#8B5CF6]/10 text-[#A78BFA] font-medium" : "text-zinc-400 hover:text-white hover:bg-white/5"}`}
                >
                  {tab}
                </button>
              ))}
              <button 
                onClick={() => {
                  setIsContactOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-2 py-2.5 bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-xl text-sm font-medium text-center transition-all"
              >
                Contact Me
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Grid / Main Content */}
        <div className="relative z-10 flex-grow grid grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Branding, Intro, or Dynamic Content */}
          <div className="col-span-12 lg:col-span-8 flex flex-col">
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2.5rem] p-6 md:p-12 flex-grow flex flex-col justify-center shadow-glass relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />

              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full justify-center"
                  >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
                      <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse"></span>
                      <span>Founder of Smartelyte</span>
                    </div>

                    <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-[1.1] mb-6">
                      <span className="text-zinc-500">
                        Building digital products that combine<br/>
                        performance, clarity, and exceptional<br/>
                        user experience.
                      </span>
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-8">
                      I design and develop modern web applications, business websites, and content-driven platforms that help brands establish credibility, attract customers, and grow online.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                      <a 
                        href="https://github.com/smartestpc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-xl font-medium text-sm text-white bg-[#8B5CF6] hover:bg-[#7C3AED] transition-all shadow-md hover:shadow-[#8B5CF6]/30 flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        View GitHub
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/smart-nwaiche-6405182a5" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-xl font-medium text-sm text-[#A1A1AA] hover:text-white border border-white/[0.1] hover:bg-white/[0.04] transition-all flex items-center gap-2"
                      >
                        <Linkedin className="w-4 h-4" />
                        Connect on LinkedIn
                      </a>
                    </div>

                    <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full border-2 border-[#09090B] bg-zinc-800 flex items-center justify-center text-[10px] font-mono font-bold tracking-tighter text-[#A78BFA] shadow-md">TS</div>
                        <div className="w-10 h-10 rounded-full border-2 border-[#09090B] bg-zinc-800 flex items-center justify-center text-[10px] font-mono font-bold tracking-tighter text-[#A78BFA] shadow-md">RT</div>
                        <div className="w-10 h-10 rounded-full border-2 border-[#09090B] bg-zinc-800 flex items-center justify-center text-[10px] font-mono font-bold tracking-tighter text-[#A78BFA] shadow-md">NX</div>
                      </div>
                      <span className="text-sm text-zinc-500">Trusted by startups and enterprise teams globally.</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "projects" && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full justify-center"
                  >
                    <div className="flex items-center space-x-2 mb-6">
                      <Terminal className="w-5 h-5 text-[#8B5CF6]" />
                      <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
                    </div>
                    
                    <div className="grid gap-6">
                      {projects.map((project) => (
                        <div 
                          key={project.id}
                          className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.08] transition-all group/project"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <span className="text-xs text-[#A78BFA] font-mono uppercase tracking-widest">{project.tag}</span>
                              <h3 className="text-lg font-semibold text-white mt-0.5 group-hover/project:text-[#A78BFA] transition-colors">{project.title}</h3>
                            </div>
                            <a 
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all border border-white/5"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                          <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.stack.map((s) => (
                              <span key={s} className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "experience" && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full justify-center"
                  >
                    <div className="flex items-center space-x-2 mb-6">
                      <Briefcase className="w-5 h-5 text-[#8B5CF6]" />
                      <h2 className="text-2xl font-bold tracking-tight">Timeline &amp; Impact</h2>
                    </div>

                    <div className="space-y-6 relative border-l border-white/10 pl-6 ml-2">
                      {experience.map((exp, index) => (
                        <div key={index} className="relative group/timeline">
                          {/* Circle dot */}
                          <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#09090B] border-2 border-white/30 group-hover/timeline:border-[#8B5CF6] group-hover/timeline:scale-110 transition-all" />
                          
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                            <div>
                              <h3 className="text-lg font-bold text-white group-hover/timeline:text-[#A78BFA] transition-colors">{exp.role}</h3>
                              <span className="text-sm text-zinc-400 font-medium">{exp.company}</span>
                            </div>
                            <span className="text-xs font-mono bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full text-zinc-400 mt-1 sm:mt-0 w-fit">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-sm text-zinc-500 leading-relaxed mt-2">
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "writing" && (
                  <motion.div
                    key="writing"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full justify-center"
                  >
                    <div className="flex items-center space-x-2 mb-6">
                      <BookOpen className="w-5 h-5 text-[#8B5CF6]" />
                      <h2 className="text-2xl font-bold tracking-tight">Articles</h2>
                    </div>

                    <div className="grid gap-6">
                      {writing.map((art, index) => (
                        <div 
                          key={index}
                          onClick={() => setSelectedArticle(index)}
                          className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.08] transition-all cursor-pointer group/art"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-mono text-zinc-500">{art.date}</span>
                            <span className="text-xs font-mono text-[#A78BFA]">{art.readTime}</span>
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 group-hover/art:text-[#A78BFA] transition-colors">
                            {art.title}
                          </h3>
                          <p className="text-sm text-zinc-400 leading-relaxed">
                            {art.excerpt}
                          </p>
                          <div className="mt-4 flex items-center space-x-1.5 text-xs font-medium text-[#8B5CF6] group-hover/art:translate-x-1 transition-all duration-300">
                            <span>Read Article</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Feature Cards & Stats */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            
            {/* Work & Stats Panel */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2.5rem] p-8 flex-grow flex flex-col justify-between shadow-glass relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.01] to-white/[0.03] pointer-events-none" />
              
              <div>
                <h3 className="text-lg font-semibold text-zinc-300 mb-4 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  <span>Interactive Highlights</span>
                </h3>
                
                <div className="space-y-3">
                  <a 
                    href="https://smartelyte-app.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#8B5CF6]/30 hover:bg-white/10 cursor-pointer transition-all group/item"
                  >
                    <div className="text-[10px] text-[#A78BFA] font-mono mb-1 tracking-widest uppercase font-semibold">BLOG</div>
                    <div className="font-medium text-sm flex items-center justify-between">
                      <span>Smartelyte Insights</span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover/item:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  
                  <a 
                    href="https://sologadgetshub.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#8B5CF6]/30 hover:bg-white/10 cursor-pointer transition-all group/item"
                  >
                    <div className="text-[10px] text-[#A78BFA] font-mono mb-1 tracking-widest uppercase font-semibold">ECOMMERCE</div>
                    <div className="font-medium text-sm flex items-center justify-between">
                      <span>Solo Gadget Hub</span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover/item:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 lg:mt-0">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-white tracking-tight">3+</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">Years Building</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white tracking-tight">10+</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white tracking-tight">100%</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">Commitment</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white tracking-tight">Nigeria</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">Based</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient Case Studies CTA Card */}
            <div 
              onClick={() => setActiveTab("projects")}
              className="bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] hover:to-[#554ce2] rounded-[2.5rem] p-8 min-h-[160px] flex flex-col justify-center cursor-pointer shadow-lg hover:shadow-[#8B5CF6]/20 hover:scale-[1.01] transition-all relative overflow-hidden group/cta"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h4 className="text-white font-semibold text-lg tracking-wide group-hover/cta:text-purple-100 transition-colors">
                    View Case Studies
                  </h4>
                  <p className="mt-1 text-white/80 text-sm max-w-xs leading-relaxed font-light">
                    Detailed technical breakdowns of my complex interface architectures and integrations.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-white/90">
                  <span className="text-xs font-mono tracking-widest uppercase font-semibold">EXPLORE TECHNICAL ARCHITECTURE</span>
                  <motion.div 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer */}
        <footer className="relative z-10 mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 font-mono tracking-widest uppercase gap-4">
          <div>&copy; 2026 Smart Nwaiche. All rights reserved.</div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/smartestpc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#A78BFA] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Github</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/smart-nwaiche-6405182a5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#A78BFA] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://smartnwaiche.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#A78BFA] transition-colors flex items-center gap-1.5"
            >
              <Twitter className="w-3.5 h-3.5" />
              <span>Twitter / X</span>
            </a>
          </div>

          <div>Lagos, NG &mdash; Global Remote</div>
        </footer>

      </div>

      {/* Frosted Glass Contact Form Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="absolute inset-0 bg-[#09090B]/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#111113]/90 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-8 w-full max-w-lg relative overflow-hidden shadow-2xl z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.03] pointer-events-none" />
              
              <button 
                onClick={() => setIsContactOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 p-0 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-zinc-400 hover:text-white transition-colors z-20 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5 text-[#A78BFA]" />
                </div>
                <h3 className="text-xl font-bold">Initiate Partnership</h3>
                <p className="text-sm text-zinc-400 mt-1">Submit your project details or direct business inquiry.</p>
              </div>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4 text-emerald-400">
                      <Check className="w-6 h-6 animate-bounce" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Transmission Received</h4>
                    <p className="text-sm text-zinc-400 mt-1 max-w-xs">Smart will review your request and reach out promptly.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleFormSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Name</label>
                      <input 
                        type="text" 
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Smart Nwaiche"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#8B5CF6]/50 focus:bg-white/[0.08] rounded-xl text-sm text-white placeholder-zinc-600 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="smartestpc321@gmail.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#8B5CF6]/50 focus:bg-white/[0.08] rounded-xl text-sm text-white placeholder-zinc-600 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Message / Inquiry</label>
                      <textarea 
                        required
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Describe your project, timeline, or leadership requirement..."
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#8B5CF6]/50 focus:bg-white/[0.08] rounded-xl text-sm text-white placeholder-zinc-600 outline-none transition-all resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full mt-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-sm font-semibold rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-[#8B5CF6]/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-[#09090B]/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#111113]/90 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-8 w-full max-w-2xl relative shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.03] pointer-events-none" />
              
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 p-0 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-zinc-400 hover:text-white transition-colors z-20 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="pt-12 md:pt-8">
                <div className="flex justify-between items-center mb-4 text-xs font-mono text-zinc-500 mt-2">
                  <span>{writing[selectedArticle].date}</span>
                  <span className="text-[#A78BFA]">{writing[selectedArticle].readTime}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  {writing[selectedArticle].title}
                </h3>

                <div 
                  className="prose prose-invert max-w-none text-zinc-300 space-y-4"
                  dangerouslySetInnerHTML={{ __html: writing[selectedArticle].content || "" }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}


import { Hero } from '../components/Hero';
import { motion } from 'motion/react';
import { Scale, Heart, BookOpen, Award } from 'lucide-react';
import heroImage from 'figma:asset/3ce00a193c495df8134a4a017161a441b302cf2a.png';

export function AboutPage() {
  const values = [
    {
      icon: Scale,
      title: 'Justice',
      description: 'Unwavering commitment to fairness, equality, and the rule of law in all proceedings.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards and moral principles throughout his career.',
    },
    {
      icon: BookOpen,
      title: 'Scholarship',
      description: 'Deep dedication to legal scholarship and the advancement of jurisprudence.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Pursuit of excellence in every aspect of judicial service and public life.',
    },
  ];

  const milestones = [
    {
      year: '1918',
      title: 'Birth and Early Years',
      description: 'Born into a family that valued education and public service.',
    },
    {
      year: '1940s',
      title: 'Legal Education',
      description: 'Pursued legal studies with distinction, laying the foundation for a remarkable career.',
    },
    {
      year: '1960s',
      title: 'Legal Practice',
      description: 'Established himself as one of Nigeria\'s most respected legal practitioners.',
    },
    {
      year: '1972',
      title: 'Supreme Court Justice',
      description: 'Appointed to the Supreme Court of Nigeria, the pinnacle of judicial service.',
    },
    {
      year: '1980s',
      title: 'Legacy of Service',
      description: 'Continued to shape Nigerian jurisprudence through landmark decisions.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="About Justice Anthony Aniagolu"
        subtitle="A Life of Service"
        description="Discover the remarkable journey of one of Nigeria's most distinguished jurists and his enduring contributions to law and society."
        image={heroImage}
      />

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={heroImage}
                alt="Justice Anthony Aniagolu"
                className="w-full rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-6">
                A Distinguished Career
              </h2>
              <div className="space-y-4 text-[#8B8478] leading-relaxed">
                <p>
                  Justice Anthony Aniagolu stands as one of Nigeria's most distinguished jurists, 
                  whose contributions to the nation's legal system continue to resonate decades 
                  after his service. Born in the early 20th century, he witnessed and participated 
                  in some of the most transformative periods in Nigerian history.
                </p>
                <p>
                  His judicial philosophy was marked by a deep commitment to justice, fairness, 
                  and the rule of law. Throughout his tenure on the Supreme Court, Justice Aniagolu 
                  delivered numerous landmark judgments that helped shape modern Nigerian jurisprudence.
                </p>
                <p>
                  Beyond the courtroom, he was known for his scholarly contributions to legal literature, 
                  his mentorship of young lawyers, and his dedication to public service. His legacy 
                  continues to inspire legal professionals and students across Nigeria and beyond.
                </p>
                <p>
                  The Aniagolu Foundation was established to preserve his writings, judicial opinions, 
                  and personal papers, ensuring that future generations can learn from his wisdom 
                  and dedication to justice.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
              Core Values & Principles
            </h2>
            <p className="text-lg text-[#8B8478] max-w-2xl mx-auto">
              The fundamental principles that guided a lifetime of distinguished service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-[#C5A572] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1A2B47] transition-colors">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-serif text-xl text-[#1A2B47] mb-3">{value.title}</h3>
                  <p className="text-[#8B8478] leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
              Key Milestones
            </h2>
            <p className="text-lg text-[#8B8478]">
              Important moments in a remarkable life and career
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="inline-block px-4 py-2 bg-[#1A2B47] text-white rounded-md font-medium">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-[#C5A572] rounded-full mt-2" />
                  {index !== milestones.length - 1 && (
                    <div className="absolute left-1/2 top-6 bottom-0 w-0.5 bg-[#E8E2D9] -translate-x-1/2 h-full" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-serif text-xl text-[#1A2B47] mb-2">{milestone.title}</h3>
                  <p className="text-[#8B8478] leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-[#1A2B47] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              The Aniagolu Legacy Foundation is dedicated to preserving and promoting the judicial 
              philosophy, scholarly work, and humanitarian contributions of Justice Anthony Aniagolu. 
              We work to ensure that his commitment to justice, integrity, and excellence continues 
              to inspire and guide future generations of legal professionals and public servants.
            </p>
            <div className="h-1 w-32 bg-[#C5A572] mx-auto" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

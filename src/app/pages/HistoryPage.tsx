import { Hero } from '../components/Hero';
import { Timeline } from '../components/Timeline';
import { StoryCard } from '../components/StoryCard';
import { motion } from 'motion/react';
import heroImage from 'figma:asset/3ce00a193c495df8134a4a017161a441b302cf2a.png';

export function HistoryPage() {
  const timelineEvents = [
    {
      year: '1918',
      title: 'Early Life and Birth',
      description: 'Born in Nigeria during a period of significant social and political change. His family instilled in him values of education, service, and integrity from an early age.',
      image: heroImage,
    },
    {
      year: '1930s-1940s',
      title: 'Educational Journey',
      description: 'Pursued formal education with distinction, showing early promise in academics and leadership. His passion for law and justice began to take shape during these formative years.',
    },
    {
      year: '1950s',
      title: 'Legal Training and Early Practice',
      description: 'Completed legal training and was called to the bar. Began practicing law, quickly establishing a reputation for thoroughness, integrity, and brilliant legal analysis.',
      image: heroImage,
    },
    {
      year: '1960s',
      title: 'Rising Legal Star',
      description: 'Gained recognition as one of Nigeria\'s foremost legal minds. Handled significant cases and contributed to the development of Nigerian law during the early years of independence.',
    },
    {
      year: '1972',
      title: 'Appointment to Supreme Court',
      description: 'Appointed Justice of the Supreme Court of Nigeria, the highest judicial office in the land. This marked the beginning of his most influential period of service.',
      image: heroImage,
    },
    {
      year: '1970s-1980s',
      title: 'Landmark Decisions',
      description: 'Delivered numerous landmark judgments that shaped Nigerian jurisprudence in areas including constitutional law, human rights, and criminal justice. His decisions continue to be cited as authoritative precedents.',
    },
    {
      year: '1985',
      title: 'Retirement and Continued Service',
      description: 'Retired from active judicial service but continued to contribute to legal scholarship and mentor younger generations of lawyers and judges.',
      image: heroImage,
    },
  ];

  const stories = [
    {
      title: 'The Constitutional Guardian',
      excerpt: 'How Justice Aniagolu\'s interpretations of constitutional law helped establish fundamental principles that protect individual rights and limit governmental power in Nigeria.',
      image: heroImage,
      date: 'February 20, 2024',
      category: 'Legal Legacy',
      link: '#',
    },
    {
      title: 'A Voice for the Voiceless',
      excerpt: 'Stories of how Justice Aniagolu used his position to ensure that even the most vulnerable members of society had access to justice and fair treatment under the law.',
      image: heroImage,
      date: 'February 18, 2024',
      category: 'Human Rights',
      link: '#',
    },
    {
      title: 'Mentor to Generations',
      excerpt: 'The lasting impact of Justice Aniagolu\'s mentorship on countless lawyers, judges, and legal scholars who went on to distinguished careers of their own.',
      image: heroImage,
      date: 'February 15, 2024',
      category: 'Education',
      link: '#',
    },
    {
      title: 'Scholarly Contributions',
      excerpt: 'An overview of Justice Aniagolu\'s extensive writings on legal theory, constitutional law, and judicial ethics that continue to influence legal thought.',
      image: heroImage,
      date: 'February 12, 2024',
      category: 'Scholarship',
      link: '#',
    },
    {
      title: 'The Independence of the Judiciary',
      excerpt: 'How Justice Aniagolu stood firm in defending judicial independence during challenging political times, ensuring the courts remained true to their constitutional role.',
      image: heroImage,
      date: 'February 10, 2024',
      category: 'Judicial Philosophy',
      link: '#',
    },
    {
      title: 'Personal Character and Integrity',
      excerpt: 'Colleagues and contemporaries remember Justice Aniagolu not just for his legal brilliance, but for his unwavering integrity and personal kindness.',
      image: heroImage,
      date: 'February 8, 2024',
      category: 'Biography',
      link: '#',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="History & Stories"
        subtitle="A Remarkable Journey"
        description="Explore the life, career, and enduring impact of Justice Anthony Aniagolu through historical records and personal accounts."
        image={heroImage}
      />

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
              Life & Career Timeline
            </h2>
            <p className="text-lg text-[#8B8478] max-w-2xl mx-auto">
              Follow the remarkable journey from early beginnings to becoming one of Nigeria's most respected jurists
            </p>
          </div>
          <Timeline events={timelineEvents} />
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
              Featured Stories
            </h2>
            <p className="text-lg text-[#8B8478] max-w-2xl mx-auto">
              Discover the stories that define a legacy of justice, integrity, and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <StoryCard key={index} {...story} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-[#1A2B47] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl text-[#C5A572] mb-6">"</div>
            <blockquote className="font-serif text-2xl md:text-3xl text-white mb-6 leading-relaxed">
              The law must be a shield for the weak and a restraint upon the powerful. 
              Justice delayed is justice denied, and justice denied anywhere is a threat to justice everywhere.
            </blockquote>
            <p className="text-gray-300">— Justice Anthony Aniagolu</p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
              A Legacy in Numbers
            </h2>
            <p className="text-lg text-[#8B8478]">
              The measurable impact of a lifetime of service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="text-5xl font-serif text-[#C5A572] mb-2">13+</div>
              <p className="text-[#8B8478] text-lg">Years on Supreme Court</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="text-5xl font-serif text-[#C5A572] mb-2">200+</div>
              <p className="text-[#8B8478] text-lg">Landmark Judgments</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="text-5xl font-serif text-[#C5A572] mb-2">50+</div>
              <p className="text-[#8B8478] text-lg">Scholarly Publications</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="text-5xl font-serif text-[#C5A572] mb-2">1000+</div>
              <p className="text-[#8B8478] text-lg">Lives Impacted</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

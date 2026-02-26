import { Hero } from '../components/Hero';
import { StoryCard } from '../components/StoryCard';
import { motion } from 'motion/react';
import { ArrowRight, Book, Users, Award, Heart } from 'lucide-react';
import { Link } from 'react-router';
import heroImage from 'figma:asset/3ce00a193c495df8134a4a017161a441b302cf2a.png';

export function HomePage() {
  const features = [
    {
      icon: Book,
      title: 'Rich Archives',
      description: 'Explore comprehensive collections of legal documents, speeches, and historical records.',
    },
    {
      icon: Users,
      title: 'Legacy of Leadership',
      description: 'Discover stories of unwavering commitment to justice and public service.',
    },
    {
      icon: Award,
      title: 'Awards & Recognition',
      description: 'Learn about the numerous honors and accolades received throughout a distinguished career.',
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'See how dedication to justice continues to inspire future generations.',
    },
  ];

  const highlightedStories = [
    {
      title: 'A Pioneer in Nigerian Jurisprudence',
      excerpt: 'Justice Anthony Aniagolu\'s groundbreaking contributions to Nigerian law shaped the foundation of modern legal practice in the nation.',
      image: heroImage,
      date: 'February 15, 2024',
      category: 'Biography',
      link: '/history',
    },
    {
      title: 'The Supreme Court Years',
      excerpt: 'Explore the landmark cases and judicial philosophies that defined Justice Aniagolu\'s tenure on Nigeria\'s highest court.',
      image: heroImage,
      date: 'January 28, 2024',
      category: 'Legal Career',
      link: '/history',
    },
    {
      title: 'Champion of Justice and Equality',
      excerpt: 'Throughout his career, Justice Aniagolu remained committed to upholding the principles of fairness and equal protection under the law.',
      image: heroImage,
      date: 'January 10, 2024',
      category: 'Legacy',
      link: '/history',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="The Legacy of Justice Anthony Aniagolu"
        subtitle="Honoring Excellence"
        description="Celebrating a life dedicated to justice, leadership, and service. Explore the remarkable journey of one of Nigeria's most distinguished jurists."
        image={heroImage}
        ctaPrimary={{ text: 'Explore Archives', link: '/archives' }}
        ctaSecondary={{ text: 'Learn More', link: '/about' }}
      />

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-6">
              Preserving a Legacy of Excellence
            </h2>
            <p className="text-lg text-[#8B8478] leading-relaxed mb-8">
              The Aniagolu Legacy Foundation is dedicated to preserving and promoting the judicial 
              philosophy, scholarly work, and humanitarian contributions of Justice Anthony Aniagolu. 
              Through our archives, educational programs, and community initiatives, we ensure that 
              his commitment to justice continues to inspire future generations.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-[#C5A572] hover:text-[#9E7E4A] transition-colors group text-lg font-medium"
            >
              Learn About Our Mission
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
              Why This Legacy Matters
            </h2>
            <p className="text-lg text-[#8B8478] max-w-2xl mx-auto">
              Discover the enduring impact of a life dedicated to justice and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-[#1A2B47] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C5A572] transition-colors">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-serif text-xl text-[#1A2B47] mb-3">{feature.title}</h3>
                  <p className="text-[#8B8478] leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-2">
                Featured Stories
              </h2>
              <p className="text-lg text-[#8B8478]">
                Discover the remarkable journey and achievements
              </p>
            </div>
            <Link
              to="/history"
              className="inline-flex items-center text-[#C5A572] hover:text-[#9E7E4A] transition-colors group mt-4 sm:mt-0"
            >
              View All Stories
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightedStories.map((story, index) => (
              <StoryCard key={index} {...story} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#1A2B47] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Support Our Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Help us preserve this important legacy and ensure that Justice Aniagolu's 
              contributions to law and society continue to inspire and educate future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#C5A572] text-white rounded-md hover:bg-[#9E7E4A] transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Make a Donation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-md hover:bg-white/20 transition-all duration-200 border border-white/30"
              >
                Upcoming Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from 'next'
import { Target, Eye, Heart, Award, Users, Lightbulb, Shield, Rocket, Phone } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'About HyperCraft - Your AI Innovation Partner | Our Story & Mission',
  description: 'Discover HyperCraft\'s journey in revolutionizing businesses through AI technology. Learn about our mission, vision, and expert team driving digital transformation.',
  openGraph: {
    title: 'About HyperCraft - Your AI Innovation Partner',
    description: 'Discover HyperCraft\'s journey in revolutionizing businesses through AI technology.',
  },
}

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We constantly push boundaries to deliver cutting-edge AI solutions that transform businesses.'
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your success is our success. We partner with you every step of the way to ensure optimal outcomes.'
  },
  {
    icon: Shield,
    title: 'Quality & Security',
    description: 'We maintain the highest standards of code quality, data security, and system reliability.'
  },
  {
    icon: Rocket,
    title: 'Agile Excellence',
    description: 'Fast-paced development with flexibility to adapt to your evolving business needs.'
  },
  {
    icon: Heart,
    title: 'Passion & Dedication',
    description: 'Our team is passionate about technology and dedicated to delivering exceptional results.'
  },
  {
    icon: Award,
    title: 'Excellence Driven',
    description: 'We strive for excellence in every project, exceeding expectations and setting new standards.'
  },
]

const technologies = [
  'OpenAI GPT-4', 'VAPI', 'Twilio', 'Whisper API', 'Python', 'TensorFlow', 'PyTorch',
  'React', 'Next.js', 'Node.js', 'AWS', 'Google Cloud', 'Azure', 'Docker',
  'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'TypeScript'
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />
        <div className="absolute top-20 -left-48 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-48 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transforming Businesses Through{' '}
              <span className="text-gradient">AI Innovation</span>
            </h1>
            <p className="text-xl text-gray-400">
              We are a team of passionate technologists, data scientists, and engineers dedicated to building
              the future of intelligent business solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  HyperCraft was founded with a vision to democratize AI technology and make it accessible
                  to businesses of all sizes. We recognized that many companies struggle to harness the power
                  of artificial intelligence due to complexity and resource constraints.
                </p>
                <p>
                  Our journey began with a simple mission: to bridge the gap between cutting-edge AI research
                  and practical business applications. Today, we've helped over 50 companies transform their
                  operations, increase efficiency, and unlock new revenue streams through intelligent automation
                  and data-driven insights.
                </p>
                <p className="font-semibold text-white">
                  <Phone className="inline-block w-5 h-5 mr-2 text-accent-neon" />
                  We specialize in AI Lead Calling Agents—revolutionary conversational AI that automates lead
                  qualification, appointment scheduling, and customer engagement with human-like interactions that
                  convert. Our calling agents have processed over 10,000+ leads with 85% conversion rates across
                  real estate, healthcare, and e-commerce sectors.
                </p>
                <p>
                  What sets us apart is our commitment to understanding your unique challenges and delivering
                  solutions that truly move the needle. We don't just build technology – we partner with you
                  to drive sustainable growth and competitive advantage.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-effect rounded-2xl p-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                      <p className="text-gray-400">
                        To empower businesses with cutting-edge AI solutions that drive innovation,
                        efficiency, and growth in the digital age.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                      <p className="text-gray-400">
                        To be the global leader in accessible AI technology, transforming how businesses
                        operate and compete in an increasingly intelligent world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-purple rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Technology <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver robust, scalable solutions
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="glass-effect px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  <span className="text-gray-300 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Our diverse team of AI specialists, software engineers, and data scientists brings decades
              of combined experience in delivering transformative technology solutions.
            </p>
            <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-gradient mb-2">15+</h3>
                  <p className="text-gray-400">Team Members</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gradient mb-2">10+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gradient mb-2">5+</h3>
                  <p className="text-gray-400">Countries Served</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

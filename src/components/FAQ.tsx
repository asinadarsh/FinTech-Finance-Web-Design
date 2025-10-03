import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type UserType = 'founder' | 'accountant';

interface FAQItem {
  question: string;
  answer: string;
  type: UserType[];
}

export default function FAQ() {
  const [activeType, setActiveType] = useState<UserType>('founder');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'How long does setup take?',
      answer: 'Most customers are up and running in under 5 minutes. Simply connect your Stripe account and we\'ll automatically import your transactions.',
      type: ['founder'],
    },
    {
      question: 'Do I need accounting experience?',
      answer: 'Not at all! Puzzle is designed to be intuitive for founders without accounting backgrounds. Our automation handles the complex parts.',
      type: ['founder'],
    },
    {
      question: 'What integrations do you support?',
      answer: 'We integrate natively with Stripe, and support connections to major banks, payment processors, and business tools.',
      type: ['founder'],
    },
    {
      question: 'Is my financial data secure?',
      answer: 'Yes. We use bank-level encryption and security measures. Your data is protected with SOC 2 Type II compliance.',
      type: ['founder', 'accountant'],
    },
    {
      question: 'Can I manage multiple clients?',
      answer: 'Absolutely. Our platform is built for accountants managing multiple client accounts with easy switching and consolidated views.',
      type: ['accountant'],
    },
    {
      question: 'Do you offer white-label options?',
      answer: 'Yes, we offer white-label solutions for accounting firms. Contact our sales team to learn more about enterprise options.',
      type: ['accountant'],
    },
    {
      question: 'What reporting features are available?',
      answer: 'Generate P&L statements, balance sheets, cash flow reports, and custom reports. All exports are available in multiple formats.',
      type: ['accountant'],
    },
  ];

  const filteredFAQs = faqs.filter((faq) => faq.type.includes(activeType));

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex backdrop-blur-xl bg-white/5 border border-white/10 rounded-full p-1">
            <button
              onClick={() => setActiveType('founder')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeType === 'founder'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Founder
            </button>
            <button
              onClick={() => setActiveType('accountant')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeType === 'accountant'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Accountants
            </button>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                <ChevronDown
                  className={`text-emerald-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

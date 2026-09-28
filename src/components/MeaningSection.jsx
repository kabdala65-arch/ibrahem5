import { motion } from 'framer-motion'
import './MeaningSection.css'

const letters = [
  { l: 'إ', text: 'إحساس الأمان اللي عمري ما حسيته غير معاك' },
  { l: 'ب', text: 'بحبك بكل حاجة فيا، وبكل يوم بيعدّي علينا' },
  { l: 'ر', text: 'رحمة ربنا ليا يوم ما جمعني بيك' },
  { l: 'ا', text: 'أمان قلبي وسندي، وأحلى حاجة في أيامي' },
  { l: 'ه', text: 'هدوء بيجيلي أول ما أسمع صوتك' },
  { l: 'ي', text: 'يوم ما عرفتك الدنيا كلها بقت أحلى' },
  { l: 'م', text: 'معاك بس بحس إني في بيتي.. وربنا يجمعنا في بيت واحد قريب' },
]

export default function MeaningSection() {
  return (
    <section className="meaning-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">بحبك</span>
        <h2 className="section-title">مش مجرد كلمة بقولهالك</h2>
        <p className="section-subtitle">
          دي إحساس نابع من جوه قلبي.. إبراهيم اسم كبير زي صاحبه، وكل حرف فيه ليه معنى عندي ♥
        </p>
      </motion.div>

      <div className="meaning-grid">
        {letters.map((item, i) => (
          <motion.div
            key={i}
            className="meaning-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <span className="meaning-letter">{item.l}</span>
            <span className="meaning-text">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

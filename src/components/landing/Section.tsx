import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, features, testimonials, contacts, gallery }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}

      {features && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/60 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            >
              <div className="mb-3 text-[#FF4D00]">
                <Icon name={f.icon} size={28} fallback="Star" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {testimonials && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/60 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            >
              <div className="text-[#FF4D00] mb-3">
                <Icon name="Quote" size={20} fallback="MessageSquare" />
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-neutral-500 text-xs">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {gallery && (
        <motion.div
          className="grid grid-cols-3 gap-4 mt-10 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-xl aspect-video group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{img.caption}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {contacts && (
        <motion.div
          className="flex flex-col md:flex-row gap-6 mt-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { icon: "Phone", label: contacts.phone },
            { icon: "Mail", label: contacts.email },
            { icon: "MapPin", label: contacts.address },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-[#FF4D00]">
                <Icon name={item.icon} size={20} fallback="Info" />
              </div>
              <span className="text-neutral-300 text-base">{item.label}</span>
            </div>
          ))}
        </motion.div>
      )}

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 md:mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
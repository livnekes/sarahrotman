import { motion } from "framer-motion";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=%D7%93%27%27%D7%A8+%D7%A9%D7%A8%D7%94+%D7%A8%D7%95%D7%98%D7%9E%D7%9F#lrd=0x151d4924fcdfb753:0x8f34e6faddf2a6af,1";

interface Review {
  name: string;
  text: string;
  stars: number;
}

const reviews: Review[] = [
  {
    name: "ilanit sopher",
    text: "אחרי שהיינו אצל 3 רופאים, שרה הייתה מעולה יסודית נעימה, עשתה ניתוח כפתורים ושקד שלישי לבן שלי. ממליצה מאד",
    stars: 5,
  },
  {
    name: "vardit wolfman",
    text: "רופאה קשובה ומקצועית שעושה מעל ומעבר לנדרש עבור מטופליה.",
    stars: 5,
  },
  {
    name: "Anastasia Shapira",
    text: "רופאה מקצועית ואנושית. תודה רבה על הטיפול המצויין והרגיש.",
    stars: 5,
  },
  {
    name: "אריק זיו",
    text: 'הגעתי אל ד"ר שרה רוטמן עם בעיית שמיעה ואוזן סתומה, לאחר הטיפול המסור של הרופאה נפתחה לי האוזן וחזרה שמיעתי. ממליץ בחום! אדיבה סימפתית ומקצועית!',
    stars: 5,
  },
  {
    name: "נופר מאשי",
    text: "לאחר דלקות מתמשכות באוזן הייתי אצל דוקטור שרה לאחר שעברתי המון רופאים, חייבת לציין שהטיפול היה עדין ומקצועי!",
    stars: 5,
  },
  {
    name: "Dor Gorel",
    text: "הגעתי לד״ר רוטמן אחרי כמה ימים של סבל וקיבלתי מענה מקצועי עדין ואישי ברמה הכי גבוהה שיש! תודה!",
    stars: 5,
  },
  {
    name: "Shay W",
    text: "רופאה מדהימה ואכפתית ומסבירה וקשובה",
    stars: 5,
  },
  {
    name: "איציק מרודי",
    text: 'תשמעו אני המום איזה ד"ר ממש הצילה לי את האוזן אחרי 3 רופאי אף אוזן גרון',
    stars: 5,
  },
  {
    name: "roi ben",
    text: "ממש נחמדה מקצועית ויסודית.",
    stars: 5,
  },
  {
    name: "Roni Yosha",
    text: "רופאה נעימה, מסבירת פנים, קשובה ומקצועית",
    stars: 5,
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5" dir="ltr">
    {Array.from({ length: count }).map((_, i) => (
      <Star
        key={i}
        className="w-4 h-4 fill-yellow-400 text-yellow-400"
      />
    ))}
  </div>
);

const ReviewCard = ({
  review,
  index,
}: {
  review: Review;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="min-w-[280px] md:min-w-0 bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col gap-3 snap-start"
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold text-lg shrink-0">
        {review.name.charAt(0).toUpperCase()}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-brand-dark text-sm truncate">
          {review.name}
        </p>
        <StarRating count={review.stars} />
      </div>
    </div>
    <p className="text-gray-600 leading-relaxed text-sm flex-1">
      &ldquo;{review.text}&rdquo;
    </p>
  </motion.div>
);

const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    // RTL: scrollLeft is negative in RTL containers
    setCanScrollRight(Math.abs(el.scrollLeft) > 0);
    setCanScrollLeft(
      Math.abs(el.scrollLeft) < el.scrollWidth - el.clientWidth - 1
    );
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 300;
    // In RTL, "left" visually means positive scrollLeft
    el.scrollBy({
      left: direction === "left" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Star className="w-8 h-8 text-brand-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            מה המטופלים אומרים
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1" dir="ltr">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-brand-dark">5.0</span>
            <span className="text-gray-500">
              ({reviews.length} ביקורות ב-Google)
            </span>
          </div>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative mb-10">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>

          {/* Scroll Arrows */}
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-brand-dark disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
              aria-label="הבא"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-brand-dark disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
              aria-label="הקודם"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Google Reviews Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl"
          >
            <span>צפו בכל הביקורות ב-Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;

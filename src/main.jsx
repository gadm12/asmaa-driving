import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/cairo';
import './styles.css';

const whatsappUrl = `https://wa.me/201221092927?text=${encodeURIComponent('أهلاً أسماء، حابة أستفسر عن تدريب السواقة والمواعيد والأسعار.')}`;

function WhatsAppIcon() {
 return <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7a8.5 8.5 0 1 1 16.3-3.8Z"/><path d="m8 7 2 3-1.2 1.2a9 9 0 0 0 4 4L14 14l3 2c-1 2-3 2-5 1-3-1.4-5.5-4-6-7C5.8 8.5 6.5 7.5 8 7Z"/></svg>;
}
function WhatsAppLink({ className, children = 'واتساب' }) {
 return <a className={className} href={whatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />{children}</a>;
}

const reviews = [
 { name: 'د. ميار مصطفى', initials: 'د.م', detail: 'طبيبة بشرية - بنها الجديدة', text: 'أنا كنت مرعوبة جداً من السواقة وكان عندي فوبيا حقيقية بسبب حادثة قديمة لأختي. أسماء بجد ملاك وصبرها مالهوش حدود، شالت التوتر من أول خمس دقايق ودلوقتي بسوق عربيتي للشغل كل يوم لوحدي!' },
 { name: 'سارة عبد الرحمن', initials: 'س.ع', detail: 'مهندسة معمارية - بنها', text: 'كنت واخدة كورس مانيوال في مدرسة تانية وطلعت مش عارفة أطلع كوبري وكل شوية العربية تبطل مني. مع أسماء شرحتلي الدبرياج بطريقة سهلة عمري ما أنساها، وبقيت حريفة مانيوال في أسبوعين بس.' },
 { name: 'نهى حسام', initials: 'ن.ح', detail: 'ربة منزل وأم لطفلين - بنها', text: 'الركنات كانت كابوس بالنسبالي، بقالي سنتين بسوق ومش بعرف أركن غير في مكان فاضي خالص. أسماء علمتني نقاط مرجعية بالمرايات خلت الركن الموازي أسهل حاجة عندي. شكراً من قلبي يا أسماء!' },
];
function Testimonials() {
 return <section className="py-16 sm:py-24 bg-brand-50/50" id="testimonials">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
    <div className="text-right"><span className="text-xs sm:text-sm font-black text-brand-600 bg-brand-100 px-3 py-1 rounded-md">شهادات نفخر بيها</span><h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">قصص نجاح متدرباتنا</h2><p className="text-slate-600 text-sm sm:text-base mt-1">سيدات وبنات كسروا حاجز الخوف وبقوا يسوقوا في كل مكان بمصر.</p></div>
    <div className="flex flex-wrap items-center gap-2"><span className="text-amber-500 text-lg" aria-label="٥ من ٥ نجوم">★★★★★</span><span className="text-xs sm:text-sm font-bold text-slate-700">تقييم 5 نجوم من مئات المتدربات</span></div>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {reviews.map(review => <figure key={review.name} className="bg-gradient-to-br from-brand-500 to-brand-600 text-white rounded-3xl p-7 shadow-lg shadow-brand-500/20 flex flex-col justify-between text-right relative overflow-hidden">
     <span className="text-white/20 text-6xl font-serif absolute -top-2 left-4 select-none" aria-hidden="true">“</span>
     <div><span className="block text-yellow-300 text-sm mb-4" aria-label="٥ من ٥ نجوم">★★★★★</span><blockquote className="text-sm sm:text-base leading-relaxed font-medium text-white/95">«{review.text}»</blockquote></div>
     <figcaption className="mt-6 pt-5 border-t border-white/20 flex items-center gap-3"><span className="w-11 h-11 shrink-0 rounded-full bg-white/20 flex items-center justify-center font-bold text-white border border-white/40" aria-hidden="true">{review.initials}</span><span><span className="block font-black text-sm">{review.name}</span><span className="text-xs text-white/80">{review.detail}</span></span></figcaption>
    </figure>)}
   </div>
  </div>
 </section>;
}

function App() {
 return <>
  <div className="bg-charcoal-900 text-stone-200 text-xs sm:text-sm py-2 px-4 border-b border-stone-800">
    <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
      <div className="flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="font-medium">
          {"الحجز متاح الآن لفترة التدريب القادمة"}
        </span>
      </div>
      <div className="flex items-center gap-4 text-xs">
        <span className="text-stone-400">
          {"📍 بنها والمناطق المجاورة"}
        </span>
        <a className="text-brand-400 hover:text-brand-300 font-bold tracking-wider inline-flex items-center gap-1" href="tel:01221092927">
          <span className="hidden sm:inline" dir="ltr">
            {"01221092927"}
          </span>
          <span className="sm:hidden">
            {"اتصلي الآن"}
          </span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <a className="flex items-center gap-3 group" href="#">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a10 10 0 0 0-10 10c0 4.14 2.52 7.7 6.13 9.2" />
            <circle cx="12" cy="12" r="3" />
            <line x1="12" x2="12" y1="15" y2="22" />
            <line x1="9.2" x2="2.6" y1="10.8" y2="9" />
            <line x1="14.8" x2="21.4" y1="10.8" y2="9" />
          </svg>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
            {"أسماء سعيد"}
          </span>
          <span className="text-[10px] sm:text-xs font-semibold text-brand-600 tracking-wide">
            {"تعليم قيادة السيارات • للسيدات فقط"}
          </span>
        </div>
      </a>
      <nav className="hidden xl:flex items-center gap-8 text-sm font-bold text-slate-700">
        <a className="hover:text-brand-600 transition-colors" href="#why-us">
          {"ليه تختارينا؟"}
        </a>
        <a className="hover:text-brand-600 transition-colors" href="#programs">
          {"باقات التدريب"}
        </a>
        <a className="hover:text-brand-600 transition-colors" href="#steps">
          {"منهجية التعليم"}
        </a>
        <a className="hover:text-brand-600 transition-colors" href="#testimonials">
          {"آراء المتدربات"}
        </a>
        <a className="hover:text-brand-600 transition-colors" href="#faq">
          {"الأسئلة الشائعة"}
        </a>
      </nav>
      <div className="flex items-center gap-3">
        <WhatsAppLink className="hidden sm:inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition shadow-sm">واتساب سريع</WhatsAppLink>
        <a className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-extrabold px-3 sm:px-5 py-2.5 rounded-xl transition shadow-md shadow-brand-600/30" href="tel:01221092927">
          <span className="hidden sm:inline" dir="ltr">
            {"01221092927"}
          </span>
          <span className="sm:hidden">
            {"اتصلي الآن"}
          </span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  </header>
  <main id="main">
  <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-brand-50/70 via-stone-50 to-stone-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 space-y-6 text-right">
          <div className="inline-flex items-center gap-2 bg-brand-100/80 text-brand-800 text-xs sm:text-sm font-black px-4 py-2 rounded-full border border-brand-200">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
            <span>
              {"تعليم قيادة السيارات • للسيدات فقط"}
            </span>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.2]">
              {"هتسوقي،"}
              <br className="hidden sm:inline" />
              <span className="text-brand-600 relative inline-block">
                {"يعني هتسوقي."}
                <svg className="absolute -bottom-2 right-0 w-full h-3 text-brand-300 -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 200 12" aria-hidden="true">
                  <path d="M2 9.5C50 2 150 2 198 9.5" stroke="currentColor" strokeLinecap="round" strokeWidth="5" />
                </svg>
              </span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl">
            {"خدي أول خطوة وإنتي مطمنة تماماً. اتعلّمي السواقة مع كابتن أسماء سعيد، بصبر واهتمام وبدون أي توتر، خطوة بخطوة لحد ما توصلي للأمان والثقة الكاملة ورا الدركسيون في أصعب شوارع وزحام بنها و مصر."}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a className="inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-700 text-white font-black text-lg px-8 py-4 rounded-2xl shadow-xl shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-0.5 transition-all text-center" href="tel:01221092927">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>
                {"ابدئي رحلتك مع أسماء"}
              </span>
              <span className="text-brand-200">
                {"←"}
              </span>
            </a>
            <a className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-slate-800 border-2 border-stone-200 font-bold text-base px-6 py-4 rounded-2xl transition" href="#programs">
              <span>
                {"شوفي باقات التدريب"}
              </span>
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-bold text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                {"✓"}
              </span>
              <span>
                {"مانيوال وأوتوماتيك"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                {"✓"}
              </span>
              <span>
                {"خبرة 13 سنة في التدريب"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                {"✓"}
              </span>
              <span>
                {"علاج الخوف والفوبيا والرهبة"}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-b from-brand-100/60 to-brand-50/20 p-6 sm:p-8 rounded-3xl border border-brand-200/80 shadow-2xl">
            <div className="absolute -top-4 -left-3 bg-white border border-stone-200 shadow-lg rounded-2xl px-4 py-2.5 flex items-center gap-2 floating-card z-10">
              <span className="text-brand-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </span>
              <span className="text-xs sm:text-sm font-black text-slate-800">
                {"على مهلك.. إنتِ قَدها!"}
              </span>
            </div>
            <div className="relative bg-white rounded-2xl p-6 shadow-inner border border-stone-100 overflow-hidden text-center">
              <div className="w-32 h-32 rounded-full bg-brand-200/50 absolute -top-8 -right-8 pointer-events-none blur-lg" />
              <div className="py-6 flex flex-col items-center justify-center">
                <div className="w-full max-w-[280px] h-36 relative flex items-center justify-center">
                  <div className="absolute bottom-2 w-full h-8 bg-slate-800 rounded-xl overflow-hidden flex items-center justify-around px-2">
                    <span className="w-6 h-1.5 bg-yellow-400 rounded" />
                    <span className="w-6 h-1.5 bg-stone-200 rounded" />
                    <span className="w-6 h-1.5 bg-stone-200 rounded" />
                    <span className="w-6 h-1.5 bg-stone-200 rounded" />
                  </div>
                  <svg className="w-56 h-28 relative z-10" fill="none" viewBox="0 0 200 100" aria-hidden="true">
                    <path d="M45 50 L70 20 L135 20 L160 50 Z" fill="#ea580c" />
                    <path d="M72 24 L100 24 L100 48 L52 48 Z" fill="#ffffff" opacity="0.9" />
                    <path d="M104 24 L132 24 L152 48 L104 48 Z" fill="#ffffff" opacity="0.9" />
                    <circle cx="86" cy="36" fill="#0f172a" r="6" />
                    <rect fill="#f97316" height="32" rx="10" width="150" x="25" y="48" />
                    <rect fill="#fef08a" height="10" rx="3" width="10" x="165" y="55" />
                    <rect fill="#ef4444" height="10" rx="2" width="6" x="25" y="55" />
                    <circle cx="58" cy="80" fill="#1e293b" r="16" />
                    <circle cx="58" cy="80" fill="#e2e8f0" r="8" />
                    <circle cx="142" cy="80" fill="#1e293b" r="16" />
                    <circle cx="142" cy="80" fill="#e2e8f0" r="8" />
                  </svg>
                </div>
                <div className="mt-2 text-center">
                  <h3 className="text-slate-900 font-extrabold text-base">
                    {"تدريب عملي على أرض الواقع"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {"عربيات مجهزة وبدالات أمان كاملة تحت إشراف محترف"}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2 pt-4 border-t border-stone-100">
                <div className="bg-stone-50 hover:bg-brand-50 border border-stone-200 rounded-xl p-2.5 text-center transition">
                  <span className="block text-xs text-slate-500 font-semibold">
                    {"نظام القيادة"}
                  </span>
                  <span className="text-sm font-black text-brand-700">
                    {"مانيوال"}
                  </span>
                </div>
                <div className="bg-stone-50 hover:bg-brand-50 border border-stone-200 rounded-xl p-2.5 text-center transition">
                  <span className="block text-xs text-slate-500 font-semibold">
                    {"نظام القيادة"}
                  </span>
                  <span className="text-sm font-black text-brand-700">
                    {"أوتوماتيك"}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-white border border-stone-200 rounded-2xl p-4 shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand-500 text-white flex items-center justify-center font-black text-2xl shadow-md">
                  {"١٣"}
                </div>
                <div className="text-right">
                  <span className="block text-sm font-black text-slate-900">
                    {"سنة خبرة في التدريب"}
                  </span>
                  <span className="text-xs text-slate-500">
                    {"في تدريب وتأهيل السيدات للقيادة"}
                  </span>
                </div>
              </div>
              <div className="text-left">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {"صبر واهتمام"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="border-y border-stone-200 bg-white py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-right">
        <div className="flex items-center justify-center md:justify-start gap-4 p-2">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-base">
              {"صبر واهتمام بكل متدربة"}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              {"أسلوب هادي ولطيف يناسب كل شخصية بدون عصبية أو لوم."}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-4 p-2 border-t md:border-t-0 md:border-r border-stone-200 pt-4 md:pt-0">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-base">
              {"أمان وثقة في تعليم القيادة"}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              {"تحكم تام بالسيارة وقواعد السلامة لتسوقي بدون خوف من الطريق."}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-4 p-2 border-t md:border-t-0 md:border-r border-stone-200 pt-4 md:pt-0">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7a14.98 14.98 0 01-6.16 12.12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-base">
              {"تعليم بأسلوب مريح وعملي"}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              {"تطبيق حقيقي في شوارعك اليومية، مش مجرد لفات في ساحة مغلقة."}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 sm:py-20 bg-stone-50" id="why-us">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 text-right">
          <span className="text-xs font-black uppercase tracking-wider text-brand-600 bg-brand-100/60 px-3 py-1 rounded-md">
            {"معاكي خطوة بخطوة"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            {"السواقة بتبدأ براحة بال.."}
            <br />
            <span className="text-brand-600">
              {"والثقة بتيجي مع التدريب الصح."}
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {"أنا أسماء سعيد، بعلّم السيدات القيادة من أكتر من 13 سنة. عارفة كويس إن أول مسكة دركسيون بيكون معاها قلق وتفكير كتير: \"طب لو عملت حادثة؟ طب لو العربية بطلت في مطلع كوبري؟ طب لو الناس زمّرتلي في الزحمة؟\""}
          </p>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-semibold">
            {"عشان كده أساس تدريبنا هو الصبر والهدوء والاحتواء التام. أي خوف أو رهبة هنكسرها مع بعض بهدوء وتدريج حقيقي لحد ما تلاقي نفسك بتسوقي لوحدك وتوصلي مشاويرك وشغلك وبيتك وإنتي مبسوطة ومرتاحة."}
          </p>
          <div className="pt-2">
            <a className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-black text-base group" href="tel:01221092927">
              <span>
                {"اتكلمي معايا عن كل اللي قلقك وخايفة منه"}
              </span>
              <span className="transition-transform group-hover:-translate-x-1">
                {"←"}
              </span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-brand-300 transition-colors text-right">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-brand-600 flex items-center justify-center font-bold mb-4">
              {"🛡️"}
            </div>
            <h3 className="text-base font-black text-slate-900">
              {"علاج فوبيا وخوف القيادة"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-normal">
              {"تمارين عملية للتنفس والتحكم وتدريب تدريجي من الشوارع الفاضية للزحمة بدون أي صدمات أو ضغط عصبي."}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-brand-300 transition-colors text-right">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-brand-600 flex items-center justify-center font-bold mb-4">
              {"🚗"}
            </div>
            <h3 className="text-base font-black text-slate-900">
              {"مانيوال وأوتوماتيك"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-normal">
              {"إتقان الغيارات، نقطة التلامس في الدبرياج، والطلوع في الكباري والمطالع، أو التحكم السلس في الأوتوماتيك."}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-brand-300 transition-colors text-right">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-brand-600 flex items-center justify-center font-bold mb-4">
              {"📐"}
            </div>
            <h3 className="text-base font-black text-slate-900">
              {"أبعاد السيارة والركنات"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-normal">
              {"حفظ زوايا العربية، المرايات، والركن الموازي وبين العربيات في أضيق الأماكن باحترافية."}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-brand-300 transition-colors text-right">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-brand-600 flex items-center justify-center font-bold mb-4">
              {"⏱️"}
            </div>
            <h3 className="text-base font-black text-slate-900">
              {"مرونة كاملة في المواعيد"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-normal">
              {"جداول مرنة تناسب الموظفات وربات البيوت، حصص صباحية ومسائية حسب وقتك المناسب وظروفك."}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 sm:py-24 bg-white border-t border-stone-200" id="programs">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs sm:text-sm font-black text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full border border-brand-200">
          {"برامج مصممة لكل مستوى"}
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
          {"اختاري باقة التدريب المناسبة ليكي"}
        </h2>
        <p className="text-slate-600 mt-3 text-base sm:text-lg">
          {"سواء لسه أول مرة تلمسي دركسيون أو عندك رخصة بس خايفة تنزلي لوحدك، هتلاقي الكورس المناسب."}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 hover:border-brand-500 hover:shadow-xl transition-all flex flex-col justify-between text-right">
          <div>
            <div className="inline-block px-3 py-1 bg-brand-100 text-brand-800 rounded-lg text-xs font-black mb-4">
              {"الأكثر طلباً للمبتدئات"}
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              {"كورس الصفر حتى الإتقان"}
            </h3>
            <p className="text-sm font-semibold text-brand-600 mt-1">
              {"أوتوماتيك"}
            </p>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              {"لكل متدربة لسه بتبدأ تماماً ومش عارفة أي تفاصيل عن العربية. نبدأ بتشغيل السيارة والتحكم بالدواسات لحد القيادة في المحاور والشوارع السريعة."}
            </p>
            <ul className="mt-6 space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <span className="text-brand-600 font-bold text-base">
                  {"✓"}
                </span>
                <span>
                  {"فهم لوحة العدادات والنقلات والفرامل والبنزين"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-600 font-bold text-base">
                  {"✓"}
                </span>
                <span>
                  {"ضبط المرايات وقراءة أبعاد العربية يمين وشمال"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-600 font-bold text-base">
                  {"✓"}
                </span>
                <span>
                  {"الدخول في الميادين والدورانات وتغيير الحارات"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-600 font-bold text-base">
                  {"✓"}
                </span>
                <span>
                  {"الركنات بكل أنواعها (عمودي وموازي ورجوع للخلف)"}
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-8 pt-6 border-t border-stone-200">
            <a className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-sm py-3.5 px-4 rounded-xl transition" href="tel:01221092927">
              <span>
                {"احجزي كورس الأوتوماتيك"}
              </span>
              <span>
                {"←"}
              </span>
            </a>
          </div>
        </div>
        <div className="bg-stone-50 rounded-3xl p-8 border-2 border-brand-500/40 relative hover:shadow-xl transition-all flex flex-col justify-between text-right">
          <div className="absolute -top-3.5 right-8 bg-brand-600 text-white text-xs font-black px-3 py-1 rounded-full shadow">
            {"تخصص مانيوال احترافي"}
          </div>
          <div>
            <div className="inline-block px-3 py-1 bg-stone-200 text-slate-800 rounded-lg text-xs font-black mb-4">
              {"مانيوال"}
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              {"كورس المانيوال والغيارات"}
            </h3>
            <p className="text-sm font-semibold text-brand-600 mt-1">
              {"إتقان الدبرياج وبدون ما تبطل منك"}
            </p>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              {"لو عاوزة تتعلّمي مانيوال صح وتتحكمي في الغيارات ونقطة التلامس بدون رهبة الكباري أو الزحمة المزعجة، ده الكورس المظبوط ليكي."}
            </p>
            <ul className="mt-6 space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <span className="text-brand-600 font-bold text-base">
                  {"✓"}
                </span>
                <span>
                  {"إتقان التوافق بين الدبرياج والبنزين بسلاسة"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-600 font-bold text-base">
                  {"✓"}
                </span>
                <span>
                  {"الطلوع بالمطلع والكباري بدون رجوع العربية للخلف"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-600 font-bold text-base">
                  {"✓"}
                </span>
                <span>
                  {"النقل والرجوع للغيارات العكسية في الزحام"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-600 font-bold text-base">
                  {"✓"}
                </span>
                <span>
                  {"فرملة المحرك والسيطرة في الطوارئ"}
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-8 pt-6 border-t border-stone-200">
            <a className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm py-3.5 px-4 rounded-xl transition" href="tel:01221092927">
              <span>
                {"احجزي كورس المانيوال"}
              </span>
              <span>
                {"←"}
              </span>
            </a>
          </div>
        </div>
        <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 hover:border-brand-500 hover:shadow-xl transition-all flex flex-col justify-between text-right md:col-span-2 lg:col-span-1">
          <div>
            <div className="inline-block px-3 py-1 bg-amber-100 text-amber-900 rounded-lg text-xs font-black mb-4">
              {"كسر حاجز الخوف"}
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              {"كورس الثقة والتمكن"}
            </h3>
            <p className="text-sm font-semibold text-brand-600 mt-1">
              {"للي معاها رخصة وخايفة تسوق لوحدها"}
            </p>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              {"كتير من السيدات اتعلموا وطلعوا رخصة لكن العربية مركونة بسبب الرهبة من الزحام والشوارع السريعة. الكورس ده هيخليكي تنزلي لوحدك بكل ثقة."}
            </p>
            <ul className="mt-6 space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <span className="text-brand-600 font-bold text-base">
                  {"✓"}
                </span>
                <span>
                  {"النزول في خطوط سيرك الحقيقية (شغلك، مدارس الأولاد)"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-600 font-bold text-base">
                  {"✓"}
                </span>
                <span>
                  {"التعامل مع الشاحنات والميكروباصات والموتوسيكلات"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-600 font-bold text-base">
                  {"✓"}
                </span>
                <span>
                  {"إتقان الركن في الجراجات والمولات والأماكن الضيقة"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-600 font-bold text-base">
                  {"✓"}
                </span>
                <span>
                  {"التدريب على عربيتك الخاصة لو تحبي"}
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-8 pt-6 border-t border-stone-200">
            <a className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-sm py-3.5 px-4 rounded-xl transition" href="tel:01221092927">
              <span>
                {"احجزي كورس استعادة الثقة"}
              </span>
              <span>
                {"←"}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-brand-50 border border-brand-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
        <div className="flex items-center gap-3">
          <span className="text-2xl">
            {"💡"}
          </span>
          <p className="text-xs sm:text-sm font-bold text-brand-900">
            {"مش متأكدة أي برنامج يناسبك؟ كلمي كابتن أسماء مباشرة وهتحدد معاكي البرنامج وعدد الحصص حسب مستواكِ."}
          </p>
        </div>
        <a className="shrink-0 bg-white hover:bg-stone-50 text-brand-700 border border-brand-300 font-bold text-xs sm:text-sm px-4 py-2 rounded-xl" href="tel:01221092927">
          {"استشيري أسماء مجاناً"}
        </a>
      </div>
    </div>
  </section>
  <section className="py-16 sm:py-24 bg-stone-100/60 border-t border-stone-200" id="steps">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs sm:text-sm font-black text-brand-600 bg-white px-4 py-1.5 rounded-full border border-stone-200 shadow-sm">
          {"التدرج يمنحكِ الأمان"}
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
          {"منهجية التعليم خطوة بخطوة"}
        </h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base">
          {"مش بنرميكي في الزحمة فجأة! تدريبنا مبني على خطوات محسوبة ومنهج تدريجي مجرب 13 سنة."}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm text-right relative overflow-hidden">
          <span className="absolute top-2 left-4 text-6xl font-black text-stone-100 select-none pointer-events-none">
            {"01"}
          </span>
          <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold text-lg mb-4">
            {"١"}
          </div>
          <h3 className="text-lg font-black text-slate-900">
            {"كسر الرهبة والتحكم"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            {"في منطقة واسعة ومفتوحة، بنتعود على حساسية الدواسات والدريكسيون والفرامل بهدوء لحد ما يختفي الخوف تماماً."}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm text-right relative overflow-hidden">
          <span className="absolute top-2 left-4 text-6xl font-black text-stone-100 select-none pointer-events-none">
            {"02"}
          </span>
          <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold text-lg mb-4">
            {"٢"}
          </div>
          <h3 className="text-lg font-black text-slate-900">
            {"الشوارع الهادئة والمطبات"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            {"الانتقال لشوارع سكنية هادية لتجربة الملفات، والتهدئة عند المطبات، واستخدام المرايات والإشارات بدون توتر."}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm text-right relative overflow-hidden">
          <span className="absolute top-2 left-4 text-6xl font-black text-stone-100 select-none pointer-events-none">
            {"03"}
          </span>
          <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold text-lg mb-4">
            {"٣"}
          </div>
          <h3 className="text-lg font-black text-slate-900">
            {"المحاور والكباري والميادين"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            {"الخروج للطرق الأكبر والتعامل مع الميادين الواسعة، السرعات المتوسطة، صعود الكباري ونزولها واليوترن ."}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm text-right relative overflow-hidden">
          <span className="absolute top-2 left-4 text-6xl font-black text-stone-100 select-none pointer-events-none">
            {"04"}
          </span>
          <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold text-lg mb-4">
            {"٤"}
          </div>
          <h3 className="text-lg font-black text-slate-900">
            {"الزحام الحقيقي والركن الاحترافي"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            {"قلب الزحام والوقوف والتوقف المتكرر، والركن بين العربيات بإتقان تام، لتكوني جاهزة تسوقي بمفردك 100%."}
          </p>
        </div>
      </div>
    </div>
  </section>
  <Testimonials />
  <section className="py-16 sm:py-24 bg-brand-50/50" id="facebook">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-xs sm:text-sm font-black text-brand-600 bg-brand-100 px-3 py-1 rounded-md">
            {"خلّينا على تواصل"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4">
            {"اعرفي أسماء أكتر على فيسبوك"}
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed">
            {"زوري صفحة أسماء سعيد على فيسبوك لمتابعة المنشورات والتواصل والاستفسار عن التدريب."}
          </p>
        </div>
        <a className="facebook-card bg-gradient-to-br from-brand-500 to-brand-600 text-white rounded-3xl p-8 shadow-lg shadow-brand-500/20 flex flex-col gap-5 items-start" href="https://www.facebook.com/share/1P9RckQf78/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
          <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 22v-9h3l.5-4H14V7c0-1.2.3-2 2-2h2V1.4A25 25 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v9Z" />
          </svg>
          <h3 className="text-2xl font-black">
            {"أسماء سعيد"}
          </h3>
          <p className="text-sm leading-relaxed">
            {"تعليم قيادة السيارات للسيدات فقط"}
            <br />
            {"مانيوال وأوتوماتيك"}
          </p>
          <span className="inline-flex items-center gap-3 font-bold border-t border-white/30 w-full pt-5">
            {"زوري صفحتنا على فيسبوك"}
            <span aria-hidden="true">
              {"←"}
            </span>
          </span>
        </a>
      </div>
    </div>
  </section>
  <section className="py-16 sm:py-24 bg-white border-t border-stone-200" id="faq">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
      <div className="text-center mb-12">
        <span className="text-xs sm:text-sm font-black text-brand-600 bg-stone-100 px-4 py-1 rounded-full">
          {"كل ما يدور في ذهنك"}
        </span>
        <h2 className="text-3xl font-black text-slate-900 mt-2">
          {"الأسئلة الشائعة"}
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          {"إجابات واضحة ومباشرة لأهم استفساراتك قبل البدء."}
        </p>
      </div>
      <div className="space-y-4" data-purpose="faq-accordion-container">
        <details className="group bg-stone-50 border border-stone-200 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden open:border-brand-400 transition" open name="training-faq">
          <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-base sm:text-lg">
            <span>
              {"هل التدريب مخصص للسيدات فقط؟"}
            </span>
            <span className="w-7 h-7 rounded-full bg-white border border-stone-300 flex items-center justify-center text-brand-600 group-open:rotate-180 transition-transform">
              {"↓"}
            </span>
          </summary>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-200/70 pt-3">
            {"نعم تماماً، التدريب بالكامل مع كابتن أسماء سعيد مخصص للسيدات والبنات فقط في إطار من الراحة والخصوصية التامة والهدوء لتتعلمي بكل راحة وأمان."}
          </p>
        </details>
        <details className="group bg-stone-50 border border-stone-200 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden open:border-brand-400 transition" name="training-faq">
          <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-base sm:text-lg">
            <span>
              {"هل التدريب بيكون بسيارة الأكاديمية ولا سيارتي الخاصة؟"}
            </span>
            <span className="w-7 h-7 rounded-full bg-white border border-stone-300 flex items-center justify-center text-brand-600 group-open:rotate-180 transition-transform">
              {"↓"}
            </span>
          </summary>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-200/70 pt-3">
            {"يتوفر سيارة تدريب مجهزة ببدالات أمان مزدوجة للتحكم الكامل (مانيوال أو أوتوماتيك). وفي حال كنتِ تفضلين التدريب على سيارتك الخاصة مباشرة لكسر الرهبة والتعود عليها، فهذا متاح أيضاً بعد التأكد من أساسيات التحكم."}
          </p>
        </details>
        <details className="group bg-stone-50 border border-stone-200 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden open:border-brand-400 transition" name="training-faq">
          <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-base sm:text-lg">
            <span>
              {"لو عندي فوبيا شديدة وبتوتر من الزحام، هعرف أتعلم؟"}
            </span>
            <span className="w-7 h-7 rounded-full bg-white border border-stone-300 flex items-center justify-center text-brand-600 group-open:rotate-180 transition-transform">
              {"↓"}
            </span>
          </summary>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-200/70 pt-3">
            {"بالتأكيد! هذا هو تخصص كابتن أسماء الأساسي على مدار 13 سنة. لن يتم إجبارك على أي موقف يسبب لكِ ذعر، بل نبدأ خطوة بخطوة بالتدريج البطيء والتحكم التام حتى يحل الأمان محل التوتر تماماً."}
          </p>
        </details>
        <details className="group bg-stone-50 border border-stone-200 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden open:border-brand-400 transition" name="training-faq">
          <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-base sm:text-lg">
            <span>
              {"كيف يمكنني حجز أول حصة تدريبية؟"}
            </span>
            <span className="w-7 h-7 rounded-full bg-white border border-stone-300 flex items-center justify-center text-brand-600 group-open:rotate-180 transition-transform">
              {"↓"}
            </span>
          </summary>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-200/70 pt-3">
            {"بكل بساطة بالاتصال المباشر على الرقم"}
            <strong className="text-brand-600">
              {"01221092927"}
            </strong>
            <span> أو <a className="text-brand-700 underline underline-offset-4" href={whatsappUrl} target="_blank" rel="noopener noreferrer">إرسال رسالة على واتساب</a> لتحديد موعد الحصة ومكان المقابلة الأنسب لكِ.</span>
          </p>
        </details>
      </div>
    </div>
  </section>
  <section className="py-16 sm:py-20 bg-charcoal-900 text-white relative overflow-hidden">
    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute -left-20 -top-20 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
      <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full">
        <span>
          {"قيادة آمنة .. حياة أسعد وأسهل"}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
        {"جاهزة تكسري حاجز الخوف"}
        <br className="hidden sm:inline" />
        {"وتملكي حريتك على الطريق؟"}
      </h2>
      <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        {"الخطوة الأولى بتبدأ بمكالمة واحدة. كلميني دلوقتي ورتبي أول حصة، وافتكري دايماً:"}
        <span className="text-brand-400 font-bold">
          {"هتسوقي يعني هتسوقي!"}
        </span>
      </p>
      <div className="pt-4 flex flex-col items-center justify-center gap-4">
        <a className="inline-flex items-center gap-4 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-600 text-white text-2xl sm:text-3xl font-black px-8 py-5 rounded-2xl shadow-xl shadow-brand-500/30 hover:scale-105 transition-all" href="tel:01221092927">
          <span className="tracking-widest" dir="ltr">
            {"01221092927"}
          </span>
          <svg className="w-7 h-7 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <div className="flex items-center gap-4 text-xs sm:text-sm text-stone-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            {"متاح الرد يومياً"}
          </span>
          <span>
            {"•"}
          </span>
          <WhatsAppLink className="inline-flex items-center gap-2 text-brand-300 hover:text-white underline underline-offset-4">أو راسلينا على الواتساب</WhatsAppLink>
        </div>
      </div>
    </div>
  </section>
  </main>
  <footer className="bg-charcoal-950 text-stone-400 py-12 border-t border-stone-800 text-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-right">
        <div className="md:col-span-6 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-sm">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3" />
                <path d="M3 10h6m6 0h6m-9 5v6" />
              </svg>
            </div>
            <span className="text-white font-black text-lg">
              {"أكاديمية كابتن أسماء سعيد"}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-400 max-w-md leading-relaxed">
            {"الوجهة الأولى والموثوقة لتعليم قيادة السيارات للسيدات في مصر. تدريب عملي متقن، صبر مطلق، واهتمام بالخوف والرهبة من السواقة."}
          </p>
          <div className="text-xs text-brand-400 font-semibold">
            {"شعارنا الدائم: قيادة آمنة .. حياة أسعد"}
          </div>
        </div>
        <div className="md:col-span-3 space-y-2">
          <span className="block font-bold text-white text-sm">
            {"روابط سريعة"}
          </span>
          <ul className="space-y-1.5 text-xs text-stone-400">
            <li>
              <a className="hover:text-white transition" href="#why-us">
                {"ليه تختاري كابتن أسماء؟"}
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#programs">
                {"باقات المانيوال والأوتوماتيك"}
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#steps">
                {"خطوات التدريب التدريجي"}
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#testimonials">
                {"آراء المتدربات"}
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#faq">
                {"الأسئلة الشائعة"}
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3 space-y-2">
          <span className="block font-bold text-white text-sm">
            {"بيانات التواصل المباشر"}
          </span>
          <p className="text-xs text-stone-400">
            {"للحجز والاستفسار الفوري:"}
          </p>
          <a className="block font-mono text-base font-bold text-white hover:text-brand-400" dir="ltr" href="tel:01221092927">
            {"01221092927"}
          </a>
          <a className="inline-block text-brand-300 hover:text-white underline underline-offset-4 text-xs py-2" href="https://www.facebook.com/share/1P9RckQf78/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">صفحتنا على فيسبوك</a>
          <p className="text-xs text-stone-400">
            {"بنها والمناطق المجاورة"}
          </p>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
        <div>
          {"جميع الحقوق محفوظة ©"}
          <span id="current-year">{new Date().getFullYear()}</span>
          {"أسماء سعيد - لتعليم قيادة السيارات للسيدات."}
        </div>
        <div className="text-stone-400">
          {"معاً نحو قيادة هادئة ومطمئنة 🚗✨"}
        </div>
      </div>
    </div>
  </footer>
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-stone-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center gap-3">
    <a className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-600 active:bg-brand-700 text-white font-black text-sm py-3 rounded-xl shadow-md shadow-brand-600/20" href="tel:01221092927">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m8 3 3 5-3 3c1.4 2.8 2.2 3.6 5 5l3-3 5 3v3a2 2 0 0 1-2 2C9 21 3 15 3 5a2 2 0 0 1 2-2Z" />
      </svg>
      <span>
        {"اتصلي الآن"}
      </span>
    </a>
    <WhatsAppLink className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 active:bg-emerald-700 text-white font-black text-sm py-3 rounded-xl shadow-md shadow-emerald-600/20" />
  </div>
 </>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);

import { useState } from 'react';
import Icon from '@/components/ui/icon';

// Photos
const CAR_SILVER   = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/0ed7aafe-2aab-41e2-accb-b7593256287c.jpg';
const CAR_BLUE     = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/c9219084-8f20-44ee-863e-c4354a7eeacc.jpg';
const MORTGAGE     = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/1f721d31-f4b7-4a91-9d38-cbd056b32ee0.jpg';
const CAR_DEAL     = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/3436c484-f3e3-4784-8982-9a20f33427cd.jpg';
const CONTRACT     = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/965df82c-0ba7-43ab-afae-5b738e67d0c7.jpg';
const DMS          = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/75a1e6f3-aa20-49fb-a5ae-9b8692b2ceb3.jpg';
const GYMNAST      = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/d20b1505-c6c3-43cf-afa5-214597dfdb4c.jpg';
const PIGGY        = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/96c2a7dd-328e-49cc-bfd7-f7f29776f82a.jpg';
const HOUSE        = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/65445abf-1717-4536-8eea-44868d1698e4.jpg';
const PLATE        = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/2198b298-077b-421b-b36c-741948bbb427.jpg';
const CAR_PICK     = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/ae60daaf-92af-4dc9-b19d-d7294961fc1b.jpg';

// Hero illustration — gold 3d chart from user screenshot
const HERO_3D = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/bucket/1d46c230-d46f-4aba-99dd-5738c4060f5f.png';
// CTA dark illustration
const CTA_IMG = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/bucket/1f008263-1afc-44ac-bea1-1104112fbc6e.png';

// ─── DATA ───────────────────────────────────────────────────────────────────

const tabs = [
  { id: 'insurance', label: 'Страховые услуги', icon: 'Shield' },
  { id: 'auto',      label: 'Автоуслуги',        icon: 'Car' },
  { id: 'finance',   label: 'Финуслуги',          icon: 'TrendingUp' },
];

const tabServices: Record<string, { icon: string; label: string }[]> = {
  insurance: [
    { icon: 'FileText',   label: 'Полис ОСАГО' },
    { icon: 'Shield',     label: 'Полис КАСКО' },
    { icon: 'Home',       label: 'Страхование ипотеки' },
    { icon: 'Car',        label: 'ОСГОП для такси' },
    { icon: 'Package',    label: 'Страхование имущества' },
    { icon: 'HeartPulse', label: 'Полис ДМС' },
    { icon: 'Trophy',     label: 'Страхование спортсменов' },
    { icon: 'Plane',      label: 'Страхование туристов' },
    { icon: 'Bug',        label: 'Полис «Анти-клещ»' },
    { icon: 'CreditCard', label: 'Полис «Синяя карта»' },
  ],
  auto: [
    { icon: 'ClipboardCheck', label: 'Техосмотр ГИБДД' },
    { icon: 'Hash',           label: 'Дубликаты номеров' },
    { icon: 'DollarSign',     label: 'Выкуп авто' },
    { icon: 'Search',         label: 'Подбор авто' },
    { icon: 'Tag',            label: 'Продажа авто' },
  ],
  finance: [
    { icon: 'PiggyBank',  label: 'Вклады' },
    { icon: 'Calculator', label: 'Налоговый вычет' },
    { icon: 'Briefcase',  label: 'Для бизнеса' },
  ],
};

const advantages = [
  { emoji: '🏅', title: 'Выгодные предложения',     text: 'Скидки и персональные подборы лучших предложений' },
  { emoji: '📊', title: 'Гарантия лучших тарифов',  text: 'Подбираем лучшие тарифы среди доступных предложений' },
  { emoji: '⭐', title: '10+ лет успешной работы',  text: 'Опыт, репутация и высокая оценка клиентов' },
  { emoji: '🤝', title: 'Персональный подход',       text: 'Решение самых сложных вопросов в страховании и оформлении авто' },
  { emoji: '🏆', title: 'Надёжные партнёры',        text: 'Работаем только с проверенными страховыми компаниями' },
];

type Card = {
  tag: string;
  tagColor: string;
  img: string;
  title: string;
  text: string;
  btns: { label: string; primary?: boolean }[];
};

const services: { cards: Card[]; cols: 2 | 3 }[] = [
  // Row 1 — 2 cols
  { cols: 2, cards: [
    {
      tag: 'Хит продаж', tagColor: '#f7941d', img: CAR_SILVER,
      title: 'Техосмотр для ГИБДД',
      text: 'Проверка технического состояния автомобиля — диагностическая карта для ГИБДД в пункте техосмотра, аккредитованном РСА',
      btns: [{ label: 'Записаться на техосмотр', primary: true }],
    },
    {
      tag: 'Лучший тариф', tagColor: '#f7941d', img: CAR_BLUE,
      title: 'ОСАГО от надёжных проверенных страховых компаний',
      text: 'Защитите себя и свой автомобиль уже сейчас. Ваша защита здесь — быстро, надёжно и без хлопот',
      btns: [{ label: 'Заказать расчёт', primary: true }, { label: 'Оформить ОСАГО' }],
    },
  ]},
  // Row 2 — 3 cols
  { cols: 3, cards: [
    {
      tag: 'Защита ипотеки', tagColor: '#f7941d', img: MORTGAGE,
      title: 'Страхование ипотеки',
      text: 'Оформите полис страхования ипотеки — защита вашего жилья и спокойствие семьи',
      btns: [{ label: 'Застраховать ипотеку', primary: true }],
    },
    {
      tag: 'Автовыкуп', tagColor: '#f7941d', img: CAR_DEAL,
      title: 'Выкупим ваш автомобиль быстро и выгодно',
      text: 'Не тратьте время на объявления и встречи. Мы приедем, оформим документы и выкупим автомобиль на понятных и честных условиях',
      btns: [{ label: 'Получить оценку', primary: true }],
    },
    {
      tag: 'ДКП', tagColor: '#f7941d', img: CONTRACT,
      title: 'Оформите сделку с автомобилем без рисков',
      text: 'Оформление договора купли-продажи автомобиля с учётом всех юридических требований для безопасной сделки',
      btns: [{ label: 'Составить договор', primary: true }],
    },
  ]},
  // Row 3 — 2 cols
  { cols: 2, cards: [
    {
      tag: 'Помощь в продаже авто', tagColor: '#f7941d', img: CAR_SILVER,
      title: 'Продажа вашего автомобиля с сопровождением',
      text: 'Поможем продать автомобиль по рыночной цене и сопроводим сделку до её завершения',
      btns: [{ label: 'Продать авто под ключ', primary: true }],
    },
    {
      tag: 'Индивидуальный расчёт', tagColor: '#f7941d', img: CAR_BLUE,
      title: 'КАСКО на выгодных условиях',
      text: 'Ваша машина застрахована от всех рисков: от царапины до угона',
      btns: [{ label: 'Заказать расчёт', primary: true }, { label: 'Оформить КАСКО' }],
    },
  ]},
  // Row 4 — 3 cols
  { cols: 3, cards: [
    {
      tag: 'Вклады', tagColor: '#f7941d', img: PIGGY,
      title: 'Накопите на важное — с защитой ваших сбережений',
      text: 'Накопите на важные цели под защитой — ваши деньги в безопасности, а доход гарантирован',
      btns: [{ label: 'Открыть вклад', primary: true }],
    },
    {
      tag: 'Работа, здоровье', tagColor: '#f7941d', img: DMS,
      title: 'ДМС для работы и для себя',
      text: 'Страхование иностранцев для работы или личный ДМС для лечения в лучших клиниках',
      btns: [{ label: 'Подобрать полис ДМС', primary: true }],
    },
    {
      tag: 'Автоподбор', tagColor: '#f7941d', img: CAR_PICK,
      title: 'Подбор автомобиля под ваш запрос',
      text: 'Подберём автомобиль по бюджету и задачам. Проверим состояние, историю и юридическую чистоту',
      btns: [{ label: 'Подобрать авто', primary: true }],
    },
  ]},
  // Row 5 — 2 cols
  { cols: 2, cards: [
    {
      tag: 'Дубликаты госномеров', tagColor: '#f7941d', img: PLATE,
      title: 'Изготовление госномеров',
      text: 'Изготовление и замена утерянных или повреждённых госномеров с официальным оформлением и быстрой доставкой',
      btns: [{ label: 'Заказать дубликат', primary: true }],
    },
    {
      tag: 'Защита имущества', tagColor: '#f7941d', img: HOUSE,
      title: 'Страхование квартир и домов',
      text: 'Страховка имущества защищает от пожара, залива, кражи — полис дешевле ремонта',
      btns: [{ label: 'Защитить имущество', primary: true }],
    },
  ]},
  // Row 6 — 2 cols (gymnast + icons)
  { cols: 2, cards: [
    {
      tag: 'Для соревнований', tagColor: '#f7941d', img: GYMNAST,
      title: 'Страхование спортсменов',
      text: 'Страховой полис для соревнований защищает от травм, оплачивает лечение и реабилитацию',
      btns: [{ label: 'Оформить защиту', primary: true }],
    },
    {
      tag: '', tagColor: '#f7941d', img: '',
      title: 'Всё для безопасной жизни и финансового благополучия',
      text: 'Инструменты для надёжной защиты и поддержки. Наслаждайтесь жизнью и позаботьтесь о своём будущем заранее',
      btns: [{ label: 'Смотреть все услуги', primary: true }],
    },
  ]},
];

const usefulServices = [
  { title: 'Проверка карты техосмотра',         text: 'Убедитесь в подлинности диагностической карты. Избегайте штрафов и проблем с ГИБДД',            btn: 'Проверить карту' },
  { title: 'Проверка полиса ОСАГО на подлинность', text: 'Проверьте подлинность полиса ОСАГО и наличие страховщика в чёрном списке',                   btn: 'Проверить полис' },
  { title: 'Проверка автомобиля на штрафы',     text: 'Быстро и удобно узнайте о всех неоплаченных штрафах ГИБДД по госномеру автомобиля или СТС',      btn: 'Проверить штрафы' },
];

const lifestyleIcons = ['Globe', 'Heart', 'Stethoscope', 'Heart', 'Wrench', 'ClipboardList'];

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

const OrangeTag = ({ label }: { label: string }) =>
  label ? (
    <span className="absolute right-0 top-0 z-10 rounded-bl-xl bg-[#f7941d] px-3 py-1.5 text-[11px] font-bold text-white">
      {label}
    </span>
  ) : null;

const ServiceCard = ({ card }: { card: Card }) => (
  <div className="flex flex-col overflow-hidden rounded-2xl border border-[#e8edf5] bg-white shadow-sm transition hover:shadow-md">
    <div className="relative">
      {card.img ? (
        <img src={card.img} alt={card.title} className="h-48 w-full object-cover" />
      ) : (
        // Last card with icons like in mockup
        <div className="flex h-48 items-center justify-center gap-3 bg-[#f0f4fa] px-6">
          {['Globe', 'Baby', 'Stethoscope', 'Heart', 'Wrench', 'ClipboardList'].map((ic) => (
            <div key={ic} className="flex h-12 w-12 items-center justify-center">
              <Icon name={ic} size={32} className="text-[#8a9ab5]" />
            </div>
          ))}
        </div>
      )}
      <OrangeTag label={card.tag} />
    </div>
    <div className="flex flex-1 flex-col p-5">
      <h3 className="text-[15px] font-bold leading-snug text-[#1a2a4a]">{card.title}</h3>
      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#6b7a99]"
        dangerouslySetInnerHTML={{ __html: card.text }} />
      <div className="mt-4 flex flex-wrap gap-2">
        {card.btns.map((b) => (
          <button
            key={b.label}
            className={`rounded-md px-5 py-2 text-[13px] font-semibold transition ${
              b.primary
                ? 'bg-[#1a4b8c] text-white hover:bg-[#143a6b]'
                : 'border border-[#1a4b8c] bg-white text-[#1a4b8c] hover:bg-[#1a4b8c] hover:text-white'
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Index() {
  const [activeTab, setActiveTab] = useState('insurance');
  const [product, setProduct] = useState('');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800" style={{ fontFamily: 'Inter, Roboto, sans-serif' }}>

      {/* ═══════════════════ HEADER ═══════════════════ */}
      <header className="border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-3">
          {/* Logo */}
          <a href="#" className="flex shrink-0 items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1a4b8c]">
              <Icon name="ShieldCheck" size={16} className="text-white" />
            </div>
            <div>
              <div className="text-[13px] font-black leading-none tracking-wider text-[#f7941d]">ART-STRAHOVANIE</div>
              <div className="text-[9px] font-medium leading-none tracking-widest text-[#6b7a99]">СТРАХОВОЙ БРОКЕР</div>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            {['Главная', 'Услуги', 'Полезные сервисы', 'Новости', 'Контакты'].map((l) => (
              <a key={l} href="#"
                className={`text-[13px] font-medium transition hover:text-[#f7941d] ${l === 'Услуги' ? 'text-[#f7941d]' : 'text-[#2d3a52]'}`}>
                {l}
              </a>
            ))}
          </nav>

          {/* Phone + socials */}
          <div className="flex shrink-0 items-center gap-3">
            <a href="tel:+79684041985" className="hidden text-[15px] font-bold text-[#1a2a4a] xl:block">
              +7 968 404-19-85
            </a>
            <div className="flex items-center gap-1.5">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4C75A3]"><span className="text-[11px] font-bold text-white">VK</span></a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EE8208]"><span className="text-[11px] font-bold text-white">OK</span></a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2CA5E0]"><Icon name="Send" size={13} className="text-white" /></a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]"><Icon name="MessageCircle" size={13} className="text-white" /></a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a2a4a]"><Icon name="Play" size={13} className="text-white" /></a>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden bg-white">
        {/* Decorative curved gold line SVG bg */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute right-0 top-0 h-full w-1/2 opacity-20" viewBox="0 0 600 500" fill="none">
            <path d="M600 0 Q300 250 400 500" stroke="#f7941d" strokeWidth="1.5" fill="none"/>
            <path d="M550 0 Q250 200 350 500" stroke="#f7941d" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        {/* Side sticky buttons */}
        <div className="absolute right-0 top-8 z-20 hidden flex-col gap-1 xl:flex">
          <a href="#" className="flex w-[82px] flex-col items-center gap-1.5 rounded-l-xl bg-[#1a4b8c] px-2 py-3 text-white shadow-lg transition hover:bg-[#143a6b]">
            <Icon name="Phone" size={20} />
            <span className="text-center text-[9px] font-bold uppercase leading-tight tracking-wide">ЗАДАТЬ<br/>ВОПРОС</span>
          </a>
          <a href="#" className="flex w-[82px] flex-col items-center gap-1.5 rounded-l-xl bg-[#1a4b8c] px-2 py-3 text-white shadow-lg transition hover:bg-[#143a6b]">
            <Icon name="Smartphone" size={20} />
            <span className="text-center text-[9px] font-bold uppercase leading-tight tracking-wide">ОСТАВИТЬ<br/>ЗАЯВКУ</span>
          </a>
        </div>

        <div className="mx-auto grid max-w-[1200px] items-start gap-4 px-6 py-10 lg:grid-cols-[1fr_380px]">
          <div>
            <h1 className="text-[30px] font-black leading-tight text-[#1a2a4a] md:text-[34px]">
              Страхование на все случаи жизни<br />
              Автоуслуги + услуги для ГИБДД<br />
              Финансовые услуги
            </h1>

            {/* Tabs */}
            <div className="mt-6 flex flex-wrap gap-2">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-2 rounded-full border px-5 py-2 text-[13px] font-semibold transition ${
                    activeTab === t.id
                      ? 'border-[#f7941d] bg-[#f7941d] text-white shadow-md'
                      : 'border-[#dde3ef] bg-white text-[#2d3a52] hover:border-[#f7941d] hover:text-[#f7941d]'
                  }`}
                >
                  <Icon name={t.icon} size={14} />
                  {t.label}
                </button>
              ))}
            </div>

            {/* Triangle pointer under active tab */}
            <div className="mt-1 ml-10 h-0 w-0 border-l-[6px] border-r-[6px] border-t-[7px] border-l-transparent border-r-transparent border-t-[#f7941d]" />

            {/* Service tags */}
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {tabServices[activeTab].map((s) => (
                <button
                  key={s.label}
                  className="flex items-center gap-2 rounded-lg border border-[#dde3ef] bg-white px-3 py-2 text-left text-[12px] font-medium text-[#2d3a52] transition hover:border-[#f7941d] hover:text-[#f7941d]"
                >
                  <Icon name={s.icon} size={13} className="shrink-0 text-[#1a4b8c]" />
                  {s.label}
                </button>
              ))}
            </div>

            <button className="mt-6 rounded-lg bg-[#1a4b8c] px-7 py-3 text-[14px] font-bold text-white shadow transition hover:bg-[#143a6b]">
              Получить консультацию
            </button>
          </div>

          {/* Hero 3D image — crop from the screenshot */}
          <div className="hidden lg:block">
            <img
              src={HERO_3D}
              alt="Страхование"
              className="w-full object-contain"
              style={{ maxHeight: 360, objectPosition: 'right top' }}
            />
          </div>
        </div>

        {/* ── Advantages strip ── */}
        <div className="border-t border-[#e8edf5] bg-[#f7f9fc]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 px-6 py-6 md:grid-cols-3 lg:grid-cols-5">
            {advantages.map((a) => (
              <div key={a.title} className="flex items-start gap-2.5">
                <span className="mt-0.5 text-xl">{a.emoji}</span>
                <div>
                  <p className="text-[12px] font-bold text-[#1a2a4a]">{a.title}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-[#6b7a99]">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h2 className="mb-6 text-[26px] font-black text-[#1a2a4a]">Наши услуги</h2>
        <div className="space-y-4">
          {services.map((row, ri) => (
            <div
              key={ri}
              className={`grid gap-4 ${row.cols === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'}`}
            >
              {row.cards.map((card, ci) => (
                <ServiceCard key={ci} card={card} />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ USEFUL SERVICES ═══════════════════ */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h2 className="mb-6 text-[26px] font-black leading-tight text-[#1a2a4a]">
          Полезные сервисы<br />для автовладельцев
        </h2>

        {/* Oval/pill outline wrapper like in mockup */}
        <div className="relative rounded-3xl border border-[#e0e7f5] bg-[#f7f9fc] px-6 py-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {usefulServices.map((u) => (
              <div key={u.title}>
                <h3 className="text-[14px] font-bold text-[#1a2a4a]">{u.title}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-[#6b7a99]">{u.text}</p>
                <button className="mt-3 rounded-md border border-[#c8d5ea] bg-white px-4 py-2 text-[12px] font-semibold text-[#2d3a52] transition hover:border-[#f7941d] hover:text-[#f7941d]">
                  {u.btn}
                </button>
              </div>
            ))}
          </div>

          {/* Navigation arrows + dot */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c8d5ea] text-[#6b7a99] hover:border-[#f7941d] hover:text-[#f7941d]">
              <Icon name="ChevronLeft" size={14} />
            </button>
            <span className="h-2 w-2 rounded-full bg-[#f7941d]" />
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c8d5ea] text-[#6b7a99] hover:border-[#f7941d] hover:text-[#f7941d]">
              <Icon name="ChevronRight" size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left: text + form */}
          <div>
            <h2 className="text-[28px] font-black leading-tight text-[#1a2a4a] md:text-[32px]">
              Ваше спокойствие — наша<br />работа! Получите решение<br />под ключ
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-[#6b7a99]">
              Подберём лучшие предложения по всем видам страхования. Оформим документы для ГИБДД. Надёжные страховые партнёры, аккредитованные станции ТО. Гарантия лучшей цены, официальное оформление и полное сопровождение — для вашей уверенности и экономии
            </p>
            <div className="mt-5 rounded-2xl border border-[#e0e7f5] bg-white p-5 shadow-sm">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <input
                  placeholder="Ваш телефон *"
                  className="w-full border-b border-[#dde3ef] pb-2 text-[13px] text-gray-700 outline-none placeholder-[#9aa5bc] focus:border-[#1a4b8c]"
                />
                <div className="relative">
                  <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full appearance-none border-b border-[#dde3ef] bg-white pb-2 text-[13px] text-[#9aa5bc] outline-none focus:border-[#1a4b8c]"
                  >
                    <option value="">Выберите интересующий продукт *</option>
                    <option>ОСАГО</option>
                    <option>КАСКО</option>
                    <option>Техосмотр</option>
                    <option>ДМС</option>
                    <option>Страхование ипотеки</option>
                  </select>
                  <Icon name="ChevronDown" size={14} className="absolute right-0 top-1 text-[#9aa5bc]" />
                </div>
                <label className="flex items-center gap-2 text-[11px] text-[#9aa5bc]">
                  <input type="checkbox" className="h-3 w-3 rounded border-[#c8d5ea]" />
                  Я согласен на обработку персональных данных
                </label>
                <button className="w-full rounded-md bg-[#1a4b8c] py-3 text-[13px] font-bold text-white transition hover:bg-[#143a6b]">
                  Оставить заявку
                </button>
              </form>
            </div>
          </div>

          {/* Right: dark illustration */}
          <div className="relative">
            {/* 24/7 badge */}
            <div className="absolute -left-4 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white shadow-xl" style={{ width: 80, height: 80 }}>
              <Icon name="Radio" size={20} className="text-[#f7941d]" />
              <span className="text-[14px] font-black text-[#1a2a4a] leading-none">24/7</span>
              <span className="text-[9px] text-[#6b7a99]">Поддержка</span>
            </div>
            <img
              src={CTA_IMG}
              alt="Страховые решения"
              className="w-full rounded-2xl object-cover shadow-lg"
              style={{ maxHeight: 400 }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════ NEWS placeholder ═══════════════════ */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h2 className="mb-6 text-[22px] font-black text-[#1a2a4a]">Новости</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { tag: 'Новый сервис', img: CAR_BLUE, title: 'РСА определил регион с самой высокой стоимостью полиса ОСАГО', text: 'Российский союз автостраховщиков опубликовал данные по средней стоимости полиса ОСАГО по регионам страны.', btn: 'Узнать стоимость' },
            { tag: '', img: '', title: 'Когда в России начнётся реформа таксистов по ОСАГО', text: 'Реформа ОСАГО для такси планируется к запуску в ближайшие месяцы и изменит правила для водителей.', btn: 'Подробнее о реформе' },
            { tag: '', img: '', title: 'По итогам II квартала 2025 года средняя стоимость ОСАГО снизилась', text: 'Эксперты отмечают снижение средней стоимости полиса ОСАГО по итогам второго квартала года.', btn: 'Читать новость' },
          ].map((n, i) => (
            <article key={i} className="flex flex-col overflow-hidden rounded-2xl border border-[#e8edf5] bg-white shadow-sm transition hover:shadow-md">
              {n.img ? (
                <div className="relative">
                  <img src={n.img} alt={n.title} className="h-40 w-full object-cover" />
                  {n.tag && <span className="absolute right-0 top-0 rounded-bl-xl bg-[#f7941d] px-3 py-1 text-[11px] font-bold text-white">{n.tag}</span>}
                </div>
              ) : (
                <div className="h-40 bg-[#f0f4fa]" />
              )}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-[13px] font-bold leading-snug text-[#1a2a4a]">{n.title}</h3>
                <p className="mt-2 flex-1 text-[12px] leading-relaxed text-[#6b7a99]">{n.text}</p>
                <button className="mt-3 self-start rounded-md border border-[#f7941d] px-4 py-1.5 text-[12px] font-semibold text-[#f7941d] transition hover:bg-[#f7941d] hover:text-white">
                  {n.btn}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="bg-[#1b2b45] text-white">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_220px]">
          {[
            { title: 'Страховые услуги', links: ['Е-ОСАГО', 'Е-КАСКО', 'ОСАГО юр.лицам', 'Страхование жизни', 'Страхование ипотеки', 'Страхование квартиры', 'Страхование туристов', 'Страхование спортсменов'] },
            { title: 'Автоуслуги',       links: ['Техосмотр для ГИБДД', 'Дубликаты номеров', 'Выкуп авто', 'Подбор авто', 'Продажа авто', 'Договор купли-продажи'] },
            { title: 'Финансовые услуги', links: ['Вклады и накопления', 'ДМС', 'Налоговый вычет', 'Для бизнеса'] },
          ].map((col) => (
            <div key={col.title}>
              <p className="mb-3 text-[13px] font-bold text-white">{col.title}</p>
              <ul className="space-y-1.5">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-[12px] text-white/55 transition hover:text-[#f7941d]">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-[22px] font-black text-white">+7 968 404-19-85</p>
            <p className="mt-1 text-[11px] text-white/45">График работы: 9:00–21:00</p>
            <div className="mt-3 space-y-1 text-[11px] text-white/55">
              <p>Москва, ул. Новая, 10, офис 12</p>
              <p>Москва, Зеленоград, корп. 311</p>
              <p>МО, Красногорск, кв-л 12, д. 50А</p>
            </div>
            <div className="mt-4 flex gap-2">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4C75A3]"><span className="text-[10px] font-bold text-white">VK</span></a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EE8208]"><span className="text-[10px] font-bold text-white">OK</span></a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2CA5E0]"><Icon name="Send" size={13} className="text-white" /></a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]"><Icon name="MessageCircle" size={13} className="text-white" /></a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#333]"><Icon name="Play" size={13} className="text-white" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-6 text-[11px] text-white/35 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#1a4b8c]">
                <Icon name="ShieldCheck" size={12} className="text-white" />
              </div>
              <span>© {new Date().getFullYear()} ART-STRAHOVANIE. Все права защищены.</span>
            </div>
            <a href="#" className="transition hover:text-white/60">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

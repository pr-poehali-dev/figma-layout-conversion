import { useState } from 'react';
import Icon from '@/components/ui/icon';

const CAR_SILVER = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/0ed7aafe-2aab-41e2-accb-b7593256287c.jpg';
const CAR_BLUE = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/c9219084-8f20-44ee-863e-c4354a7eeacc.jpg';
const PIGGY = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/42350838-b2dc-4317-8385-32176281a0c3.jpg';
const HOUSE = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/e5dabc52-475e-4fc1-8c7a-c1558415901f.jpg';
const PLATE = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/8eba721b-8fa1-486a-aa77-1875599bebf8.jpg';

const tabs = [
  { id: 'insurance', label: 'Страховые услуги', icon: 'Shield' },
  { id: 'auto', label: 'Автоуслуги', icon: 'Car' },
  { id: 'finance', label: 'Финансуслуги', icon: 'TrendingUp' },
];

const tabServices: Record<string, { icon: string; label: string }[]> = {
  insurance: [
    { icon: 'FileText', label: 'Полис ОСАГО' },
    { icon: 'Shield', label: 'Полис КАСКО' },
    { icon: 'Home', label: 'Страхование ипотеки' },
    { icon: 'Car', label: 'ОСГОП для такси' },
    { icon: 'Package', label: 'Страхование имущества' },
    { icon: 'HeartPulse', label: 'Полис ДМС' },
    { icon: 'Trophy', label: 'Страхование спортсменов' },
    { icon: 'Plane', label: 'Страхование туристов' },
    { icon: 'Bug', label: 'Полис «Анти-клещ»' },
    { icon: 'CreditCard', label: 'Полис «Синяя карта»' },
  ],
  auto: [
    { icon: 'ClipboardCheck', label: 'Техосмотр ГИБДД' },
    { icon: 'Hash', label: 'Дубликаты номеров' },
    { icon: 'DollarSign', label: 'Выкуп авто' },
    { icon: 'Search', label: 'Подбор авто' },
    { icon: 'Tag', label: 'Продажа авто' },
  ],
  finance: [
    { icon: 'PiggyBank', label: 'Накопить на пенсию' },
    { icon: 'Calculator', label: 'Налоговый вычет' },
    { icon: 'Briefcase', label: 'Всё для бизнеса' },
  ],
};

const advantages = [
  { icon: '⭐', title: 'Выгодные предложения', text: 'Скидки и персональные подборы лучших предложений' },
  { icon: '🏆', title: 'Гарантия лучших тарифов', text: 'Подбираем лучшие тарифы среди доступных предложений' },
  { icon: '⭐', title: '10+ лет успешной работы', text: 'Опыт, репутация и высокая оценка клиентов' },
  { icon: '🤝', title: 'Персональный подход', text: 'Решение самых сложных вопросов в страховании и оформлении авто' },
  { icon: '🤝', title: 'Надёжные партнёры', text: 'Работаем только с проверенными страховыми компаниями' },
];

type Card = {
  tag: string;
  tagColor?: string;
  img?: string;
  icon?: string;
  iconBg?: string;
  title: string;
  text: string;
  btn: string;
};

const row1: Card[] = [
  {
    tag: 'Хит продаж', tagColor: 'bg-[#f7941d]',
    img: CAR_SILVER,
    title: 'Техосмотр для ГИБДД',
    text: 'Проведём техосмотр для любого автомобиля. Оформим диагностическую карту и отправим полис в страховую.',
    btn: 'Записать на техосмотр',
  },
  {
    tag: 'Онлайн сейчас', tagColor: 'bg-[#f7941d]',
    img: CAR_BLUE,
    title: 'ОСАГО от ведущих страховых компаний',
    text: 'Подберём выгодный полис ОСАГО за 5 минут онлайн. Сравним предложения ведущих страховых компаний.',
    btn: 'Оформить ОСАГО',
  },
];

const row2: Card[] = [
  {
    tag: 'Онлайн сейчас', tagColor: 'bg-[#f7941d]',
    icon: 'KeyRound', iconBg: 'bg-[#eef3fb]',
    title: 'Страхование ипотеки',
    text: 'Оформление страховки для ипотеки быстро и недорого. Подберём программу под условия вашего банка.',
    btn: 'Заказать полис',
  },
  {
    tag: 'Быстро', tagColor: 'bg-[#f7941d]',
    icon: 'HandCoins', iconBg: 'bg-[#fff8ee]',
    title: 'Выкупим ваш автомобиль быстро и выгодно',
    text: 'Оценим и выкупим авто по выгодной цене за один день. Оформим все документы самостоятельно.',
    btn: 'Оставить заявку',
  },
  {
    tag: 'Онлайн', tagColor: 'bg-[#f7941d]',
    icon: 'FileSignature', iconBg: 'bg-[#eef3fb]',
    title: 'Оформить услугу без лишних визитов',
    text: 'Все документы оформляем дистанционно. Без поездок в офис и очередей. Доставим курьером.',
    btn: 'Оставить договор',
  },
];

const row3: Card[] = [
  {
    tag: 'Авто с пробегом', tagColor: 'bg-[#1a4b8c]',
    img: CAR_SILVER,
    title: 'Продажа автомобиля с сопровождением',
    text: 'Поможем продать автомобиль с юридическим сопровождением и полной проверкой документов.',
    btn: 'Узнать об услуге',
  },
  {
    tag: 'Выгодно', tagColor: 'bg-[#1a4b8c]',
    img: CAR_BLUE,
    title: 'КАСКО на выгодных условиях',
    text: 'Защитите автомобиль от угона, ДТП и повреждений по лучшей цене от проверенных страховщиков.',
    btn: 'Оформить КАСКО',
  },
];

const row4: Card[] = [
  {
    tag: 'Накопления', tagColor: 'bg-[#f7941d]',
    img: PIGGY,
    title: 'Накопить на пенсию — защита ваших сбережений',
    text: 'Накопительные программы с гарантированной доходностью и страховой защитой вашего капитала.',
    btn: 'Сделать вклад',
  },
  {
    tag: 'Здоровье', tagColor: 'bg-[#f7941d]',
    icon: 'Stethoscope', iconBg: 'bg-[#fff3f3]',
    title: 'ДМС для работы и для себя',
    text: 'Добровольное медицинское страхование с широким покрытием для сотрудников и всей семьи.',
    btn: 'Подробнее о ДМС',
  },
  {
    tag: 'Автоподбор', tagColor: 'bg-[#f7941d]',
    img: CAR_SILVER,
    title: 'Подбор автомобиля под ключ',
    text: 'Подберём авто под ваш бюджет, проверим юридическую и техническую историю, оформим покупку.',
    btn: 'Подобрать авто',
  },
];

const row5: Card[] = [
  {
    tag: 'Дубликаты номеров', tagColor: 'bg-[#f7941d]',
    img: PLATE,
    title: 'Изготовление дубликатов госномеров',
    text: 'Изготовим дубликат номерного знака официально за 15 минут. Соответствие ГОСТ гарантировано.',
    btn: 'Заказать дубликат',
  },
  {
    tag: 'Защита имущества', tagColor: 'bg-[#f7941d]',
    img: HOUSE,
    title: 'Страхование квартиры и загородного дома',
    text: 'Страхование защитит ваш дом от пожара, залива, кражи и других рисков. Быстрые выплаты.',
    btn: 'Защитить имущество',
  },
];

const row6: Card[] = [
  {
    tag: 'Для всей семьи', tagColor: 'bg-[#f7941d]',
    icon: 'Baby', iconBg: 'bg-[#eef3fb]',
    title: 'Страхование от несчастных случаев',
    text: 'Страховой полис для всей семьи обеспечит защиту от травм, болезней и непредвиденных ситуаций.',
    btn: 'Оформить защиту',
  },
  {
    tag: 'Для бизнеса', tagColor: 'bg-[#f7941d]',
    icon: 'Building2', iconBg: 'bg-[#f5f5f5]',
    title: 'Всё для вашего бизнеса — оборудование и ответственность',
    text: 'Полный спектр страховых услуг для компаний: имущество, ответственность, сотрудники.',
    btn: 'Смотреть все услуги',
  },
];

const usefulServices = [
  { icon: 'ClipboardList', title: 'Проверка карты техосмотра', text: 'Узнайте, действует ли диагностическая карта вашего авто в базе ГИБДД.', btn: 'Проверить карту' },
  { icon: 'FileSearch', title: 'Проверка полиса ОСАГО на подлинность', text: 'Проверьте подлинность и статус полиса ОСАГО в официальной базе РСА.', btn: 'Проверить полис' },
  { icon: 'AlertCircle', title: 'Проверка штрафов на дорогах', text: 'Узнайте о неоплаченных штрафах по госномеру автомобиля или СТС.', btn: 'Проверить штрафы' },
];

const ctaIcons = ['Plane', 'Home', 'Car', 'Users', 'Smartphone', 'PiggyBank', 'HeartPulse', 'ShieldCheck'];

const newsItems = [
  {
    tag: 'Новый сервис', img: CAR_BLUE,
    title: 'РСА определил регион с самой высокой стоимостью полиса ОСАГО',
    text: 'Российский союз автостраховщиков опубликовал данные по регионам с самой высокой и низкой стоимостью полиса ОСАГО на текущий год.',
    btn: 'Узнать стоимость',
  },
  {
    title: 'Когда в России начнётся реформа таксистов по ОСАГО',
    text: 'Реформа ОСАГО для такси планируется к запуску в ближайшие месяцы и изменит правила оформления полиса для водителей-таксистов.',
    btn: 'Подробнее о реформе',
  },
  {
    title: 'По итогам II квартала 2025 года средняя стоимость ОСАГО снизилась',
    text: 'Эксперты отмечают снижение средней стоимости полиса ОСАГО по итогам второго квартала текущего года по всей России.',
    btn: 'Читать новость',
  },
];

const footerCols = [
  {
    title: 'Страховые услуги',
    links: ['Е-ОСАГО', 'Е-КАСКО', 'ОСАГО юр.лицам', 'Страхование жизни', 'Страхование ипотеки', 'Страхование квартиры', 'Страхование грузов', 'Страхование туристов'],
  },
  {
    title: 'Автоуслуги',
    links: ['Техосмотр для ГИБДД', 'Дубликаты номеров', 'Выкуп авто', 'Подбор авто', 'Продажа авто с пробегом'],
  },
  {
    title: 'Финансовые услуги',
    links: ['Накопить на пенсию', 'ДМС', 'Налоговый вычет', 'Для бизнеса'],
  },
];

const socials = [
  { color: '#4C75A3', icon: 'Users' },
  { color: '#EE8208', icon: 'Circle' },
  { color: '#2CA5E0', icon: 'Send' },
  { color: '#25D366', icon: 'MessageCircle' },
  { color: '#FF0000', icon: 'Play' },
];

const Tag = ({ label, color = 'bg-[#f7941d]' }: { label: string; color?: string }) => (
  <span className={`${color} absolute left-0 top-0 rounded-br-lg px-3 py-1 text-[11px] font-bold text-white z-10`}>
    {label}
  </span>
);

const ServiceCard = ({ card }: { card: Card }) => (
  <div className="relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
    <div className="relative">
      {card.img ? (
        <img src={card.img} alt={card.title} className="h-44 w-full object-cover" />
      ) : (
        <div className={`flex h-44 w-full items-center justify-center ${card.iconBg ?? 'bg-gray-100'}`}>
          <Icon name={card.icon!} size={60} className="text-[#1a4b8c] opacity-25" />
        </div>
      )}
      <Tag label={card.tag} color={card.tagColor} />
    </div>
    <div className="flex flex-1 flex-col p-4">
      <h3 className="text-[14px] font-bold leading-snug text-[#1a2a4a]">{card.title}</h3>
      <p className="mt-2 flex-1 text-[12px] leading-relaxed text-gray-500">{card.text}</p>
      <button className="mt-4 self-start rounded border-2 border-[#f7941d] px-4 py-1.5 text-[12px] font-semibold text-[#f7941d] transition hover:bg-[#f7941d] hover:text-white">
        {card.btn}
      </button>
    </div>
  </div>
);

const Grid2 = ({ cards }: { cards: Card[] }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {cards.map((c, i) => <ServiceCard key={i} card={c} />)}
  </div>
);

const Grid3 = ({ cards }: { cards: Card[] }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {cards.map((c, i) => <ServiceCard key={i} card={c} />)}
  </div>
);

export default function Index() {
  const [activeTab, setActiveTab] = useState('insurance');

  return (
    <div className="min-h-screen bg-white font-sans text-sm text-gray-800">

      {/* ── HEADER ── */}
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between gap-4 py-2.5">
          {/* Logo */}
          <div className="flex shrink-0 items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-[#1a4b8c]">
              <Icon name="ShieldCheck" size={20} className="text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-[10px] font-black tracking-widest text-[#f7941d]">АТ</div>
              <div className="text-[11px] font-black leading-none tracking-wider text-[#1a4b8c]">СТРАХОВАНИЕ</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            {['Главная', 'Услуги', 'Полезные сервисы', 'Новости', 'Контакты'].map((l) => (
              <a key={l} href="#" className="text-[13px] font-medium text-gray-700 transition hover:text-[#f7941d]">{l}</a>
            ))}
          </nav>

          {/* Phone + socials */}
          <div className="flex shrink-0 items-center gap-3">
            <a href="tel:+79684041985" className="hidden text-[14px] font-bold text-[#1a4b8c] md:block">
              +7 968 404-19-85
            </a>
            <div className="flex items-center gap-1">
              {socials.map((s, i) => (
                <a key={i} href="#"
                  style={{ backgroundColor: s.color }}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white transition hover:opacity-80">
                  <Icon name={s.icon} size={12} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative bg-white">
        {/* Floating side buttons */}
        <div className="absolute right-0 top-6 z-20 hidden flex-col gap-2 xl:flex">
          <a href="#" className="flex w-[88px] flex-col items-center gap-1.5 rounded-l-xl bg-[#1a4b8c] px-3 py-3 text-center text-white shadow-lg transition hover:bg-[#143a6b]">
            <Icon name="MessageCircle" size={22} />
            <span className="text-[10px] font-bold uppercase leading-tight">Задать<br />вопрос</span>
          </a>
          <a href="#" className="flex w-[88px] flex-col items-center gap-1.5 rounded-l-xl bg-[#f7941d] px-3 py-3 text-center text-white shadow-lg transition hover:bg-[#e07c0a]">
            <Icon name="Phone" size={22} />
            <span className="text-[10px] font-bold uppercase leading-tight">Оставить<br />заявку</span>
          </a>
        </div>

        <div className="container mx-auto py-8">
          <div className="grid items-start gap-6 lg:grid-cols-[1fr_280px]">
            {/* Left content */}
            <div>
              <h1 className="text-[26px] font-black leading-tight text-[#1a2a4a] md:text-[30px]">
                Страхование на все случаи жизни<br />
                Автоуслуги + услуги для ГИБДД<br />
                Финансовые услуги
              </h1>

              {/* Tab buttons */}
              <div className="mt-5 flex flex-wrap gap-2">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-semibold transition ${
                      activeTab === t.id
                        ? 'bg-[#f7941d] text-white shadow'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Icon name={t.icon} size={14} />
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Service links grid */}
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4">
                {tabServices[activeTab].map((s) => (
                  <button
                    key={s.label}
                    className="flex items-center gap-2 rounded border border-gray-200 bg-white px-3 py-2 text-left text-[12px] font-medium text-gray-700 transition hover:border-[#f7941d] hover:text-[#f7941d]"
                  >
                    <Icon name={s.icon} size={13} className="shrink-0 text-[#f7941d]" />
                    {s.label}
                  </button>
                ))}
              </div>

              <button className="mt-5 rounded-md bg-[#1a4b8c] px-7 py-3 text-[14px] font-bold text-white transition hover:bg-[#143a6b]">
                Получить консультацию
              </button>
            </div>

            {/* Right: gold illustration */}
            <div className="hidden lg:block">
              <div className="relative h-[260px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#faf0d0] via-[#f5d878] to-[#c8971c]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-50">
                  <Icon name="TrendingUp" size={90} className="text-yellow-800" />
                  <Icon name="Shield" size={55} className="text-yellow-900" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ADVANTAGES STRIP ── */}
        <div className="border-t border-gray-100 bg-[#f7f8fa]">
          <div className="container mx-auto py-5">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {advantages.map((a) => (
                <div key={a.title} className="flex items-start gap-2">
                  <span className="mt-0.5 text-lg leading-none">{a.icon}</span>
                  <div>
                    <p className="text-[12px] font-bold text-[#1a2a4a]">{a.title}</p>
                    <p className="text-[11px] leading-snug text-gray-500">{a.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="container mx-auto py-10">
        <h2 className="mb-5 text-[22px] font-black text-[#1a2a4a]">Наши услуги</h2>
        <div className="space-y-4">
          <Grid2 cards={row1} />
          <Grid3 cards={row2} />
          <Grid2 cards={row3} />
          <Grid3 cards={row4} />
          <Grid2 cards={row5} />
          <Grid2 cards={row6} />
        </div>
      </section>

      {/* ── USEFUL SERVICES ── */}
      <section className="bg-[#f7f8fa]">
        <div className="container mx-auto py-10">
          <h2 className="mb-5 text-[22px] font-black leading-tight text-[#1a2a4a]">
            Полезные сервисы<br />для автовладельцев
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {usefulServices.map((u) => (
              <div key={u.title} className="rounded-xl bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef3fb]">
                  <Icon name={u.icon} size={20} className="text-[#1a4b8c]" />
                </div>
                <h3 className="text-[13px] font-bold text-[#1a2a4a]">{u.title}</h3>
                <p className="mt-1 text-[12px] leading-relaxed text-gray-500">{u.text}</p>
                <button className="mt-3 rounded border-2 border-[#f7941d] px-4 py-1.5 text-[12px] font-semibold text-[#f7941d] transition hover:bg-[#f7941d] hover:text-white">
                  {u.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1a4b8c] text-white">
        <div className="container mx-auto grid gap-8 py-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-[20px] font-black leading-snug md:text-[24px]">
              Ваше спокойствие — наша<br />работа! Получите решение<br />под ключ
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-white/70">
              Оставьте заявку — мы свяжемся с вами в течение 15 минут, подберём оптимальное решение и оформим всё за вас без лишних визитов.
            </p>
            <form className="mt-5 max-w-sm space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                placeholder="Ваше имя"
                className="w-full rounded-md bg-white/10 px-4 py-3 text-[13px] text-white placeholder-white/50 outline-none ring-1 ring-white/20 focus:ring-white/60"
              />
              <input
                placeholder="Телефон"
                className="w-full rounded-md bg-white/10 px-4 py-3 text-[13px] text-white placeholder-white/50 outline-none ring-1 ring-white/20 focus:ring-white/60"
              />
              <button className="w-full rounded-md bg-[#f7941d] py-3 text-[13px] font-bold text-white transition hover:bg-[#e07c0a]">
                Оставить заявку
              </button>
            </form>
          </div>

          {/* Icon grid with 24/7 */}
          <div className="relative">
            <div className="absolute -top-5 left-2 z-10 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f7941d] text-white shadow-xl">
              <span className="text-[14px] font-black leading-none">24/7</span>
              <span className="text-[9px] leading-tight">Поддержка</span>
            </div>
            <div className="mt-10 grid grid-cols-4 gap-3">
              {ctaIcons.map((ic) => (
                <div key={ic} className="flex h-14 w-full items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20">
                  <Icon name={ic} size={26} className="text-white/60" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="container mx-auto py-10">
        <h2 className="mb-5 text-[22px] font-black text-[#1a2a4a]">Новости</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {newsItems.map((n, i) => (
            <article key={i} className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
              {n.img && (
                <div className="relative">
                  <img src={n.img} alt={n.title} className="h-40 w-full object-cover" />
                  {n.tag && (
                    <span className="absolute left-0 top-0 rounded-br-lg bg-[#f7941d] px-3 py-1 text-[11px] font-bold text-white">
                      {n.tag}
                    </span>
                  )}
                </div>
              )}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-[13px] font-bold leading-snug text-[#1a2a4a]">{n.title}</h3>
                <p className="mt-2 flex-1 text-[12px] leading-relaxed text-gray-500">{n.text}</p>
                <button className="mt-3 self-start rounded border-2 border-[#f7941d] px-4 py-1.5 text-[12px] font-semibold text-[#f7941d] transition hover:bg-[#f7941d] hover:text-white">
                  {n.btn}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1b2b45] text-white/75">
        <div className="container mx-auto grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_220px]">
          {footerCols.map((col) => (
            <div key={col.title}>
              <p className="mb-3 text-[13px] font-bold text-white">{col.title}</p>
              <ul className="space-y-1.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[12px] text-white/60 transition hover:text-[#f7941d]">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contacts */}
          <div>
            <p className="text-[22px] font-black text-white">+7 968 404-19-85</p>
            <p className="mt-1 text-[11px] text-white/50">График работы: 9:00–21:00</p>
            <div className="mt-3 space-y-1 text-[11px] text-white/55">
              <p>Москва, ул. Новая, 10, офис 12</p>
              <p>Москва, Зеленоград, корп. 311</p>
              <p>МО, Красногорск, кв-л 12, д. 50А</p>
            </div>
            <div className="mt-4 flex gap-2">
              {socials.map((s, i) => (
                <a key={i} href="#"
                  style={{ backgroundColor: s.color }}
                  className="flex h-7 w-7 items-center justify-center rounded-full transition hover:opacity-80">
                  <Icon name={s.icon} size={12} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4">
          <div className="container mx-auto flex flex-col items-center justify-between gap-2 text-[11px] text-white/35 sm:flex-row">
            <span>© {new Date().getFullYear()} АТ-Страхование. Все права защищены.</span>
            <a href="#" className="transition hover:text-white/60">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

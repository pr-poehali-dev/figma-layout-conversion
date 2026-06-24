import Icon from '@/components/ui/icon';

const HERO_BG = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/d82b9054-de02-4138-8cb6-4cb8552407a6.jpg';
const CAR_SILVER = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/0ed7aafe-2aab-41e2-accb-b7593256287c.jpg';
const CAR_BLUE = 'https://cdn.poehali.dev/projects/2ecd8944-7fa5-4679-ab02-535fe14a7733/files/c9219084-8f20-44ee-863e-c4354a7eeacc.jpg';

const navLinks = ['Главная', 'Услуги', 'Полезные сервисы', 'Новости', 'Контакты'];

const heroServices = [
  'Е-ОСАГО', 'Е-КАСКО', 'Страхование жизни', 'ОСАГО юр.лицам',
  'Страхование грузов', 'Полис ДГО', 'Спецтехника', 'ОСАГО на месте',
  'Полис «Мигрант»', 'Налоговый вычет',
];

const advantages = [
  { icon: 'Award', title: '15 лет успешной работы', text: 'Создаём решения, доступные каждому, и помогаем выбрать лучшие условия' },
  { icon: 'UserCheck', title: 'Персональный подход', text: 'С каждым клиентом работаем индивидуально и оформляем выгодно' },
  { icon: 'ShieldCheck', title: 'Надёжные партнёры', text: 'Сотрудничаем только с проверенными страховыми компаниями' },
];

const services = [
  { tag: 'Хит продаж', img: CAR_SILVER, title: 'Техосмотр для ГИБДД', text: 'Проведём, оформим, доставим. Работаем с любыми авто.', btn: 'Записаться на техосмотр' },
  { tag: 'Лучшая цена', img: CAR_BLUE, title: 'ОСАГО от ведущих страховых', text: 'Подберём выгодный полис ОСАГО за 5 минут онлайн.', btn: 'Оформить ОСАГО' },
  { tag: 'Выгодно', icon: 'Banknote', title: 'Страхование ипотеки', text: 'Оформим страховку для ипотеки быстро и недорого.', btn: 'Заказать полис' },
  { tag: 'Быстро', icon: 'FileText', title: 'Выкупим ваш автомобиль', text: 'Оценим и выкупим авто по выгодной цене за один день.', btn: 'Получить оценку' },
  { tag: 'Удобно', icon: 'Car', title: 'Оформим услугу без визитов', text: 'Все документы оформляем дистанционно, без поездок.', btn: 'Заказать звонок' },
  { tag: 'Новинка', img: CAR_SILVER, title: 'Продажа авто с пробегом', text: 'Поможем продать автомобиль с полным сопровождением.', btn: 'Узнать об услуге' },
  { tag: 'Топ выбор', img: CAR_BLUE, title: 'КАСКО на выгодных условиях', text: 'Защитите авто от любых рисков по лучшей цене.', btn: 'Оформить КАСКО' },
  { tag: 'Экономия', icon: 'PiggyBank', title: 'Накопить на пенсию', text: 'Программы накопления с гарантированной доходностью.', btn: 'Заказать звонок' },
  { tag: 'Здоровье', icon: 'HeartPulse', title: 'ДМС для работы и для себя', text: 'Добровольное медицинское страхование с широким покрытием.', btn: 'Подробнее о ДМС' },
  { tag: 'Автоподбор', img: CAR_SILVER, title: 'Подбор автомобиля под ключ', text: 'Найдём и проверим автомобиль вашей мечты.', btn: 'Подобрать авто' },
  { tag: 'Документы', icon: 'CreditCard', title: 'Дубликаты госномеров', text: 'Изготовим дубликаты номеров официально за 15 минут.', btn: 'Заказать дубликат' },
  { tag: 'Для жизни', icon: 'Home', title: 'Страхование квартиры и дома', text: 'Защитим имущество от пожара, залива и других рисков.', btn: 'Защитить имущество' },
  { tag: 'Для семьи', icon: 'Users', title: 'Страхование от несчастных случаев', text: 'Финансовая защита для вас и вашей семьи.', btn: 'Оформить защиту', wide: true },
  { tag: 'Бизнес', icon: 'Briefcase', title: 'Всё для бизнеса', text: 'Полный спектр страховых услуг для компаний.', btn: 'Смотреть все услуги' },
];

const usefulServices = [
  { title: 'Проверка карты техосмотра', text: 'Узнайте, действует ли диагностическая карта в базе ГИБДД.', btn: 'Проверить карту' },
  { title: 'Проверка полиса ОСАГО', text: 'Проверьте подлинность полиса ОСАГО в базе РСА.', btn: 'Проверить полис' },
  { title: 'Проверка штрафов', text: 'Узнайте о неоплаченных штрафах по номеру авто или СТС.', btn: 'Проверить штрафы' },
];

const news = [
  { tag: 'Новый сервис', img: CAR_BLUE, title: 'РСА определил регион с самой высокой стоимостью полиса ОСАГО', text: 'Российский союз автостраховщиков опубликовал данные по регионам с самой высокой и низкой стоимостью полиса.', btn: 'Узнать стоимость' },
  { title: 'Когда в России начнётся реформа лизинга по ОСАГО', text: 'Реформа ОСАГО планируется к запуску в ближайшие месяцы и изменит правила оформления полиса.', btn: 'Подробнее о реформе' },
  { title: 'По итогам II квартала 2025 года средняя премия по ОСАГО снизилась', text: 'Эксперты отмечают снижение средней стоимости полиса ОСАГО по итогам квартала.', btn: 'Читать новость' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Top Header */}
      <header className="bg-brand text-white">
        <div className="container mx-auto flex items-center justify-between gap-6 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-orange text-white font-black">S</div>
            <span className="text-sm font-bold tracking-wide">STRAHOVANIE</span>
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            {navLinks.map((l) => (
              <a key={l} href="#" className="opacity-90 transition hover:opacity-100 hover:text-orange">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+79684041985" className="hidden sm:block text-sm font-bold">+7 968 404-19-85</a>
            <div className="flex items-center gap-2">
              {['MessageCircle', 'Send', 'Phone'].map((i) => (
                <span key={i} className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <Icon name={i} size={14} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-brand text-white">
        <div className="container mx-auto grid gap-6 py-10 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl font-black leading-tight md:text-4xl">
              Страхование на все случаи жизни
            </h1>
            <p className="mt-3 text-lg text-orange font-medium">
              Автоуслуги + услуги для ГИБДД<br />Финансовые услуги
            </p>
            <button className="mt-6 rounded-md bg-orange px-6 py-3 font-bold text-white shadow-lg transition hover:bg-orange-dark hover:scale-105">
              Получить консультацию
            </button>

            <div className="mt-6 flex flex-wrap gap-2">
              {heroServices.map((s) => (
                <span key={s} className="rounded-md bg-white/10 px-3 py-1.5 text-xs transition hover:bg-orange cursor-pointer">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={HERO_BG} alt="Финансовый рост" className="w-full rounded-xl object-cover shadow-2xl" />
          </div>
        </div>

        {/* Advantages strip */}
        <div className="bg-brand-dark/40">
          <div className="container mx-auto grid gap-6 py-6 md:grid-cols-3">
            {advantages.map((a) => (
              <div key={a.title} className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange">
                  <Icon name={a.icon} size={20} />
                </span>
                <div>
                  <p className="font-bold text-sm">{a.title}</p>
                  <p className="text-xs text-white/70">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto py-12">
        <h2 className="mb-8 text-2xl font-black text-brand md:text-3xl">Наши услуги</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <article
              key={idx}
              className={`group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl hover:-translate-y-1 ${s.wide ? 'lg:col-span-1' : ''}`}
            >
              <div className="relative flex h-40 items-center justify-center bg-slate-100">
                {s.img ? (
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
                ) : (
                  <Icon name={s.icon!} size={56} className="text-brand/30" />
                )}
                <span className="absolute right-3 top-3 rounded-md bg-orange px-2.5 py-1 text-[11px] font-bold text-white">
                  {s.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-bold text-brand">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-500">{s.text}</p>
                <button className="mt-4 self-start rounded-md border-2 border-orange px-4 py-2 text-sm font-bold text-orange transition hover:bg-orange hover:text-white">
                  {s.btn}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Useful services */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="container mx-auto py-12">
          <h2 className="mb-8 text-2xl font-black text-brand md:text-3xl">
            Полезные сервисы<br className="hidden md:block" /> для автовладельцев
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {usefulServices.map((u) => (
              <div key={u.title} className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="font-bold text-brand">{u.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{u.text}</p>
                <button className="mt-4 rounded-md border-2 border-orange px-4 py-2 text-sm font-bold text-orange transition hover:bg-orange hover:text-white">
                  {u.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="bg-brand text-white">
        <div className="container mx-auto grid gap-8 py-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-black md:text-3xl">
              Ваше спокойствие — наша работа!<br />Получите решение под ключ
            </h2>
            <p className="mt-3 text-white/70">
              Оставьте заявку — мы свяжемся с вами в течение 15 минут, подберём оптимальное решение и оформим всё за вас.
            </p>
            <form className="mt-6 space-y-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Ваше имя" className="w-full rounded-md px-4 py-3 text-slate-800 outline-none" />
              <input placeholder="Телефон" className="w-full rounded-md px-4 py-3 text-slate-800 outline-none" />
              <button className="w-full rounded-md bg-orange py-3 font-bold text-white transition hover:bg-orange-dark hover:scale-[1.02]">
                Оставить заявку
              </button>
            </form>
          </div>
          <div className="relative rounded-xl bg-brand-dark p-8">
            <div className="absolute -top-4 left-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange text-center text-xs font-black leading-tight">
              24/7<br />Поддержка
            </div>
            <div className="mt-6 grid grid-cols-4 gap-4 text-white/80">
              {['Plane', 'Home', 'Car', 'Users', 'Smartphone', 'Database', 'HeartPulse', 'ShieldCheck'].map((i) => (
                <span key={i} className="flex h-14 items-center justify-center rounded-lg bg-white/5">
                  <Icon name={i} size={24} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="container mx-auto py-12">
        <h2 className="mb-8 text-2xl font-black text-brand md:text-3xl">Новости</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {news.map((n, idx) => (
            <article key={idx} className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
              {n.img ? (
                <div className="relative h-44">
                  <img src={n.img} alt={n.title} className="h-full w-full object-cover" />
                  {n.tag && <span className="absolute left-3 top-3 rounded-md bg-orange px-2.5 py-1 text-[11px] font-bold text-white">{n.tag}</span>}
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-bold text-brand">{n.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-500">{n.text}</p>
                <button className="mt-4 self-start rounded-md border-2 border-orange px-4 py-2 text-sm font-bold text-orange transition hover:bg-orange hover:text-white">
                  {n.btn}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand text-white/80">
        <div className="container mx-auto grid gap-8 py-12 md:grid-cols-4">
          <div>
            <p className="mb-3 font-bold text-white">Страховые услуги</p>
            <ul className="space-y-1.5 text-sm">
              {['Е-ОСАГО', 'Е-КАСКО', 'ОСАГО юр.лицам', 'Страхование жизни', 'Страхование ипотеки', 'Страхование квартиры'].map((i) => (
                <li key={i}><a href="#" className="transition hover:text-orange">{i}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-bold text-white">Автоуслуги</p>
            <ul className="space-y-1.5 text-sm">
              {['Техосмотр для ГИБДД', 'Дубликаты номеров', 'Выкуп авто', 'Подбор авто', 'Продажа авто'].map((i) => (
                <li key={i}><a href="#" className="transition hover:text-orange">{i}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-bold text-white">Финансовые услуги</p>
            <ul className="space-y-1.5 text-sm">
              {['Накопления', 'Пенсия', 'ДМС', 'Налоговый вычет', 'Для бизнеса'].map((i) => (
                <li key={i}><a href="#" className="transition hover:text-orange">{i}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl font-black text-white">+7 968 404-19-85</p>
            <p className="mt-2 text-sm">График работы: 9:00–21:00</p>
            <div className="mt-4 space-y-2 text-sm">
              <p>Москва, ул. Новая, 10, офис 12</p>
              <p>Москва, Зеленоград, корп. 311</p>
              <p>Московская обл., Красногорск</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
          © {new Date().getFullYear()} STRAHOVANIE. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;

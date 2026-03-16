import React, { useMemo, useState } from "react";
import {
  Settings,
  Calculator,
  Info,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  ShieldCheck,
  CircleDollarSign,
  CarFront,
  Briefcase,
  Bell,
  Globe,
  UserCircle2,
} from "lucide-react";
import "./styles.css";

const SAUDI_RIYAL_SYMBOL =
  "data:image/png;base64,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";

const defaultConfig = {
  appTitle: "حاسبة القسط الشهري والأهلية التمويلية",
  appSubtitle: "أدخل البيانات المطلوبة لاحتساب القسط الشهري",
  decimalPlaces: 2,
  useThousandsSeparator: true,
  rules: {
    minSalaryExclusive: 3500,
    minAge: 21,
    maxAge: 70,
    minEmploymentMonthsGovernment: 1,
    minEmploymentMonthsPrivate: 3,
    vatRate: 15,
    adminFeeRate: 0.5,
    insuranceRate: 3.5,
  },
  finalPaymentPercentOptions: [0, 10, 20, 30, 40, 50],
  finalPaymentBaseOptions: [
    { value: "financeAmount", label: "من مبلغ التمويل" },
    { value: "carPriceWithVat", label: "من قيمة السيارة شامل الضريبة" },
  ],
  workSectors: [
    { value: "government", label: "حكومي" },
    { value: "private", label: "خاص" },
  ],
};

function SaudiRiyalMark({ className = "sr-mark" }) {
  return <img src={SAUDI_RIYAL_SYMBOL} alt="Saudi Riyal" className={className} />;
}

function formatNumber(value, decimalPlaces = 2, useThousandsSeparator = true) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
    useGrouping: useThousandsSeparator,
  }).format(Number.isFinite(value) ? value : 0);
}

function CurrencyValue({ value, config, large = false }) {
  return (
    <div className={`currency-value ${large ? "currency-large" : ""}`}>
      <SaudiRiyalMark />
      <span dir="ltr">{formatNumber(value, config.decimalPlaces, config.useThousandsSeparator)}</span>
    </div>
  );
}

function RuleItem({ label, hint, children }) {
  return (
    <div className="rule-item">
      <div className="rule-head">
        <span>{label}</span>
        <div className="tooltip-wrap">
          <span className="tooltip-trigger"><Info size={14} /></span>
          <div className="tooltip-box">{hint}</div>
        </div>
      </div>
      {children}
    </div>
  );
}

function FieldLabel({ text, hint, required = true }) {
  return (
    <label className="field-label">
      <span>{text}</span>
      {required && <span className="required">*</span>}
      <div className="tooltip-wrap">
        <span className="tooltip-trigger"><Info size={14} /></span>
        <div className="tooltip-box">{hint}</div>
      </div>
    </label>
  );
}

function SectionTitle({ icon, title, subtitle }) {
  return (
    <div className="section-title">
      <div className="section-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}

function InputBase(props) {
  return <input {...props} className="input-base" />;
}

function SelectInput(props) {
  return <select {...props} className="input-base" />;
}

function calculateAgeYears(dateStr) {
  if (!dateStr) return 0;
  const today = new Date();
  const birthDate = new Date(dateStr);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
}

function calculateEmploymentMonths(dateStr) {
  if (!dateStr) return 0;
  const today = new Date();
  const start = new Date(dateStr);
  let months = (today.getFullYear() - start.getFullYear()) * 12;
  months += today.getMonth() - start.getMonth();
  if (today.getDate() < start.getDate()) months--;
  return Math.max(months, 0);
}

function formatDateDisplay(dateStr) {
  if (!dateStr) return "-";

  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;

  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = String(date.getFullYear()).slice(-2);

  return `${day} ${month} ${year}`;
}

function MetricCard({ label, children }) {
  return (
    <div className="metric-card">
      <div className="metric-label">{label}</div>
      <div className="metric-body">{children}</div>
    </div>
  );
}

function SummaryGroup({ title, children }) {
  return (
    <div className="summary-group">
      <div className="summary-group-title">{title}</div>
      <div className="summary-grid">{children}</div>
    </div>
  );
}

function SummaryItem({ label, children }) {
  return (
    <div className="summary-item">
      <div className="summary-label">{label}</div>
      <div className="summary-value">{children}</div>
    </div>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="info-card">
      <div className="info-card-title">{title}</div>
      <p>{text}</p>
    </div>
  );
}

export default function App() {
  const [config, setConfig] = useState(defaultConfig);
  const [activeTab, setActiveTab] = useState("calculator");
  const [form, setForm] = useState({
    netIncome: 8000,
    dob: "1990-01-01",
    employmentDate: "2024-01-01",
    sector: "government",
    carPriceExVat: 100000,
    downPayment: 20000,
    plateFees: 500,
    energyFees: 0,
    finalPaymentPercent: 30,
    finalPaymentBase: "carPriceWithVat",
    financeMonths: 36,
  });
  const [statusMessage, setStatusMessage] = useState("أدخل الحقول الإلزامية ثم راجع النتيجة.");
  const [statusType, setStatusType] = useState("warning");
  const [newPercent, setNewPercent] = useState(60);

  const result = useMemo(() => {
    const age = calculateAgeYears(form.dob);
    const employmentMonths = calculateEmploymentMonths(form.employmentDate);
    const vat = form.carPriceExVat * (config.rules.vatRate / 100);
    const carPriceWithVat = form.carPriceExVat + vat;
    const adminFees = (carPriceWithVat + form.plateFees) * (config.rules.adminFeeRate / 100);
    const insurance = carPriceWithVat * (config.rules.insuranceRate / 100);
    const preliminaryFinanceAmount = Math.max(carPriceWithVat - form.downPayment, 0);
    const finalPayment =
      form.finalPaymentBase === "financeAmount"
        ? preliminaryFinanceAmount * (form.finalPaymentPercent / 100)
        : carPriceWithVat * (form.finalPaymentPercent / 100);
    const baseFinanceAmount = Math.max(carPriceWithVat - form.downPayment - finalPayment, 0);
    const monthlyInstallment = form.financeMonths > 0 ? baseFinanceAmount / form.financeMonths : 0;
    const totalCostWithFees = carPriceWithVat + form.plateFees + form.energyFees + adminFees + insurance;

    const salaryOk = form.netIncome > config.rules.minSalaryExclusive;
    const ageOk = age >= config.rules.minAge && age <= config.rules.maxAge;
    const employmentOk =
      form.sector === "government"
        ? employmentMonths >= config.rules.minEmploymentMonthsGovernment
        : employmentMonths >= config.rules.minEmploymentMonthsPrivate;

    const eligible = salaryOk && ageOk && employmentOk;
    const failReasons = [];

    if (!salaryOk) {
      failReasons.push(
        `صافي الدخل يجب أن يكون أعلى من ${formatNumber(
          config.rules.minSalaryExclusive,
          config.decimalPlaces,
          config.useThousandsSeparator
        )}`
      );
    }

    if (!ageOk) {
      failReasons.push(`العمر يجب أن يكون بين ${config.rules.minAge} و${config.rules.maxAge} سنة`);
    }

    if (!employmentOk) {
      failReasons.push(
        form.sector === "government"
          ? `القطاع الحكومي يتطلب ${config.rules.minEmploymentMonthsGovernment} شهر فأكثر`
          : `القطاع الخاص يتطلب ${config.rules.minEmploymentMonthsPrivate} أشهر فأكثر`
      );
    }

    return {
      age,
      employmentMonths,
      vat,
      carPriceWithVat,
      adminFees,
      insurance,
      finalPayment,
      baseFinanceAmount,
      monthlyInstallment,
      totalCostWithFees,
      eligible,
      failReasons,
    };
  }, [form, config]);

  const saveSettings = () => {
    setStatusMessage("تم حفظ الإعدادات محليًا في هذه النسخة. عند ربط .NET سيتم حفظها في قاعدة البيانات عبر API.");
    setStatusType("success");
  };

  const resetSettings = () => {
    setConfig(defaultConfig);
    setStatusMessage("تمت إعادة الإعدادات إلى القيم الافتراضية.");
    setStatusType("warning");
  };

  const addPercentOption = () => {
    const value = Number(newPercent);
    if (!Number.isFinite(value) || config.finalPaymentPercentOptions.includes(value)) return;
    setConfig((prev) => ({
      ...prev,
      finalPaymentPercentOptions: [...prev.finalPaymentPercentOptions, value].sort((a, b) => a - b),
    }));
    setNewPercent(0);
  };

  const removePercentOption = (value) => {
    setConfig((prev) => ({
      ...prev,
      finalPaymentPercentOptions: prev.finalPaymentPercentOptions.filter((x) => x !== value),
    }));
  };

  return (
    <div className="app-shell" dir="rtl">
      <header className="topbar">
        <div className="topbar-left">
          <div className="user-box">
            <UserCircle2 size={34} />
            <div>
              <div className="user-name">أحمد محمد</div>
              <div className="user-role">مدير النظام</div>
            </div>
          </div>
          <div className="topbar-icons">
            <button>EN</button>
            <Globe size={16} />
            <Bell size={16} />
          </div>
        </div>

        <div className="topbar-right">
          <div className="system-title">Ejarah Monthly Instalment Calculator</div>
        </div>
      </header>

      <main className="main-wrap">
        <section className="page-card">
          <div className="page-head">
            <div>
              <h1>{config.appTitle}</h1>
              <p>{config.appSubtitle}</p>
            </div>

            <div className="tabs">
              <button
                className={activeTab === "calculator" ? "tab active" : "tab"}
                onClick={() => setActiveTab("calculator")}
              >
                <Calculator size={16} /> صفحة الحاسبة
              </button>

              <button
                className={activeTab === "settings" ? "tab active" : "tab"}
                onClick={() => setActiveTab("settings")}
              >
                <Settings size={16} /> صفحة الإعدادات
              </button>
            </div>
          </div>

          <div className={`status-box ${statusType}`}>{statusMessage}</div>

          {activeTab === "calculator" ? (
            <div className="content-grid">
              <div className="panel">
                <SectionTitle
                  icon={<Briefcase size={20} />}
                  title="بيانات العميل"
                  subtitle="واجهة تتماشى مع هوية النظام الحالية"
                />

                <div className="grid-two">
                  <div>
                    <FieldLabel text="صافي الدخل الشهري" hint="أدخل صافي دخل العميل بعد الاستقطاعات الشهرية." />
                    <InputBase
                      type="number"
                      value={form.netIncome}
                      onChange={(e) => setForm({ ...form, netIncome: Number(e.target.value) })}
                    />
                  </div>

                  <div>
                    <FieldLabel text="تاريخ الميلاد" hint="يتم منه احتساب العمر تلقائيًا للتحقق من الأهلية." />
                    <InputBase
                      type="date"
                      value={form.dob}
                      onChange={(e) => setForm({ ...form, dob: e.target.value })}
                    />
                  </div>

                  <div>
                    <FieldLabel text="تاريخ مزاولة العمل" hint="يتم منه احتساب مدة الخدمة الحالية بالشهور." />
                    <InputBase
                      type="date"
                      value={form.employmentDate}
                      onChange={(e) => setForm({ ...form, employmentDate: e.target.value })}
                    />
                  </div>

                  <div>
                    <FieldLabel text="قطاع العمل" hint="التحقق من الحد الأدنى لمدة العمل يتم حسب القطاع المختار." />
                    <SelectInput
                      value={form.sector}
                      onChange={(e) => setForm({ ...form, sector: e.target.value })}
                    >
                      {config.workSectors.map((sector) => (
                        <option key={sector.value} value={sector.value}>
                          {sector.label}
                        </option>
                      ))}
                    </SelectInput>
                  </div>
                </div>

                <div className="block-gap">
                  <SectionTitle
                    icon={<CarFront size={20} />}
                    title="بيانات المركبة والتمويل"
                    subtitle="مدخلات واضحة ومباشرة"
                  />

                  <div className="grid-two">
                    <div>
                      <FieldLabel
                        text="قيمة السيارة بدون ضريبة"
                        hint="القيمة الأساسية قبل احتساب ضريبة القيمة المضافة."
                      />
                      <InputBase
                        type="number"
                        value={form.carPriceExVat}
                        onChange={(e) => setForm({ ...form, carPriceExVat: Number(e.target.value) })}
                      />
                    </div>

                    <div>
                      <FieldLabel
                        text="الدفعة الأولى"
                        hint="المبلغ الذي سيدفعه العميل مقدمًا ويتم خصمه من مبلغ التمويل."
                      />
                      <InputBase
                        type="number"
                        value={form.downPayment}
                        onChange={(e) => setForm({ ...form, downPayment: Number(e.target.value) })}
                      />
                    </div>

                    <div>
                      <FieldLabel text="رسوم اللوحات" hint="رسوم اللوحات المستخدمة في العملية الحالية." />
                      <InputBase
                        type="number"
                        value={form.plateFees}
                        onChange={(e) => setForm({ ...form, plateFees: Number(e.target.value) })}
                      />
                    </div>

                    <div>
                      <FieldLabel text="رسوم استهلاك طاقة" hint="يمكن إدخال صفر إذا لم توجد رسوم." />
                      <InputBase
                        type="number"
                        value={form.energyFees}
                        onChange={(e) => setForm({ ...form, energyFees: Number(e.target.value) })}
                      />
                    </div>

                    <div>
                      <FieldLabel
                        text="نسبة الدفعة الأخيرة"
                        hint="القائمة تأتي من صفحة الإعدادات ويمكن تعديلها بسهولة."
                      />
                      <SelectInput
                        value={form.finalPaymentPercent}
                        onChange={(e) =>
                          setForm({ ...form, finalPaymentPercent: Number(e.target.value) })
                        }
                      >
                        {config.finalPaymentPercentOptions.map((percent) => (
                          <option key={percent} value={percent}>
                            {percent}%
                          </option>
                        ))}
                      </SelectInput>
                    </div>

                    <div>
                      <FieldLabel
                        text="أساس الدفعة الأخيرة"
                        hint="يمكن تحديد هل النسبة من مبلغ التمويل أو من قيمة السيارة شامل الضريبة."
                      />
                      <SelectInput
                        value={form.finalPaymentBase}
                        onChange={(e) => setForm({ ...form, finalPaymentBase: e.target.value })}
                      >
                        {config.finalPaymentBaseOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </SelectInput>
                    </div>

                    <div className="full-span">
                      <FieldLabel
                        text="مدة التمويل بالأشهر"
                        hint="عدد الأشهر التي سيقسم عليها مبلغ التمويل الأساسي."
                      />
                      <InputBase
                        type="number"
                        value={form.financeMonths}
                        onChange={(e) => setForm({ ...form, financeMonths: Number(e.target.value) })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="side-stack">
                <div className={`eligibility-card ${result.eligible ? "ok" : "bad"}`}>
                  <div className="eligibility-title">
                    <ShieldCheck size={20} /> حالة الأهلية
                  </div>
                  <div className="eligibility-text">
                    {result.eligible
                      ? "العميل مؤهل مبدئيًا حسب القواعد الحالية."
                      : result.failReasons.join(" | ")}
                  </div>
                </div>

                <div className="metrics-grid">
                  <MetricCard label="القسط الشهري">
                    <CurrencyValue value={result.monthlyInstallment} config={config} large />
                  </MetricCard>

                  <MetricCard label="مبلغ التمويل الأساسي">
                    <CurrencyValue value={result.baseFinanceAmount} config={config} large />
                  </MetricCard>

                  <MetricCard label="العمر">
                    <div className="plain-metric">{result.age} سنة</div>
                  </MetricCard>

                  <MetricCard label="مدة العمل">
                    <div className="plain-metric">{result.employmentMonths} شهر</div>
                  </MetricCard>
                </div>

                <SummaryGroup title="بيانات العميل">
                  <SummaryItem label="تاريخ الميلاد">
                    <div className="plain-text">{formatDateDisplay(form.dob)}</div>
                  </SummaryItem>

                  <SummaryItem label="تاريخ مزاولة العمل">
                    <div className="plain-text">{formatDateDisplay(form.employmentDate)}</div>
                  </SummaryItem>
                </SummaryGroup>

                <SummaryGroup title="ملخص المركبة">
                  <SummaryItem label="قيمة السيارة بدون ضريبة">
                    <CurrencyValue value={form.carPriceExVat} config={config} />
                  </SummaryItem>

                  <SummaryItem label={`الضريبة ${config.rules.vatRate}%`}>
                    <CurrencyValue value={result.vat} config={config} />
                  </SummaryItem>

                  <SummaryItem label="قيمة السيارة شامل الضريبة">
                    <CurrencyValue value={result.carPriceWithVat} config={config} />
                  </SummaryItem>

                  <SummaryItem label="إجمالي التكلفة مع الرسوم">
                    <CurrencyValue value={result.totalCostWithFees} config={config} />
                  </SummaryItem>
                </SummaryGroup>

                <SummaryGroup title="الرسوم والمصاريف">
                  <SummaryItem label="رسوم اللوحات">
                    <CurrencyValue value={form.plateFees} config={config} />
                  </SummaryItem>

                  <SummaryItem label="رسوم استهلاك طاقة">
                    <CurrencyValue value={form.energyFees} config={config} />
                  </SummaryItem>

                  <SummaryItem label={`الرسوم الإدارية ${config.rules.adminFeeRate}%`}>
                    <CurrencyValue value={result.adminFees} config={config} />
                  </SummaryItem>

                  <SummaryItem label={`التأمين ${config.rules.insuranceRate}%`}>
                    <CurrencyValue value={result.insurance} config={config} />
                  </SummaryItem>
                </SummaryGroup>

                <SummaryGroup title="هيكل التمويل">
                  <SummaryItem label="الدفعة الأولى">
                    <CurrencyValue value={form.downPayment} config={config} />
                  </SummaryItem>

                  <SummaryItem label="نسبة الدفعة الأخيرة">
                    <div className="plain-text">{form.finalPaymentPercent}%</div>
                  </SummaryItem>

                  <SummaryItem label="أساس الدفعة الأخيرة">
                    <div className="plain-text">
                      {config.finalPaymentBaseOptions.find(
                        (x) => x.value === form.finalPaymentBase
                      )?.label || "-"}
                    </div>
                  </SummaryItem>

                  <SummaryItem label="قيمة الدفعة الأخيرة">
                    <CurrencyValue value={result.finalPayment} config={config} />
                  </SummaryItem>
                </SummaryGroup>
              </div>
            </div>
          ) : (
            <div className="settings-wrap">
              <div className="settings-grid">
                <div className="panel">
                  <SectionTitle
                    icon={<CircleDollarSign size={20} />}
                    title="قواعد الأهلية والرسوم"
                    subtitle="صفحة إعدادات سهلة جدًا لفريق المبيعات والتمويل"
                  />

                  <div className="settings-list">
                    <RuleItem
                      label="الحد الأدنى لصافي الدخل"
                      hint="أي عميل بدخل أعلى من هذا الرقم يعتبر محققًا لشرط الراتب."
                    >
                      <InputBase
                        type="number"
                        value={config.rules.minSalaryExclusive}
                        onChange={(e) =>
                          setConfig({
                            ...config,
                            rules: {
                              ...config.rules,
                              minSalaryExclusive: Number(e.target.value),
                            },
                          })
                        }
                      />
                    </RuleItem>

                    <div className="grid-two">
                      <RuleItem label="الحد الأدنى للعمر" hint="أصغر عمر مقبول للتقديم.">
                        <InputBase
                          type="number"
                          value={config.rules.minAge}
                          onChange={(e) =>
                            setConfig({
                              ...config,
                              rules: { ...config.rules, minAge: Number(e.target.value) },
                            })
                          }
                        />
                      </RuleItem>

                      <RuleItem label="الحد الأعلى للعمر" hint="أكبر عمر مقبول حسب السياسة.">
                        <InputBase
                          type="number"
                          value={config.rules.maxAge}
                          onChange={(e) =>
                            setConfig({
                              ...config,
                              rules: { ...config.rules, maxAge: Number(e.target.value) },
                            })
                          }
                        />
                      </RuleItem>
                    </div>

                    <div className="grid-two">
                      <RuleItem
                        label="مدة العمل للقطاع الحكومي"
                        hint="الحد الأدنى المطلوب بالشهور للقطاع الحكومي."
                      >
                        <InputBase
                          type="number"
                          value={config.rules.minEmploymentMonthsGovernment}
                          onChange={(e) =>
                            setConfig({
                              ...config,
                              rules: {
                                ...config.rules,
                                minEmploymentMonthsGovernment: Number(e.target.value),
                              },
                            })
                          }
                        />
                      </RuleItem>

                      <RuleItem
                        label="مدة العمل للقطاع الخاص"
                        hint="الحد الأدنى المطلوب بالشهور للقطاع الخاص."
                      >
                        <InputBase
                          type="number"
                          value={config.rules.minEmploymentMonthsPrivate}
                          onChange={(e) =>
                            setConfig({
                              ...config,
                              rules: {
                                ...config.rules,
                                minEmploymentMonthsPrivate: Number(e.target.value),
                              },
                            })
                          }
                        />
                      </RuleItem>
                    </div>

                    <div className="grid-three">
                      <RuleItem label="ضريبة القيمة المضافة %" hint="نسبة الضريبة المستخدمة في الحسبة.">
                        <InputBase
                          type="number"
                          step="0.01"
                          value={config.rules.vatRate}
                          onChange={(e) =>
                            setConfig({
                              ...config,
                              rules: { ...config.rules, vatRate: Number(e.target.value) },
                            })
                          }
                        />
                      </RuleItem>

                      <RuleItem
                        label="الرسوم الإدارية %"
                        hint="تطبق على قيمة السيارة شامل الضريبة مع رسوم اللوحات."
                      >
                        <InputBase
                          type="number"
                          step="0.01"
                          value={config.rules.adminFeeRate}
                          onChange={(e) =>
                            setConfig({
                              ...config,
                              rules: { ...config.rules, adminFeeRate: Number(e.target.value) },
                            })
                          }
                        />
                      </RuleItem>

                      <RuleItem label="التأمين %" hint="تطبق على قيمة السيارة شامل الضريبة.">
                        <InputBase
                          type="number"
                          step="0.01"
                          value={config.rules.insuranceRate}
                          onChange={(e) =>
                            setConfig({
                              ...config,
                              rules: { ...config.rules, insuranceRate: Number(e.target.value) },
                            })
                          }
                        />
                      </RuleItem>
                    </div>
                  </div>
                </div>

                <div className="panel">
                  <SectionTitle
                    icon={<Settings size={20} />}
                    title="خيارات الواجهة والقوائم"
                    subtitle="تحكم كامل بالقوائم الظاهرة للمستخدمين"
                  />

                  <div className="settings-list">
                    <RuleItem label="عنوان التطبيق" hint="النص الرئيسي الظاهر أعلى الصفحة.">
                      <InputBase
                        type="text"
                        value={config.appTitle}
                        onChange={(e) => setConfig({ ...config, appTitle: e.target.value })}
                      />
                    </RuleItem>

                    <RuleItem label="النص التوضيحي" hint="رسالة قصيرة أسفل عنوان الصفحة.">
                      <InputBase
                        type="text"
                        value={config.appSubtitle}
                        onChange={(e) => setConfig({ ...config, appSubtitle: e.target.value })}
                      />
                    </RuleItem>

                    <RuleItem
                      label="خيارات نسبة الدفعة الأخيرة"
                      hint="يمكن إضافة أو حذف النسب الظاهرة في القائمة بسهولة."
                    >
                      <div className="settings-list">
                        <div className="percent-chips">
                          {config.finalPaymentPercentOptions.map((percent) => (
                            <div key={percent} className="chip">
                              <span>{percent}%</span>
                              <button type="button" onClick={() => removePercentOption(percent)}>
                                <Trash2 size={14} />
                              </button>
                            </div>
                          ))}
                        </div>

                        <div className="add-row">
                          <InputBase
                            type="number"
                            value={newPercent}
                            onChange={(e) => setNewPercent(Number(e.target.value))}
                          />
                          <button onClick={addPercentOption} className="primary-btn">
                            <Plus size={16} /> إضافة
                          </button>
                        </div>
                      </div>
                    </RuleItem>
                  </div>
                </div>
              </div>

              <div className="panel">
                <SectionTitle
                  icon={<Save size={20} />}
                  title="ربط الإعدادات مع .NET"
                  subtitle="جاهز للتطوير كنسخة إنتاجية"
                />

                <div className="grid-three">
                  <InfoCard
                    title="الواجهة الأمامية"
                    text="React تعرض الحاسبة وصفحة الإعدادات بنفس DNA النظام الحالي من حيث الألوان والمسافات والتفاعل."
                  />
                  <InfoCard
                    title="الخلفية"
                    text=".NET API لحفظ الإعدادات، إدارة الصلاحيات، واسترجاع القواعد عند فتح الحاسبة."
                  />
                  <InfoCard
                    title="التحكم الكامل"
                    text="يمكن لاحقًا إضافة تشغيل وإيقاف للقواعد، وقواعد مختلفة حسب المنتج أو القطاع أو نوع العميل."
                  />
                </div>

                <div className="actions-row">
                  <button onClick={saveSettings} className="primary-btn">
                    <Save size={16} /> حفظ الإعدادات
                  </button>
                  <button onClick={resetSettings} className="secondary-btn">
                    <RotateCcw size={16} /> إعادة القيم الافتراضية
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

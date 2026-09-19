import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, Copy, Check, ExternalLink, AlertTriangle } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { paymentMethods } from '@/data/config';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

interface PaymentCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

function CopyField({ label, value, copyKey }: { label: string; value: string; copyKey: string }) {
  const { t } = useTranslation();
  const { copy, isCopied } = useCopyToClipboard();

  return (
    <div className="flex items-center gap-3 py-2 border-b border-slate-100 dark:border-white/5 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mb-0.5">{label}</p>
        <p className="text-sm font-mono font-semibold text-slate-800 dark:text-white truncate" dir="ltr">{value}</p>
      </div>
      <button
        onClick={() => copy(value, copyKey)}
        className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all
          bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300
          hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400"
        aria-label={`${t('payment.copyButton')} ${label}`}
      >
        {isCopied(copyKey) ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
        {isCopied(copyKey) ? t('payment.copied') : t('payment.copyButton')}
      </button>
    </div>
  );
}

export function PaymentCenter({ isOpen, onClose }: PaymentCenterProps) {
  const { t } = useTranslation();
  const pm = paymentMethods;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            className="w-full sm:max-w-2xl bg-white dark:bg-navy-900 rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle bar */}
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="w-12 h-1.5 rounded-full bg-slate-200 dark:bg-white/10" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/10 sticky top-0 bg-white dark:bg-navy-900 z-10 rounded-t-3xl">
              <div>
                <h2 className="text-xl font-bold text-gradient">{t('payment.title')}</h2>
                <p className="text-sm text-slate-400 dark:text-slate-500">{t('payment.subtitle')}</p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
                aria-label={t('common.close')}
              >
                <X size={18} />
              </button>
            </div>

            {/* Warning */}
            <div className="mx-6 mt-4 flex items-start gap-2.5 px-4 py-3 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30">
              <AlertTriangle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-700 dark:text-amber-400 font-medium">{t('payment.warning')}</p>
            </div>

            <div className="p-6 space-y-5">
              {/* === InstaPay === */}
              <div className="card-glass">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg text-white font-bold text-xs">IP</div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white">{t('payment.instapay.title')}</h3>
                    <p className="text-xs text-slate-400">Egypt InstaPay Network</p>
                  </div>
                </div>

                <CopyField label={t('payment.instapay.recipient')} value={pm.instapay.recipientName} copyKey="ip-name" />
                <CopyField label={t('payment.instapay.phone')} value={pm.instapay.phone} copyKey="ip-phone" />
                <CopyField label={t('payment.instapay.address')} value={pm.instapay.address} copyKey="ip-address" />

                {/* QR */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row gap-4 items-center">
                  <div className="text-center">
                    <p className="text-xs text-slate-400 font-medium mb-2">{t('payment.instapay.qrTitle')}</p>
                    <div className="bg-white p-2 rounded-xl shadow-inner inline-block">
                      <QRCodeSVG value={pm.instapay.paymentLink} size={100} level="M" />
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{t('payment.instapay.qrDesc')}</p>
                  </div>
                  <div className="flex-1 w-full">
                    <a
                      href={pm.instapay.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      <ExternalLink size={16} />
                      {t('payment.instapay.sendMoney')}
                    </a>
                  </div>
                </div>
              </div>

              {/* === Bank Transfer === */}
              <div className="card-glass">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg text-white font-bold text-xs">🏦</div>
                  <h3 className="font-bold text-slate-800 dark:text-white">{t('payment.bank.title')}</h3>
                </div>
                <CopyField label={t('payment.bank.recipient')} value={pm.bankTransfer.recipientName} copyKey="bank-name" />
                <CopyField label={t('payment.bank.iban')} value={pm.bankTransfer.iban} copyKey="bank-iban" />
              </div>

              {/* === Binance === */}
              <div className="card-glass">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg text-white font-bold text-sm">₿</div>
                  <h3 className="font-bold text-slate-800 dark:text-white">{t('payment.binance.title')}</h3>
                </div>
                <CopyField label={t('payment.binance.id')} value={pm.binance.id} copyKey="bin-id" />
                <CopyField label={t('payment.binance.trc20')} value={pm.binance.trc20} copyKey="bin-trc20" />
                <CopyField label={t('payment.binance.bep20')} value={pm.binance.bep20} copyKey="bin-bep20" />

                {/* Warnings */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 space-y-2">
                  {(['warning1', 'warning2', 'warning3'] as const).map((wKey) => (
                    <div key={wKey} className="flex items-start gap-2 text-xs text-amber-600 dark:text-amber-400">
                      <AlertTriangle size={12} className="flex-shrink-0 mt-0.5" />
                      {t(`payment.binance.${wKey}`)}
                    </div>
                  ))}
                </div>
              </div>

              {/* === Vodafone Cash === */}
              <div className="card-glass">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg text-white font-bold text-xs">VF</div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white">{t('payment.vodafone.title')}</h3>
                    <p className="text-xs text-slate-400">Vodafone Cash</p>
                  </div>
                </div>
                <CopyField label={t('payment.vodafone.name')} value={pm.vodafoneCash.recipientName} copyKey="vf-name" />
                <CopyField label={t('payment.vodafone.number')} value={pm.vodafoneCash.number} copyKey="vf-number" />
              </div>
            </div>

            {/* Bottom padding for mobile */}
            <div className="h-6 sm:hidden" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

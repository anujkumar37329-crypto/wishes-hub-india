type Props = {
  label?: string;
  className?: string;
};

export function AdSlot({ label = 'Advertisement', className = '' }: Props) {
  return (
    <div
      className={`flex min-h-[90px] items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 ${className}`}
    >
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">{label}</p>
        <p className="mt-1 text-[10px] text-gray-300">Google Ad Space — 728x90 / Responsive</p>
      </div>
    </div>
  );
}

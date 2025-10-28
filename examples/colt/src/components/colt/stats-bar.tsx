import { Text, type Field } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from '@/lib/component-props';
import type { JSX } from 'react/jsx-runtime';

type Stat = {
  value: Field<string>;
  label: Field<string>;
  suffix: Field<string>;
};

type StatsBarProps = ComponentProps & {
  fields: {
    stats?: Stat[];
    backgroundColor?: Field<string>;
  };
};

const StatsBar = (props: StatsBarProps): JSX.Element => {
  const defaultStats = [
    { value: { value: '0' }, label: { value: 'of IT Power' }, suffix: { value: 'MW' } },
    { value: { value: '0' }, label: { value: 'Gross Site Area' }, suffix: { value: 'm²' } },
    {
      value: { value: 'Colt tier 0' },
      label: { value: 'Resilient Infrastructure' },
      suffix: { value: '' },
    },
  ];

  const stats = (props.fields?.stats?.length ?? 0) > 0 ? props.fields.stats : defaultStats;
  const bgColor = props.fields?.backgroundColor?.value || '[#00BFA5]';

  return (
    <section className={`py-12 bg-${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center text-white">
          {stats.map((stat: Stat | (typeof defaultStats)[0], index: number) => (
            <div key={index}>
              <div className="text-5xl font-bold mb-2">
                {stat.value?.value ? (
                  <>
                    <Text field={stat.value} />
                    {stat.suffix?.value && <Text field={stat.suffix} />}
                  </>
                ) : (
                  <>
                    {stat.value}
                    {stat.suffix}
                  </>
                )}
              </div>
              {stat.label?.value ? (
                <div className="text-lg">
                  <Text field={stat.label} />
                </div>
              ) : (
                <div className="text-lg">{stat.label}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;

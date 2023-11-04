import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {CheckIcon, BoltIcon, CheckCircleIcon} from '@heroicons/react/24/outline'

const FeatureList = [
  {
    title: 'easy setup',
    icon:CheckCircleIcon,
    description: (
      <>
        Setup your visual editor in a matter of minutes if you have an existing preview endpoint.
      </>
    ),
  },
  {
    title: 'enable content editors',
    icon:CheckCircleIcon,
    description: (
      <>
      Once setup, the visual editor reduces friction between developers and content editors.
      </>
    ),
  },
  {
    title: 'react based',
    icon:CheckCircleIcon,
    description: (
      <>
      As long as your website is built with react, you can use the visual editor.
      </>
    ),
  },
];

function Feature({title, description, ...props}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <props.icon className={styles.featureSvg} strokeWidth={1.5} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

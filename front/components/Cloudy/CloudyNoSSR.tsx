import dynamic from 'next/dynamic';

const DynamicCloudy = dynamic(() => import('./Cloudy'), {
  ssr: false,
});

const CloudyNoSSR = () => {
  return <DynamicCloudy />;
};

export default CloudyNoSSR;

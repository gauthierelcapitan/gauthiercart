import dynamic from 'next/dynamic';
import { ComponentType, ReactElement } from 'react';

export type SkillIconVariant =
  | 'kotlin'
  | 'nextJs'
  | 'openId'
  | 'redis'
  | 'gitlab'
  | 'java'
  | 'python'
  | 'typescript'
  | 'javascript'
  | 'nodeJs'
  | 'nginx'
  | 'mySQL'
  | 'apollo'
  | 'bash'
  | 'docker'
  | 'tailwindcss'
  | 'redux'
  | 'jetbrain'
  | 'html'
  | 'graphql'
  | 'git'
  | 'linkedin'
  | 'github'
  | 'twitter';

export interface SkillIconProps {
  height?: number;
  variant: SkillIconVariant;
  width?: number;
}

const icons: { [variant in SkillIconVariant]: ComponentType<SkillIconProps> } =
  {
    kotlin: dynamic(() => import('./icons/Kotlin')),
    nextJs: dynamic(() => import('./icons/NextJs')),
    openId: dynamic(() => import('./icons/OpenId')),
    redis: dynamic(() => import('./icons/Redis')),
    gitlab: dynamic(() => import('./icons/Gitlab')),
    java: dynamic(() => import('./icons/Java')),
    python: dynamic(() => import('./icons/Python')),
    typescript: dynamic(() => import('./icons/TypeScript')),
    javascript: dynamic(() => import('./icons/JavaScript')),
    nodeJs: dynamic(() => import('./icons/NodeJs')),
    mySQL: dynamic(() => import('./icons/MySQL')),
    nginx: dynamic(() => import('./icons/Nginx')),
    apollo: dynamic(() => import('./icons/Apollo')),
    bash: dynamic(() => import('./icons/Bash')),
    docker: dynamic(() => import('./icons/Docker')),
    tailwindcss: dynamic(() => import('./icons/TailwindCSS')),
    redux: dynamic(() => import('./icons/Redux')),
    jetbrain: dynamic(() => import('./icons/JetBrain')),
    html: dynamic(() => import('./icons/Html')),
    graphql: dynamic(() => import('./icons/GraphQL')),
    git: dynamic(() => import('./icons/Git')),
    linkedin: dynamic(() => import('./icons/Linkedin')),
    twitter: dynamic(() => import('./icons/Twitter')),
    github: dynamic(() => import('./icons/Github')),
  };

export const SkillIcon = (props: SkillIconProps): ReactElement => {
  const { variant, height = 48, width = 48 } = props;
  if (typeof icons[variant] !== 'undefined') {
    const Icon = icons[variant];
    return <Icon variant={variant} height={height} width={width} />;
  }
  return <></>;
};

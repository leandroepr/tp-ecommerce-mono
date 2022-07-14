import Head from 'next/head';
import React from 'react';

export interface PublicLayoutProps {
  title?: string;
  children?: React.ReactNode;
}
const PublicLayout: React.FC<PublicLayoutProps> = (props) => {
  return (
    <div className="flex flex-col flex-1 bg-slate-100">
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.children}
    </div>
  );
};

export default PublicLayout;

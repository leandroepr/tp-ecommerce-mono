import styles from './web-toolkit.module.css';

/* eslint-disable-next-line */
export interface WebToolkitProps {}

export function WebToolkit(props: WebToolkitProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebToolkit!</h1>
    </div>
  );
}

export default WebToolkit;

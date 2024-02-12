import styles from "../page.module.css";

export default function PageContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.pagecontainer}>{children}</div>;
}

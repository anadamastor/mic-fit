import styles from "../page.module.css";

export default function Container({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <div className={`${styles.sectionInner} ${className}`}>{children}</div>;
}

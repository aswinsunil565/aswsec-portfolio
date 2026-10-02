import { useReveal } from "../hooks";
export default function Reveal({ as: Tag = "div", className = "", children, ...p }) {
  const ref = useReveal();
  return <Tag ref={ref} className={`reveal ${className}`} {...p}>{children}</Tag>;
}

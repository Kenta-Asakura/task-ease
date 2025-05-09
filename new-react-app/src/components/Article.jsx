export default function Article({ title, content }) {
  return (
    <li>
      <h4>{title}</h4>
      <p>{content}</p>
    </li>
  );
};

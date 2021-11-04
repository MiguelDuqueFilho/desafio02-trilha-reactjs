import '../styles/header.scss';

interface headerProps {
  title: string;
}

export const Header = (props: headerProps) => {
  return (
    <header>
      <span className='category'>
        Categoria:<span> {props.title}</span>
      </span>
    </header>
  );
};

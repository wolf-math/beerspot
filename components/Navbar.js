import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  background-color: rgba(50, 50, 50, 0.2);
  backdrop-filter: blur(10px);
  flex-direction: row;
  cursor: pointer;
  position: sticky;
  transition: 0.5s;

  h1 {
    padding: 10px;
    padding-right: 15px;
    margin: 0px;
    color: #d4ccce;
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.8))

    &:hover {
      color: #fbf0b7;
      transition: 0.5s;
    }
  }
`;

export const pages = [
  { name: '🍺', path: '/' },
  { name: 'finder', path: '/finder' }
];

export default function Navbar() {
  return (
    <Nav>
      {pages.map((page) => (
        <Link key={page.name} href={page.path} passHref>
          <h1>{page.name}</h1>
        </Link>
      ))}
    </Nav>
  );
}

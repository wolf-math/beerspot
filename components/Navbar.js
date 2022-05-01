import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  position: sticky;

  h1 {
    padding: 10px;
  }
`;

export const pages = [
  { name: 'home', path: '/' },
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

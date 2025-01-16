import logo from "/logo-name.svg";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interv = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interv);
  }, []);

  return (
    <HeaderContainer>
      <img src={logo} alt="Logo Result" />

      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}

export default Header;

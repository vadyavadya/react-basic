import styled from "styled-components";
import Button from "./Button/Button";

const ButtonList = styled.div`
  padding: 0 0.5rem;
  margin-bottom: 8px;
  display: inline;
`;

function TabSection({ page, onChange, pages }) {
  return (
    <div
      style={{
        marginLeft: "-0.5rem",
        marginRight: "-0.5rem",
        marginBottom: "8px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {pages.map((item) => (
        <ButtonList key={item.value}>
          <Button
            key={item.value}
            onClick={() => onChange(item.value)}
            isActive={page === item.value}
          >
            {item.title}
          </Button>
        </ButtonList>
      ))}
    </div>
  );
}

export default TabSection;

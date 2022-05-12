import * as C from "./styles";

export const Button = ({ label, icon, onClick }) => {
  return (
    <C.Container onClick={onClick}>
      {icon && (
        <C.IconArea>
          <C.Icon src={icon} />
        </C.IconArea>
      )}

      <C.Label>{label}</C.Label>
    </C.Container>
  );
};
